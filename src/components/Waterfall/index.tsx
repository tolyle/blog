import { Row, Col, Divider, Spin } from 'antd';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Gallery } from 'react-grid-gallery';
import sty from './index.css';
import { Image } from 'react-grid-gallery';

export default (photoData: any) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([] as any[]);

  const loadMoreData = () => {
    if (hasMore == false) {
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    photoData
      .then((res: any[]) => {
        res.forEach((element: any) => {
          element.src = element.url;
          element.customOverlay = (
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: 'white',
              }}
              className={sty.overlay}
            >
              <div>{element.city}</div>
            </div>
          );
        });

        setLoading(false);
        setData([...data, ...res]);
        if (res.length == 0) {
          setHasMore(false);
        } else {
          setPage(page + 1);
        }
      })
      .catch((err: any) => {
        console.log('err = ', err);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  const handleClick = (index: number, item: Image) => {};

  const slides = data.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
  }));

  return (
    <div className={sty.box}>
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: 50,
            }}
          >
            <Spin />
          </div>
        }
        endMessage={<Divider plain>已经是全部了, 没有更多啦 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <div className={sty.rowBox}>
          <Gallery rowHeight={450} margin={12} enableImageSelection={false} images={data} onClick={handleClick} />
        </div>
      </InfiniteScroll>
    </div>
  );
};
