
import { useState } from 'react';
import { Pagination } from '@iftakhar/ui';

export default function MainPagination() {
    const [page, setPage] = useState(1);
    const handlePageChange = (value: number) => {
      setPage(value);
    };
  return (
  <div className=' bg-white py-3 px-2 shadow-md rounded'>
  <Pagination 
    next={{
      icon: '>>',
      className: 'rounded cursor-pointer',
    }}
    prev={{
      icon: '<<',
      className: 'rounded cursor-pointer',
    }}
    current={page}
    pageSize={10}
    total={100}
    onChange={handlePageChange}
  /></div>
  )
}
