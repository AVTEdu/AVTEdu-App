import { useContext, React, useState, useEffect } from "react";
import "../assets/css/main.css";
import "../assets/css/tooltipster.bundle.css";
import "../assets/css/style.css";
import "../assets/css/base.css";
import "../assets/css/responsive.css";
// import '../assets/css/chat.css'
// import '../assets/css/switch.css'
import "../assets/css/jquery-confirm.min.css";
import "../assets/css/components.min.css";
import "../assets/css/profile.min.css";
import "../assets/css/toastr.min.css";
import Sidenavbar from "./Sidenavbar";
import dkhpAPI from "../api/dkhpAPI";
import axiosClient from "../api/axiosClient";

export default function Dkhp() {
  const [hocKiState, setHocKiState] = useState(null);
  const [monChuaDangKy, setMonChuaDangKy] = useState(null);
  const [itemNamHocBatDau, setItemNamHocBatDau] = useState();
  const [maHocPhan, setMaHocPhan] = useState();
  const [dsToanBoLopHocPhan, setDsToanBoLopHocPhan] = useState();
  const [maLopHocPhan, setMaLopHocPhan] = useState('');
  const [chiTietLopHP, setChiTietLopHP] = useState();
  const [hpDaDangKy, setHpDaDangKy] = useState();
  let sttMonChuaDK = 1;
  let sttLHPChoDK = 1;
  const namHienTai = new Date().getFullYear();

  useEffect(() => {
    const activeHocKi = async () => {
      try {
        const res = await dkhpAPI.getHocKi();

        setHocKiState(res.data);
        console.log('hoc ki thay doi');
      } catch (error) {
        console.log(error.message);
      }
    };
    activeHocKi();
  }, []);


  useEffect(() => {
    const activeLopHocPhanByHocPhan = async () => {
      try {
        const res = await dkhpAPI.getLopHocPhanByHocPhan(maHocPhan);
        console.log(res.data);
        //console.log(maHocPhan);
        setDsToanBoLopHocPhan(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    activeLopHocPhanByHocPhan();
  }, [maHocPhan])

  useEffect(() => {
    console.log(maLopHocPhan);
    const activeChiTietLopHocPhan = async () => {
      try {
        const res = await dkhpAPI.getChiTietLopHocPhan(maLopHocPhan);
        console.log(res.data);
        setChiTietLopHP(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    activeChiTietLopHocPhan();
  }, [maLopHocPhan])

  if (!hocKiState) return null;


  async function activeMonChuaDK(e) {
    try {
      const res = await dkhpAPI.getToanBoMonHocChuaDangKy();
      console.log(res.data);
      setMonChuaDangKy(res.data);
      //setItemNamHocBatDau(e.target.value)
      var selectElementDotDangKy = document.querySelector('#cboIDDotDangKy').value;
      selectElementDotDangKy === '' ? setItemNamHocBatDau('') :
        setItemNamHocBatDau(selectElementDotDangKy);
      if (selectElementDotDangKy === '') {
        setDsToanBoLopHocPhan('');
        setChiTietLopHP('');
        setHpDaDangKy('');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function selectLopHocPhan(id, e) {
    setMaLopHocPhan(id);
  }





  return (
    <div className="wrapper">
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
                                // onChange={activeMonChuaDK}
                                onChange={activeMonChuaDK}

                              >
                                <option value="">Chọn đợt đăng ký</option>
                                {hocKiState["dsHocKi"].map((hk) => (
                                  <option key={hk.id} value={hk.nam_hoc_bat_dau} >
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
                          dsToanBoLopHocPhan ?
                            <div className="col-md-6">
                              <div className="gr-table">
                                <div className="border-scroll" style={{ maxHeight: '370px', overflow: 'hidden', outline: 'none' }} tabIndex={1}>
                                  <div id="box_lophocphan_chodangky">
                                    <h3 className="title-table" lang="lhpchodangky-tabletitle">Lớp học phần chờ đăng ký</h3>
                                    <div className="text-right" style={{ marginBottom: '10px', marginTop: '18px' }}>
                                      <label><input id="checkLichTrung" name="checkLichTrung" type="checkbox" defaultValue="true" /><input name="checkLichTrung" type="hidden" defaultValue="false" /><b><span className="text-uppercase" style={{ color: 'red', marginLeft: '5px !important', marginRight: '10px !important' }} lang="lhpchodangky-lhpkhongtrunglich">HIỂN THỊ LỚP học phần KHÔNG TRÙNG LỊCH</span></b></label>
                                    </div>
                                    <div className="table-responsive">
                                      <table id="table_lhpchodangky" className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                        <thead>
                                          <tr role="row">
                                            <th lang="sv-stt">STT</th>
                                            <th lang="dkhp-thongtinlhp">Thông tin lớp học phần</th>
                                            <th lang="dkhp-dadangky">Đã đăng ký</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {
                                            dsToanBoLopHocPhan["results"].map((dsLhp) =>
                                              <tr id={"maLHP" + dsLhp.ma_lop_hoc_phan}
                                                onClick={(e) => selectLopHocPhan(dsLhp.ma_lop_hoc_phan, e)}
                                              >
                                                <td style={{ width: '40px' }}>{sttLHPChoDK++}</td>
                                                <td className="text-left">
                                                  <div className="name">{dsLhp.ten_mon_hoc}</div>
                                                  <div>
                                                    <span lang="dkhp-trangthai">Trạng thái</span>: <span className="cl-red">
                                                      {dsLhp.trang_thai === 1 ? 'Có thể đăng ký' : 'Đã khóa'}</span><br />
                                                    <span lang="dkhp-malhp">Mã lớp  học phần</span>: {dsLhp.ma_lop_hoc_phan}
                                                  </div>
                                                </td>
                                                <td>
                                                  {dsLhp.so_luong_dang_ki_hien_tai} / {dsLhp.so_luong_dang_ki_toi_da}
                                                </td>
                                              </tr>)
                                          }
                                        </tbody>
                                      </table>
                                    </div>
                                    <br />
                                    <br />
                                  </div>
                                </div>
                              </div>
                            </div> : <div></div>}
                        {
                          chiTietLopHP ? <> <div className="col-md-6">
                            <div className="gr-table">
                              <div className="border-scroll" tabIndex={2} style={{ overflow: 'hidden', outline: 'none' }}>
                                <div id="box_chitietlophocphan_chodangky">
                                  <style dangerouslySetInnerHTML={{ __html: "\n    #tbChiTietDKHP .tr-active-nhom {\n        background-color: #ffee4a;\n        color: #003f65 !important;\n    }\n    /*#tbChiTietDKHP  .tr-active {\n        background-color: #ffeb3b52 !important;\n    }*/\n" }} />
                                  <h3 className="title-table" lang="ctlhpchodangky-tabletitle">Chi tiết lớp học phần</h3>
                                  <div className="text-right" style={{ marginBottom: '5px' }}>
                                    <button onclick="XemLichTrung(this)" className="btn btn--m block first" style={{ backgroundColor: '#ec9e0f', color: '#fff' }} lang="dkhp-xemlichtrungButton">Xem lịch trùng</button>
                                  </div>
                                  <table id="tbChiTietDKHP" className="table-pointer table-dkhp table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                    <thead>
                                      <tr role="row">
                                        <th>
                                          <p><span lang="dkhp-trangthai">Trạng thái</span>: <span style={{ color: 'red', fontWeight: 'bold' }}>Đã khóa</span></p>
                                        </th>
                                        <th lang="dkhp-nhom">Nhóm</th>
                                        <th>
                                          <div>
                                            <span><span lang="dkhp-sisomax">Sĩ số tối đa</span>: 160</span>
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="tr-active tr-chitietlichdangky" onclick="SelectChiTietLopHocPhan(this)" data-guididdk="H4lGTjINM6SMvnKB0CjIHQ" data-nhomth data-chonnhom="true">
                                        <td className="text-left">
                                          <div><span lang="dkhp-lichhoc">Lịch học</span>: <b>LT   - Chủ Nhật   (Tiết 1  -&gt; 3 )</b></div>
                                          <p><span lang="dkhp-coso">Cơ sở</span>: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></p>
                                          <p><span lang="dkhp-daynha">Dãy nhà</span>: <b>A (CS1)</b></p>
                                          <p><span lang="dkhp-phong">Phòng</span>: <b>A2.01</b></p>
                                        </td>
                                        <td />
                                        <td className="text-left">
                                          <div className="name"><span lang="dkhp-gv">GV</span>: TS Lê Trọng Ngọc</div>
                                          11/09/2022 - 11/09/2022
                                        </td>
                                      </tr>
                                      <tr className="tr-active tr-chitietlichdangky" onclick="SelectChiTietLopHocPhan(this)" data-guididdk="H4lGTjINM6SMvnKB0CjIHQ" data-nhomth data-chonnhom="true">
                                        <td className="text-left">
                                          <div><span lang="dkhp-lichhoc">Lịch học</span>: <b>LT   - Chủ Nhật   (Tiết 1  -&gt; 3 )</b></div>
                                          <p><span lang="dkhp-coso">Cơ sở</span>: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></p>
                                          <p><span lang="dkhp-daynha">Dãy nhà</span>: <b>Trực tuyến</b></p>
                                          <p><span lang="dkhp-phong">Phòng</span>: <b>Trực tuyến 174</b></p>
                                        </td>
                                        <td />
                                        <td className="text-left">
                                          <div className="name"><span lang="dkhp-gv">GV</span>: TS Lê Trọng Ngọc</div>
                                          18/09/2022 - 27/11/2022
                                        </td>
                                      </tr>
                                      <tr className="tr-active-nhom tr-chitietlichdangky" onclick="SelectChiTietLopHocPhan(this)" data-guididdk="H4lGTjINM6SMvnKB0CjIHQ" data-nhomth={1} data-chonnhom="true">
                                        <td className="text-left">
                                          <div><span lang="dkhp-lichhoc">Lịch học</span>: <b>TH   - Thứ 7  (Tiết 1  -&gt; 3 )</b></div>
                                          <p><span lang="dkhp-coso">Cơ sở</span>: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></p>
                                          <p><span lang="dkhp-daynha">Dãy nhà</span>: <b>H (CS1)</b></p>
                                          <p><span lang="dkhp-phong">Phòng</span>: <b>H4.2.1</b></p>
                                        </td>
                                        <td>1</td>
                                        <td className="text-left">
                                          <div className="name"><span lang="dkhp-gv">GV</span>: TS Lê Trọng Ngọc</div>
                                          10/09/2022 - 19/11/2022
                                          <p><span lang="siso-nhom">Sĩ số</span>: 19/30</p>
                                        </td>
                                      </tr>
                                      <tr className=" tr-chitietlichdangky" onclick="SelectChiTietLopHocPhan(this)" data-guididdk="H4lGTjINM6SMvnKB0CjIHQ" data-nhomth={2} data-chonnhom="true">
                                        <td className="text-left">
                                          <div><span lang="dkhp-lichhoc">Lịch học</span>: <b>TH   - Thứ 7  (Tiết 4  -&gt; 6 )</b></div>
                                          <p><span lang="dkhp-coso">Cơ sở</span>: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></p>
                                          <p><span lang="dkhp-daynha">Dãy nhà</span>: <b>H (CS1)</b></p>
                                          <p><span lang="dkhp-phong">Phòng</span>: <b>H4.2.1</b></p>
                                        </td>
                                        <td>2</td>
                                        <td className="text-left">
                                          <div className="name"><span lang="dkhp-gv">GV</span>: TS Lê Trọng Ngọc</div>
                                          10/09/2022 - 19/11/2022
                                          <p><span lang="siso-nhom">Sĩ số</span>: 32/32</p>
                                        </td>
                                      </tr>
                                      <tr className=" tr-chitietlichdangky" onclick="SelectChiTietLopHocPhan(this)" data-guididdk="H4lGTjINM6SMvnKB0CjIHQ" data-nhomth={3} data-chonnhom="true">
                                        <td className="text-left">
                                          <div><span lang="dkhp-lichhoc">Lịch học</span>: <b>TH   - Thứ 7  (Tiết 7  -&gt; 9 )</b></div>
                                          <p><span lang="dkhp-coso">Cơ sở</span>: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></p>
                                          <p><span lang="dkhp-daynha">Dãy nhà</span>: <b>H (CS1)</b></p>
                                          <p><span lang="dkhp-phong">Phòng</span>: <b>H4.1</b></p>
                                        </td>
                                        <td>3</td>
                                        <td className="text-left">
                                          <div className="name"><span lang="dkhp-gv">GV</span>: TS Lê Trọng Ngọc</div>
                                          10/09/2022 - 19/11/2022
                                          <p><span lang="siso-nhom">Sĩ số</span>: 28/30</p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="text-center has-2btn">
                                    <div>
                                      <p className="bold" lang="ctlhpchodangky-lhpcochianhom">Lớp học phần có chia nhóm thực hành, vui lòng chọn lịch có nhóm.</p>
                                    </div>
                                    <br />
                                    <button onclick="DangKyHocPhan(this)" className="btn btn--m block first" style={{ width: '100px' }} lang="dkhp-dangkyButton">Đăng ký</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                            <div id="EndLopHPChoDangKy" />  </> : <div></div>
                        }
                      </div>

                      {
                        hpDaDangKy ? <>
                          <div className="gr-table" id="box_monHocPhan_DaDangKy">
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
                                  <tr>
                                    <td
                                      colSpan="6"
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    >
                                      Tổng
                                    </td>

                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    >
                                      10
                                    </td>
                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    ></td>
                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    ></td>
                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    ></td>
                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    ></td>
                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    ></td>
                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    ></td>
                                    <td
                                      className="text-center bold"
                                      style={{ fontSize: "16px" }}
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <button
                                        className="btn btn-sm btn-close"
                                        data-idlhpdk="7623002"
                                        data-guid="XtSz3Srj05-JLoWwpYueBA"
                                        lang="dangkyhocphan-xem-button"
                                      >
                                        Xem
                                      </button>
                                    </td>

                                    <td>
                                      <button
                                        className="btn btn-sm btn-close"
                                        data-idlhpdk="7623002"
                                        data-guid="XtSz3Srj05-JLoWwpYueBA"
                                        lang="dangkyhocphan-huy-button"
                                      >
                                        Hủy
                                      </button>
                                    </td>

                                    <td>1</td>
                                    <td>420300279001</td>
                                    <td className="text-left">
                                      Khóa luận tốt nghiệp
                                    </td>
                                    <td>DHCNTT15A</td>
                                    <td>5</td>
                                    <td></td>
                                    <td className="text-right">
                                      <span>3.150.000</span>
                                    </td>
                                    <td>15/12/2022</td>
                                    <td>
                                      <div>
                                        <div className="check"></div>
                                      </div>
                                    </td>
                                    <td>Đăng ký mới</td>
                                    <td>09/11/2022</td>
                                    <td>Đã khóa</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <button
                                        className="btn btn-sm btn-close"
                                        data-idlhpdk="7623026"
                                        data-guid="P4T_Up88QM_aUgR1Q1niUQ"
                                        lang="dangkyhocphan-xem-button"
                                      >
                                        Xem
                                      </button>
                                    </td>

                                    <td>
                                      <button
                                        className="btn btn-sm btn-close"
                                        data-idlhpdk="7623026"
                                        data-guid="P4T_Up88QM_aUgR1Q1niUQ"
                                        lang="dangkyhocphan-huy-button"
                                      >
                                        Hủy
                                      </button>
                                    </td>

                                    <td>2</td>
                                    <td>420300309801</td>
                                    <td className="text-left">
                                      Thực tập doanh nghiệp
                                    </td>
                                    <td>DHCNTT15A</td>
                                    <td>5</td>
                                    <td></td>
                                    <td className="text-right">
                                      <span>3.150.000</span>
                                    </td>
                                    <td>15/12/2022</td>
                                    <td>
                                      <div>
                                        <div className="check"></div>
                                      </div>
                                    </td>
                                    <td>Đăng ký mới</td>
                                    <td>09/11/2022</td>
                                    <td>Đã khóa</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </> : <div></div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
