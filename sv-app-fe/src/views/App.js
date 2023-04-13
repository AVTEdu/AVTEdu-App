
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
import { Admin, GiangVien, SinhVien, NhapDiemSinhVien } from '../component/admin/pages/QuanLyNguoiDung';
import { Phong } from '../component/admin/pages/QuanLyPhong';
import { ThoiKhoaBieu } from '../component/admin/pages/QuanLyTKB';
import { CongNo } from "../component/admin/pages/QuanLyCongNo";
import XemLichHoc from "../component/XemLichHoc";
import Sidebar from "../component/admin/components/Sidebar";
import TraCuuCongNo from "../component/TraCuuCongNo";
import ThanhToanTrucTuyen from "../component/ThanhToanTrucTuyen";
import XacNhanThanhToan from "../component/XacNhanThanhToan";
import LoginGiangVien from "../component/giangvien/LoginGiangVien";
import GiangVienApp from "../component/giangvien/GiangVienApp";
import { GVThongBao } from "../component/giangvien/pages/GVThongBao";
import { DiemDanhTheoLHP } from "../component/giangvien/pages/DiemDanhTheoLHP";
import PhieuThuTongHop from "../component/PhieuThuTongHop";
import KetQuaHocTap from "../component/KetQuaHocTap";
import ThongBaoNhacNho from "../component/ThongBaoNhacNho";
import FeedBack from "../component/FeedBack";

function App() {
  return (
    // <div className="App">
    //   <Login />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="logoutAd" element={<LoginAdmin />} />
          <Route path="logoutSV" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="AdminLogin" element={<LoginAdmin />} />
          <Route path="GiangVienLogin" element={<LoginGiangVien />} />
          <Route path="LogoutGiangVien" element={<LoginGiangVien />} />
          <Route path="AdminApp" element={<AdminApp />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/xac-nhan-thanh-toan" element={<XacNhanThanhToan />} />
          <Route path="GiangVienApp" element={<GiangVienApp />} />
          <Route path="phieu-thu-tong-hop" element={<PhieuThuTongHop />} />
          <Route path="ket-qua-hoc-tap" element={<KetQuaHocTap />} />
          <Route path="ghi-chu-nhac-nho-sinh-vien" element={<ThongBaoNhacNho />} />
          <Route path="khao-sat" element={<FeedBack />} />

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="dkhp" element={<Dkhp />} />
        </Route> */}
          <Route path="trang-chu" element={<TrangChu />} />
          <Route path="dkhp" element={<Dkhp />} />
          <Route path="lich-theo-tuan" element={<XemLichHoc />} />
          <Route path="cong-no-sinh-vien" element={<TraCuuCongNo />} />
          <Route path="thanh-toan-truc-tuyen" element={<ThanhToanTrucTuyen />} />


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

        <Route path='/ql-phong/phong' element={<Phong />} />

        <Route path='/ql-tkb/tkb' element={<ThoiKhoaBieu />} />

        <Route path='/ql-user/admin' element={<Admin />} />
        <Route path='/ql-user/gv' element={<GiangVien />} />
        <Route path='/ql-user/sv' element={<SinhVien />} />
        <Route path="/nhap-diem-sv" element={<NhapDiemSinhVien />} />
        <Route path='/ql-congno/ds-cno' element={<CongNo />} />

        <Route path='/thong-bao-gv' element={<GVThongBao />} />
        <Route path='/ct-gd/diem-danh-lhp' element={<DiemDanhTheoLHP />} />
      </Routes>
    </>
  );
}

export default App;
