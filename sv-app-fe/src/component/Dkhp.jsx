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
import axios from "axios";
import axiosClient from "../api/axiosClient";
import dkhpAPI from "../api/dkhpAPI";

export default function Dkhp() {
  const [hocKiState, setHocKiState] = useState(null);

  useEffect(() => {
    const activeHocKi = async () => {
      try {
        const res = await dkhpAPI.getHocKi();

        setHocKiState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    activeHocKi();
  }, []);

  if (!hocKiState) return null;

  console.log(hocKiState);

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
                              >
                                <option value="">Chọn đợt đăng ký</option>
                                {hocKiState["dsHocKi"].map((hk) => (
                                  <option key={hk.id}>
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
                                  <tr
                                    data-id="3194"
                                    data-mamh="003194"
                                    data-mahpduochoc="4203003194"
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
                                            value="3194"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>1</td>
                                    <td>4203003194</td>
                                    <td className="text-left">Hội họa</td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3203"
                                    data-mamh="003203"
                                    data-mahpduochoc="4203003203"
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
                                            value="3203"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>2</td>
                                    <td>4203003203</td>
                                    <td className="text-left">
                                      Âm nhạc – Nhạc lý và Guitar căn bản
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3325"
                                    data-mamh="003325"
                                    data-mahpduochoc="4203003325"
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
                                            value="3325"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>3</td>
                                    <td>4203003325</td>
                                    <td className="text-left">
                                      Tâm lý học đại cương
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="10665"
                                    data-mamh="010665"
                                    data-mahpduochoc="4203010665"
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
                                            value="10665"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>4</td>
                                    <td>4203010665</td>
                                    <td className="text-left">
                                      Cơ sở văn hóa Việt Nam
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3193"
                                    data-mamh="003193"
                                    data-mahpduochoc="4203003193"
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
                                            value="3193"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>5</td>
                                    <td>4203003193</td>
                                    <td className="text-left">Toán ứng dụng</td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3320"
                                    data-mamh="003320"
                                    data-mahpduochoc="4203003320"
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
                                            value="3320"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>6</td>
                                    <td>4203003320</td>
                                    <td className="text-left">
                                      Phương pháp tính
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3395"
                                    data-mamh="003395"
                                    data-mahpduochoc="4203003395"
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
                                            value="3395"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>7</td>
                                    <td>4203003395</td>
                                    <td className="text-left">Logic học</td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="1076"
                                    data-mamh="001076"
                                    data-mahpduochoc="4203001076"
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
                                            value="1076"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>8</td>
                                    <td>4203001076</td>
                                    <td className="text-left">
                                      Tương tác người máy
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td>
                                      <div>
                                        <div className="tooltip tooltipstered">
                                          002137{" "}
                                          <span className="cl-red">(a)</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-id="3196"
                                    data-mamh="003196"
                                    data-mahpduochoc="4203003196"
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
                                            value="3196"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>9</td>
                                    <td>4203003196</td>
                                    <td className="text-left">
                                      Giao tiếp kinh doanh
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3197"
                                    data-mamh="003197"
                                    data-mahpduochoc="4203003197"
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
                                            value="3197"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>10</td>
                                    <td>4203003197</td>
                                    <td className="text-left">
                                      Kỹ năng xây dựng kế hoạch
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3206"
                                    data-mamh="003206"
                                    data-mahpduochoc="4203003206"
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
                                            value="3206"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>11</td>
                                    <td>4203003206</td>
                                    <td className="text-left">
                                      Môi trường và con người
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3436"
                                    data-mamh="003436"
                                    data-mahpduochoc="4203003436"
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
                                            value="3436"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>12</td>
                                    <td>4203003436</td>
                                    <td className="text-left">
                                      Thương mại điện tử
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="3442"
                                    data-mamh="003442"
                                    data-mahpduochoc="4203003442"
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
                                            value="3442"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>13</td>
                                    <td>4203003442</td>
                                    <td className="text-left">
                                      Lập trình GUI với Qt Framework
                                    </td>
                                    <td>4</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td>
                                      <div>
                                        <div className="tooltip tooltipstered">
                                          003848{" "}
                                          <span className="cl-red">(a)</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-id="868"
                                    data-mamh="000868"
                                    data-mahpduochoc="4203000868"
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
                                            value="868"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>14</td>
                                    <td>4203000868</td>
                                    <td className="text-left">
                                      Kỹ thuật điện tử
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr
                                    data-id="2031"
                                    data-mamh="002031"
                                    data-mahpduochoc="4203002031"
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
                                            value="2031"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>15</td>
                                    <td>4203002031</td>
                                    <td className="text-left">
                                      Lập trình phân tích dữ liệu 1
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td>
                                      <div>
                                        <div className="tooltip tooltipstered">
                                          000941{" "}
                                          <span className="cl-red">(a)</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-id="2349"
                                    data-mamh="002349"
                                    data-mahpduochoc="4203002349"
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
                                            value="2349"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>16</td>
                                    <td>4203002349</td>
                                    <td className="text-left">
                                      Lập trình phân tán với công nghệ .NET
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td>
                                      <div>
                                        <div className="tooltip tooltipstered">
                                          002044{" "}
                                          <span className="cl-red">(a)</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-id="2329"
                                    data-mamh="002329"
                                    data-mahpduochoc="4203002329"
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
                                            value="2329"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>17</td>
                                    <td>4203002329</td>
                                    <td className="text-left">
                                      Nhập môn dữ liệu lớn
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td>
                                      <div>
                                        <div className="tooltip tooltipstered">
                                          001146{" "}
                                          <span className="cl-red">(a)</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-id="2330"
                                    data-mamh="002330"
                                    data-mahpduochoc="4203002330"
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
                                            value="2330"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>18</td>
                                    <td>4203002330</td>
                                    <td className="text-left">
                                      Lập trình phân tích dữ liệu 2
                                    </td>
                                    <td>3</td>
                                    <td>
                                      <div>
                                        <div className="no-check"></div>
                                      </div>
                                    </td>
                                    <td>
                                      <div>
                                        <div className="tooltip tooltipstered">
                                          001146,003451{" "}
                                          <span className="cl-red">(a)</span>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-id="2027"
                                    data-mamh="002027"
                                    data-mahpduochoc="4203002027"
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
                                            value="2027"
                                          />
                                          <span></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td>19</td>
                                    <td>4203002027</td>
                                    <td className="text-left">
                                      Chứng chỉ TOEIC 450
                                    </td>
                                    <td>0</td>
                                    <td>
                                      <div>
                                        <div className="check"></div>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <br />
                            <br />
                          </div>
                        </div>
                      </div>

                      <div className="row" id="lopHPChoDangKy">
                        <div className="col-md-6">
                          <div className="gr-table">
                            <div
                              className="border-scroll"
                              style={{
                                maxHeight: "370px",
                                overflow: "hidden",
                                outline: "none",
                              }}
                              tabIndex="1"
                            >
                              <div id="box_lophocphan_chodangky"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="gr-table">
                            <div
                              className="border-scroll"
                              tabIndex="2"
                              style={{ overflow: "hidden", outline: "none" }}
                            >
                              <div id="box_chitietlophocphan_chodangky"></div>
                            </div>
                          </div>
                        </div>
                        <div id="EndLopHPChoDangKy"></div>
                      </div>

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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
