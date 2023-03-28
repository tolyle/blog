const imgArr = [
  {
    id: 1,
    city: '深圳',
    url: 'https://images.unsplash.com/photo-1679855315528-106bb5cea34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    width: 900,
    height: 1358,
  },
  {
    id: 1,
    city: '北京',
    url: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 320,
    height: 212,
  },
  {
    id: 1,
    city: '上海',
    url: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 1,
    city: '南京',
    url: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"',
    width: 320,
    height: 183,
  },
  {
    id: 1,
    city: '广州',
    url: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    width: 210,
    height: 320,
  },
  {
    id: 1,
    city: '大连',
    url: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    width: 320,
    height: 190,
  },
  {
    id: 1,
    city: '苏州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 148,
  },
  {
    id: 1,
    city: '杭州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 1,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 1,
    city: '深圳',
    url: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    width: 320,
    height: 212,
  },
  {
    id: 1,
    city: '北京',
    url: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 320,
    height: 212,
  },
  {
    id: 1,
    city: '上海',
    url: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 1,
    city: '南京',
    url: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"',
    width: 320,
    height: 183,
  },
  {
    id: 1,
    city: '广州',
    url: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    width: 210,
    height: 320,
  },
  {
    id: 1,
    city: '大连',
    url: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    width: 320,
    height: 190,
  },
  {
    id: 1,
    city: '苏州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 148,
  },
  {
    id: 1,
    city: '杭州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 1,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
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
