export type EntryType = "visita" | "canje";

export interface LedgerEntry {
  id: string;
  date: string; // ISO 8601
  type: EntryType;
  points: number; // positivo suma, negativo resta
  note: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  city: string;
  ledger: LedgerEntry[];
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  cost: number; // puntos
}

export type TierName = "Bronce" | "Plata" | "Oro";

export interface Tier {
  name: TierName;
  min: number; // puntos acumulados de por vida
}
