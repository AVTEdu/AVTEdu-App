import { React, useState, useEffect } from "react";
import { format } from "date-fns"
import Sidenavbar from "./Sidenavbar";
import dkhpAPI from "../api/dkhpAPI";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableScrollbar from 'react-table-scrollbar';

export default function Dkhp() {
  const [hocKiState, setHocKiState] = useState(null);
  const [monChuaDangKy, setMonChuaDangKy] = useState(null);
  const [itemNamHocBatDau, setItemNamHocBatDau] = useState();
  const [maHocPhan, setMaHocPhan] = useState();
  const [dsToanBoLopHocPhan, setDsToanBoLopHocPhan] = useState();
  const [maLopHocPhan, setMaLopHocPhan] = useState('');
  const [chiTietLopHP, setChiTietLopHP] = useState();
  const [hpDaDangKy, setHpDaDangKy] = useState();
  const [maHocKi, setMahocKi] = useState();
  const [maPhanCongLopHocPhan, setMaPhanCongLopHocPhan] = useState();
  const [trangThaiLopHocPhan, setTrangThaiLopHocPhan] = useState();
  const [selectedDsToanBoLopHP, setSelectedDsToanBoLopHP] = useState([]);
  const [loaiHocPhanPhuTrach, setLoaiHocPhanPhuTrach] = useState();
  const [trangThaiDangKy, setTrangThaiDangKy] = useState();
  let sttMonChuaDK = 1;
  let sttLHPChoDK = 1;
  let sttHocPhanDaDangKy = 1;
  const namHienTai = new Date().getFullYear();
  var sendDate = (new Date()).getTime();
  const [loading, setLoading] = useState(false);
  const [resTime, setResTime] = useState(0);

  useEffect(() => {
    if (resTime > 0) {
      console.log(resTime);
      setTimeout(() => {
        setLoading(false);
      }, resTime)
    }
  }, [resTime])

  useEffect(() => {
    const activeHocKi = async () => {
      try {
        setLoading(true);
        const res = await dkhpAPI.getHocKi();
        setHocKiState(res.data);
        var receiveDate = (new Date()).getTime();
        var responseTimeMs = receiveDate - sendDate;
        setResTime(responseTimeMs);
      } catch (error) {
        console.log(error.message);
      }
    };
    activeHocKi();
  }, []);

  useEffect(() => {
    const activeDSHocPhanDaDangKyTrongKyNay = async () => {
      try {
        setLoading(true);
        setDsToanBoLopHocPhan('');
        setChiTietLopHP('');
        const res = await dkhpAPI.getHocPhanDaDangKyTrongKynay(maHocKi);
        setHpDaDangKy(res.data);
        var receiveDate = (new Date()).getTime();
        var responseTimeMs = receiveDate - sendDate;
        setResTime(responseTimeMs);
      } catch (error) {
        console.log(error.message);
      }
    };
    activeDSHocPhanDaDangKyTrongKyNay();
  }, [maHocKi, trangThaiDangKy])

  // useEffect(() => {
  //   const activeDSHocPhanDaDangKyTrongKyNay = async () => {
  //     try {
  //       setDsToanBoLopHocPhan('');
  //       setChiTietLopHP('');
  //       const res = await dkhpAPI.getHocPhanDaDangKyTrongKynay(maHocKi);
  //       setHpDaDangKy(res.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   activeDSHocPhanDaDangKyTrongKyNay();
  // }, [trangThaiDangKy])

  useEffect(() => {
    const activeLopHocPhanByHocPhan = async () => {
      setChiTietLopHP('');
      setMaLopHocPhan('');
      try {
        setLoading(true);
        const res = await dkhpAPI.getLopHocPhanByHocPhan(maHocPhan, maHocKi);
        setDsToanBoLopHocPhan(res.data);
        var receiveDate = (new Date()).getTime();
        var responseTimeMs = receiveDate - sendDate;
        setResTime(responseTimeMs);
      } catch (error) {
        console.log(error.message);
      }
    };
    activeLopHocPhanByHocPhan();
  }, [maHocPhan])

  useEffect(() => {
    const activeChiTietLopHocPhan = async () => {
      try {
        setLoading(true);
        const res = await dkhpAPI.getChiTietLopHocPhan(maLopHocPhan);
        setChiTietLopHP(res.data);
        var receiveDate = (new Date()).getTime();
        var responseTimeMs = receiveDate - sendDate;
        setResTime(responseTimeMs);
      } catch (error) {
        console.log(error.message);
      }
    };
    activeChiTietLopHocPhan();
  }, [maLopHocPhan])


  if (!hocKiState) return null;


  async function activeMonChuaDK(e) {
    try {
      setLoading(true);
      setMahocKi(e.target.value);
      const res = await dkhpAPI.getToanBoMonHocChuaDangKy();
      setMonChuaDangKy(res.data);
      var selectElementDotDangKy = document.querySelector('#cboIDDotDangKy').value;
      selectElementDotDangKy === '' ? setItemNamHocBatDau('') :
        setItemNamHocBatDau(selectElementDotDangKy);
      if (selectElementDotDangKy === '') {
        setDsToanBoLopHocPhan('');
        setChiTietLopHP('');
      }
      var receiveDate = (new Date()).getTime();
      var responseTimeMs = receiveDate - sendDate;
      setResTime(responseTimeMs);
    } catch (error) {
      console.log(error.message);
    }
  }

  const isSelectedDsToanBoLopHP = row => selectedDsToanBoLopHP.indexOf(row.ma_lop_hoc_phan) !== -1;

  const selectLopHocPhan = (e, dsLhp, id) => {
    setMaLopHocPhan(id);
    let newSelected = [dsLhp.ma_lop_hoc_phan];
    setSelectedDsToanBoLopHP(newSelected);
  }

  async function DangKyHocPhan(e) {
    console.log("ma phan cong: " + maPhanCongLopHocPhan);
    console.log("ma hoc ki: " + maHocKi);
    console.log(trangThaiLopHocPhan);
    try {
      setLoading(true);
      if (loaiHocPhanPhuTrach === 1) {
        const res = await dkhpAPI.dangKiHocPhan(maPhanCongLopHocPhan, maHocKi, trangThaiLopHocPhan, 1860000, 0);
        console.log(res.data);
        // const res2 = await dkhpAPI.getHocPhanDaDangKyTrongKynay(maHocKi);
        // setHpDaDangKy(res2.data);
        alert('Đăng ký  thành công');
        setTrangThaiDangKy(res.data);
        var receiveDate = (new Date()).getTime();
        var responseTimeMs = receiveDate - sendDate;
        setResTime(responseTimeMs);
      } else {
        alert('Bạn chưa chọn nhóm thực hành');
      }

    } catch (error) {
      alert('Đăng ký không thành công');
      console.log(error.message);
    }

  }

  return (
    <div className="wrapper">
      <>
        {loading ? (
          <div className="load-container">
            <div>
              <h1 style={{ color: "white", marginBottom: "25px", fontSize: "20px", letterSpacing: "2px" }}>Loading...</h1>
            </div>
            <div className="loading">
              <div className="load-line-box">
                <div className="load-line"></div>
              </div>
            </div>
          </div>
        ) : (<></>)}
        <Sidenavbar />
        <div className="main-content">
          <div className="container" id="full-resize-table">
            <div className="main-section-content" id="contnet">
              <div className="row">
                <div
                  className="col-md-12 col-xs-12"
                  style={{ minHeight: "2000px" }}
                >
                  <div className="box-df">
                    <div className="portlet">
                      <div className="portlet-title">
                        <div className="caption">
                          <span
                            className="caption-subject bold"
                            lang="dangkyhocphan-pagetitle"
                          >
                            Đăng ký học phần
                          </span>
                        </div>
                        {/* <div hidden="" id="warningChonDot" name="warningChonDot" lang="dangkyhocphan-warningChonDot">Chọn đợt đăng ký học phần</div>
                                            <div hidden="" id="warningChonHPDangKy" name="warningChonHPDangKy" lang="dangkyhocphan-warningChonHPDangKy">Chọn chi tiết học phần cần đăng ký</div>
                                            <div hidden="" id="warningChonLichCoNhom" name="warningChonLichCoNhom" lang="dangkyhocphan-warningChonLichCoNhom">học phần có chia nhóm thực hành, vui lòng chọn lịch có nhóm.</div>
                                            <div hidden="" id="warningHuyDKFail" name="warningHuyDKFail" lang="dangkyhocphan-warningHuyDKFail">Hủy đăng ký không thành công</div>
                                            <div hidden="" id="warningMHDKNotFound" name="warningMHDKNotFound" lang="dangkyhocphan-warningMHDKNotFound">Không tìm thấy dữ liệu chi tiết môn học đăng ký</div> */}
                      </div>
                      <div className="portlet-body">
                        <div className="">
                          <div className="form-body">
                            <div className="col-md-2"></div>
                            <div className="form-group  col-md-4">
                              <div>

                                <select
                                  className="form-control"
                                  id="cboIDDotDangKy"
                                  name="cboIDDotDangKy"
                                  placeholder="Chọn đợt đăng ký"
                                  // value={itemNamHocBatDau}
                                  onChange={activeMonChuaDK}


                                >
                                  <option value="">Chọn đợt đăng ký</option>
                                  {hocKiState["dsHocKi"].map((hk) => (
                                    <option key={hk.id} value={hk.ma_hoc_ki} >
                                      HK{hk.thu_tu_hoc_ki} ({hk.nam_hoc_bat_dau} -
                                      {hk.nam_hoc_ket_thuc})
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                            <div className="form-group  col-md-4">
                              <div>
                                <div className="mt-radio-inline">
                                  <label className="mt-radio">
                                    <input
                                      id="rdoLoaiDangKyHocPhan"
                                      name="rdoLoaiDangKyHocPhan"
                                      type="radio"
                                      value="1"
                                    />{" "}
                                    <label lang="dangkyhocphan-dangkymoi">
                                      Học mới
                                    </label>
                                    <span></span>
                                  </label>
                                  <label className="mt-radio">
                                    <input
                                      id="rdoLoaiDangKyHocPhan"
                                      name="rdoLoaiDangKyHocPhan"
                                      type="radio"
                                      value="2"
                                    />{" "}
                                    <label lang="dangkyhocphan-dangkyhoclai">
                                      Học lại
                                    </label>
                                    <span></span>
                                  </label>
                                  <label className="mt-radio">
                                    <input
                                      id="rdoLoaiDangKyHocPhan"
                                      name="rdoLoaiDangKyHocPhan"
                                      type="radio"
                                      value="3"
                                    />{" "}
                                    <label lang="dangkyhocphan-dangkyhoccaithien">
                                      Học cải thiện
                                    </label>
                                    <span></span>
                                  </label>
                                </div>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div>
                          {
                            monChuaDangKy ? (itemNamHocBatDau !== '' ?
                              (namHienTai >= Number(itemNamHocBatDau) ?
                                <div className="gr-table" id="monHPChoDangKy">
                                  <div
                                    className="border-scroll"
                                    style={{ overflowY: "auto", outline: "none" }}
                                    tabIndex="0"
                                  >
                                    <div id="box_monhocphan_chodangky">
                                      <h3
                                        className="title-table"
                                        lang="mhpchodangky-tabletitle"
                                      >
                                        Môn học/học phần đang chờ đăng ký
                                      </h3>
                                      <div className="table-responsive">
                                        <table
                                          className="table-pointer table-custom table table-bordered text-center"
                                          width="100%"
                                          role="grid"
                                          id="dkHocPhan"
                                        >
                                          <thead>
                                            <tr role="row">
                                              <td style={{ width: "40px" }}></td>
                                              <th lang="dkhp-stt">STT</th>
                                              <th lang="dkhp-malhp">Mã học phần</th>
                                              <th lang="dkhp-tenmh">
                                                Tên môn học/học phần
                                              </th>
                                              <th lang="dkhp-tc">TC</th>
                                              <th lang="dkhp-batbuoc">Bắt buộc</th>

                                              <th lang="dkhp-hoctruoctienquyetsonghanh">
                                                học phần: học trước (a),
                                                <br />
                                                tiên quyết (b),
                                                <br />
                                                song hành (c)
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>

                                            {monChuaDangKy["results"].map((mh) =>
                                              <tr
                                                id="rowHocPhan"
                                                value={mh.ma_hoc_phan}
                                                key={mh.ma_hoc_phan}
                                              >
                                                <td className="text-center">
                                                  <div>
                                                    <label
                                                      className="mt-radio"
                                                      style={{ paddingLeft: "17px" }}
                                                    >
                                                      <input
                                                        id="rdoMonHocChoDangKy"
                                                        name="rdoMonHocChoDangKy"
                                                        type="radio"
                                                        value={mh.ma_hoc_phan}
                                                        // onClick={activeLopHocPhanByHocPhan}
                                                        onChange={event => {
                                                          setMaHocPhan(event.target.value)

                                                        }}
                                                      />
                                                      <span></span>
                                                    </label>
                                                  </div>
                                                </td>
                                                <td>{sttMonChuaDK++}</td>
                                                <td>{mh.ma_hoc_phan}</td>
                                                <td className="text-left">{mh.ten_mon_hoc}</td>
                                                <td>{mh.so_tin_chi_ly_thuyet}</td>
                                                <td>
                                                  <div>
                                                    {
                                                      Number(mh.hoc_phan_bat_buoc) === 1 ?
                                                        <div className="check"></div> :
                                                        <div className="no-check"></div>
                                                    }
                                                  </div>
                                                </td>
                                                <td></td>
                                              </tr>
                                            )}
                                          </tbody>
                                        </table>
                                      </div>

                                      <br />
                                      <br />
                                    </div>
                                  </div>
                                </div> : <div className="gr-table" id="monHPChoDangKy">
                                  <div
                                    className="border-scroll"
                                    style={{ overflow: "hidden", outline: "none" }}
                                    tabIndex="0"
                                  >
                                    <div id="box_monhocphan_chodangky">
                                      <h3
                                        className="title-table"
                                        lang="mhpchodangky-tabletitle"
                                      >
                                        Môn học/học phần đang chờ đăng ký
                                      </h3>
                                      <div className="table-responsive">
                                        <table
                                          className="table-pointer table-custom table table-bordered text-center"
                                          width="100%"
                                          role="grid"
                                          id="dkHocPhan"
                                        >
                                          <thead>
                                            <tr role="row">
                                              <td style={{ width: "40px" }}></td>
                                              <th lang="dkhp-stt">STT</th>
                                              <th lang="dkhp-malhp">Mã học phần</th>
                                              <th lang="dkhp-tenmh">
                                                Tên môn học/học phần
                                              </th>
                                              <th lang="dkhp-tc">TC</th>
                                              <th lang="dkhp-batbuoc">Bắt buộc</th>

                                              <th lang="dkhp-hoctruoctienquyetsonghanh">
                                                học phần: học trước (a),
                                                <br />
                                                tiên quyết (b),
                                                <br />
                                                song hành (c)
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td
                                                colSpan="7"
                                                className="text-center bold"
                                                style={{ fontSize: "16px" }}
                                              >
                                                Chưa đến đợt đăng ký
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>

                                      <br />
                                      <br />
                                    </div>
                                  </div>
                                </div>) : <div>
                              </div>) : <div>
                            </div>
                          }
                        </div>
                        <div className="row" id="lopHPChoDangKy">
                          {
                            dsToanBoLopHocPhan ? (dsToanBoLopHocPhan?.results.length > 0 ?
                              <div className="col-md-6">
                                <div className="gr-table">
                                  <div className="border-scroll" style={{ maxHeight: '370px', outline: 'none' }} tabIndex={1}>
                                    <div id="box_lophocphan_chodangky">
                                      <h3 className="title-table" lang="lhpchodangky-tabletitle">Lớp học phần chờ đăng ký</h3>
                                      <div className="text-right" style={{ marginBottom: '10px', marginTop: '18px' }}>
                                        <label><input id="checkLichTrung" name="checkLichTrung" type="checkbox" defaultValue="true" /><input name="checkLichTrung" type="hidden" defaultValue="false" /><b><span className="text-uppercase" style={{ color: 'red', marginLeft: '5px !important', marginRight: '10px !important' }} lang="lhpchodangky-lhpkhongtrunglich">HIỂN THỊ LỚP học phần KHÔNG TRÙNG LỊCH</span></b></label>
                                      </div>
                                      <div className="table-responsive" style={{ overflowY: "auto" }}>
                                        <TableContainer>
                                          <Table id="table_lhpchodangky" className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                            <TableHead>
                                              <TableRow role="row">
                                                <TableCell lang="sv-stt">STT</TableCell>
                                                <TableCell lang="dkhp-thongtinlhp">Thông tin lớp học phần</TableCell>
                                                <TableCell lang="dkhp-dadangky">Đã đăng ký</TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>

                                              {dsToanBoLopHocPhan["results"].map((dsLhp) => {

                                                return (
                                                  <TableRow
                                                    id={"maLHP" + dsLhp.ma_lop_hoc_phan}
                                                    key={dsLhp.ma_lop_hoc_phan}
                                                    hover
                                                    onClick={(e) => selectLopHocPhan(e, dsLhp, dsLhp.ma_lop_hoc_phan)}
                                                    selectedDsToanBoLopHP={isSelectedDsToanBoLopHP(dsLhp)}
                                                  >
                                                    <TableCell style={{ width: '40px' }} component="th" scope="row">{sttLHPChoDK++}</TableCell>
                                                    <TableCell className="text-left" >
                                                      <div className="name">{dsLhp.ten_mon_hoc}</div>
                                                      <div>
                                                        <span lang="dkhp-trangthai">Trạng thái</span>: <span className="cl-red">
                                                          {dsLhp.trang_thai === 1 ? 'Có thể đăng ký' : 'Đã khóa'}</span><br />
                                                        <span lang="dkhp-malhp">Mã lớp  học phần</span>: {dsLhp.ma_lop_hoc_phan}
                                                      </div>
                                                    </TableCell>
                                                    <TableCell>
                                                      {dsLhp.so_luong_dang_ki_hien_tai} / {dsLhp.so_luong_dang_ki_toi_da}
                                                    </TableCell>

                                                  </TableRow>
                                                );
                                              })}
                                            </TableBody>
                                          </Table>
                                        </TableContainer>
                                      </div>
                                      <br />
                                      <br />
                                    </div>
                                  </div>
                                </div>
                              </div> : <div> <h3 className="title-table">Học kỳ này chưa mở lớp</h3></div>) : <div></div>
                          }
                          {
                            chiTietLopHP ? <> <div className="col-md-6">
                              <div className="gr-table">
                                <div className="border-scroll" tabIndex={2} style={{ overflowY: 'auto', outline: 'none' }}>
                                  <div id="box_chitietlophocphan_chodangky">
                                    <style dangerouslySetInnerHTML={{ __html: "\n    #tbChiTietDKHP .tr-active-nhom {\n        background-color: #ffee4a;\n        color: #003f65 !important;\n    }\n    /*#tbChiTietDKHP  .tr-active {\n        background-color: #ffeb3b52 !important;\n    }*/\n" }} />
                                    <h3 className="title-table" lang="ctlhpchodangky-tabletitle">Chi tiết lớp học phần</h3>
                                    <div className="text-right" style={{ marginBottom: '5px' }}>
                                      <button onClick="XemLichTrung(this)" className="btn btn--m block first" style={{ backgroundColor: '#ec9e0f', color: '#fff' }} lang="dkhp-xemlichtrungButton">Xem lịch trùng</button>
                                    </div>
                                    <table id="tbChiTietDKHP" className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                      <thead>
                                        <tr role="row">
                                          <th>
                                            <p><span lang="dkhp-trangthai">Thông tin chi tiết học phần</span></p>
                                          </th>
                                          <th lang="dkhp-nhom">Nhóm</th>
                                          <th>
                                            <div>
                                              <span lang="dkhp-sisomax">Thông tin thêm</span>
                                            </div>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="adminClassHover">
                                        {
                                          chiTietLopHP["results"].map((ctlhp) =>
                                            <tr className="tr-active tr-chitietlichdangky" onClick={(e) => {
                                              (ctlhp.trang_thai === 1 ? setTrangThaiLopHocPhan('Đăng ký mới') : setTrangThaiLopHocPhan(''))
                                              setMaPhanCongLopHocPhan(ctlhp.ma_phan_cong)
                                              setLoaiHocPhanPhuTrach(ctlhp.loai_hoc_phan_phu_trach)
                                            }}>
                                              <td className="text-left">
                                                <div><span >Lịch học</span>: <b> {ctlhp.ngay_hoc_trong_tuan}   (Tiết {ctlhp.tiet_hoc_bat_dau}  -&gt; {ctlhp.tiet_hoc_ket_thuc} )</b></div>
                                                <p><span >Cơ sở</span>: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></p>
                                                <p><span >Dãy nhà</span>: <b>{ctlhp.ten_day_nha} (CS1)</b></p>
                                                <p><span >Phòng</span>: <b>{ctlhp.ten_phong_hoc}</b></p>
                                              </td>
                                              <td>{ctlhp.loai_hoc_phan_phu_trach === 1 ? 'TH' : 'LT'}</td>
                                              <td className="text-left">
                                                <div className="name"><span lang="dkhp-gv">GV</span>: {ctlhp.ten_giang_vien}</div>
                                                {ctlhp.thoi_gian_bat_dau} - {ctlhp.thoi_gian_ket_thuc}
                                              </td>
                                            </tr>
                                          )
                                        }
                                      </tbody>
                                    </table>
                                    <div className="text-center has-2btn">
                                      {/* <div>
                                      <p className="bold" lang="ctlhpchodangky-lhpcochianhom">Lớp học phần có chia nhóm thực hành, vui lòng chọn lịch có nhóm.</p>
                                    </div> */}
                                      <br />
                                      <button onClick={DangKyHocPhan} className="btn btn--m block first" style={{ width: '100px' }} lang="dkhp-dangkyButton">Đăng ký</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                              <div id="EndLopHPChoDangKy" />  </> : <div></div>
                          }
                        </div>


                        <div className="gr-table" id="box_monHocPhan_DaDangKy">
                          {
                            hpDaDangKy?.dsMonDaDangKiTrongHocKi.length > 0 ? <>
                              <h3
                                className="title-table"
                                lang="dangkyhocphan-lhpdadangkytabletitle"
                              >
                                Lớp học phần đã đăng ký trong học kỳ này
                              </h3>

                              <div className="table-responsive">
                                <table
                                  className="table-pointer table-custom table table-bordered text-center"
                                  width="100%"
                                  role="grid"
                                  id="dkHocPhan"
                                >
                                  <thead>
                                    <tr role="row">
                                      <th></th>
                                      <th></th>

                                      <th lang="dangkyhocphan-stt">STT</th>
                                      <th lang="dangkyhocphan-dadangkymalhp">
                                        Mã lớp học phần
                                      </th>
                                      <th lang="dangkyhocphan-tenmh">
                                        Tên môn học/học phần
                                      </th>
                                      <th lang="dangkyhocphan-dadangkylopdukien">
                                        Lớp học dự kiến
                                      </th>
                                      <th lang="dangkyhocphan-tc">TC</th>
                                      <th lang="dangkyhocphan-nhomth">Nhóm TH</th>
                                      <th lang="dangkyhocphan-hocphi">Học phí</th>
                                      <th lang="dangkyhocphan-hannop">Hạn nộp</th>
                                      <th lang="dangkyhocphan-thu">Thu</th>
                                      <th lang="dangkyhocphan-trangthaidangky">
                                        Trạng thái ĐK
                                      </th>
                                      <th lang="dangkyhocphan-ngaydangky">Ngày ĐK</th>
                                      <th lang="dangkyhocphan-trangthailhp">
                                        Trạng thái Lớp học phần{" "}
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {
                                      hpDaDangKy["dsMonDaDangKiTrongHocKi"].map((hpDaDk) =>
                                        hpDaDk.nhom_thuc_hanh_phu_trach !== null ?
                                          <><tr>
                                            <td>
                                              <button
                                                className="btn-sm btn-close"
                                                data-idlhpdk="7623002"
                                                data-guid="XtSz3Srj05-JLoWwpYueBA"
                                                lang="dangkyhocphan-xem-button"
                                                style={{}}
                                              >
                                                Xem
                                              </button>
                                            </td>

                                            <td>
                                              <button
                                                className="btn-sm btn-close"
                                                data-idlhpdk="7623002"
                                                data-guid="XtSz3Srj05-JLoWwpYueBA"
                                                lang="dangkyhocphan-huy-button"
                                              >
                                                Hủy
                                              </button>
                                            </td>

                                            <td>{sttHocPhanDaDangKy++}</td>
                                            <td>{hpDaDk.ma_hoc_phan}</td>
                                            <td className="text-left">
                                              {hpDaDk.ten_mon_hoc}
                                            </td>
                                            <td>{hpDaDk.ten_lop_hoc_phan}</td>
                                            <td>{hpDaDk.so_tin_chi_ly_thuyet}</td>
                                            <td>{hpDaDk.nhom_thuc_hanh_phu_trach}</td>
                                            <td className="text-right">
                                              <span>{hpDaDk.so_tien}</span>
                                            </td>
                                            <td>Chưa set</td>
                                            {/* <td>
                                          <div>
                                            <div className="check"></div>
                                          </div>
                                        </td> */}
                                            <td>
                                              {hpDaDk.trang_thai === 1 ?
                                                <div>
                                                  <div className="no-check">
                                                  </div>
                                                </div>
                                                :
                                                <div>
                                                  <div className="check"></div>
                                                </div>
                                              }
                                            </td>
                                            <td>{hpDaDk.trang_thai_dang_ki}</td>
                                            <td>Chưa set</td>
                                            <td>Chưa set</td>
                                          </tr></> : <div></div>
                                      )
                                    }
                                  </tbody>
                                </table>
                              </div>
                            </> : <div>

                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div >
  );
}