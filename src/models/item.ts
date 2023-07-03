/**
 * 全局的数据模型
 */
import { useSetState } from 'ahooks';

type ItemType = {
  imageList: any[];
  currentPage: number;
  hasMore: boolean;
  curentIndex: number;
  currentPath: '/' | '/about' | '/linkme' | '/photos' | '/admin/list';
};

export default () => {
  const [state, setState] = useSetState<ItemType>({
    imageList: [], // 图片列表
    currentPage: 1, // 当前页码
    hasMore: false, // 是否有下一页
    curentIndex: -1, // 当前图片索引
    currentPath: '/', // 当前路径
  });

  return {
    ...state,
    setState,
  };
};
