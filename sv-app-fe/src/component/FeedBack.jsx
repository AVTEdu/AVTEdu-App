import React from "react";
import Sidenavbar from "./Sidenavbar";

export default function FeedBack() {
    return (
        <div className="wrapper">
            <Sidenavbar />
            <div className="main-content">
                <div className="container" id="full-resize-table">
                    <div className="main-section-content" id="contnet">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold">PHIẾU KHẢO SÁT SINH VIÊN VỀ CHẤT LƯỢNG PHỤC VỤ, HỖ TRỢ CỦA NHÀ TRƯỜNG</span>
                                            </div>
                                        </div>
                                        <div className="portlet-body notification">
                                            <div className="content">
                                                <form action="/SinhVienKhaoSat/PostKhaoSatSuKien_Ver2?Length=15" className="form-contact" data-ajax="true" data-ajax-failure="OnFailure" data-ajax-method="POST" data-ajax-success="OnSuccessKhaoSatSuKien" id="form0" method="post"><input id="KeyKhaoSat" name="KeyKhaoSat" type="hidden" defaultValue="jXW4iE0eg07rjV1Wi1vPNrMjhscq-EOGzDw1o_p3G2X6IwSxpkzNxU17tH-1mA-O03d_SdUrONYaMHYPjLg25A" />                                <div>
                                                    <p>Nhằm ghi nhận phản hồi của sinh viên về chất lượng phục vụ, hỗ trợ, Nhà trường rất mong nhận được ý kiến của các bạn sinh viên về chất lượng phục vụ, hỗ trợ của Nhà trường hiện nay. Ý kiến của các bạn sinh viên sẽ giúp Nhà trường đưa ra được các giải pháp nâng cao chất lượng phục vụ, hỗ trợ. Thông tin trả lời của các bạn sẽ được giữ kín, vì vậy các bạn vui lòng trả lời thẳng thắn và khách quan các câu hỏi. Nếu các bạn có thắc mắc hoặc trao đổi, vui lòng liên hệ theo địa chỉ ở cuối bảng hỏi này.</p>
                                                    <div className="group_box">
                                                        <strong className="title">Phần 2: Ý KIẾN CỦA SINH VIÊN</strong>
                                                        <strong className="title">Các bạn vui lòng khoanh tròn vào ô trả lời với sự lựa chọn thích hợp, tương ứng với từng mức độ đánh giá.</strong>
                                                        <strong className="title">I. Các hoạt động hỗ trợ sinh viên</strong>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>1. Cán bộ nhân viên nhiệt tình, vui vẻ, thân thiện với sinh viên</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5598" name="TLRDO_5598" type="radio" defaultValue={24291} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5598" name="TLRDO_5598" type="radio" defaultValue={24292} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5598" name="TLRDO_5598" type="radio" defaultValue={24293} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5598" name="TLRDO_5598" type="radio" defaultValue={24294} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5598" name="TLRDO_5598" type="radio" defaultValue={24295} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>2. Các khiếu nại (nếu có) của sinh viên luôn được giải quyết nhanh chóng và thỏa đáng</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5599" name="TLRDO_5599" type="radio" defaultValue={24296} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5599" name="TLRDO_5599" type="radio" defaultValue={24297} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5599" name="TLRDO_5599" type="radio" defaultValue={24298} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5599" name="TLRDO_5599" type="radio" defaultValue={24299} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5599" name="TLRDO_5599" type="radio" defaultValue={24300} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>3. Hoạt động tư vấn học tập đáp ứng nhu cầu học tập và nghiên cứu</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5600" name="TLRDO_5600" type="radio" defaultValue={24301} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5600" name="TLRDO_5600" type="radio" defaultValue={24302} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5600" name="TLRDO_5600" type="radio" defaultValue={24303} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5600" name="TLRDO_5600" type="radio" defaultValue={24304} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5600" name="TLRDO_5600" type="radio" defaultValue={24305} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>4. Các hoạt động tư vấn hướng nghiệp, định hướng việc làm đáp ứng được nhu cầu việc làm</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5601" name="TLRDO_5601" type="radio" defaultValue={24306} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5601" name="TLRDO_5601" type="radio" defaultValue={24307} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5601" name="TLRDO_5601" type="radio" defaultValue={24308} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5601" name="TLRDO_5601" type="radio" defaultValue={24309} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5601" name="TLRDO_5601" type="radio" defaultValue={24310} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>5. Thủ tục hành chính liên quan đến sinh viên được giải quyết kịp thời</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5602" name="TLRDO_5602" type="radio" defaultValue={24311} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5602" name="TLRDO_5602" type="radio" defaultValue={24312} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5602" name="TLRDO_5602" type="radio" defaultValue={24313} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5602" name="TLRDO_5602" type="radio" defaultValue={24314} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5602" name="TLRDO_5602" type="radio" defaultValue={24315} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <strong className="title">II. Cơ sở vật chất phục vụ sinh viên</strong>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>6. Thiết bị phòng học lý thuyết đáp ứng nhu cầu học tập</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5603" name="TLRDO_5603" type="radio" defaultValue={24316} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5603" name="TLRDO_5603" type="radio" defaultValue={24317} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5603" name="TLRDO_5603" type="radio" defaultValue={24318} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5603" name="TLRDO_5603" type="radio" defaultValue={24319} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5603" name="TLRDO_5603" type="radio" defaultValue={24320} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>7. Thiết bị phòng thực hành/thí nghiệm đáp ứng nhu cầu học tập</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5604" name="TLRDO_5604" type="radio" defaultValue={24321} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5604" name="TLRDO_5604" type="radio" defaultValue={24322} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5604" name="TLRDO_5604" type="radio" defaultValue={24323} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5604" name="TLRDO_5604" type="radio" defaultValue={24324} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5604" name="TLRDO_5604" type="radio" defaultValue={24325} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>8. Hệ thống internet ở các phòng máy tính, Thư viện hoạt động ổn định</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5605" name="TLRDO_5605" type="radio" defaultValue={24326} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5605" name="TLRDO_5605" type="radio" defaultValue={24327} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5605" name="TLRDO_5605" type="radio" defaultValue={24328} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5605" name="TLRDO_5605" type="radio" defaultValue={24329} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5605" name="TLRDO_5605" type="radio" defaultValue={24330} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>9. Hệ thống phần mềm tại các phòng máy tính đáp ứng nhu cầu học tập</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5606" name="TLRDO_5606" type="radio" defaultValue={24331} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5606" name="TLRDO_5606" type="radio" defaultValue={24332} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5606" name="TLRDO_5606" type="radio" defaultValue={24333} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5606" name="TLRDO_5606" type="radio" defaultValue={24334} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5606" name="TLRDO_5606" type="radio" defaultValue={24335} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>10. Hệ thống wifi dễ dàng truy cập</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5607" name="TLRDO_5607" type="radio" defaultValue={24336} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5607" name="TLRDO_5607" type="radio" defaultValue={24337} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5607" name="TLRDO_5607" type="radio" defaultValue={24338} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5607" name="TLRDO_5607" type="radio" defaultValue={24339} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5607" name="TLRDO_5607" type="radio" defaultValue={24340} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>11. Sách, tài liệu tham khảo, phòng đọc ở Thư viện đáp ứng được nhu cầu học tập, nghiên cứu</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5608" name="TLRDO_5608" type="radio" defaultValue={24341} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5608" name="TLRDO_5608" type="radio" defaultValue={24342} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5608" name="TLRDO_5608" type="radio" defaultValue={24343} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5608" name="TLRDO_5608" type="radio" defaultValue={24344} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5608" name="TLRDO_5608" type="radio" defaultValue={24345} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>12. Căn tin đảm bảo vệ sinh an toàn thực phẩm, sạch sẽ, rộng rãi, thuận tiện</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5609" name="TLRDO_5609" type="radio" defaultValue={24346} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5609" name="TLRDO_5609" type="radio" defaultValue={24347} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5609" name="TLRDO_5609" type="radio" defaultValue={24348} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5609" name="TLRDO_5609" type="radio" defaultValue={24349} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5609" name="TLRDO_5609" type="radio" defaultValue={24350} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>13. Nhà để xe an toàn, thuận tiện</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5610" name="TLRDO_5610" type="radio" defaultValue={24351} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5610" name="TLRDO_5610" type="radio" defaultValue={24352} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5610" name="TLRDO_5610" type="radio" defaultValue={24353} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5610" name="TLRDO_5610" type="radio" defaultValue={24354} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5610" name="TLRDO_5610" type="radio" defaultValue={24355} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>14. Thiết bị thể dục thể thao và sân vận động của Trường đáp ứng nhu cầu học tập và giải trí</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5611" name="TLRDO_5611" type="radio" defaultValue={24356} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5611" name="TLRDO_5611" type="radio" defaultValue={24357} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5611" name="TLRDO_5611" type="radio" defaultValue={24358} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5611" name="TLRDO_5611" type="radio" defaultValue={24359} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5611" name="TLRDO_5611" type="radio" defaultValue={24360} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <strong className="title">III. Chất lượng dịch vụ của Nhà trường</strong>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>15. Dịch vụ y tế đáp ứng được nhu cầu chăm sóc sức khỏe</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5596" name="TLRDO_5596" type="radio" defaultValue={24361} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5596" name="TLRDO_5596" type="radio" defaultValue={24362} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5596" name="TLRDO_5596" type="radio" defaultValue={24363} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5596" name="TLRDO_5596" type="radio" defaultValue={24364} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5596" name="TLRDO_5596" type="radio" defaultValue={24365} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>16. Nhà trường có biện pháp để đảm bảo chế độ chính sách xã hội cho sinh viên (tìm nguồn học bổng, tìm kiếm việc làm, miễn giảm học phí, hỗ trợ nơi ở, hỗ trợ chi phí học tập cho sinh viên có hoàn cảnh khó khăn)</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5612" name="TLRDO_5612" type="radio" defaultValue={24366} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5612" name="TLRDO_5612" type="radio" defaultValue={24367} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5612" name="TLRDO_5612" type="radio" defaultValue={24368} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5612" name="TLRDO_5612" type="radio" defaultValue={24369} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5612" name="TLRDO_5612" type="radio" defaultValue={24370} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>17. Các hoạt động văn hóa, văn nghệ, thể dục thể thao trong trường đáp ứng nhu cầu vui chơi, giải trí và rèn luyện sức khỏe</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5613" name="TLRDO_5613" type="radio" defaultValue={24371} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5613" name="TLRDO_5613" type="radio" defaultValue={24372} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5613" name="TLRDO_5613" type="radio" defaultValue={24373} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5613" name="TLRDO_5613" type="radio" defaultValue={24374} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5613" name="TLRDO_5613" type="radio" defaultValue={24375} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>18. Công tác đảm bảo an ninh, trật tự trong trường được thực hiện tốt</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5614" name="TLRDO_5614" type="radio" defaultValue={24376} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5614" name="TLRDO_5614" type="radio" defaultValue={24377} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5614" name="TLRDO_5614" type="radio" defaultValue={24378} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5614" name="TLRDO_5614" type="radio" defaultValue={24379} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5614" name="TLRDO_5614" type="radio" defaultValue={24380} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>19. Mức độ hài lòng của các bạn về chất lượng phục vụ, hỗ trợ của các Phòng ban/Trung tâm/Đoàn thể sau:</b>
                                                            </div>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Trung tâm Thư viện</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5616" name="TLRDO_5616" type="radio" defaultValue={24381} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5616" name="TLRDO_5616" type="radio" defaultValue={24382} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5616" name="TLRDO_5616" type="radio" defaultValue={24383} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5616" name="TLRDO_5616" type="radio" defaultValue={24384} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5616" name="TLRDO_5616" type="radio" defaultValue={24385} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Trung tâm Tư vấn và Hỗ trợ sinh viên</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5617" name="TLRDO_5617" type="radio" defaultValue={24386} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5617" name="TLRDO_5617" type="radio" defaultValue={24387} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5617" name="TLRDO_5617" type="radio" defaultValue={24388} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5617" name="TLRDO_5617" type="radio" defaultValue={24389} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5617" name="TLRDO_5617" type="radio" defaultValue={24390} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Phòng Công tác sinh viên</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5618" name="TLRDO_5618" type="radio" defaultValue={24391} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5618" name="TLRDO_5618" type="radio" defaultValue={24392} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5618" name="TLRDO_5618" type="radio" defaultValue={24393} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5618" name="TLRDO_5618" type="radio" defaultValue={24394} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5618" name="TLRDO_5618" type="radio" defaultValue={24395} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Phòng Đào tạo</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5619" name="TLRDO_5619" type="radio" defaultValue={24396} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5619" name="TLRDO_5619" type="radio" defaultValue={24397} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5619" name="TLRDO_5619" type="radio" defaultValue={24398} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5619" name="TLRDO_5619" type="radio" defaultValue={24399} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5619" name="TLRDO_5619" type="radio" defaultValue={24400} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Phòng Tài chính - Kế toán</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5620" name="TLRDO_5620" type="radio" defaultValue={24401} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5620" name="TLRDO_5620" type="radio" defaultValue={24402} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5620" name="TLRDO_5620" type="radio" defaultValue={24403} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5620" name="TLRDO_5620" type="radio" defaultValue={24404} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5620" name="TLRDO_5620" type="radio" defaultValue={24405} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Phòng Tổ chức - Hành chính</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5621" name="TLRDO_5621" type="radio" defaultValue={24406} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5621" name="TLRDO_5621" type="radio" defaultValue={24407} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5621" name="TLRDO_5621" type="radio" defaultValue={24408} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5621" name="TLRDO_5621" type="radio" defaultValue={24409} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5621" name="TLRDO_5621" type="radio" defaultValue={24410} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Phòng Thanh tra - Pháp chế</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5622" name="TLRDO_5622" type="radio" defaultValue={24411} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5622" name="TLRDO_5622" type="radio" defaultValue={24412} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5622" name="TLRDO_5622" type="radio" defaultValue={24413} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5622" name="TLRDO_5622" type="radio" defaultValue={24414} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5622" name="TLRDO_5622" type="radio" defaultValue={24415} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Phòng Dịch vụ (vệ sinh, giữ xe)</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5623" name="TLRDO_5623" type="radio" defaultValue={24416} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5623" name="TLRDO_5623" type="radio" defaultValue={24417} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5623" name="TLRDO_5623" type="radio" defaultValue={24418} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5623" name="TLRDO_5623" type="radio" defaultValue={24419} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5623" name="TLRDO_5623" type="radio" defaultValue={24420} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Căn tin</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5624" name="TLRDO_5624" type="radio" defaultValue={24421} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5624" name="TLRDO_5624" type="radio" defaultValue={24422} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5624" name="TLRDO_5624" type="radio" defaultValue={24423} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5624" name="TLRDO_5624" type="radio" defaultValue={24424} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5624" name="TLRDO_5624" type="radio" defaultValue={24425} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Giáo vụ Khoa</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5625" name="TLRDO_5625" type="radio" defaultValue={24426} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5625" name="TLRDO_5625" type="radio" defaultValue={24427} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5625" name="TLRDO_5625" type="radio" defaultValue={24428} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5625" name="TLRDO_5625" type="radio" defaultValue={24429} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5625" name="TLRDO_5625" type="radio" defaultValue={24430} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>- Đoàn thanh niên - Hội sinh viên</b>
                                                            </div>
                                                            <ul className="group-cautraloi list-inline">
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5626" name="TLRDO_5626" type="radio" defaultValue={24431} />
                                                                        A. Hoàn toàn không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5626" name="TLRDO_5626" type="radio" defaultValue={24432} />
                                                                        B. Không đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5626" name="TLRDO_5626" type="radio" defaultValue={24433} />
                                                                        C. Phân vân
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5626" name="TLRDO_5626" type="radio" defaultValue={24434} />
                                                                        D. Đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <label className="mt-radio disabled">
                                                                        <input className="rad-dis" id="TLRDO_5626" name="TLRDO_5626" type="radio" defaultValue={24435} />
                                                                        E. Hoàn toàn đồng ý
                                                                        <span />
                                                                    </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <strong className="title">IV. Ý kiến khác</strong>
                                                        <div className="group_cauhoi">
                                                            <div className="title_cauhoi">
                                                                <b>20. Ý kiến khác</b>
                                                            </div>
                                                            <div className="box-thongtin">
                                                                <textarea className="input-ykien" cols={20} id="LayYKien_5597_5597" name="LayYKien_5597_5597" rows={2} defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br /><br />
                                                    <p>Xin chân thành cảm ơn sự hợp tác của các bạn!<br />
                                                        <br />==========================<br />
                                                        <br />	Phòng Khảo thí và Đảm bảo chất lượng<br />
                                                        <br />Trường Đại học Công nghiệp TP.HCM<br />
                                                        <br />12 Nguyễn Văn Bảo, P.4, Quận Gò Vấp, Tp.HCM  (Phòng C1.03)<br />
                                                        <br />Điện thoại: 083. 8940390 – 169</p>
                                                    <div className="submit_boxes">
                                                        <input type="submit" className="btn_submit_boxes" defaultValue="Gửi" id="btnGui" name="btnGui" />
                                                    </div>
                                                </div>
                                                </form>                      </div>
                                        </div></div></div></div></div></div></div></div>
        </div>
    )
}