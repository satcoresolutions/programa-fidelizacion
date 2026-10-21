import type { Member, Reward } from "./types";

// Datos de ejemplo. Reemplaza por tu API o base de datos.
export const rewards: Reward[] = [
  { id: "r1", name: "Cable Cat6 10 m", description: "Uno de regalo en tu próxima compra.", cost: 150 },
  { id: "r2", name: "10% de descuento", description: "Aplica sobre tu próxima compra.", cost: 300 },
  { id: "r3", name: "Soporte premium, 1 mes", description: "Atención prioritaria por 30 días.", cost: 700 },
  { id: "r4", name: "Licencia CORE, 3 meses", description: "Acceso completo a CORE por un trimestre.", cost: 1500 },
];

export const members: Member[] = [
  {
    id: "m1",
    name: "Valentina Rojas",
    email: "valentina.rojas@correo.co",
    city: "Bogotá",
    ledger: [
      { id: "l1", date: "2026-03-14", type: "visita", points: 420, note: "Compra SC-0801" },
      { id: "l2", date: "2026-05-02", type: "visita", points: 380, note: "Compra SC-0855" },
      { id: "l3", date: "2026-05-20", type: "canje", points: -300, note: "10% de descuento" },
      { id: "l4", date: "2026-08-21", type: "visita", points: 610, note: "Compra SC-0987" },
      { id: "l5", date: "2026-10-08", type: "visita", points: 290, note: "Compra SC-1042" },
    ],
  },
  {
    id: "m2",
    name: "Andrés Mejía",
    email: "andres.mejia@correo.co",
    city: "Medellín",
    ledger: [
      { id: "l6", date: "2026-04-09", type: "visita", points: 260, note: "Compra SC-0820" },
      { id: "l7", date: "2026-07-11", type: "visita", points: 180, note: "Compra SC-0932" },
      { id: "l8", date: "2026-08-01", type: "canje", points: -150, note: "Cable Cat6 10 m" },
      { id: "l9", date: "2026-09-18", type: "visita", points: 150, note: "Compra SC-1010" },
    ],
  },
  {
    id: "m3",
    name: "Camila Torres",
    email: "camila.torres@correo.co",
    city: "Cali",
    ledger: [
      { id: "l10", date: "2026-09-02", type: "visita", points: 120, note: "Compra SC-1003" },
      { id: "l11", date: "2026-10-12", type: "visita", points: 45, note: "Compra SC-1048" },
    ],
  },
  {
    id: "m4",
    name: "Julián Herrera",
    email: "julian.herrera@correo.co",
    city: "Barranquilla",
    ledger: [],
  },
];
