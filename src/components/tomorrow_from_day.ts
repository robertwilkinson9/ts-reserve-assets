export const tomorrow_from_day = (passed_date: Date): Date => {
  const tomorrow = new Date(passed_date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}

export default tomorrow_from_day;
