/**
 * 全局的数据模型
 */
import { useSetState } from 'ahooks';
import { queryImageList } from '@/services/item';

type ItemType = {
  imageList: any[];
  currentPage: number;
  hasMore: boolean;
  curentIndex: number;
  currentPath: '/' | '/about' | '/linkme' | '/photos' | '/admin/list';
  searchParams: Record<string, any>;
};

export default () => {
  const [state, setState] = useSetState<ItemType>({
    imageList: [], // 图片列表
    currentPage: 1, // 当前页码
    hasMore: false, // 是否有下一页
    curentIndex: -1, // 当前图片索引
    currentPath: '/', // 当前路径
    searchParams: {}, // 搜索参数
  });
  const { imageList, currentPage } = state;

  // 加载更多
  const loadMoreData = async (parmas: Record<string, any>) => {
    let { isSearch, ...restParams } = parmas;
    if (restParams.tag === 'all') {
      delete restParams.tag;
    }
    const { list, hasNext } = await queryImageList(restParams);
    const l = list.map((obj) => ({
      ...obj,
      src: obj.url,
      fileName: 'test.jpg',
      id: obj.id,
      title: obj.city + ' / ' + obj.photoTouristSpot,
      downloadUrl: obj.srcImgURL,
      downloadFilename: obj.downloadFilename,
    }));
    const { tag, key } = restParams;
    const searchParams = {};
    if (tag) {
      Object.assign(searchParams, { tag });
    }
    if (key) {
      Object.assign(searchParams, { key });
    }
    if (isSearch) {
      setState({
        imageList: l,
        currentPage: currentPage,
        hasMore: hasNext,
        searchParams,
      });
      return;
    }
    setState({
      imageList: [...imageList, ...l],
      currentPage: currentPage + 1,
      hasMore: hasNext,
      searchParams,
    });
  };

  return {
    ...state,
    loadMoreData,
    setState,
  };
};
