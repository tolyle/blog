import { Row, Col, Divider, Spin } from 'antd';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Gallery } from 'react-grid-gallery';
import { queryItems } from '@/services/item';
import sty from './index.module.css';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<any>([]);
  const loadMoreData = () => {
    if(hasMore == false){

      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    queryItems(page).then((res) => {
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
              fontSize: 20,
              color: 'white',
            }}
            className={sty.overlay}
          >
            <div>{element.city}</div>
          </div>
        );
      });
      setData([...data, ...res]);
      if(res.length == 0){
        setHasMore(false);
      }else{
        setPage(page + 1)
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

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
          <Gallery rowHeight={450} enableImageSelection={false} images={data} />
          {/* <Row gutter={[16, 16]}>
            {data.map((v: any, i: number) => {
              console.log("v = ", v)
              return (
                <Col
                  key={i}
                  className={sty.col}
                  xs={{
                    span: 12,
                  }}
                  md={{
                    span: 6,
                  }}
                >
                  <img className={sty.colImg} src={v.url} />
                </Col>
              );
            })}
          </Row> */}
        </div>
      </InfiniteScroll>
    </div>
  );
}
