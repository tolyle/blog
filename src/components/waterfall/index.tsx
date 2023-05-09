import { Divider, Spin } from 'antd';
import { useEffect, useState, useRef } from 'react';

import css from './index.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import fileDownload from 'js-file-download';
import * as utils from '@/lib/utils';
import sys from '@/lib/config/sys';

import InfiniteScroll from 'react-infinite-scroll-component';
import { Gallery, Image } from 'react-grid-gallery';

import { queryItems } from '@/services/item';

import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/download';
import { IconButton, createIcon, useLightboxState, isImageSlide } from 'yet-another-react-lightbox/core';

export default () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([] as any[]);
  const ref = useRef(null);

  const loadMoreData = () => {
    let photoData = queryItems(page);

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
          setHasMore(true);
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
  const audio = new Audio();
  audio.src = sys.SLIDESHOW_MUSIC;

  const slides = data.map((obj) => ({
    src: obj.url,
    fileName: 'test.jpg',
    title: obj.city,
    downloadUrl: obj.url,
    downloadFilename: obj.downloadFilename,
    description: (
      <div className={css.lightBoxExif}>
        <div>
          <span style={{ width: '210px' }}>拍摄时间：{utils.timeFormat(obj.photoTime, 'yyyy-MM-dd hh:mm')}</span>
          <span style={{ width: '160px' }}>分辨率：{obj.resolution}</span>
          <span style={{ width: '160px' }}>大小：{obj.size}M</span>
          <span style={{ width: '110px' }}>焦距：{obj.fValue}MM</span>
          <span style={{ width: '170px' }}>相机品牌：{obj.cameraBrand}</span>
        </div>
        <div>
          <span style={{ width: '100px' }}>光圈：F{obj.aValue}</span>
          <span style={{ width: '110px' }}>ISO:{obj.isoValue}</span>
          <span style={{ width: '160px' }}>曝光补偿：{obj.evValue}</span>
          <span style={{ width: '160px' }}>测光模式：{obj.meteringMode}</span>
          <span style={{ width: '110px' }}>闪光模式：{obj.flashMode}</span>
        </div>
      </div>
    ),
  }));

  const [index, setIndex] = useState(-1);

  const DownloadIcon = createIcon('DownloadIcon', <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" />);

  function DownloadButton() {
    const { currentSlide } = useLightboxState();
    console.log('currentSlidecurrentSlidecurrentSlidecurrentSlidecurrentSlidecurrentSlide');
    console.log(currentSlide);
    let downloadUrl = '';
    downloadUrl = currentSlide?.downloadUrl || (currentSlide && isImageSlide(currentSlide) ? currentSlide.src : 'undefined');
    const fileName = currentSlide?.downloadFilename || `${utils.timeStamp()}.${utils.fileExt(downloadUrl)}`;

    const handleDownload = () => {
      if (downloadUrl) {
        fileDownload(downloadUrl, fileName);
      }
    };

    return <IconButton label="Download" icon={DownloadIcon} onClick={handleDownload} />;
  }

  return (
    <div className={css.box}>
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
        <div className={css.rowBox}>
          <Gallery rowHeight={450} margin={12} enableImageSelection={false} images={data} onClick={(index) => setIndex(index)} />

          {/* <PhotoAlbum photos={slides} layout="columns" columns={31} onClick={({ index }) => setIndex(index)} /> */}
        </div>
      </InfiniteScroll>

      <Lightbox
        controller={{ ref }}
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        on={{
          slideshowStart: () => {
            audio.play();
          },
          slideshowStop: () => {
            audio.pause();
          },
        }}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Zoom, Captions]}
        toolbar={{ buttons: [<DownloadButton key="download" />, 'close'] }}
      />
    </div>
  );
};
