export const getFormattedDate = (date) =>
date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

export function longDate(str) {
  const dateOptions = {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(str).toLocaleDateString("en-GB", dateOptions);
}

export function shortDate(str) {
  const dateOptions = {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(str).toLocaleDateString("en-GB", dateOptions);
}

export function getYear(str) {
  return new Date(str).getFullYear();
}