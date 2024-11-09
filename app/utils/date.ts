export const formatDate = (date: string) => {
  const d = new Date(Date.parse(date));

  const month = d.toLocaleString("default", { month: "long" });

  return `${d.getDate()} ${month}, ${d.getFullYear()}`;
};
