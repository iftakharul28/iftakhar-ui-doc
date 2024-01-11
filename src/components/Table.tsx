import { Table } from '@iftakhar/ui';
const tableData = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Unpaid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
];

export default function MainTable() {
  return (
    <Table
      loading={false}
      dataSource={tableData}
      className='w-full caption-bottom text-sm bg-white shadow'
      
      columns={[
        {
          title: <span className='font-semibold h-16'>Id</span>,
          render: (_, id) => id + 1,
          style:{
            padding: 20
          },
          className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
        },
        {
          title: <span className='font-semibold'>Invoice</span>,
          render: (value) => value.invoice,
          className: 'h-12 px-4 text-center font-medium text-muted-foreground',
        },
        {
          title: <span className='font-semibold'>Status</span>,
          render: (value) => value.paymentStatus,
          className: 'h-12 px-4 text-center font-medium text-muted-foreground',
        },
        {
          title: <span className='font-semibold'>Method</span>,
          render: (value) => value.paymentMethod,
          className: 'h-12 px-4 text-center font-medium text-muted-foreground',
        },
        {
          title: <span className='font-semibold'>Amount</span>,
          render: (value) => value.totalAmount,
          className: 'h-12 px-4 text-center font-medium text-muted-foreground',
        },
      ]}
    />
  );
}