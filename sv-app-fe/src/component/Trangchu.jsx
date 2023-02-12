import { useContext, React, useState, useEffect } from "react";
import '../assets/css/trangchu.css'
import Sidenavbar from "./Sidenavbar";
import lichTheoTuan from '../assets/img/trangchu_img/lichTheoTuan.png'
import ketQuaHocTap from '../assets/img/trangchu_img/ketQuaHocTap.png'
import lichTheoTienDo from '../assets/img/trangchu_img/lichTheoTienDo.png'
import dangKyHocPhan from '../assets/img/trangchu_img/dangKyHocPhan.png'
import nhacNho from '../assets/img/trangchu_img/nhacNho.png'
import phieuThuTongHop from '../assets/img/trangchu_img/phieuThuTongHop.png'
import thanhToanTrucTuyen from '../assets/img/trangchu_img/thanhToanTrucTuyen.png'
import traCuuCongNo from '../assets/img/trangchu_img/traCuuCongNo.png'
import axios from "axios";

export const TrangChu = () => {
    // const _ma = localStorage.getItem("user");
    // console.log(_ma);

    return (
        // <div className="trangchu-demo">
        //     <Sidenavbar />
        //     <div className="main-content">
        //         <a href="../dkhp">
        //             Đăng ký học phần
        //         </a>
        //     </div>
        // </div>
        <div className="wrapper">
            <Sidenavbar />
            <input id="WarningKSMode" name="WarningKSMode" type="hidden" defaultValue={0} />
            <div className="main-content main-dashboard">
                <input id="phao-hoa-danh-hieu-sinh-vien" name="phao-hoa-danh-hieu-sinh-vien" type="hidden" defaultValue={0} />
                <div className="container">
                    <div className="main-section-content" id="contnet">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="box-df profile-ds-info">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold" lang="db-thongtinsinhvien">Thông tin sinh viên</span>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="profile-userpic">
                                                    </div>
                                                    <div className="text-center">
                                                        <a href="/thong-tin-sinh-vien.html" className="color-active" lang="db-chitiet-button">Xem chi tiết</a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <form className="form-horizontal">
                                                        <div className="form-body">
                                                            <div className="form-group" style={{}}>
                                                                <label className="col-xs-6"><span lang="sv-mssv">MSSV</span>: <span className="bold">19507391</span></label>
                                                                <label className="col-xs-6"><span lang="sv-lophoc">Lớp học</span>: <span className="bold">DHKTPM15A</span></label>
                                                            </div>
                                                            <div className="form-group" style={{}}>
                                                                <label className="col-xs-6"><span lang="sv-hoten">Họ tên</span>: <span className="bold">Phạm Nguyễn Văn Trường</span></label>
                                                                <label className="col-xs-6"><span lang="sv-khoahoc">Khóa học</span>: <span className="bold">2019 - 2020</span></label>
                                                            </div>
                                                            <div className="form-group" style={{}}>
                                                                <label className="col-xs-6"><span lang="sv-gioitinh">Giới tính</span>: <span className="bold">Nam</span></label>
                                                                <label className="col-xs-6"><span lang="sv-hedaotao">Bậc đào tạo</span>: <span className="bold">Đại học</span></label>
                                                            </div>
                                                            <div className="form-group" style={{}}>
                                                                <label className="col-xs-6">
                                                                    <span lang="sv-ngaysinh">Ngày sinh</span>: <span className="bold">15/10/2001</span>
                                                                </label>
                                                                <label className="col-xs-6"><span lang="sv-loaihinhdt">Loại hình đào tạo</span>: <span className="bold">Chính quy</span></label>
                                                            </div>
                                                            <div className="form-group" style={{}}>
                                                                <label className="col-xs-6"><span lang="sv-noisinh">Nơi sinh</span>: <span className="bold">Thành phố Hồ Chí Minh</span></label>
                                                                <label className="col-xs-6"><span lang="sv-nganh">Ngành</span>: <span className="bold">Kỹ thuật phần mềm </span></label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="portlet">
                                    <div className="portlet-body">
                                        <div className="box-menu row">
                                            <div className="col-xs-12">
                                                <div className="item-box-menu box-df">
                                                    <h3 className="name" lang="db-nhacnho">Nhắc nhở mới, chưa xem</h3>
                                                    <div className="desc clearfix">
                                                        <div className="number" style={{ width: '110px !important' }}>0</div>
                                                        <div className="text-runing" style={{ width: '100%', height: '51px' }}>
                                                        </div>
                                                        <div className="icon-menu text-right">
                                                            <i className="icon fa fa-bell-o" aria-hidden="true" />
                                                        </div>
                                                    </div>
                                                    <div className="text-left">
                                                        <a href="/ghi-chu-nhac-nho-sinh-vien.html" className="color-active" lang="db-chitiet-button">Xem chi tiết</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                <a href="/lich-theo-tuan.html?pLoaiLich=1" className="color-active" title>
                                                    <div className="item-box-menu box-df">
                                                        <h3 className="name" lang="db-lichhoctuan">Lịch học trong tuần</h3>
                                                        <div className="desc clearfix">
                                                            <div className="number">0</div>
                                                            <div className="icon-menu text-right">
                                                                <i className="icon fa fa-calendar" aria-hidden="true" />
                                                            </div>
                                                        </div>
                                                        <div className="text-left" lang="db-chitiet-button">
                                                            Xem chi tiết
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-xs-6">
                                                <a href="/lich-theo-tuan.html?pLoaiLich=2" className="color-active" title>
                                                    <div className="item-box-menu box-df">
                                                        <h3 className="name" lang="db-lichthituan">Lịch thi trong tuần</h3>
                                                        <div className="desc clearfix">
                                                            <div className="number">0</div>
                                                            <div className="icon-menu text-right">
                                                                <i className="icon fa fa-calendar-check-o" aria-hidden="true" />
                                                            </div>
                                                        </div>
                                                        <div className="text-left" lang="db-chitiet-button">
                                                            Xem chi tiết
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured">
                            <div className="featured-item">
                                <a href="/lich-theo-tuan.html" title="Lịch theo tuần" langid="menusinhvien-8-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={lichTheoTuan} alt="" />
                                        </div>
                                        <span lang="menusinhvien-8-vt">Lịch theo tuần</span>
                                    </div>
                                </a>
                            </div>
                            <div className="featured-item">
                                <a href="/ket-qua-hoc-tap.html" title="Kết quả học tập" langid="menusinhvien-7-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={ketQuaHocTap} alt="" />
                                        </div>
                                        <span lang="menusinhvien-7-vt">Kết quả học tập</span>
                                    </div>
                                </a>
                            </div>
                            <div className="featured-item">
                                <a href="/dkhp" title="Đăng ký học phần" langid="menusinhvien-15-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={dangKyHocPhan} alt="" />
                                        </div>
                                        <span lang="menusinhvien-15-vt">Đăng ký học phần</span>
                                    </div>
                                </a>
                            </div>
                            <div className="featured-item">
                                <a href="/cong-no-sinh-vien.html" title="Tra cứu công nợ" langid="menusinhvien-20-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={traCuuCongNo} alt="" />
                                        </div>
                                        <span lang="menusinhvien-20-vt">Tra cứu công nợ</span>
                                    </div>
                                </a>
                            </div>
                            <div className="featured-item">
                                <a href="/thanh-toan-truc-tuyen.html" title="Thanh toán trực tuyến" langid="menusinhvien-21-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={thanhToanTrucTuyen} alt="" />
                                        </div>
                                        <span lang="menusinhvien-21-vt">Thanh toán trực tuyến</span>
                                    </div>
                                </a>
                            </div>
                            <div className="featured-item">
                                <a href="/phieu-thu-tong-hop.html" title="Phiếu thu tổng hợp" langid="menusinhvien-23-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={phieuThuTongHop} alt="" />
                                        </div>
                                        <span lang="menusinhvien-23-vt">Phiếu thu tổng hợp</span>
                                    </div>
                                </a>
                            </div>
                            <div className="featured-item">
                                <a href="/lich-theo-tien-do.html" title="Lịch theo tiến độ" langid="menusinhvien-9-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={lichTheoTienDo} alt="" />
                                        </div>
                                        <span lang="menusinhvien-9-vt">Lịch theo tiến độ</span>
                                    </div>
                                </a>
                            </div>
                            <div className="featured-item">
                                <a href="/ghi-chu-nhac-nho-sinh-vien.html" title="Ghi chú nhắc nhở" langid="menusinhvien-6-title">
                                    <div className="box-df">
                                        <div className="icon">
                                            <img src={nhacNho} alt="" />
                                        </div>
                                        <span lang="menusinhvien-6-vt">Nhắc nhở</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <div className="row chart-custom">
                            <div className="col-md-5">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold"><a href="/ket-qua-hoc-tap.html" lang="db-kqht">Kết quả học tập</a></span>
                                            </div>
                                            <div className="actions">
                                                <select className="form-control" id="cboIDDotThongKeKQHT" langid="db-hocky-combobox" name="cboIDDotThongKeKQHT" placeholder="Chọn học kỳ"><option value>Chọn học kỳ</option>
                                                    <option value={45}>HK3 (2022-2023)</option>
                                                    <option selected="selected" value={44}>HK2 (2022-2023)</option>
                                                    <option value={43}>HK1 (2022-2023)</option>
                                                    <option value={42}>HK3 (2021-2022)</option>
                                                    <option value={41}>HK2 (2021-2022)</option>
                                                    <option value={40}>HK1 (2021-2022)</option>
                                                    <option value={39}>HK3 (2020-2021)</option>
                                                    <option value={38}>HK2 (2020-2021)</option>
                                                    <option value={37}>HK1 (2020-2021)</option>
                                                    <option value={36}>HK3 (2019-2020)</option>
                                                    <option value={35}>HK2 (2019-2020)</option>
                                                    <option value={34}>HK1 (2019-2020)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div id="box-dashboard-thongke-ketquahoctap-theodot">
                                                <div className="text-center">
                                                    <img src="/Content/ThemeMXH/img/tkkqht.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold" lang="db-tiendohoctap">Tiến độ học tập</span>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div>
                                                <div id="chartThongTinTinChiDaHoc" data-highcharts-chart={0} style={{ overflow: 'hidden' }}><div id="highcharts-sagqzz5-0" dir="ltr" className="highcharts-container " style={{ position: 'relative', overflow: 'hidden', width: '700px', height: '270px', textAlign: 'left', lineHeight: 'normal', zIndex: 0, WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', userSelect: 'none', touchAction: 'manipulation', outline: 'none' }}><svg version="1.1" className="highcharts-root" style={{ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '12px' }} xmlns="http://www.w3.org/2000/svg" width={700} height={270} viewBox="0 0 700 270" role="img" aria-label><desc>Created with Highcharts 10.3.3</desc><defs><clipPath id="highcharts-sagqzz5-3-"><rect x={0} y={0} width={680} height={245} fill="none" /></clipPath><clipPath id="highcharts-sagqzz5-4-"><rect x={0} y={0} width={680} height="654.2366701100744" fill="none" /></clipPath></defs><rect fill="#ffffff" className="highcharts-background" x={0} y={0} width={700} height={270} rx={0} ry={0} /><rect fill="none" className="highcharts-plot-background" x={10} y={10} width={680} height={245} /><g className="highcharts-pane-group" data-z-index={0}><path fill="rgba(124,181,236,0.3)" d="M 350 15.879999999999995 A 116.62 116.62 0 1 1 349.88338001943663 15.880058309995135 M 349.9083700152716 40.87004581499619 A 91.63 91.63 0 1 0 350 40.870000000000005" className="highcharts-pane " stroke="#cccccc" strokeWidth={0} /><path fill="rgba(144,237,125,0.3)" d="M 350 41.911249999999995 A 90.58875 90.58875 0 1 1 349.9094112650981 41.911295294371214 M 349.9344012609331 66.90128279937227 A 65.59875 65.59875 0 1 0 350 66.90125" className="highcharts-pane " stroke="#cccccc" strokeWidth={0} /></g><g className="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid" data-z-index={1} /><rect fill="none" className="highcharts-plot-border" data-z-index={1} stroke="#cccccc" strokeWidth={0} x={10} y={10} width={680} height={245} /><g className="highcharts-axis highcharts-yaxis highcharts-radial-axis" data-z-index={2}><path fill="none" className="highcharts-axis-line" stroke="#ccd6eb" strokeWidth={0} data-z-index={7} d="M 350 28.375 A 104.125 104.125 0 1 1 349.8958750173541 28.375052062495655 M 350 132.5 A 0 0 0 1 0 350 132.5" /></g><g className="highcharts-series-group" data-z-index={3}><g className="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="url(#highcharts-sagqzz5-3-)"><path fill="#7cb5ec" d="M 340 5.8799999999999955 A 116.62 116.62 0 1 1 339.88338001943663 5.880058309995135 M 339.9083700152716 30.87004581499619 A 91.63 91.63 0 1 0 340 30.870000000000005" sweep-flag={0} strokeLinecap="round" strokeLinejoin="round" stroke="none" strokeWidth={0} className="highcharts-point highcharts-color-0" /></g><g className="highcharts-markers highcharts-series-0 highcharts-solidgauge-series" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="none" /><g className="highcharts-series highcharts-series-1 highcharts-solidgauge-series highcharts-tracker" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="url(#highcharts-sagqzz5-3-)"><path fill="#90ed7d" d="M 340 31.911249999999995 A 90.58875 90.58875 0 1 1 301.34723834865196 40.571460141861564 A 12.495000000000005 12.495000000000005 0 1 1 312.0100691490238 63.17243665445149 A 65.59875 65.59875 0 1 0 340 56.901250000000005 A 12.495000000000005 12.495000000000005 0 1 1 340 31.911249999999995" sweep-flag={0} strokeLinecap="round" strokeLinejoin="round" stroke="none" strokeWidth={0} className="highcharts-point highcharts-color-0" /></g><g className="highcharts-markers highcharts-series-1 highcharts-solidgauge-series" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="none" /></g><text x={350} textAnchor="middle" className="highcharts-title" data-z-index={4} style={{ color: 'rgb(51, 51, 51)', fontSize: '18px', fill: 'rgb(51, 51, 51)' }} y={24} /><text x={350} textAnchor="middle" className="highcharts-subtitle" data-z-index={4} style={{ color: 'rgb(102, 102, 102)', fill: 'rgb(102, 102, 102)' }} y={24} /><text x={10} textAnchor="start" className="highcharts-caption" data-z-index={4} style={{ color: 'rgb(102, 102, 102)', fill: 'rgb(102, 102, 102)' }} y={267} /><g className="highcharts-legend highcharts-no-tooltip" data-z-index={7} visibility="hidden"><rect fill="none" className="highcharts-legend-box" rx={0} ry={0} stroke="#999999" strokeWidth={0} x={0} y={0} width={8} height={8} /><g data-z-index={1}><g /></g></g><g className="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels" data-z-index={7} /><text x={690} className="highcharts-credits" textAnchor="end" data-z-index={8} y={265} style={{ cursor: 'pointer', color: 'rgb(153, 153, 153)', fontSize: '9px', fill: 'rgb(153, 153, 153)' }}>Highcharts.com</text></svg></div></div>
                                                <p style={{ color: '#003f65', fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}> 136/146</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold" lang="db-lhp">Lớp học phần</span>
                                            </div>
                                            <div className="actions">
                                                <select className="form-control" id="cboIDDotForLHP" langid="db-hocky-combobox_1" name="cboIDDotForLHP" placeholder="Chọn học kỳ"><option value>Chọn học kỳ</option>
                                                    <option value={45}>HK3 (2022-2023)</option>
                                                    <option selected="selected" value={44}>HK2 (2022-2023)</option>
                                                    <option value={43}>HK1 (2022-2023)</option>
                                                    <option value={42}>HK3 (2021-2022)</option>
                                                    <option value={41}>HK2 (2021-2022)</option>
                                                    <option value={40}>HK1 (2021-2022)</option>
                                                    <option value={39}>HK3 (2020-2021)</option>
                                                    <option value={38}>HK2 (2020-2021)</option>
                                                    <option value={37}>HK1 (2020-2021)</option>
                                                    <option value={36}>HK3 (2019-2020)</option>
                                                    <option value={35}>HK2 (2019-2020)</option>
                                                    <option value={34}>HK1 (2019-2020)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div id="box-dashboard-lophocphan-theodot">
                                                <div className="panel panel-admin">
                                                    <div className="panel-heading clearfix">
                                                        <span>Môn học/học phần</span>
                                                        <span className="text-center">Số tín chỉ</span>
                                                    </div>
                                                    <div className="panel-scroll border-scroll" tabIndex={0} style={{ overflow: 'hidden', outline: 'none' }}>
                                                        <table className="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="80%">
                                                                        <div>
                                                                            <a href="#" className="color-active" data-bg={513935}>
                                                                                420300279001
                                                                            </a>
                                                                        </div>
                                                                        <div className="name">Khóa luận tốt nghiệp</div>
                                                                    </td>
                                                                    <td width="20%">
                                                                        <div className="text-center">5</div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="80%">
                                                                        <div>
                                                                            <a href="#" className="color-active" data-bg={513936}>
                                                                                420300309801
                                                                            </a>
                                                                        </div>
                                                                        <div className="name">Thực tập doanh nghiệp</div>
                                                                    </td>
                                                                    <td width="20%">
                                                                        <div className="text-center">5</div>
                                                                    </td>
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
                        </div> */}

                        <div className="row">
                            <div className="col-md-12">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold" lang="db-lhp">Lớp học phần</span>
                                            </div>
                                            <div className="actions">
                                                <select className="form-control" id="cboIDDotForLHP" langid="db-hocky-combobox_1" name="cboIDDotForLHP" placeholder="Chọn học kỳ"><option value>Chọn học kỳ</option>
                                                    <option value={45}>HK3 (2022-2023)</option>
                                                    <option selected="selected" value={44}>HK2 (2022-2023)</option>
                                                    <option value={43}>HK1 (2022-2023)</option>
                                                    <option value={42}>HK3 (2021-2022)</option>
                                                    <option value={41}>HK2 (2021-2022)</option>
                                                    <option value={40}>HK1 (2021-2022)</option>
                                                    <option value={39}>HK3 (2020-2021)</option>
                                                    <option value={38}>HK2 (2020-2021)</option>
                                                    <option value={37}>HK1 (2020-2021)</option>
                                                    <option value={36}>HK3 (2019-2020)</option>
                                                    <option value={35}>HK2 (2019-2020)</option>
                                                    <option value={34}>HK1 (2019-2020)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <div id="box-dashboard-lophocphan-theodot">
                                                <div className="panel panel-admin">
                                                    <div className="panel-heading clearfix">
                                                        <span>Môn học/học phần</span>
                                                        <span className="text-center">Số tín chỉ</span>
                                                    </div>
                                                    <div className="panel-scroll border-scroll" tabIndex={0} style={{ overflow: 'hidden', outline: 'none' }}>
                                                        <table className="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="80%">
                                                                        <div>
                                                                            <a href="#" className="color-active" data-bg={513935}>
                                                                                420300279001
                                                                            </a>
                                                                        </div>
                                                                        <div className="name">Khóa luận tốt nghiệp</div>
                                                                    </td>
                                                                    <td width="20%">
                                                                        <div className="text-center">5</div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="80%">
                                                                        <div>
                                                                            <a href="#" className="color-active" data-bg={513936}>
                                                                                420300309801
                                                                            </a>
                                                                        </div>
                                                                        <div className="name">Thực tập doanh nghiệp</div>
                                                                    </td>
                                                                    <td width="20%">
                                                                        <div className="text-center">5</div>
                                                                    </td>
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
        </div>

    )
}