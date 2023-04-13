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
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import dkhpAPI from "../api/dkhpAPI";
import Avatar_1 from "../assets/img/fakeAvatar/avatar_1.jpg";
import Avatar_2 from "../assets/img/fakeAvatar/avatar_2.jpg";

export const TrangChu = () => {
    // const _ma = localStorage.getItem("user");
    // console.log(_ma);
    var sendDate = (new Date()).getTime();
    const [loading, setLoading] = useState(false);
    const [resTime, setResTime] = useState(0);
    const [inforSV, setInforSV] = useState('');

    var textArrayImg = [
        Avatar_1,
        Avatar_2
    ];
    var randomAva = Math.floor(Math.random() * textArrayImg.length);

    useEffect(() => {
        if (resTime > 0) {
            console.log(resTime);
            setTimeout(() => {
                setLoading(false);
            }, resTime)
        }
    }, [resTime])

    useEffect(() => {
        const activeThongTinSV = async () => {
            try {
                setLoading(true);
                const res = await dkhpAPI.getThongTinSinhVien();
                setInforSV(res.data);
                var receiveDate = (new Date()).getTime();
                var responseTimeMs = receiveDate - sendDate;
                setResTime(responseTimeMs);
            } catch (error) {
                console.log(error.message);
            }
        };
        activeThongTinSV();
    }, []);

    return (
        <>
            <div className="wrapper">
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
                                                            <img src={textArrayImg[randomAva]} className="img-responsive" style={{ objectFit: 'cover', width: "120px", height: "120px" }} />
                                                        </div>
                                                        <div className="text-center">
                                                            <a href="/thong-tin-sinh-vien.html" className="color-active" lang="db-chitiet-button">Xem chi tiết</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <form className="form-horizontal">
                                                            <div className="form-body">
                                                                {
                                                                    inforSV ?
                                                                        inforSV['infor'].map((sv =>
                                                                            <>
                                                                                <div className="form-group" style={{}}>
                                                                                    <label className="col-xs-6"><span lang="sv-mssv">MSSV</span>: <span className="bold">{sv.ma_sinh_vien}</span></label>
                                                                                    <label className="col-xs-6"><span lang="sv-lophoc">Lớp học</span>: <span className="bold">DH{sv.ma_chuyen_nganh}</span></label>
                                                                                </div>
                                                                                <div className="form-group" style={{}}>
                                                                                    <label className="col-xs-6"><span lang="sv-hoten">Họ tên</span>: <span className="bold">{sv.ho_ten_sinh_vien}</span></label>
                                                                                    <label className="col-xs-6"><span lang="sv-khoahoc">Khóa học</span>: <span className="bold">{sv.nien_khoa}</span></label>
                                                                                </div>
                                                                                <div className="form-group" style={{}}>
                                                                                    <label className="col-xs-6"><span lang="sv-gioitinh">Giới tính</span>: <span className="bold">
                                                                                        {
                                                                                            sv.gioitinh === 0 ? 'Nam' : 'Nữ'
                                                                                        }
                                                                                    </span></label>
                                                                                    <label className="col-xs-6"><span lang="sv-hedaotao">Bậc đào tạo</span>: <span className="bold">Đại học</span></label>
                                                                                </div>
                                                                                <div className="form-group" style={{}}>
                                                                                    <label className="col-xs-6">
                                                                                        <span lang="sv-ngaysinh">Ngày sinh</span>: <span className="bold">{sv.ngay_sinh}</span>
                                                                                    </label>
                                                                                    <label className="col-xs-6"><span lang="sv-loaihinhdt">Loại hình đào tạo</span>: <span className="bold">Chính quy</span></label>
                                                                                </div>
                                                                                <div className="form-group" style={{}}>
                                                                                    <label className="col-xs-6"><span lang="sv-noisinh">Nơi sinh</span>: <span className="bold">Thành phố Hồ Chí Minh</span></label>
                                                                                    <label className="col-xs-6"><span lang="sv-nganh">Ngành</span>: <span className="bold">{sv.ten_chuyen_nganh}</span></label>
                                                                                </div>
                                                                            </>
                                                                        ))
                                                                        : <></>
                                                                }
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
                                                            <div className="icon-menu text-right" style={{ fontSize: "30px" }}>
                                                                <AiIcons.AiOutlineBell />
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
                                                                <div className="icon-menu text-right" style={{ fontSize: "30px" }}>
                                                                    <RiIcons.RiCalendar2Fill />
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
                                                                <div className="icon-menu text-right" style={{ fontSize: "30px" }}>
                                                                    <RiIcons.RiCalendarTodoFill />
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
                                    <a href="/lich-theo-tuan" title="Lịch theo tuần" langid="menusinhvien-8-title">
                                        <div className="box-df">
                                            <div className="icon">
                                                <img src={lichTheoTuan} alt="" />
                                            </div>
                                            <span lang="menusinhvien-8-vt">Lịch theo tuần</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="featured-item">
                                    <a href="/ket-qua-hoc-tap" title="Kết quả học tập" langid="menusinhvien-7-title">
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
                                    <a href="/cong-no-sinh-vien" title="Tra cứu công nợ" langid="menusinhvien-20-title">
                                        <div className="box-df">
                                            <div className="icon">
                                                <img src={traCuuCongNo} alt="" />
                                            </div>
                                            <span lang="menusinhvien-20-vt">Tra cứu công nợ</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="featured-item">
                                    <a href="/thanh-toan-truc-tuyen" title="Thanh toán trực tuyến" langid="menusinhvien-21-title">
                                        <div className="box-df">
                                            <div className="icon">
                                                <img src={thanhToanTrucTuyen} alt="" />
                                            </div>
                                            <span lang="menusinhvien-21-vt">Thanh toán trực tuyến</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="featured-item">
                                    <a href="/phieu-thu-tong-hop" title="Phiếu thu tổng hợp" langid="menusinhvien-23-title">
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
                                    <a href="/ghi-chu-nhac-nho-sinh-vien" title="Ghi chú nhắc nhở" langid="menusinhvien-6-title">
                                        <div className="box-df">
                                            <div className="icon">
                                                <img src={nhacNho} alt="" />
                                            </div>
                                            <span lang="menusinhvien-6-vt">Thông báo</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="row chart-custom">
                                <div className="col-md-5">
                                    <div className="box-df">
                                        <div className="portlet">
                                            <div className="portlet-title">
                                                <div className="caption">
                                                    <span className="caption-subject bold"><a href="/ket-qua-hoc-tap.html" lang="db-kqht">Kết quả học tập</a></span>
                                                </div>
                                                <div className="actions">
                                                    <select className="form-control" id="cboIDDotThongKeKQHT" langid="db-hocky-combobox" name="cboIDDotThongKeKQHT" placeholder="Chọn học kỳ"><option value>Chọn học kỳ</option>
                                                        <option value={57}>HK3 (2023-2024)</option>
                                                        <option value={56}>HK2 (2023-2024)</option>
                                                        <option value={46}>HK1 (2023-2024)</option>
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
                                                    <style dangerouslySetInnerHTML={{ __html: "\n                    text[text-anchor=\"end\"] {\n                        display: none !important;\n                    }\n\n                    .highcharts-button {\n                        display: none !important;\n                    }\n                " }} />
                                                    <div id="chartKetQuaTheoHocKy" style={{ height: '300px', overflow: 'hidden' }} data-highcharts-chart={4}><div id="highcharts-xsusbkg-48" dir="ltr" className="highcharts-container " style={{ position: 'relative', overflow: 'hidden', width: '499px', height: '300px', textAlign: 'left', lineHeight: 'normal', zIndex: 0, WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', userSelect: 'none', touchAction: 'manipulation', outline: 'none' }}><svg version="1.1" className="highcharts-root" style={{ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '12px' }} xmlns="http://www.w3.org/2000/svg" width={499} height={300} viewBox="0 0 499 300" role="img" aria-label><desc>Created with Highcharts 10.3.3</desc><defs><clipPath id="highcharts-xsusbkg-49-"><rect x={0} y={0} width={423} height={184} fill="none" /></clipPath><clipPath id="highcharts-xsusbkg-54-"><rect x={0} y={0} width={423} height={184} fill="none" /></clipPath></defs><rect fill="#ffffff" className="highcharts-background" x={0} y={0} width={499} height={300} rx={0} ry={0} /><rect fill="none" className="highcharts-plot-background" x={38} y={10} width={423} height={184} /><g className="highcharts-pane-group" data-z-index={0} /><g className="highcharts-grid highcharts-xaxis-grid" data-z-index={1}><path fill="none" stroke="#e6e6e6" strokeWidth={0} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 143.5 10 L 143.5 194" opacity={1} /><path fill="none" stroke="#e6e6e6" strokeWidth={0} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 249.5 10 L 249.5 194" opacity={1} /><path fill="none" stroke="#e6e6e6" strokeWidth={0} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 354.5 10 L 354.5 194" opacity={1} /><path fill="none" stroke="#e6e6e6" strokeWidth={0} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 460.5 10 L 460.5 194" opacity={1} /><path fill="none" stroke="#e6e6e6" strokeWidth={0} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 37.5 10 L 37.5 194" opacity={1} /></g><g className="highcharts-grid highcharts-yaxis-grid" data-z-index={1}><path fill="none" stroke="#e6e6e6" strokeWidth={1} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 38 194.5 L 461 194.5" opacity={1} /><path fill="none" stroke="#e6e6e6" strokeWidth={1} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 38 102.5 L 461 102.5" opacity={1} /><path fill="none" stroke="#e6e6e6" strokeWidth={1} strokeDasharray="none" data-z-index={1} className="highcharts-grid-line" d="M 38 9.5 L 461 9.5" opacity={1} /></g><g className="highcharts-grid highcharts-yaxis-grid" data-z-index={1} /><rect fill="none" className="highcharts-plot-border" data-z-index={1} stroke="#cccccc" strokeWidth={0} x={38} y={10} width={423} height={184} /><g className="highcharts-axis highcharts-xaxis" data-z-index={2}><path fill="none" className="highcharts-axis-line" stroke="#ccd6eb" strokeWidth={1} data-z-index={7} d="M 38 194.5 L 461 194.5" /></g><g className="highcharts-axis highcharts-yaxis" data-z-index={2}><text x="25.600000381469727" data-z-index={7} textAnchor="middle" transform="translate(0,0) rotate(270 25.600000381469727 102)" className="highcharts-axis-title" style={{ color: 'rgb(67, 67, 72)', fill: 'rgb(67, 67, 72)' }} y={102}>Điểm TB lớp học phần</text><path fill="none" className="highcharts-axis-line" stroke="#ccd6eb" strokeWidth={0} data-z-index={7} d="M 38 10 L 38 194" /></g><g className="highcharts-axis highcharts-yaxis" data-z-index={2}><text x="473.3999996185303" data-z-index={7} textAnchor="middle" transform="translate(0,0) rotate(90 473.3999996185303 102)" className="highcharts-axis-title" style={{ color: 'rgb(124, 181, 236)', fill: 'rgb(124, 181, 236)' }} y={102}>Điểm của bạn</text><path fill="none" className="highcharts-axis-line" stroke="#ccd6eb" strokeWidth={0} data-z-index={7} d="M 461 10 L 461 194" /></g><path fill="none" className="highcharts-crosshair highcharts-crosshair-category" data-z-index={2} stroke="rgba(204,214,235,0.25)" strokeWidth="92.5" d="M 361.5 10 L 361.5 180" style={{ pointerEvents: 'none' }} visibility="hidden" /><g className="highcharts-series-group" data-z-index={3}><g className="highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker" data-z-index="0.1" opacity={1} transform="translate(38,10) scale(1 1)" clipPath="url(#highcharts-xsusbkg-54-)"><rect x="26.5" y="39.5" width={51} height={145} fill="#fa6c51" stroke="#ffffff" strokeWidth={1} opacity={1} className="highcharts-point" /><rect x="132.5" y="24.5" width={51} height={160} fill="#fa6c51" stroke="#ffffff" strokeWidth={1} opacity={1} className="highcharts-point" /><rect x="238.5" y="53.5" width={51} height={131} fill="#fa6c51" stroke="#ffffff" strokeWidth={1} opacity={1} className="highcharts-point" /><rect x="344.5" y="52.5" width={51} height={132} fill="#fa6c51" stroke="#ffffff" strokeWidth={1} opacity={1} className="highcharts-point" /></g><g className="highcharts-markers highcharts-series-0 highcharts-column-series" data-z-index="0.1" opacity={1} transform="translate(38,10) scale(1 1)" clipPath="none" /><g className="highcharts-series highcharts-series-1 highcharts-spline-series" data-z-index="0.1" opacity={1} transform="translate(38,10) scale(1 1)" clipPath="url(#highcharts-xsusbkg-54-)"><path fill="none" d="M 52.875 64.4 C 52.875 64.4 116.325 75.44 158.625 77.28 C 200.925 79.12 222.075 77.28 264.375 79.12 C 306.675 80.96000000000001 370.125 90.16 370.125 90.16" className="highcharts-graph" data-z-index={1} stroke="#fdcd56" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" /><path fill="none" d="M 52.875 64.4 C 52.875 64.4 116.325 75.44 158.625 77.28 C 200.925 79.12 222.075 77.28 264.375 79.12 C 306.675 80.96000000000001 370.125 90.16 370.125 90.16" data-z-index={2} className="highcharts-tracker-line" strokeLinecap="round" strokeLinejoin="round" stroke="rgba(192,192,192,0.0001)" strokeWidth={22} /></g><g className="highcharts-markers highcharts-series-1 highcharts-spline-series highcharts-tracker" data-z-index="0.1" opacity={1} transform="translate(38,10) scale(1 1)" clipPath="none"><path fill="#fdcd56" d="M 323 83.3 A 0 0 0 1 1 323 83.3 Z" className="highcharts-halo highcharts-color-undefined" data-z-index={-1} fillOpacity="0.25" visibility="hidden" /><path fill="#fdcd56" d="M 52 68.4 A 4 4 0 1 1 52.00399999933334 68.39999800000017 Z" stroke="#ffffff" strokeWidth={0} opacity={1} className="highcharts-point" /><path fill="#fdcd56" d="M 158 81.28 A 4 4 0 1 1 158.00399999933333 81.27999800000016 Z" stroke="#ffffff" strokeWidth={0} opacity={1} className="highcharts-point" /><path fill="#fdcd56" d="M 264 83.12 A 4 4 0 1 1 264.00399999933336 83.11999800000017 Z" stroke="#ffffff" strokeWidth={0} opacity={1} className="highcharts-point" /><path fill="#fdcd56" d="M 370 94.16 A 4 4 0 1 1 370.00399999933336 94.15999800000016 Z" stroke="#ffffff" strokeWidth={0} opacity={1} className="highcharts-point" /></g></g><text x={250} textAnchor="middle" className="highcharts-title" data-z-index={4} style={{ color: 'rgb(51, 51, 51)', fontSize: '18px', fill: 'rgb(51, 51, 51)' }} y={24} /><text x={250} textAnchor="middle" className="highcharts-subtitle" data-z-index={4} style={{ color: 'rgb(102, 102, 102)', fill: 'rgb(102, 102, 102)' }} y={24} /><text x={10} textAnchor="start" className="highcharts-caption" data-z-index={4} style={{ color: 'rgb(102, 102, 102)', fill: 'rgb(102, 102, 102)' }} y={297} /><g className="highcharts-data-labels highcharts-series-0 highcharts-column-series highcharts-tracker" data-z-index={6} opacity={1} transform="translate(38,10) scale(1 1)"><g className="highcharts-label highcharts-data-label highcharts-data-label-color-undefined" data-z-index={1} transform="translate(38,16)"><text x={5} data-z-index={1} y={16} style={{ color: 'rgb(0, 0, 0)', fontSize: '11px', fontWeight: 'bold', fill: 'rgb(0, 0, 0)' }}><tspan className="highcharts-text-outline" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2px" strokeLinejoin="round" style={{}}>8.4<tspan x={5} dy={0}>​</tspan></tspan>8.4</text></g><g className="highcharts-label highcharts-data-label highcharts-data-label-color-undefined" data-z-index={1} transform="translate(144,1)"><text x={5} data-z-index={1} y={16} style={{ color: 'rgb(0, 0, 0)', fontSize: '11px', fontWeight: 'bold', fill: 'rgb(0, 0, 0)' }}><tspan className="highcharts-text-outline" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2px" strokeLinejoin="round">8.7<tspan x={5} dy={0}>​</tspan></tspan>8.7</text></g><g className="highcharts-label highcharts-data-label highcharts-data-label-color-undefined" data-z-index={1} transform="translate(250,30)"><text x={5} data-z-index={1} y={16} style={{ color: 'rgb(0, 0, 0)', fontSize: '11px', fontWeight: 'bold', fill: 'rgb(0, 0, 0)' }}><tspan className="highcharts-text-outline" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2px" strokeLinejoin="round">8.1<tspan x={5} dy={0}>​</tspan></tspan>8.1</text></g><g className="highcharts-label highcharts-data-label highcharts-data-label-color-undefined" data-z-index={1} transform="translate(356,29)"><text x={5} data-z-index={1} y={16} style={{ color: 'rgb(0, 0, 0)', fontSize: '11px', fontWeight: 'bold', fill: 'rgb(0, 0, 0)' }}><tspan className="highcharts-text-outline" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2px" strokeLinejoin="round">8.2<tspan x={5} dy={0}>​</tspan></tspan>8.2</text></g></g><g className="highcharts-legend highcharts-no-tooltip" data-z-index={7} transform="translate(101,259)"><rect fill="none" className="highcharts-legend-box" rx={0} ry={0} stroke="#999999" strokeWidth={0} x={0} y={0} width={297} height={26} /><g data-z-index={1}><g><g className="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-0" data-z-index={1} transform="translate(8,3)"><text x={21} textAnchor="start" data-z-index={2} y={15} style={{ color: 'rgb(51, 51, 51)', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', fill: 'rgb(51, 51, 51)' }}>Điểm của bạn:</text><rect x={2} y={4} width={12} height={12} fill="#fa6c51" rx={6} ry={6} className="highcharts-point" data-z-index={3} /></g><g className="highcharts-legend-item highcharts-spline-series highcharts-color-undefined highcharts-series-1" data-z-index={1} transform="translate(134.3871078491211,3)"><path fill="none" className="highcharts-graph" strokeWidth={2} strokeLinecap="round" d="M 1 11 L 15 11" stroke="#fdcd56" /><path fill="#fdcd56" d="M 8 15 A 4 4 0 1 1 8.003999999333336 14.999998000000167 Z" className="highcharts-point" stroke="#ffffff" strokeWidth={0} opacity={1} /><text x={21} y={15} textAnchor="start" data-z-index={2} style={{ color: 'rgb(51, 51, 51)', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', fill: 'rgb(51, 51, 51)' }}>Điểm TB lớp học phần:</text></g></g></g></g><g className="highcharts-axis-labels highcharts-xaxis-labels" data-z-index={7}><text x="90.875" textAnchor="middle" transform="translate(0,0)" style={{ color: 'rgb(102, 102, 102)', cursor: 'default', fontSize: '11px', fill: 'rgb(102, 102, 102)' }} y={213} opacity={1}>Đảm bảo chất<tspan dy={14} x="90.875">​</tspan>lượng và Kiểm<tspan dy={14} x="90.875">​</tspan>thử phần mềm</text><text x="196.625" textAnchor="middle" transform="translate(0,0)" style={{ color: 'rgb(102, 102, 102)', cursor: 'default', fontSize: '11px', fill: 'rgb(102, 102, 102)' }} y={213} opacity={1}>Lập trình hướng<tspan dy={14} x="196.625">​</tspan>sự kiện với công <tspan dy={14} x="196.625">​</tspan>nghệ Java</text><text x="302.375" textAnchor="middle" transform="translate(0,0)" style={{ color: 'rgb(102, 102, 102)', cursor: 'default', fontSize: '11px', fill: 'rgb(102, 102, 102)' }} y={213} opacity={1}>Lập trình thiết bị<tspan dy={14} x="302.375">​</tspan>di động</text><text x="408.125" textAnchor="middle" transform="translate(0,0)" style={{ color: 'rgb(102, 102, 102)', cursor: 'default', fontSize: '11px', fill: 'rgb(102, 102, 102)' }} y={213} opacity={1}>Lập trình WWW<tspan dy={14} x="408.125">​</tspan>(Java)</text></g><g className="highcharts-axis-labels highcharts-yaxis-labels" data-z-index={7}><text x={23} textAnchor="end" transform="translate(0,0)" style={{ color: 'rgb(67, 67, 72)', cursor: 'default', fontSize: '11px', fill: 'rgb(67, 67, 72)' }} y={205} opacity={1}>0</text><text x={23} textAnchor="end" transform="translate(0,0)" style={{ color: 'rgb(67, 67, 72)', cursor: 'default', fontSize: '11px', fill: 'rgb(67, 67, 72)' }} y={21} opacity={1}>10</text><text x={23} textAnchor="end" transform="translate(0,0)" style={{ color: 'rgb(67, 67, 72)', cursor: 'default', fontSize: '11px', fill: 'rgb(67, 67, 72)' }} y={113} opacity={1}>5</text></g><g className="highcharts-axis-labels highcharts-yaxis-labels" data-z-index={7} /><text x={489} className="highcharts-credits" textAnchor="end" data-z-index={8} y={295} style={{ cursor: 'pointer', color: 'rgb(153, 153, 153)', fontSize: '9px', fill: 'rgb(153, 153, 153)' }}>Highcharts.com</text><g className="highcharts-label highcharts-tooltip highcharts-color-undefined" data-z-index={8} transform="translate(164,27)" style={{ cursor: 'default', whiteSpace: 'nowrap', pointerEvents: 'none' }} opacity={0} visibility="hidden"><path fill="none" className="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 189.5 0.5 C 192.5 0.5 192.5 0.5 192.5 3.5 L 192.5 60.5 C 192.5 63.5 192.5 63.5 189.5 63.5 L 3.5 63.5 C 0.5 63.5 0.5 63.5 0.5 60.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" strokeWidth={5} stroke="#000000" strokeOpacity="0.049999999999999996" transform="translate(1, 1)" /><path fill="none" className="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 189.5 0.5 C 192.5 0.5 192.5 0.5 192.5 3.5 L 192.5 60.5 C 192.5 63.5 192.5 63.5 189.5 63.5 L 3.5 63.5 C 0.5 63.5 0.5 63.5 0.5 60.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" strokeWidth={3} stroke="#000000" strokeOpacity="0.09999999999999999" transform="translate(1, 1)" /><path fill="none" className="highcharts-label-box highcharts-tooltip-box highcharts-shadow" d="M 3.5 0.5 L 189.5 0.5 C 192.5 0.5 192.5 0.5 192.5 3.5 L 192.5 60.5 C 192.5 63.5 192.5 63.5 189.5 63.5 L 3.5 63.5 C 0.5 63.5 0.5 63.5 0.5 60.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" strokeWidth={1} stroke="#000000" strokeOpacity="0.15" transform="translate(1, 1)" /><path fill="rgba(247,247,247,0.85)" className="highcharts-label-box highcharts-tooltip-box" d="M 3.5 0.5 L 189.5 0.5 C 192.5 0.5 192.5 0.5 192.5 3.5 L 192.5 60.5 C 192.5 63.5 192.5 63.5 189.5 63.5 L 3.5 63.5 C 0.5 63.5 0.5 63.5 0.5 60.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5" strokeWidth={1} stroke="#fa6c51" /><text x={8} data-z-index={1} y={18} style={{ color: 'rgb(51, 51, 51)', fontSize: '12px', fill: 'rgb(51, 51, 51)' }}><tspan style={{ fontSize: '10px' }}>Lập trình WWW (Java)</tspan><tspan className="highcharts-br" dy={15} x={8}>​</tspan><tspan style={{ color: 'rgb(250, 108, 81)', fill: 'rgb(250, 108, 81)' }}>●</tspan> Điểm của bạn: : <tspan style={{ fontWeight: 'bold' }}>7.2</tspan><tspan className="highcharts-br" dy={15} x={8}>​</tspan><tspan style={{ color: 'rgb(253, 205, 86)', fill: 'rgb(253, 205, 86)' }}>●</tspan> Điểm TB lớp học phần: : <tspan style={{ fontWeight: 'bold' }}>5.1</tspan><tspan className="highcharts-br">​</tspan></text></g></svg></div></div>
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
                                                <style dangerouslySetInnerHTML={{ __html: "\n                                        text[text-anchor=\"end\"] {\n                                            display: none !important;\n                                        }\n\n                                        .highcharts-button {\n                                            display: none !important;\n                                        }\n\n                                        path {\n                                            font-family: Arial;\n                                        }\n                                    " }} />
                                                <div>
                                                    <div id="chartThongTinTinChiDaHoc" data-highcharts-chart={0} style={{ overflow: 'hidden' }}><div id="highcharts-xsusbkg-0" dir="ltr" className="highcharts-container " style={{ position: 'relative', overflow: 'hidden', width: '253px', height: '270px', textAlign: 'left', lineHeight: 'normal', zIndex: 0, WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', userSelect: 'none', touchAction: 'manipulation', outline: 'none' }}><svg version="1.1" className="highcharts-root" style={{ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '12px' }} xmlns="http://www.w3.org/2000/svg" width={253} height={270} viewBox="0 0 253 270" role="img" aria-label><desc>Created with Highcharts 10.3.3</desc><defs><clipPath id="highcharts-xsusbkg-3-"><rect x={0} y={0} width={233} height={245} fill="none" /></clipPath><clipPath id="highcharts-xsusbkg-4-"><rect x={0} y={0} width={233} height="622.1924250434586" fill="none" /></clipPath></defs><rect fill="#ffffff" className="highcharts-background" x={0} y={0} width={253} height={270} rx={0} ry={0} /><rect fill="none" className="highcharts-plot-background" x={10} y={10} width={233} height={245} /><g className="highcharts-pane-group" data-z-index={0}><path fill="rgba(124,181,236,0.3)" d="M 126.5 21.591999999999985 A 110.90800000000002 110.90800000000002 0 1 1 126.3890920184846 21.592055453995357 M 126.41285801452362 45.35804357099636 A 87.14200000000001 87.14200000000001 0 1 0 126.5 45.35799999999999" className="highcharts-pane " stroke="#cccccc" strokeWidth={0} /><path fill="rgba(144,237,125,0.3)" d="M 126.5 46.34824999999999 A 86.15175 86.15175 0 1 1 126.41384826435858 46.348293075871396 M 126.4376142603976 70.1142811928724 A 62.38575000000001 62.38575000000001 0 1 0 126.5 70.11425" className="highcharts-pane " stroke="#cccccc" strokeWidth={0} /></g><g className="highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid" data-z-index={1} /><rect fill="none" className="highcharts-plot-border" data-z-index={1} stroke="#cccccc" strokeWidth={0} x={10} y={10} width={233} height={245} /><g className="highcharts-axis highcharts-yaxis highcharts-radial-axis" data-z-index={2}><path fill="none" className="highcharts-axis-line" stroke="#ccd6eb" strokeWidth={0} data-z-index={7} d="M 126.5 33.474999999999994 A 99.025 99.025 0 1 1 126.40097501650412 33.47504951249587 M 126.5 132.5 A 0 0 0 1 0 126.5 132.5" /></g><g className="highcharts-series-group" data-z-index={3}><g className="highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="url(#highcharts-xsusbkg-3-)"><path fill="#7cb5ec" d="M 116.5 11.591999999999985 A 110.90800000000002 110.90800000000002 0 1 1 116.3890920184846 11.592055453995357 M 116.41285801452362 35.35804357099636 A 87.14200000000001 87.14200000000001 0 1 0 116.5 35.35799999999999" sweep-flag={0} strokeLinecap="round" strokeLinejoin="round" stroke="none" strokeWidth={0} className="highcharts-point highcharts-color-0" /></g><g className="highcharts-markers highcharts-series-0 highcharts-solidgauge-series" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="none" /><g className="highcharts-series highcharts-series-1 highcharts-solidgauge-series highcharts-tracker" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="url(#highcharts-xsusbkg-3-)"><path fill="#90ed7d" d="M 116.5 36.34824999999999 A 86.15175 86.15175 0 1 1 79.74043483769756 44.58428658389283 A 11.883 11.883 0 1 1 89.88100453764307 66.07827649178446 A 62.38575000000001 62.38575000000001 0 1 0 116.5 60.11424999999999 A 11.883 11.883 0 1 1 116.5 36.34824999999999" sweep-flag={0} strokeLinecap="round" strokeLinejoin="round" stroke="none" strokeWidth={0} className="highcharts-point highcharts-color-0" /></g><g className="highcharts-markers highcharts-series-1 highcharts-solidgauge-series" data-z-index="0.1" opacity={1} transform="translate(10,10) scale(1 1)" clipPath="none" /></g><text x={127} textAnchor="middle" className="highcharts-title" data-z-index={4} style={{ color: 'rgb(51, 51, 51)', fontSize: '18px', fill: 'rgb(51, 51, 51)' }} y={24} /><text x={127} textAnchor="middle" className="highcharts-subtitle" data-z-index={4} style={{ color: 'rgb(102, 102, 102)', fill: 'rgb(102, 102, 102)' }} y={24} /><text x={10} textAnchor="start" className="highcharts-caption" data-z-index={4} style={{ color: 'rgb(102, 102, 102)', fill: 'rgb(102, 102, 102)' }} y={267} /><g className="highcharts-legend highcharts-no-tooltip" data-z-index={7} visibility="hidden"><rect fill="none" className="highcharts-legend-box" rx={0} ry={0} stroke="#999999" strokeWidth={0} x={0} y={0} width={8} height={8} /><g data-z-index={1}><g /></g></g><g className="highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels" data-z-index={7} /><text x={243} className="highcharts-credits" textAnchor="end" data-z-index={8} y={265} style={{ cursor: 'pointer', color: 'rgb(153, 153, 153)', fontSize: '9px', fill: 'rgb(153, 153, 153)' }}>Highcharts.com</text><g className="highcharts-label highcharts-tooltip highcharts-color-0" data-z-index={8} transform="translate(59,88)" style={{ cursor: 'default', whiteSpace: 'nowrap', pointerEvents: 'none' }} opacity={0} visibility="hidden"><path fill="none" className="highcharts-label-box highcharts-tooltip-box" d="M 3 0 L 132 0 C 135 0 135 0 135 3 L 135 81 C 135 84 135 84 132 84 L 3 84 C 0 84 0 84 0 81 L 0 3 C 0 0 0 0 3 0" strokeWidth={0} stroke="#7cb5ec" /></g></svg><div className="highcharts-label highcharts-tooltip highcharts-color-0" style={{ position: 'absolute', left: '59px', top: '88px', opacity: 0, cursor: 'default', pointerEvents: 'none', visibility: 'hidden' }}><span data-z-index={1} style={{ position: 'absolute', fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: '16px', whiteSpace: 'nowrap', color: 'rgb(51, 51, 51)', marginLeft: '0px', marginTop: '0px', left: '8px', top: '8px' }}><p style={{ fontFamily: 'arial' }}>Tổng: 146 tín chỉ<br /></p><p style={{ textAlign: 'center', display: 'block', fontSize: '2em', color: 'rgb(124, 181, 236)', fontWeight: 'bold' }}>100%</p><p /></span></div></div></div>
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
                                                        <option value={57}>HK3 (2023-2024)</option>
                                                        <option value={56}>HK2 (2023-2024)</option>
                                                        <option value={46}>HK1 (2023-2024)</option>
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
        </>


    )
}