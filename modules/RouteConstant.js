var appRoute = [{
  id: 'QLSC',
  url: 'quan-ly-su-co',
  title: 'Quản lý sự cố'
},{
    id: 'CNDL-HT',
    url: 'cap-nhat-du-lieu',
    title: 'Cập nhật dữ liệu hiện trạng'
  },
  {
    id: 'CNDL-QH',
    url: 'cap-nhat-du-lieu?m=qh',
    title:"Cập nhật dữ liệu quy hoạch"
  },
  {
    id: 'QLQH-DCQHXD',
    url: 'quan-ly-quy-hoach',
    title:"Quản lý quy hoạch"
  },
  {
    id: 'QLQH-DCHTQH',
    url: 'quan-ly-quy-hoach?m=doi-chieu-hien-trang',
    title:"Quản lý quy hoạch đối chiếu hiện trang"
  },
  {
    id: 'QLQH-DCHTQHXD',
    url: 'quan-ly-quy-hoach?m=doi-chieu-hien-trang-quy-hoach-xay-dung',
    title:"Quản lý quy hoạch đối chiếu hiện trang với quy hoạch xây dựng"
  },
  {
    id: 'BCTK',
    url: 'bao-cao-thong-ke?m=ht&l=su-co',
    title:"Báo cáo thống kê sự cố"
  },
  {
    id: 'QLTKNQ-QLTK',
    url: 'quan-ly-tai-khoan-nhom-quyen?m=tai-khoan',
    title:"Quản lý tài khoản"
  },
  {
    id: 'QLTKNQ-QLNQ',
    url: 'quan-ly-tai-khoan-nhom-quyen?m=nhom-quyen',
    title:"Quản lý nhóm quyền"
  },
  {
    id: 'QLTKNQ-QLKNTC-CN-Q',
    url: 'quan-ly-tai-khoan-nhom-quyen?m=chuc-nang-quyen',
    title:"Quản lý chức năng quyền"
  },
  {
    id: 'QLTKNQ-QLKNTC-CN-TK',
    url: 'quan-ly-tai-khoan-nhom-quyen?m=chuc-nang-tai-khoan',
    title:"Quản lý chức năng tài khoản"
  },
  {
    id: 'QLTKNQ-QLKNTC-LDL-Q',
    url: 'quan-ly-tai-khoan-nhom-quyen?m=lop-du-lieu-quyen',
    title:"Quản lý lớp dữ liệu quyền"
  },
  {
    id: 'QLTKNQ-QLKNTC-LDL-TK',
    url: 'quan-ly-tai-khoan-nhom-quyen?m=lop-du-lieu-tai-khoan',
    title:"Quản lý lớp dữ liệu tài khoản"
  },
  {
    id: 'TL',
    url: '',
    title:""
  }
]
function find(id){
  if(!id)return null;
  return appRoute.find(f=>{
    return f.id === id;
  })
}
function findByUrl(url){
  if(!url)return null;
  return appRoute.find(f=>{
    return f.url === url;
  })
}
module.exports.datas = appRoute;
module.exports.find = find;
module.exports.findByUrl = findByUrl;
