const getExif = (req: any, res: any) => {
  let pId = req.query.pId;
  console.log(`get Exif pId:${pId}`);
  res.json({
    id: 1,
    //标题
    title: '可爱的猫咪',
    //拍摄时间
    photoTime: '2020-12-23 11:12:33',
    //分辨率
    resolution: '5152*7728',
    //大小
    size: '28MB',
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
    fValue: '35MM',
    //测光模式
    meteringMode: '片中心平局',
    //闪光模式
    flashMode: '无',
    //原片地址
    srcImgURL: 'http://www.qq.com',
  });
};

const setRating = (req: any, res: any) => {
  let pId = req.query.pId;
  let rating = req.query.rating;

  console.log(`set rating:pid:${pId},rating:${rating}`);

  res.status(201);
};

export default {
  //根据ID获取照片元素据
  'GET /api/exif': getExif,
  //给照片评级
  'POST /api/rating': setRating,
};
