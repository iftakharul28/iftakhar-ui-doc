import { Breadcrumb } from '@iftakhar/ui';

export default function MainBreadcrumb() {
  return (
    <Breadcrumb separator={'/'} className='bg-white py-3 px-8 rounded shadow-md'>
        <Breadcrumb.Item>home</Breadcrumb.Item>
        <Breadcrumb.Item>product</Breadcrumb.Item>
        <Breadcrumb.Item>iphone-14-pro</Breadcrumb.Item>
    </Breadcrumb>
  )
}
