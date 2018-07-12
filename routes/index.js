var router = require('express').Router();
var request = require('request');
var appLogger = require('../modules/Logger').create();
var accountManager = require('../modules/AccountDB').create();
router.get('/', function (req, res) {
  res.render('welcome',{
    path:req.path
  });
})
.get('/tra-cuu-su-co',function (req, res) {
  res.render('tracuusuco',{
    path:req.path
  });
})
.get('/huong-dan-su-dung',function (req, res) {
  res.render('huongdansudung',{
    path:req.path
  });
})
.get('/quan-ly', (req, res) => {
  res.render('quanly', {
    title: 'Hệ thống quản lý'
  });
})
.get('/logout', (req, res) => {
  if (req.isAuthenticated()) {
    appLogger.capabilityLogs([{
      username: req.session.passport.user.Username,
      tacVu: 'Đăng xuất'
    }])
    res.clearCookie('passport');
    req.session.destroy();
  }
  res.redirect('/');
  res.end()
})
.post('/session', function (req, res) {
  if (req.isAuthenticated()) {
    res.status(200).send(req.session.passport.user);
    // const request = require('request');

    // request("http://ditagis.com:6080/arcgis/tokens/generateToken?username=fuhidev&password=123123", (err, response, token) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   req.session.passport.user.serverInfos = JSON.parse(`{"serverInfos":[{"server":"https://ditagis.com:6443/arcgis","tokenServiceUrl":"https://ditagis.com:6443/arcgis/tokens/","adminTokenServiceUrl":"https://ditagis.com:6443/arcgis/admin/generateToken","shortLivedTokenValidity":60,"currentVersion":10.41,"hasServer":true}],"oAuthInfos":[],"credentials":[{"userId":"fuhidev","server":"https://ditagis.com:6443/arcgis","token":"${token}","expires":1512614280364,"validity":60,"ssl":false,"creationTime":1512610682603,"scope":"server","resources":["https://ditagis.com:6443/arcgis/rest/services/BinhDuong/HeThongVienThong_ChuyenDe/FeatureServer/0"]}]}`)

    // });
  } else {
    accountManager.anonymous().then(function (user) {
      res.status(200).send(user);
    })
  }
})
module.exports = router;