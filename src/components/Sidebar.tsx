import { useState } from 'react';
import { Sidebar, Button, clsx } from '@iftakhar/ui';
export default function MainSidebar() {
    const [collapsedSidebar, setCollapsedSidebar] = useState<boolean>(false);
    const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  return (
    <Sidebar className='h-full min-h-80' breakPoint='md' collapsed={collapsedSidebar} toggled={toggleSidebar} onToggle={(toggle) => setToggleSidebar(toggle)}>
      <Sidebar.Header className='flex justify-center py-2'>
        <img src={'/favicon.svg'} alt='favicon' className='w-10' />
      </Sidebar.Header>
      <Sidebar.Content className='h-full'>
        <Sidebar.Menu iconShape='circle'>
          <Sidebar.MenuItem icon={<Blocks />}>Dashboard</Sidebar.MenuItem>
          <Sidebar.SubMenu title={'Product Manage'} icon={<Store />}>
            <Sidebar.MenuItem>Add Product
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>Product List
            </Sidebar.MenuItem>
          </Sidebar.SubMenu>
        </Sidebar.Menu>
      </Sidebar.Content>
      <Sidebar.Footer className=' flex justify-center py-2'>
        <Button type='button' onClick={() => setCollapsedSidebar(!collapsedSidebar)} className={clsx('border-0 center-inner hover:text-primary h-10 w-10 text-xl duration-300 hover:text-2xl')}>
          <ArrowDown className=' rotate-90' />
        </Button>
      </Sidebar.Footer>
    </Sidebar>
  )
}
type Props = {
  className?: string;
};
const Blocks = (props: Props) => {
  return (
    <svg className={clsx(props.className)} stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
      <path d='M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z'></path>
    </svg>
  );
};


const Store = (props: Props) => {
    return (
      <svg className={clsx(props.className)} stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
        <path d='M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4 22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 13.8-5.8 26.8-13.2 38.7-22.1.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1 24.4 0 48-4.7 70.4-14.1 3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3-40.8 0-76.4-22.1-95.2-54.9-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z'></path>
      </svg>
    );
  };
  const ArrowDown = (props: Props) => {
    return (
      <svg
        className={clsx('h-4 w-4 transition-transform duration-200', props.className)}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <polyline points='6 9 12 15 18 9'></polyline>
      </svg>
    );
  };