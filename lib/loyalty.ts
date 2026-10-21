import type { Member, Tier } from "./types";

/** Reglas del programa: ajústalas a tu negocio. */
export const VISIT_BONUS = 10; // puntos fijos por cada visita
export const COP_PER_POINT = 1000; // 1 punto por cada $1.000 COP gastados

export const TIERS: Tier[] = [
  { name: "Bronce", min: 0 },
  { name: "Plata", min: 500 },
  { name: "Oro", min: 1500 },
];

export const visitPoints = (amountCOP: number): number =>
  VISIT_BONUS + Math.floor(amountCOP / COP_PER_POINT);

export const balance = (m: Member): number =>
  m.ledger.reduce((s, e) => s + e.points, 0);

/** Puntos ganados históricamente: canjear no baja de nivel. */
export const lifetimePoints = (m: Member): number =>
  m.ledger.filter((e) => e.points > 0).reduce((s, e) => s + e.points, 0);

export const visitCount = (m: Member): number =>
  m.ledger.filter((e) => e.type === "visita").length;

export const tierFor = (lifetime: number): Tier =>
  [...TIERS].reverse().find((t) => lifetime >= t.min) ?? TIERS[0];

export const nextTier = (lifetime: number): Tier | null =>
  TIERS.find((t) => t.min > lifetime) ?? null;
