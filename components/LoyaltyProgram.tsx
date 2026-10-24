"use client";

import { useMemo, useState } from "react";
import type { LedgerEntry, Member, Reward, TierName } from "@/lib/types";
import { ui } from "@/lib/ui";
import {
  COP_PER_POINT,
  VISIT_BONUS,
  balance,
  lifetimePoints,
  nextTier,
  tierFor,
  visitCount,
  visitPoints,
} from "@/lib/loyalty";
import { formatCOP, formatDate, formatPoints } from "@/lib/format";

const TIER_STYLE: Record<TierName, string> = {
  Bronce: "border-warning/30 bg-warning/10 text-warning",
  Plata: "border-border-strong bg-surface text-text-primary",
  Oro: "border-primary/30 bg-primary/10 text-primary",
};

const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function LoyaltyProgram({
  initialMembers,
  rewards,
}: {
  initialMembers: Member[];
  rewards: Reward[];
}) {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [selectedId, setSelectedId] = useState(initialMembers[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [amount, setAmount] = useState("");
  const [confirming, setConfirming] = useState<string | null>(null);
  const [notice, setNotice] = useState("");

  const member = members.find((m) => m.id === selectedId);

  const visible = useMemo(() => {
    const q = norm(query.trim());
    return q
      ? members.filter((m) => norm(`${m.name} ${m.email}`).includes(q))
      : members;
  }, [members, query]);

  const addEntry = (
    memberId: string,
    entry: Omit<LedgerEntry, "id" | "date">,
  ) =>
    setMembers((prev) =>
      prev.map((m) =>
        m.id === memberId
          ? {
              ...m,
              ledger: [
                ...m.ledger,
                {
                  ...entry,
                  id: crypto.randomUUID(),
                  date: new Date().toISOString(),
                },
              ],
            }
          : m,
      ),
    );

  const select = (id: string) => {
    setSelectedId(id);
    setAmount("");
    setConfirming(null);
    setNotice("");
  };

  const amountCOP = Number(amount.replace(/\D/g, "")) || 0;

  const registerVisit = () => {
    if (!member) return;

    const pts = visitPoints(amountCOP);

    addEntry(member.id, {
      type: "visita",
      points: pts,
      note: amountCOP > 0 ? `Visita por ${formatCOP(amountCOP)}` : "Visita",
    });

    setNotice(
      `Visita registrada: ${member.name} suma ${formatPoints(pts)} puntos.`,
    );
    setAmount("");
  };

  const redeem = (r: Reward) => {
    if (!member) return;

    addEntry(member.id, {
      type: "canje",
      points: -r.cost,
      note: r.name,
    });

    setNotice(`Canje realizado: ${r.name} (−${formatPoints(r.cost)} puntos).`);
    setConfirming(null);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      {/* Clientes */}
      <section aria-label="Clientes" className="min-w-0">
        <label htmlFor="member-search" className="sr-only">
          Buscar cliente
        </label>

        <input
          id="member-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre o correo"
          className={ui.input}
        />

        <ul className="mt-3 max-h-[28rem] space-y-1 overflow-y-auto pr-1">
          {visible.map((m) => {
            const active = m.id === selectedId;
            const tier = tierFor(lifetimePoints(m));

            return (
              <li key={m.id}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => select(m.id)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-3 text-left transition-colors ${
                    active
                      ? "border-primary bg-primary/10"
                      : "border-transparent hover:border-border hover:bg-surface"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {m.name}
                    </span>

                    <span
                      className={`mt-1 inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${TIER_STYLE[tier.name]}`}
                    >
                      {tier.name}
                    </span>
                  </span>

                  <span className="shrink-0 text-sm text-text-muted">
                    {formatPoints(balance(m))} pts
                  </span>
                </button>
              </li>
            );
          })}

          {visible.length === 0 && (
            <li className={`${ui.panel} text-sm text-text-muted`}>
              Ningún cliente coincide. Prueba con otro nombre o correo.
            </li>
          )}
        </ul>
      </section>

      {/* Detalle del cliente */}
      <section aria-label="Programa del cliente" className="min-w-0">
        {!member ? (
          <p className={`${ui.panel} text-text-muted`}>
            Selecciona un cliente para ver sus puntos.
          </p>
        ) : (
          <MemberPanel
            member={member}
            rewards={rewards}
            amount={amount}
            amountCOP={amountCOP}
            setAmount={setAmount}
            onVisit={registerVisit}
            confirming={confirming}
            setConfirming={setConfirming}
            onRedeem={redeem}
            notice={notice}
          />
        )}
      </section>
    </div>
  );
}

function MemberPanel({
  member,
  rewards,
  amount,
  amountCOP,
  setAmount,
  onVisit,
  confirming,
  setConfirming,
  onRedeem,
  notice,
}: {
  member: Member;
  rewards: Reward[];
  amount: string;
  amountCOP: number;
  setAmount: (v: string) => void;
  onVisit: () => void;
  confirming: string | null;
  setConfirming: (id: string | null) => void;
  onRedeem: (r: Reward) => void;
  notice: string;
}) {
  const bal = balance(member);
  const life = lifetimePoints(member);
  const tier = tierFor(life);
  const next = nextTier(life);

  const progress = next
    ? Math.min(
        100,
        Math.round(((life - tier.min) / (next.min - tier.min)) * 100),
      )
    : 100;

  const history = [...member.ledger].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* Resumen */}
      <div className="border-b border-border p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-semibold text-foreground">
            {member.name}
          </h2>

          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${TIER_STYLE[tier.name]}`}
          >
            {tier.name}
          </span>
        </div>

        <p className="text-sm text-text-muted">
          {member.email} · {member.city}
        </p>

        <dl className="mt-6 flex flex-wrap items-end gap-x-10 gap-y-4">
          <div>
            <dt className="text-sm text-text-muted">Puntos disponibles</dt>
            <dd className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              {formatPoints(bal)}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-text-muted">Visitas</dt>
            <dd className="text-xl font-medium text-foreground">
              {visitCount(member)}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-text-muted">Puntos ganados</dt>
            <dd className="text-xl font-medium text-foreground">
              {formatPoints(life)}
            </dd>
          </div>
        </dl>

        <div className="mt-6">
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label={next ? `Progreso hacia ${next.name}` : "Nivel máximo"}
            className="h-2 overflow-hidden rounded-full bg-border"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-text-muted">
            {next
              ? `Te faltan ${formatPoints(next.min - life)} puntos ganados para llegar a ${next.name}.`
              : "Alcanzó el nivel más alto."}
          </p>
        </div>
      </div>

      {/* Registrar visita */}
      <div className="border-b border-border p-5 sm:p-6">
        <h3 className={ui.title}>Registrar visita</h3>

        <p className="mt-1 text-sm text-text-muted">
          Cada visita suma {VISIT_BONUS} puntos, más 1 por cada{" "}
          {formatCOP(COP_PER_POINT)} de la compra.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="sm:w-60">
            <label htmlFor="amount" className={ui.label}>
              Valor de la compra (opcional)
            </label>

            <input
              id="amount"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ""))}
              placeholder="Ej. 250000"
              className={ui.input}
            />
          </div>

          <button
            type="button"
            onClick={onVisit}
            className={ui.btnPrimary}
          >
            Sumar {formatPoints(visitPoints(amountCOP))} puntos
          </button>
        </div>

        <p
          role="status"
          aria-live="polite"
          className={`mt-3 min-h-5 text-sm ${
            notice ? "text-success" : "text-text-muted"
          }`}
        >
          {notice}
        </p>
      </div>

      {/* Recompensas */}
      <div className="border-b border-border p-5 sm:p-6">
        <h3 className={ui.title}>Recompensas</h3>

        <ul className="mt-4 divide-y divide-border">
          {rewards.map((r) => {
            const enough = bal >= r.cost;
            const isConfirming = confirming === r.id;

            return (
              <li
                key={r.id}
                className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {r.name}
                  </p>
                  <p className="text-xs text-text-muted">{r.description}</p>
                </div>

                <span className="text-sm text-text-muted">
                  {formatPoints(r.cost)} pts
                </span>

                {isConfirming ? (
                  <span className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onRedeem(r)}
                      className={ui.btnPrimary}
                    >
                      Confirmar canje
                    </button>

                    <button
                      type="button"
                      onClick={() => setConfirming(null)}
                      className={ui.btn}
                    >
                      Cancelar
                    </button>
                  </span>
                ) : (
                  <button
                    type="button"
                    disabled={!enough}
                    onClick={() => setConfirming(r.id)}
                    className={
                      enough
                        ? ui.btn
                        : `${ui.btn} cursor-not-allowed opacity-50`
                    }
                  >
                    {enough
                      ? "Canjear"
                      : `Faltan ${formatPoints(r.cost - bal)}`}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Movimientos */}
      <div className="p-5 sm:p-6">
        <h3 className={ui.title}>Movimientos</h3>

        {history.length === 0 ? (
          <p className="mt-3 text-sm text-text-muted">
            Aún no hay movimientos. Registra la primera visita para empezar a
            sumar puntos.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-border">
            {history.map((e) => (
              <li
                key={e.id}
                className="flex items-center gap-4 py-3 text-sm"
              >
                <span className="w-28 shrink-0 text-text-muted">
                  {formatDate(e.date)}
                </span>

                <span className="min-w-0 flex-1 truncate text-foreground">
                  {e.note}
                </span>

                <span
                  className={`shrink-0 font-medium ${
                    e.points > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {e.points > 0 ? "+" : "−"}
                  {formatPoints(Math.abs(e.points))}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
