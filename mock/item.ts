const imgArr = [
  {
    id: 1,
    city: '深圳',
    url: 'https://images.unsplash.com/photo-1679855315528-106bb5cea34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    width: 900,
    height: 1358,
    //标题
    title: '可爱的猫咪',
    //拍摄时间
    photoTime: '2020-12-23 11:12:33',
    //分辨率
    resolution: '5152*7728',
    //大小
    size: '28',
    //照片评级
    rating: '1',
    //相机品牌
    cameraBrand: 'XT3',
    //光圈值
    aValue: '2.2',
    //ISO
    isoValue: '400',
    //曝光时间
    sValue: '1/125',
    //曝光补偿
    evValue: '+1',
    //焦距
    fValue: '35',
    //测光模式
    meteringMode: '片中心平局',
    //闪光模式
    flashMode: '无',
    //原片地址
    srcImgURL: 'http://www.qq.com',
  },

  {
    id: 2,
    city: '深圳',
    url: '  https://images.unsplash.com/photo-1618071147329-803bf99d9746?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=6480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMzg4OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=4320',
    width: 4320,
    height: 6480,
  },

  {
    id: 3,
    city: '北京',
    url: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 320,
    height: 212,
  },
  {
    id: 4,
    city: '上海',
    url: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 5,
    city: '南京',
    url: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"',
    width: 320,
    height: 183,
  },
  {
    id: 6,
    city: '广州',
    url: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    width: 210,
    height: 320,
  },
  {
    id: 7,
    city: '大连',
    url: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    width: 320,
    height: 190,
  },
  {
    id: 8,
    city: '苏州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 148,
  },
  {
    id: 9,
    city: '杭州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 10,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 11,
    city: '深圳',
    url: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    width: 320,
    height: 212,
  },
  {
    id: 12,
    city: '北京',
    url: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 320,
    height: 212,
  },
  {
    id: 13,
    city: '上海',
    url: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 14,
    city: '南京',
    url: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg"',
    width: 320,
    height: 183,
  },
  {
    id: 15,
    city: '广州',
    url: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    width: 210,
    height: 320,
  },
  {
    id: 16,
    city: '大连',
    url: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
    width: 320,
    height: 190,
  },
  {
    id: 17,
    city: '苏州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 148,
  },
  {
    id: 18,
    city: '杭州',
    url: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
    width: 320,
    height: 213,
  },
  {
    id: 19,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 20,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 21,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 22,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 23,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 24,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 25,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 26,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 27,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 28,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 29,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 30,
    city: '武汉',
    url: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
    width: 248,
    height: 320,
  },
  {
    id: 31,
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
    if (page == 5) {
      res.json([]);
      return;
    }
    let arr = [];
    for (let i = 0; i < 15; i++) {
      let randomInt = getRandomInt(0, imgArr.length - 1);
      if (page == 1) {
        arr.push(imgArr[i]);
      } else if (page == 2) {
        arr.push(imgArr[11 + i]);
      } else if (page == 3) {
        arr.push(imgArr[11 + i]);
      } else {
        arr.push(imgArr[11 + i]);
      }
    }
    res.json(arr);
  },
};
