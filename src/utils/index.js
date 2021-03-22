// Функция для установки активного фильтра
export const setFilter = (obj, active) => {
  if (obj[active]) return obj;
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[key] = key === active;

    return acc;
  }, {});
};
