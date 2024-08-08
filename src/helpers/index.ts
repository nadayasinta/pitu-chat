/**
 * Formats date string (ISO format) to display a relative time description
 * If the input date is today, returns "Hari ini"
 * If the input date is yesterday, returns "Kemarin"
 * Otherwise, returns the date in the format "DD/MM/YY"
 */
export const timeAgoFormatter = (date: string): string => {
  const inputDate = new Date(date);
  const compareDate = new Date();
  const textResult = ["Hari ini", "Kemarin"];
  for (let i = 0; i < textResult.length; i++) {
    if (
      inputDate.getDate() === compareDate.getDate() &&
      inputDate.getMonth() === compareDate.getMonth() &&
      inputDate.getFullYear() === compareDate.getFullYear()
    ) {
      return textResult[i];
    }
    compareDate.setDate(compareDate.getDate() - 1);
  }

  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
};
