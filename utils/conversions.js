export const dateToComposite = (year, month) => {
  let calibratedMonth = month
  if (calibratedMonth < 10) calibratedMonth = `0${calibratedMonth}`
  return parseInt(`${year}${calibratedMonth}`)
}
