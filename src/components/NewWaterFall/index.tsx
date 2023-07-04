// 组件名称尽量字母大写开头
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Gallery } from 'react-grid-gallery';
import { Spin } from 'antd';
import { click } from '@/services/admin';
import { useModel } from 'umi';
import * as utils from '@/lib/utils';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/download';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import { IconButton, createIcon, useLightboxState, isImageSlide } from 'yet-another-react-lightbox/core';
import styles from './index.less';

const DownloadIcon = createIcon('DownloadIcon', <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" />);

function DownloadButton() {
  const { currentSlide } = useLightboxState();

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

  let downloadUrl = '';
  downloadUrl = currentSlide?.downloadUrl || (currentSlide && isImageSlide(currentSlide) ? currentSlide.src : 'undefined');
  const fileName = currentSlide?.downloadFilename || `${utils.timeStamp()}.${utils.fileExt(downloadUrl)}`;

  const handleDownload = () => {
    if (downloadUrl) {
      downloadImage(downloadUrl, fileName);
    }
  };
  return <IconButton label="Download" icon={DownloadIcon} onClick={handleDownload} />;
}

function NewWaterFall() {
  const { imageList, currentPage, curentIndex, hasMore, loadMoreData, searchParams, setState } = useModel('item');

  const newImageList = imageList.map((obj: Record<string, any>) => ({
    ...obj,
    description: (
      <div className={styles.lightBoxExif}>
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
    customOverlay: (
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
            <div>{obj.city}</div>
            <div style={{ fontSize: 18, marginTop: 15, color: `#b7b7b7` }}>{obj.photoTouristSpot}</div>
          </div>
        </div>
      </div>
    ),
  }));

  useEffect(() => {
    loadMoreData({ currentPage });
  }, []);

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={newImageList.length}
        next={() => loadMoreData({ ...searchParams, currentPage })}
        style={{ overflow: `hidden` }}
        hasMore={hasMore}
        loader={
          <div className={styles.loading}>
            <Spin />
          </div>
        }
        scrollableTarget="scrollableDiv"
      >
        <Gallery
          rowHeight={600}
          margin={3}
          enableImageSelection={false}
          images={newImageList}
          onClick={(i: number) => {
            setState({ curentIndex: i });
          }}
        />
      </InfiniteScroll>

      <Lightbox
        slides={newImageList}
        open={curentIndex >= 0}
        index={curentIndex}
        close={() => setState({ curentIndex: -1 })}
        on={{
          view: (showIndex) => {
            click(newImageList[showIndex.index].id);
          },
        }}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Zoom, Captions]}
        toolbar={{ buttons: [<DownloadButton key="download" />, 'close'] }}
      />
    </div>
  );
}
export default NewWaterFall;
