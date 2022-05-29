export const dateToComposite = (year, month, day) => {
  let calibratedMonth = month
  let calibratedDay = day
  if (calibratedMonth < 10) calibratedMonth = `0${calibratedMonth}`
  if (calibratedDay < 10) calibratedDay = `0${calibratedDay}`
  return parseInt(`${year}${calibratedMonth}${calibratedDay}`)
}
