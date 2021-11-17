import moment from 'moment'

/*eslint no-useless-escape: 0 */
moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'moments',
    ss: '%d sec',
    m: 'a min',
    mm: '%d mins',
    h: 'an hr',
    hh: '%d hrs',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
})

export const validateEmail = (email: string) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  )

export const validateURL = (url: string) =>
  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(
    url,
  )

export const round = (value: number, places: number): number => {
  var multiplier = Math.pow(10, places)
  return Math.round(value * multiplier) / multiplier
}

export const isDateEqual = (d1: string, d2: string): boolean =>
  moment(d1).diff(moment(d2), 'days') === 0

export const getDaysBetweenDates = (d1: string, d2: string): number => {
  const begin = moment(d1, 'YYYY-MM-DD hh:mm:ss')
  const end = moment(d2, 'YYYY-MM-DD hh:mm:ss')
  return end.diff(begin, 'days')
}

/**
 * Calculate the time diff from current time in seconds.
 */
export const calcTimeDifference = (
  lastTokenTime: moment.Moment | null,
): number => {
  const currentTime = moment.utc()
  return currentTime.diff(lastTokenTime, 'seconds')
}

export const monthNames = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
]

export const weekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const month: { [index: string]: string } = {
  '01': 'JAN',
  '02': 'FEB',
  '03': 'MAR',
  '04': 'APR',
  '05': 'MAY',
  '06': 'JUN',
  '07': 'JUL',
  '08': 'AUG',
  '09': 'SEP',
  '10': 'OCT',
  '11': 'NOV',
  '12': 'DEC',
}
