import { Accordion } from '@iftakhar/ui';
const MainAccordion = () => {
  return (
    <Accordion defaultValue='item-1' className='max-w-[500px] w-full mx-auto p-10'>
      <Accordion.Item className='cursor-pointer' value='item-1'>
        <Accordion.Trigger value='item-1' activeClass='border-b-0' className='border-b py-4 	font-semibold w-full flex items-center justify-between'>
          <h2>Is it accessible?</h2>
        </Accordion.Trigger>
        <Accordion.Content value='item-1'>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className='cursor-pointer' value='item-2'>
        <Accordion.Trigger value='item-2' activeClass='border-b-0' className='border-b py-4 font-semibold w-full flex items-center justify-between'>
          <h2>Is it unstyled?</h2>
        </Accordion.Trigger>
        <Accordion.Content value='item-2'>Yes. It comes with default styles that matches the other</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default MainAccordion;
