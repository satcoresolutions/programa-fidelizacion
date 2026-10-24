import type {
  EntryType,
  LedgerEntry,
  Member,
  Reward,
  TierName,
  Tier,
} from "./types";

/** Metadatos de los movimientos del historial */
export const ENTRY_TYPE_META: Record<
  EntryType,
  { label: string; emoji: string }
> = {
  visita: { label: "Visita", emoji: "👣" },
  canje: { label: "Canje", emoji: "🎁" },
};

/** Opciones de tipo de movimiento para formularios */
export const ENTRY_TYPES = (
  Object.keys(ENTRY_TYPE_META) as EntryType[]
).map((id) => ({
  id,
  label: ENTRY_TYPE_META[id].label,
  emoji: ENTRY_TYPE_META[id].emoji,
}));

/** Configuración de los niveles de fidelización */
export const TIER_META: Record<
  TierName,
  { label: string; emoji: string }
> = {
  Bronce: { label: "Bronce", emoji: "🥉" },
  Plata: { label: "Plata", emoji: "🥈" },
  Oro: { label: "Oro", emoji: "🥇" },
};

/** Umbrales de puntos acumulados de por vida por nivel */
export const TIERS: Tier[] = [
  { name: "Bronce", min: 0 },
  { name: "Plata", min: 500 },
  { name: "Oro", min: 1500 },
];

/** Configuración general del programa */
export const LOYALTY_CONFIG = {
  pointsLabel: "puntos",
  memberLabel: "cliente",
  membersLabel: "clientes",
  historyLabel: "movimientos",
  rewardsLabel: "recompensas",
} as const;

/** Claves de almacenamiento local */
export const STORAGE_KEYS = {
  members: "satcore-fidelizacion:miembros",
  rewards: "satcore-fidelizacion:recompensas",
  settings: "satcore-fidelizacion:ajustes",
} as const;

/** Clave de preferencia del tema */
export const THEME_KEY = "satcore-fidelizacion-theme";

/** Reexportación de los tipos del programa */
export type {
  EntryType,
  LedgerEntry,
  Member,
  Reward,
  TierName,
  Tier,
};

/** Reexportación de estilos compartidos */
export { ui } from "./ui";