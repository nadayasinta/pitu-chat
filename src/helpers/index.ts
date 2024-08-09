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

  return `${inputDate.getDate()}/${inputDate.getMonth() + 1}/${inputDate
    .getFullYear()
    .toString()
    .slice(-2)}`;
};

/**
 * Formats date string (ISO format) to display time only
 * If the input time is now, returns "Just now"
 * Otherwise, returns the time in the format "HH:MM"
 */
export const chatTimeFormatter = (date: string): string => {
  const inputDate = new Date(date);
  const compareDate = new Date();
  if (compareDate.getTime() - inputDate.getTime() < 60000) {
    return "Just now";
  }

  return `${inputDate.getHours().toString().padStart(2, "0")}:${inputDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

/**
 * Formats date string (ISO format) to display date in the format "DD MMMM YYYY"
 */

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const dateFormatter = (date: string): string => {
  const inputDate = new Date(date);

  return `${inputDate.getDate()} ${
    months[inputDate.getMonth()]
  } ${inputDate.getFullYear()}`;
};
