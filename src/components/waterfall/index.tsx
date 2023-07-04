import { Divider, Spin } from 'antd';
import { useEffect, useState, useRef } from 'react';

import css from './index.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import * as utils from '@/lib/utils';
import sys from '@/lib/config/sys';

import InfiniteScroll from 'react-infinite-scroll-component';
import { Gallery, Image } from 'react-grid-gallery';

import { queryItems } from '@/services/item';
import { click } from '@/services/admin';

import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/download';
import { IconButton, createIcon, useLightboxState, isImageSlide } from 'yet-another-react-lightbox/core';
import request from 'umi-request';

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
        res.data.data.forEach((element: any) => {
          element.src = element.url;
          //element.thumbnailCaption = <span style={{ color: '#cbb878', textAlign: 'center', display: 'block', background: '#0e232d', paddingTop: '20px', paddingBottom: '20px' }}>{element.title}</span>;
          element.customOverlay = (
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: 'white',
              }}
            >
              <div>
                <div style={{ textAlign: `center` }}>
                  <div>{element.city}</div>
                  <div style={{ fontSize: 18, marginTop: 15, color: `#b7b7b7` }}>{element.photoTouristSpot}</div>
                </div>
              </div>
            </div>
          );
        });

        setLoading(false);
        setData([...data, ...res.data.data]);

        if (res.data.data.length == 0) {
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

  const handleClick2 = (index: number, item: Image) => {
    setIndex(index);
    click(item.id);
  };

  // const audio = new Audio();
  // audio.src = sys.SLIDESHOW_MUSIC;

  const slides = data.map((obj) => ({
    src: obj.url,
    fileName: 'test.jpg',
    id: obj.id,
    title: obj.city + ' / ' + obj.photoTouristSpot,
    downloadUrl: obj.srcImgURL,
    downloadFilename: obj.downloadFilename,
    description: (
      <div className={css.lightBoxExif}>
        <div>
          <span style={{ width: '210px' }}>拍摄时间：{utils.timeFormat(obj.photoTime, 'yyyy-MM-dd hh:mm')}</span>
          <span style={{ width: '160px' }}>分辨率：{obj.resolution}</span>
          <span style={{ width: '110px' }}>大小：{obj.size}M</span>
          <span style={{ width: '270px' }}>相机品牌：{obj.cameraBrand}</span>
        </div>
        <div>
          <span style={{ width: '100px' }}>光圈：F{obj.AValue}</span>
          <span style={{ width: '110px' }}>ISO:{obj.isoValue}</span>
          <span style={{ width: '160px' }}>曝光补偿：{obj.evValue}</span>
          <span style={{ width: '110px' }}>焦距：{obj.FValue}MM</span>
          <span style={{ width: '270px' }}>相机镜头：{obj.lens}</span>
        </div>
      </div>
    ),
  }));

  const [index, setIndex] = useState(-1);

  const DownloadIcon = createIcon('DownloadIcon', <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" />);

  function downloadImage(url: string, fileName: string) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.target = '_blank';
        link.click();
        window.URL.revokeObjectURL(link.href);
      });
  }

  function DownloadButton() {
    const { currentSlide } = useLightboxState();

    let downloadUrl = '';
    downloadUrl = currentSlide?.downloadUrl || (currentSlide && isImageSlide(currentSlide) ? currentSlide.src : 'undefined');
    const fileName = currentSlide?.downloadFilename || `${utils.timeStamp()}.${utils.fileExt(downloadUrl)}`;

    const handleDownload = () => {
      //window.location.href = downloadUrl;
      if (downloadUrl) {
        //fileDownload(downloadUrl, fileName);
        downloadImage(downloadUrl, fileName);
      }
    };

    return <IconButton label="Download" icon={DownloadIcon} onClick={handleDownload} />;
  }

  return (
    <div className={css.box}>
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        style={{ overflow: `hidden` }}
        hasMore={hasMore}
        loader={
          <div className={css.loading}>
            <Spin />
          </div>
        }
        //endMessage={<Divider plain>已经是全部了, 没有更多啦 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <div className={css.rowBox}>
          <Gallery rowHeight={600} margin={3} enableImageSelection={false} images={data} onClick={handleClick2} />

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
            //audio.play();
          },
          slideshowStop: () => {
            // audio.pause();
          },
          view: (showIndex) => {
            click(slides[showIndex.index].id);
          },
        }}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Zoom, Captions]}
        toolbar={{ buttons: [<DownloadButton key="download" />, 'close'] }}
      />
    </div>
  );
};
