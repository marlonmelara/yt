// https://youtu.be/8jooZieM48E?si=Xqhj_WgY0TSwbTtj

const getTime = (seconds) => {
  return seconds < 60
    ? "segundos"
    : seconds < 3600
    ? "minutos"
    : seconds < 86400
    ? "horas"
    : "días";
};

console.log(getTime(3600));

const getTime2 = (seconds) => {
  if (seconds < 60) {
    return "segundos";
  } else if (seconds < 3600) {
    return "minutos";
  } else if (seconds < 86400) {
    return "horas";
  } else {
    return "días";
  }
};

console.log(getTime2(3600));

const getTime3 = (seconds) => {
  if (seconds < 60) return "segundos";
  if (seconds < 3600) return "minutos";
  if (seconds < 86400) return "horas";
  return "días";
};

console.log(getTime3(3600));
