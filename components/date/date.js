import { parseISO, format } from 'date-fns';

export function DateIso({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d yyyy')}</time>;
}

const pluralize = (value) => value>1 ? "s" : "";

export default function DateMonthAgo({ dateString }) {
  const date = Date.parse(dateString);
  const dateDiff_hours = (Date.now()-date)/1000/(60*60); 
  
  let timeSpent = Math.floor(dateDiff_hours/24);

  if (timeSpent<1) {
    return <time dateTime={dateString}>today</time>;
  }
  else if (timeSpent<=7) {
    return <time dateTime={dateString}>{timeSpent} day{pluralize(timeSpent)} ago</time>;
  }
  
  timeSpent = Math.floor(timeSpent/7);
  if (timeSpent<5) {
    return <time dateTime={dateString}>{timeSpent} week{pluralize(timeSpent)} ago</time>;
  }

  timeSpent =  Math.floor(dateDiff_hours/(24*30));
  if (timeSpent<12) {
    return <time dateTime={dateString}>{timeSpent} month{pluralize(timeSpent)} ago</time>;
  }
  
  timeSpent = Math.floor(timeSpent/12);
  return <time dateTime={dateString}>{timeSpent} year{pluralize(timeSpent)} ago</time>;
}
