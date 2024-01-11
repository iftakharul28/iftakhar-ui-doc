import { useState } from 'react';
import { Button, Modal } from '@iftakhar/ui';

export default function MainModal() {
  const [isActive, setActive] = useState<boolean>(false);
  return (
    <>
      <Modal
        cancelButton={{
          onClick: () => setActive(!isActive),
        }}
        maskClosable={true}
        visible={isActive}>
        <Modal.Content
          className='!max-w-[500px]'
          okButton={{
            onClick: () => setActive(!isActive),
            type: 'button',
            className: ' ml-6',
            children: 'OK',
          }}
          cancelButton={{
            onClick: () => setActive(!isActive),
            type: 'button',
            className: '',
            children: 'Cancel',
          }}>
          A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog
          will be closed.
        </Modal.Content>
      </Modal>
      <Button className='py-1.5 px-2 bg-blue-600 text-white rounded my-4' type='button' onClick={() => setActive(!isActive)}>
        Open Model
      </Button>
    </>
  );
}
