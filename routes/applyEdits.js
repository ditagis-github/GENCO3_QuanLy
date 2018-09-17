var router = require('express').Router();
var appLogger = require('../modules/Logger').create();
router.post('/', async function (req, res) {
  const data = JSON.parse(req.body['data']);
  const layerId = data.layer.layerID;
  let username = data.username;
  let loggers = [];
  if (data.addFeatures && data.addFeatures.length > 0) {
    for (const graphic of data.addFeatures) {
      let tacVu = "Thêm lớp dữ liệu",
        thuocTinh = '';
      for (const key in graphic.attributes) {
        thuocTinh += key + ';'
      }
      loggers.push({
        tacVu: tacVu,
        thuocTinh: thuocTinh
      })
    }

  }
  if (data.updateFeatures && data.updateFeatures.length > 0) {
    for (const graphic of data.updateFeatures) {
      let tacVu = "Cập nhật lớp dữ liệu",
        thuocTinh = '';
      for (const key in graphic.attributes) {
        thuocTinh += key + ';'
      }
      loggers.push({
        tacVu: tacVu,
        thuocTinh: thuocTinh
      })
    }
  }
  if (data.deleteFeatures && data.deleteFeatures.length > 0) {
    for (const graphic of data.deleteFeatures) {
      let tacVu = "Xóa lớp dữ liệu",
        thuocTinh = '';
      thuocTinh = '';
      for (const key in graphic.attributes) {
        thuocTinh += key + ';'
      }
      loggers.push({
        tacVu: tacVu,
        thuocTinh: thuocTinh
      })
    }
  }
  //LOGGER
  for (const item of loggers) {
    item.username = username;
    item.thoiGian = new Date();
    item.lopDuLieu = layerId;
  }
  appLogger.logs(loggers);
  res.status(200).send();
})
module.exports = router;