import { Button } from '@iftakhar/ui';
const MainButton = (props: { type: 'link' | 'button' | 'submit' | 'reset' }) => {
  switch (props.type) {
    case 'link':
      return (
        <Button className='bg-gray-500 text-white px-3 py-2 rounded' type='link' href='/'>
          Link
        </Button>
      );

    default:
      return (
        <Button className='bg-gray-500 text-white px-3 py-2 rounded' type='button' onClick={() => console.log('hi')}>
          Button
        </Button>
      );
  }
};
export default MainButton;
