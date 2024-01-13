
import { List } from '@iftakhar/ui';
export default function MainList() {
  const data = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
 ];
  return (
    <div className='bg-white rounded shadow-md p-4 w-96'>
      <ul className='list-decimal list-inside'>
        <List
          data={data}
          renderItem={(item, i) => (
              <li key={i}>{item}</li>
          )}
        />
      </ul>
    </div>
  )
}
