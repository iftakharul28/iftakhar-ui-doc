import { Tab,Label, Input } from '@iftakhar/ui';

export default function MainTab() {
  return (
  <Tab className='w-[500px] mx-auto bg-white py-4 px-3 shadow-md' defaultValue='item-1'>
    <Tab.List className='h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2'>
        <Tab.Trigger
        className='whitespace-nowrap rounded-sm px-3 py-1.5 text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2'
        activeClass='bg-slate-700 text-white'
        value='item-1'>
        Account
        </Tab.Trigger>
        <Tab.Trigger
        className='whitespace-nowrap rounded-sm px-3 py-1.5 text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2'
        activeClass='bg-slate-700 text-white'
        value='item-2'>
        Password
        </Tab.Trigger>
    </Tab.List>
    <Tab.Content className='mt-3 rounded border border-gray-400 px-4 py-3 space-y-2' value='item-1'>
        <Label htmlFor='loginName' className='auth-input-label'>
            Name
        </Label>
        <Input type='email' id='loginName' placeholder='Name' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='name' />
        <br />
        <Label htmlFor='loginEmail' className='auth-input-label'>
            Email
        </Label>
        <Input type='email' id='loginEmail' placeholder='Email address' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
        <br />
        <Label htmlFor='loginPassword' className='auth-input-label'>
            Password
        </Label>
        <Input type='password' id='loginPassword' placeholder='Password' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='password' />
        <br />
    </Tab.Content>
    <Tab.Content className='mt-3 rounded border border-gray-400 px-4 py-3 space-y-2' value='item-2'>
        <Label htmlFor='cpassword' className='auth-input-label'>
        Current password
        </Label>
        <Input type='email' id='cpassword' placeholder='Password' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
        <br />
        <Label htmlFor='password' className='auth-input-label'>
        Password
        </Label>
        <Input type='password' id='password' placeholder='Password' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='password' />
    </Tab.Content>
  </Tab>
  )
}
