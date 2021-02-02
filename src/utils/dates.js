export function dateToDateString(date, fullDate = true, yearFull = true) {
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${
    fullDate
      ? `/${
          yearFull ? date.getFullYear() : date.getFullYear().toString().slice(2)
        }`
      : ""
  }`;
}

export function dateToTimeString(date, fullTime = true) {
  return `${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}${
    fullTime ? `:${date.getSeconds().toString().padStart(2, "0")}` : ""
  }`;
}

export function dateToDateTimeString(
  date,
  fullDate = true,
  yearFull = true,
  fullTime = true
) {
  return `${dateToDateString(date, fullDate, yearFull)} ${dateToTimeString(
    date,
    fullTime
  )}`;
}

export function strUTCToPassTime(str_utc, fullDate = true, yearFull = true) {
  // Returns 'Hoje' 'Ontem' ou Data dd/mm/yy
  const date = new Date(str_utc);
  const cdayn = Math.floor((date.getTime() - 10800000) / 86400000);
  const rdayn = Math.floor((new Date().getTime() - 10800000) / 86400000);
  const daydelta = rdayn - cdayn;

  if (daydelta < 1) {
    return "Hoje";
  } else if (daydelta === 1) {
    return "Ontem";
  }
  return dateToDateString(date, fullDate, yearFull);
}
