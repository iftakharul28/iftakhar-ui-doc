import { Label, Input, TextArea } from '@iftakhar/ui';

export default function MainInput(props: { type: 'input' | 'label' | 'textArea' }) {
  switch (props.type) {
    case 'label':
      return (
        <div className='flex items-center gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' placeholder='Email address' className='h-10 w-64 rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
        </div>
      );
    case 'input':
      return <Input type='email' id='email' placeholder='Email address' className='h-10 max-w-64 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />;

    case 'textArea':
      return <TextArea id='textarea' placeholder='Comment' className='h-20 resize-none w-full rounded-md border px-3 py-2 text-sm focus:outline-none' />;
  }
}
