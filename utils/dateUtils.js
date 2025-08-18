const { parse } = require("date-fns");

function isBetween(dateString, startString, endString) {
  const dateFormat = "yyyy-MM-dd";
  const referenceDate = new Date();
  const date = parse(dateString, dateFormat, referenceDate);
  const startDate = parse(startString, dateFormat, referenceDate);
  const endDate = parse(endString, dateFormat, referenceDate);
  return date >= startDate && date <= endDate;
}

module.exports = { isBetween };
