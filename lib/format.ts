const cop = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat("es-CO");
const dateFmt = new Intl.DateTimeFormat("es-CO", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const formatCOP = (n: number): string => cop.format(n);
export const formatPoints = (n: number): string => num.format(n);
export const formatDate = (iso: string): string => dateFmt.format(new Date(iso));
