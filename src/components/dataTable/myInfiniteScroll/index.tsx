import css from './index.css';

import InfiniteScroll from 'react-infinite-scroll-component';
import { queryItems } from '@/services/item';

import { Gallery } from 'react-grid-gallery';
import { useEffect, useState, useRef } from 'react';
import { Divider, Spin } from 'antd';

export default (ctx: any) => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([] as any[]);

  const loadMoreData = () => {
    let photoData = queryItems(page);
    setLoading(true);
    photoData
      .then((res: any[]) => {
        setLoading(false);
        setData([...data, ...res]);
        if (res.length == 0) {
          setHasMore(false);
        } else {
          setHasMore(true);
          setPage(page + 1);
        }
      })
      .catch((err: any) => {
        console.log('err = ', err);
      });
  };
  useEffect(() => {
    setHasMore(true);
    loadMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={loadMoreData}
      hasMore={hasMore}
      loader={
        <div className={css.loading}>
          <Spin />
        </div>
      }
      endMessage={<Divider plain>已经是全部了, 没有更多啦 🤐</Divider>}
      scrollableTarget="scrollableDiv"
    >
      <div className={css.rowBox}>{ctx}</div>
    </InfiniteScroll>
  );
};
