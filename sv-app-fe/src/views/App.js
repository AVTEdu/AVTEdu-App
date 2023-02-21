import '../views/App.css';
import { Login } from "../component/login";
import { LoginAdmin } from "../component/admin/LoginAdmin";
import { AdminApp } from "../component/admin/AdminApp";
import Dkhp from '../component/Dkhp';
import { Routes, Route } from 'react-router-dom'
import Layout from '../component/Layout';
import Unauthorized from '../component/Unauthorized';
import { TrangChu } from '../component/Trangchu';
import { MonHoc, HocPhan } from '../component/admin/pages/QuanLyHocPhan';
import { Khoa, ChuyenNganh } from '../component/admin/pages/QuanLyKhoa';
import { HocKi, LopHocPhan, PhanCong } from '../component/admin/pages/QuanLyLopHocPhan';
import { Admin, GiangVien, SinhVien } from '../component/admin/pages/QuanLyNguoiDung';
import { LoaiPhong, Phong } from '../component/admin/pages/QuanLyPhong';
import { ThoiKhoaBieu } from '../component/admin/pages/QuanLyTKB';



function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="AdminLogin" element={<LoginAdmin />} />
          <Route path="AdminApp/*" element={<AdminApp />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="dkhp" element={<Dkhp />} />
        </Route> */}
          <Route path="trang-chu" element={<TrangChu />} />
          <Route path="dkhp" element={<Dkhp />} />


          {/* <Route path="*" element={<Missing />} /> */}
        </Route>
      </Routes>
      <Routes>


        <Route path='/ql-khoa/khoa' element={<Khoa />} />
        <Route path='/ql-khoa/chuyen-nganh' element={<ChuyenNganh />} />

        <Route path='/ql-hocphan/mon-hoc' element={<MonHoc />} />
        <Route path='/ql-hocphan/hoc-phan' element={<HocPhan />} />

        <Route path='/ql-lophocphan/hoc-ki' element={<HocKi />} />
        <Route path='/ql-lophocphan/lop-hoc-phan' element={<LopHocPhan />} />
        <Route path='/ql-lophocphan/phan-cong' element={<PhanCong />} />

        <Route path='/ql-phong/loai-phong' element={<LoaiPhong />} />
        <Route path='/ql-phong/phong' element={<Phong />} />

        <Route path='/ql-tkb/tkb' element={<ThoiKhoaBieu />} />

        <Route path='/ql-user/admin' element={<Admin />} />
        <Route path='/ql-user/gv' element={<GiangVien />} />
        <Route path='/ql-user/sv' element={<SinhVien />} />

      </Routes>
    </>
  );
}

export default App;
