export default function showDate(dateString, daysMonthsYears) {
  const dateToShow = new Date(dateString);

  if (!dateString || !dateToShow.getTime()) return '';

  dateToShow.setUTCHours(3);

  const { days, months, years } = daysMonthsYears;

  if (days) dateToShow.setDate(dateToShow.getDate() + Number(days));
  if (months) dateToShow.setMonth(dateToShow.getMonth() + Number(months));
  if (years) dateToShow.setFullYear(dateToShow.getFullYear() + Number(years));

  return dateToShow.toLocaleDateString();
}
