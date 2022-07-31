import { parseISO, format } from 'date-fns';

export function DateIso({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d yyyy')}</time>;
}

export default function DateMonthAgo({ dateString }) {
  const date = Date.parse(dateString);
  const dateDiff = (date - Date.now())
  const monthsAgo = dateDiff/1000/(60*60*24*30);
  return <time dateTime={dateString}>{Math.floor(Math.abs(monthsAgo))} months ago</time>;
}
