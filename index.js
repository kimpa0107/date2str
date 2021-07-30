const fillZero = val => (val >= 10 ? `${val}` : `0${val}`);

const dateToString = (date, format = '') => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  let defaultFormat = 'YYYY-MM-DD';
  if (format === '') {
    format = defaultFormat;
  }

  let result = format;
  result = result.replace('YYYY', `${year}`);
  result = result.replace('MM', fillZero(month));
  result = result.replace('DD', fillZero(day));
  result = result.replace('HH', fillZero(hour));
  result = result.replace('mm', fillZero(minute));
  result = result.replace('ss', fillZero(second));

  return result;
};

module.exports = { dateToString };
