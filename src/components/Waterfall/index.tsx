import { Row, Col, Divider, Spin } from 'antd';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Gallery } from 'react-grid-gallery';
import { queryItems } from '@/services/item';
import sty from './index.css';
import Lightbox from 'react-image-lightbox';
import { Image } from 'react-grid-gallery';

export default () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([] as any[]);

  const [index, setIndex] = useState(-1);

  const currentImage = data[index];
  const nextIndex = (index + 1) % data.length;
  const nextImage = data[nextIndex] || currentImage;
  const prevIndex = (index + data.length - 1) % data.length;
  const prevImage = data[prevIndex] || currentImage;

  const loadMoreData = () => {
    console.log('loading = ', loading);
    console.log('hasMore = ', hasMore);
    if (hasMore == false) {
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    console.log(1111);
    queryItems(page)
      .then((res) => {
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

        setTimeout(() => {
          setLoading(false);
          setData([...data, ...res]);
          if (res.length == 0) {
            setHasMore(false);
          } else {
            setPage(page + 1);
          }
        }, 1000);
      })
      .catch((err) => {
        console.log('err = ', err);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  console.log(data);

  const handleClick = (index: number, item: Image) => {
    console.log('...............................' + index);
    setIndex(index);
  };

  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

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
          {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
              mainSrc={currentImage.url}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.url}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.url}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.url}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};
