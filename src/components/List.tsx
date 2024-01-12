
import { List } from '@iftakhar/ui';
export default function MainList() {
const data = [
  {
    title: 'item 1',
    content: 'content',
  },
  {
    title: 'item 2',
    content: 'content',
  },
];
  return (
    <div className='bg-white rounded shadow-md p-4 w-96'>
        <List
            data={data}
            renderItem={(item) => (
            <div>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </div>
            )}
        />
    </div>
  )
}
