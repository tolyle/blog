import Waterfall from '@/components/Waterfall/index';
import { queryItems } from '@/services/item';
import { useEffect, useState } from 'react';

export default () => {
  const [page, setPage] = useState(1);

  console.log(page);

  const photoData = queryItems(page);
  const view = Waterfall(photoData);

  return view;
};
