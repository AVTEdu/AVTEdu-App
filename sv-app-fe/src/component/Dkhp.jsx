import React from "react";
import '../assets/css/dkhp.css'

export const Dkhp = () => {
    return (
        <div className="wrapper">


            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <a href="/dashboard.html" title="">
                                <img src="https://media.iuh.edu.vn/Media/2_sviuh/Images/iuh7313e0f8-4-e.png" styles={{ maxHeight: '40px !important' }} />
                            </a>
                        </div>
                        <div className="search-bar">
                            <form action="/sinh-vien-tin-tuc-thong-bao-search.html">
                                <input type="text" id="k" name="k" placeholder="Tìm kiếm..." required="" />
                                <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </div>

                        <div className="menu-btn">
                            <a href="#" title=""><i className="fa fa-bars"></i></a>
                        </div>

                        <div className="user-account dropdown">
                            <div className="user-info" data-toggle="dropdown">
                                <img className="user-account-img" src=""
                                    styles={{ width: '30px', height: '30px', borderRadius: '50% !important', objectFit: 'cover' }} />
                                <a className="user-account-name" href="#" title="">Phạm Nguyễn Văn Trường </a>
                                <i className="fa fa-caret-down user-account-name-caret-down" aria-hidden="true"></i>
                            </div>
                            <div className="user-account-info dropdown-menu pull-right">
                                <ul className="us-links">
                                    <li><a href="/thong-tin-sinh-vien.html" title="">Thông tin cá nhân</a></li>
                                    <li><a title="" >Đổi mật khẩu</a></li>
                                    <li><a href="/SinhVien/Logout" title="">Đăng xuất</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-top">
                            <ul>
                                <li>

                                    <a href="/dashboard.html" title="">
                                        <span><i className="fa fa-home" aria-hidden="true"></i></span>
                                        Trang chủ
                                    </a>
                                </li>

                                <li>
                                    <a id="spanBell" href="/sinh-vien-tin-tuc-thong-bao.html" title="">
                                        <div id="tinTuc" lang="tin-tuc">
                                            <i className="fa fa-bell-o" aria-hidden="true"></i>&nbsp;&nbsp;Tin tức
                                        </div>
                                    </a>
                                </li>


                            </ul>

                            <div id="accordion-menu-mb" className="accordion-menu">
                                <ul>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-tv" aria-hidden="true"></i>THÔNG TIN CHUNG<span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/thong-tin-sinh-vien.html">Thông tin sinh viên</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/ghi-chu-nhac-nho-sinh-vien.html">Ghi chú nhắc nhở</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/de-xuat-cap-nhat-thong-tin-sinh-vien.html">Đề xuất cập nhật thông tin</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/de-xuat-cap-nhat-thong-tin-ngan-hang.html">Đề xuất cập nhật thông tin ngân hàng</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-mortar-board" aria-hidden="true"></i>HỌC TẬP<span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/ket-qua-hoc-tap.html">Kết quả học tập</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/lich-theo-tuan.html">Lịch theo tuần</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/lich-theo-tien-do.html">Lịch theo tiến độ</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/lich-hoc-lop-danh-nghia.html">Lịch học lớp danh nghĩa</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-check-square-o" aria-hidden="true"></i>ĐĂNG KÝ HỌC PHẦN<span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/chuong-trinh-khung.html">Chương trình khung</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/dang-ky-hoc-phan.html">Đăng ký học phần</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" title=""><i className="fa fa-cc-visa" aria-hidden="true"></i>HỌC PHÍ<span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/cong-no-sinh-vien.html">Tra cứu công nợ</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/thanh-toan-truc-tuyen.html">Thanh toán trực tuyến</a>
                                            </li>
                                        </ul>
                                        <ul className="submenu">
                                            <li>
                                                <a href="/phieu-thu-tong-hop.html">Phiếu thu tổng hợp</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="/SinhVien/Logout" title=""><i className="fa fa-sign-out" aria-hidden="true"></i>Đăng xuất</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="main-content">
                <div className="container" id="full-resize-table">
                    <div className="main-section-content" id="contnet">
                        <div className="row">


                            <div className="col-md-12 col-xs-12" styles={{ minHeight: '2000px' }}>
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold" lang="dangkyhocphan-pagetitle">Đăng ký học phần</span>
                                            </div>
                                            <div>

                                            </div>
                                            <div hidden="" id="warningChonDot" name="warningChonDot" lang="dangkyhocphan-warningChonDot">Chọn đợt đăng ký học phần</div>
                                            <div hidden="" id="warningChonHPDangKy" name="warningChonHPDangKy" lang="dangkyhocphan-warningChonHPDangKy">Chọn chi tiết học phần cần đăng ký</div>
                                            <div hidden="" id="warningChonLichCoNhom" name="warningChonLichCoNhom" lang="dangkyhocphan-warningChonLichCoNhom">học phần có chia nhóm thực hành, vui lòng chọn lịch có nhóm.</div>
                                            <div hidden="" id="warningHuyDKFail" name="warningHuyDKFail" lang="dangkyhocphan-warningHuyDKFail">Hủy đăng ký không thành công</div>
                                            <div hidden="" id="warningMHDKNotFound" name="warningMHDKNotFound" lang="dangkyhocphan-warningMHDKNotFound">Không tìm thấy dữ liệu chi tiết môn học đăng ký</div>
                                        </div>
                                        <div className="portlet-body">
                                            <div className="">

                                                <div className="form-body">
                                                    <div className="col-md-2"></div>
                                                    <div className="form-group  col-md-4">
                                                        <div>
                                                            <select className="form-control" id="cboIDDotDangKy" name="cboIDDotDangKy" placeholder="Chọn đợt đăng ký"><option value="">Chọn đợt đăng ký</option>
                                                                <option value="45">HK3 (2022-2023)</option>
                                                                <option value="44">HK2 (2022-2023)</option>
                                                                <option value="43">HK1 (2022-2023)</option>
                                                                <option value="42">HK3 (2021-2022)</option>
                                                                <option value="41">HK2 (2021-2022)</option>
                                                                <option value="40">HK1 (2021-2022)</option>
                                                                <option value="39">HK3 (2020-2021)</option>
                                                                <option value="38">HK2 (2020-2021)</option>
                                                                <option value="37">HK1 (2020-2021)</option>
                                                                <option value="36">HK3 (2019-2020)</option>
                                                                <option value="35">HK2 (2019-2020)</option>
                                                                <option value="34">HK1 (2019-2020)</option>
                                                            </select>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                    <div className="form-group  col-md-4">
                                                        <div>
                                                            <div className="mt-radio-inline">
                                                                <label className="mt-radio">
                                                                    <input id="rdoLoaiDangKyHocPhan" name="rdoLoaiDangKyHocPhan" type="radio" value="1" /> <label lang="dangkyhocphan-dangkymoi">Học mới</label>
                                                                    <span></span>
                                                                </label>
                                                                <label className="mt-radio">
                                                                    <input id="rdoLoaiDangKyHocPhan" name="rdoLoaiDangKyHocPhan" type="radio" value="2" /> <label lang="dangkyhocphan-dangkyhoclai">Học lại</label>
                                                                    <span></span>
                                                                </label>
                                                                <label className="mt-radio">
                                                                    <input id="rdoLoaiDangKyHocPhan" name="rdoLoaiDangKyHocPhan" type="radio" value="3" /> <label lang="dangkyhocphan-dangkyhoccaithien">Học cải thiện</label>
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

                                                <div className="border-scroll" styles={{ overflow: 'hidden', outline: 'none' }} tabIndex="0">

                                                    <div id="box_monhocphan_chodangky">


                                                        <h3 className="title-table" lang="mhpchodangky-tabletitle">Môn học/học phần đang chờ đăng ký</h3>
                                                        <div className="table-responsive">
                                                            <table className="table-pointer table-custom table table-bordered text-center" width="100%" role="grid" id="dkHocPhan">
                                                                <thead>
                                                                    <tr role="row">
                                                                        <td styles={{ width: '40px' }}></td>
                                                                        <th lang="dkhp-stt">STT</th>
                                                                        <th lang="dkhp-malhp">Mã học phần</th>
                                                                        <th lang="dkhp-tenmh">Tên môn học/học phần</th>
                                                                        <th lang="dkhp-tc">TC</th>
                                                                        <th lang="dkhp-batbuoc">Bắt buộc</th>


                                                                        <th lang="dkhp-hoctruoctienquyetsonghanh">học phần: học trước (a),<br />tiên quyết (b),<br />song hành (c)</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr data-id="3194" data-mamh="003194" data-mahpduochoc="4203003194">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3194" />
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
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3203" data-mamh="003203" data-mahpduochoc="4203003203">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3203" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>2</td>
                                                                        <td>4203003203</td>
                                                                        <td className="text-left">Âm nhạc – Nhạc lý và Guitar căn bản</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3325" data-mamh="003325" data-mahpduochoc="4203003325">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3325" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>3</td>
                                                                        <td>4203003325</td>
                                                                        <td className="text-left">Tâm lý học đại cương</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="10665" data-mamh="010665" data-mahpduochoc="4203010665">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="10665" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>4</td>
                                                                        <td>4203010665</td>
                                                                        <td className="text-left">Cơ sở văn hóa Việt Nam</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3193" data-mamh="003193" data-mahpduochoc="4203003193">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3193" />
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
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3320" data-mamh="003320" data-mahpduochoc="4203003320">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3320" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>6</td>
                                                                        <td>4203003320</td>
                                                                        <td className="text-left">Phương pháp tính</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3395" data-mamh="003395" data-mahpduochoc="4203003395">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3395" />
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
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="1076" data-mamh="001076" data-mahpduochoc="4203001076">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="1076" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>8</td>
                                                                        <td>4203001076</td>
                                                                        <td className="text-left">Tương tác người máy</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="tooltip tooltipstered">002137 <span className="cl-red">(a)</span></div>
                                                                            </div>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3196" data-mamh="003196" data-mahpduochoc="4203003196">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3196" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>9</td>
                                                                        <td>4203003196</td>
                                                                        <td className="text-left">Giao tiếp kinh doanh</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3197" data-mamh="003197" data-mahpduochoc="4203003197">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3197" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>10</td>
                                                                        <td>4203003197</td>
                                                                        <td className="text-left">Kỹ năng xây dựng kế hoạch</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3206" data-mamh="003206" data-mahpduochoc="4203003206">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3206" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>11</td>
                                                                        <td>4203003206</td>
                                                                        <td className="text-left">Môi trường và con người</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3436" data-mamh="003436" data-mahpduochoc="4203003436">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3436" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>12</td>
                                                                        <td>4203003436</td>
                                                                        <td className="text-left">Thương mại điện tử</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="3442" data-mamh="003442" data-mahpduochoc="4203003442">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="3442" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>13</td>
                                                                        <td>4203003442</td>
                                                                        <td className="text-left">Lập trình GUI với Qt Framework</td>
                                                                        <td>4</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="tooltip tooltipstered">003848 <span className="cl-red">(a)</span></div>
                                                                            </div>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="868" data-mamh="000868" data-mahpduochoc="4203000868">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="868" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>14</td>
                                                                        <td>4203000868</td>
                                                                        <td className="text-left">Kỹ thuật điện tử</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="2031" data-mamh="002031" data-mahpduochoc="4203002031">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="2031" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>15</td>
                                                                        <td>4203002031</td>
                                                                        <td className="text-left">Lập trình phân tích dữ liệu 1</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="tooltip tooltipstered">000941 <span className="cl-red">(a)</span></div>
                                                                            </div>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="2349" data-mamh="002349" data-mahpduochoc="4203002349">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="2349" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>16</td>
                                                                        <td>4203002349</td>
                                                                        <td className="text-left">Lập trình phân tán với công nghệ .NET</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="tooltip tooltipstered">002044 <span className="cl-red">(a)</span></div>
                                                                            </div>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="2329" data-mamh="002329" data-mahpduochoc="4203002329">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="2329" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>17</td>
                                                                        <td>4203002329</td>
                                                                        <td className="text-left">Nhập môn dữ liệu lớn</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="tooltip tooltipstered">001146 <span className="cl-red">(a)</span></div>
                                                                            </div>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="2330" data-mamh="002330" data-mahpduochoc="4203002330">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="2330" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>18</td>
                                                                        <td>4203002330</td>
                                                                        <td className="text-left">Lập trình phân tích dữ liệu 2</td>
                                                                        <td>3</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="no-check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="tooltip tooltipstered">001146,003451 <span className="cl-red">(a)</span></div>
                                                                            </div>


                                                                        </td>
                                                                    </tr>
                                                                    <tr data-id="2027" data-mamh="002027" data-mahpduochoc="4203002027">
                                                                        <td className="text-center">
                                                                            <div>
                                                                                <label className="mt-radio" styles={{ paddingLeft: '17px' }}>
                                                                                    <input id="rdoMonHocChoDangKy" name="rdoMonHocChoDangKy" type="radio" value="2027" />
                                                                                    <span></span>
                                                                                </label>
                                                                            </div>
                                                                        </td>
                                                                        <td>19</td>
                                                                        <td>4203002027</td>
                                                                        <td className="text-left">Chứng chỉ TOEIC 450</td>
                                                                        <td>0</td>
                                                                        <td>
                                                                            <div>
                                                                                <div className="check"></div>
                                                                            </div>
                                                                        </td>
                                                                        <td>


                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                        <br /><br /></div>
                                                </div>
                                            </div>

                                            <div className="row" id="lopHPChoDangKy">
                                                <div className="col-md-6">
                                                    <div className="gr-table">
                                                        <div className="border-scroll" styles={{ maxHeight: '370px', overflow: 'hidden', outline: 'none' }} tabIndex="1">
                                                            <div id="box_lophocphan_chodangky"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="gr-table">

                                                        <div className="border-scroll" tabIndex="2" styles={{ overflow: 'hidden', outline: 'none' }}>
                                                            <div id="box_chitietlophocphan_chodangky"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="EndLopHPChoDangKy"></div>
                                            </div>

                                            <div className="gr-table" id="box_monHocPhan_DaDangKy">


                                                <h3 className="title-table" lang="dangkyhocphan-lhpdadangkytabletitle">
                                                    Lớp học phần đã đăng ký trong học kỳ này <a href="#" className="btn btn-action" id="btn_InDDK"
                                                        styless={{ right: '0px' }}>
                                                        <i className="fa fa-print" aria-hidden="true"></i>
                                                    </a>
                                                </h3>

                                                <div className="table-responsive">
                                                    <table className="table-pointer table-custom table table-bordered text-center" width="100%" role="grid" id="dkHocPhan">
                                                        <thead>
                                                            <tr role="row">
                                                                <th></th>
                                                                <th></th>

                                                                <th lang="dangkyhocphan-stt">STT</th>
                                                                <th lang="dangkyhocphan-dadangkymalhp">Mã lớp  học phần</th>
                                                                <th lang="dangkyhocphan-tenmh">Tên môn học/học phần</th>
                                                                <th lang="dangkyhocphan-dadangkylopdukien">Lớp học dự kiến</th>
                                                                <th lang="dangkyhocphan-tc">TC</th>
                                                                <th lang="dangkyhocphan-nhomth">Nhóm TH</th>
                                                                <th lang="dangkyhocphan-hocphi">Học phí</th>
                                                                <th lang="dangkyhocphan-hannop">Hạn nộp</th>
                                                                <th lang="dangkyhocphan-thu">Thu</th>
                                                                <th lang="dangkyhocphan-trangthaidangky">Trạng thái ĐK</th>
                                                                <th lang="dangkyhocphan-ngaydangky">Ngày ĐK</th>
                                                                <th lang="dangkyhocphan-trangthailhp">Trạng thái Lớp học phần </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colSpan="6" className="text-center bold" styles={{ fontSize: '16px' }}>Tổng</td>

                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}>10</td>
                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                            </tr>
                                                            <tr >
                                                                <td><button className="btn btn-sm btn-close" data-idlhpdk="7623002" data-guid="XtSz3Srj05-JLoWwpYueBA" lang="dangkyhocphan-xem-button">Xem</button></td>

                                                                <td><button className="btn btn-sm btn-close" data-idlhpdk="7623002" data-guid="XtSz3Srj05-JLoWwpYueBA" lang="dangkyhocphan-huy-button">Hủy</button></td>

                                                                <td>1</td>
                                                                <td>420300279001</td>
                                                                <td className="text-left">Khóa luận tốt nghiệp</td>
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
                                                            <tr >
                                                                <td><button className="btn btn-sm btn-close" data-idlhpdk="7623026" data-guid="P4T_Up88QM_aUgR1Q1niUQ" lang="dangkyhocphan-xem-button">Xem</button></td>

                                                                <td><button className="btn btn-sm btn-close" data-idlhpdk="7623026" data-guid="P4T_Up88QM_aUgR1Q1niUQ" lang="dangkyhocphan-huy-button">Hủy</button></td>

                                                                <td>2</td>
                                                                <td>420300309801</td>
                                                                <td className="text-left">Thực tập doanh nghiệp</td>
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

                                                <div id="id-hoc-phan-da-dk" styles={{ display: 'none' }} className="table-responsive">
                                                    <table styles={{ width: '95%', fontFamily: '"Times New Roman"' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td styles={{ paddingTop: '20px' }}>
                                                                    <table styles={{ width: '100%' }}>
                                                                        <tbody><tr>
                                                                            <td styles={{ width: '60px' }}>
                                                                                <img />
                                                                            </td>
                                                                            <td styles={{ textAlign: 'center', width: '300px', fontWeight: 'bolder', fontSize: 'smaller' }}>
                                                                                <p styles={{ marginTop: '0pt', marginBottom: '0pt', marginLeft: '0in', textAlign: 'center' }}><span styles={{ language: 'en-US' }}><span styles={{ unicodeBidi: 'embed' }}><span styles={{ fontSize: '11.0pt' }}><span styles={{ fontFamily: '&quot' }}><span styles={{ color: 'black' }}><span styles={{ language: 'en-US' }}><span styles={{ fontWeight: 'bold' }}><span styles={{ fontstyles: 'normal' }}><span styles={{ verticalAlign: 'baseline' }}>BỘ CÔNG THƯƠNG</span></span></span></span></span></span></span></span></span></p>

                                                                                <p styles={{ marginTop: '0pt', marginBottom: '0pt', marginLeft: '0in', textAlign: 'center' }}><span styles={{ language: 'en-US' }}><span styles={{ unicodeBidi: 'embed' }}><span styles={{ fontSize: '11.0pt' }}><span styles={{ fontFamily: '&quot' }}><span styles={{ color: 'black' }}><span styles={{ language: 'en-US' }}><span styles={{ fontWeight: 'bold' }}><span styles={{ fontstyles: 'normal' }}><span styles={{ verticalAlign: 'baseline' }}>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM</span></span></span></span></span></span></span></span></span></p>

                                                                                --------------------------
                                                                            </td>
                                                                            <td styles={{ width: 'auto' }}></td>

                                                                        </tr>
                                                                        </tbody></table>
                                                                </td>
                                                            </tr>
                                                            <tr>

                                                                <td className="text-uppercase" styles={{ textAlign: 'center', fontSize: '26px', fontWeight: 'bolder', height: '40px' }} lang="dangkyhocphan-lhpdadangky">
                                                                    học phần ĐÃ ĐĂNG KÝ
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td styles={{ textAlign: 'center', fontSize: '20px', height: '30px' }}>
                                                                    HK2 (2022-2023)
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td styles={{ paddingLeft: '10px' }}>
                                                                    <table styles={{ width: '100%', fontWeight: 'bold' }}>
                                                                        <tbody><tr>
                                                                            <td styles={{ width: '400px' }}><span lang="dangkyhocphan-hovaten">Họ tên</span>: Phạm Nguyễn Văn  Trường</td>
                                                                            <td styles={{ width: '300px', paddingBottom: '5px' }}><span lang="dangkyhocphan-masinhvien">Mã sinh viên</span>: 19507391</td>
                                                                            <td styles={{ width: '200px' }}><span lang="dangkyhocphan-lophoc">Lớp học</span>: DHKTPM15A </td>
                                                                        </tr>

                                                                        </tbody></table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td styles={{ paddingLeft: '10px' }}>
                                                                    <table className="table-pointer table-custom table table-bordered text-center" width="100%" role="grid" id="dkHocPhan">
                                                                        <thead>
                                                                            <tr role="row">
                                                                                <th lang="dangkyhocphan-stt">STT</th>
                                                                                <th lang="dangkyhocphan-dadangkymalhp">Mã lớp học phần</th>
                                                                                <th lang="dangkyhocphan-tenmh">Tên môn học/học phần</th>
                                                                                <th lang="dangkyhocphan-dadangkylopdukien">Lớp học dự kiến</th>
                                                                                <th lang="dangkyhocphan-tc">TC</th>
                                                                                <th lang="dangkyhocphan-nhomth">Nhóm TH</th>
                                                                                <th lang="dangkyhocphan-hocphi">Học phí</th>
                                                                                <th lang="dangkyhocphan-hannop">Hạn nộp</th>
                                                                                <th lang="dangkyhocphan-thu">Thu</th>
                                                                                <th lang="dangkyhocphan-trangthaidangky">Trạng thái ĐK</th>
                                                                                <th lang="dangkyhocphan-ngaydangky">Ngày ĐK</th>
                                                                                <th lang="dangkyhocphan-trangthailhp">Trạng thái Lớp học phần </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colSpan="4" className="text-center bold" styles={{ fontSize: '16px' }}>Tổng</td>

                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}>10</td>
                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                                <td className="text-center bold" styles={{ fontSize: '16px' }}></td>
                                                                            </tr>
                                                                            <tr >
                                                                                <td>1</td>
                                                                                <td>420300279001</td>
                                                                                <td className="text-left">Khóa luận tốt nghiệp</td>
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
                                                                            <tr >
                                                                                <td>2</td>
                                                                                <td>420300309801</td>
                                                                                <td className="text-left">Thực tập doanh nghiệp</td>
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
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td styles={{ paddingTop: '20px' }}>
                                                                    <table styles={{ width: '100%' }}>
                                                                        <tbody><tr role="row">
                                                                            <td styles={{ textAlign: 'center', width: '50%', fontWeight: 'bolder', fontSize: 'smaller' }} lang="dangkyhocphan-chukycovanht">
                                                                                CỐ VẤN HỌC TẬP<br />
                                                                                (Ký và ghi rõ họ tên)
                                                                            </td>
                                                                            <td styles={{ textAlign: 'center', width: '50%', fontWeight: 'bolder', fontSize: 'smaller' }} lang="dangkyhocphan-chukysinhvien">
                                                                                SINH VIÊN<br />
                                                                                (Ký và ghi rõ họ tên)
                                                                            </td>
                                                                        </tr>
                                                                        </tbody></table>
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

                            <div className="fix-menu-HP">
                                <div className="fix-menu-HP_item" data-toggle="kt-tooltip" title="">
                                    <a href="#" className="scrollLink">
                                        <img src="/Content/ThemeMXH/img/icons/icon_dkhp_1.png" className="center-block" />
                                        <span lang="dangkyhocphan-mhchodangky">Môn học/học phần chờ đăng ký</span></a>
                                </div>
                                <div className="fix-menu-HP_item" data-toggle="kt-tooltip" title="">
                                    <a href="#" className="scrollLink">
                                        <img src="/Content/ThemeMXH/img/icons/icon_dkhp_2.png" className="center-block" />
                                        <span lang="dangkyhocphan-lhpchodangky">Lớp học phần chờ đăng ký</span></a>
                                </div>
                                <div className="fix-menu-HP_item" data-toggle="kt-tooltip" title="">
                                    <a href="#" className="scrollLink">
                                        <img src="/Content/ThemeMXH/img/icons/icon_dkhp_3.png" className="center-block" />
                                        <span lang="dangkyhocphan-dadangky">Đã đăng ký</span></a>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div id="config-tool" className="closed">
                <a id="config-tool-cog">
                    <img src="/Content/ThemeMXH/img/icons/menu2.png" />
                </a>
                <div id="config-tool-options">
                    <div className="box-df p-0">
                        <div id="accordion-menu" className="accordion-menu">
                            <ul>
                                <li>
                                    <a href="/dashboard.html" title=""><i className="fa fa-home" aria-hidden="true"></i>TRANG CHỦ</a>
                                </li>
                                <li>
                                    <a href="#" title=""><i className="fa fa-tv" aria-hidden="true"></i><span lang="groupmenu-thongtinchung">THÔNG TIN CHUNG</span><span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/thong-tin-sinh-vien.html"><span lang="menusinhvien-1">Thông tin sinh viên</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/ghi-chu-nhac-nho-sinh-vien.html"><span lang="menusinhvien-6">Ghi chú nhắc nhở</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/de-xuat-cap-nhat-thong-tin-sinh-vien.html"><span lang="menusinhvien-3">Đề xuất cập nhật thông tin</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/de-xuat-cap-nhat-thong-tin-ngan-hang.html"><span lang="menusinhvien-42">Đề xuất cập nhật thông tin ngân hàng</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title=""><i className="fa fa-mortar-board" aria-hidden="true"></i><span lang="groupmenu-hoctap">HỌC TẬP</span><span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/ket-qua-hoc-tap.html"><span lang="menusinhvien-7">Kết quả học tập</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/lich-theo-tuan.html"><span lang="menusinhvien-8">Lịch theo tuần</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/lich-theo-tien-do.html"><span lang="menusinhvien-9">Lịch theo tiến độ</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/lich-hoc-lop-danh-nghia.html"><span lang="menusinhvien-43">Lịch học lớp danh nghĩa</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title=""><i className="fa fa-check-square-o" aria-hidden="true"></i><span lang="groupmenu-dangkyhocphan">ĐĂNG KÝ HỌC PHẦN</span><span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/chuong-trinh-khung.html"><span lang="menusinhvien-14">Chương trình khung</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/dang-ky-hoc-phan.html"><span lang="menusinhvien-15">Đăng ký học phần</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title=""><i className="fa fa-cc-visa" aria-hidden="true"></i><span lang="groupmenu-hocphi">HỌC PHÍ</span><span className="submenu-indicator"><i className="fa fa-angle-down" aria-hidden="true"></i></span></a>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/cong-no-sinh-vien.html"><span lang="menusinhvien-20">Tra cứu công nợ</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/thanh-toan-truc-tuyen.html"><span lang="menusinhvien-21">Thanh toán trực tuyến</span></a>
                                        </li>
                                    </ul>
                                    <ul className="submenu" styles="">
                                        <li styles="">
                                            <a href="/phieu-thu-tong-hop.html"><span lang="menusinhvien-23">Phiếu thu tổng hợp</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>




                    <div className="changeColor">
                        <ul className="theme-color">
                            <li data-styles="dashboard-default" className="color-default0 current"> </li>
                            <li data-styles="dashboard-primary-color" className="color-default"> </li>
                            <li data-styles="dashboard-two-color" className="color-default1"></li>
                            <li data-styles="dashboard-three-color" className="color-default2"></li>
                            <li data-styles="dashboard-four-color" className="color-default3"></li>
                            <li data-styles="dashboard-five-color" className="color-default4"></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}