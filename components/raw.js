/* usage
import Raw from './raw';
import Raw from '../components/raw';
<Raw data={date}/>
<Raw data={user.name}/>
*/
export default function Raw({ data }) {
  return <div><h1>RAW</h1><span>[{data}]</span></div>;
}
