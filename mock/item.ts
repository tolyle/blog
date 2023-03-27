const imgArr = [
  {
    id: 1,
    city: '深圳',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01352.jpg',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '北京',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01384.jpg',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '上海',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01389.jpg',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '南京',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01459.jpg',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '广州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0377.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '大连',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0380.JPG',
    width: 1030,
    height: 686,
  },
  {
    id: 1,
    city: '苏州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0385.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '杭州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0386.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '武汉',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0394.JPG',
    width: 1030,
    height: 686,
  },
  {
    id: 1,
    city: '合肥',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0395.JPG',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '西安',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0396.JPG',
    width: 1030,
    height: 686,
  },
  {
    id: 1,
    city: '南宁',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0399.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '兰州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/dakaichenggong.jpg',
    width: 331,
    height: 718,
  },{
    id: 1,
    city: '深圳',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01352.jpg',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '北京',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01384.jpg',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '上海',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01389.jpg',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '南京',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSC01459.jpg',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '广州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0377.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '大连',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0380.JPG',
    width: 1030,
    height: 686,
  },
  {
    id: 1,
    city: '苏州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0385.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '杭州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0386.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '武汉',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0394.JPG',
    width: 1030,
    height: 686,
  },
  {
    id: 1,
    city: '合肥',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0395.JPG',
    width: 1030,
    height: 687,
  },
  {
    id: 1,
    city: '西安',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0396.JPG',
    width: 1030,
    height: 686,
  },
  {
    id: 1,
    city: '南宁',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/DSCF0399.JPG',
    width: 478,
    height: 718,
  },
  {
    id: 1,
    city: '兰州',
    url: 'https://app-data2.oss-cn-shenzhen.aliyuncs.com/dakaichenggong.jpg',
    width: 331,
    height: 718,
  },
];
// 生成n到m之间的随机整数
function getRandomInt(n: number, m: number) {
  // 取得n到m范围内的随机数，包括n和m
  // Math.floor向下取整，Math.random()返回0到1之间的随机数
  const randomNum = Math.floor(Math.random() * (m - n + 1)) + n;
  return randomNum;
}
export default {
  // 返回值可以是数组形式
  'GET /api/items': (req: any, res: any) => {
    let page = req.query.page;
    if(page == 5){
      res.json([])
      return 
    }
    let arr = [];
    for (let i = 0; i < 15; i++) {
      let randomInt = getRandomInt(0, imgArr.length - 1);
      arr.push(imgArr[randomInt]);
    }
    res.json(arr);
  },
};
