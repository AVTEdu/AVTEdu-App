import React from "react";
import Sidenavbar from "./Sidenavbar";

export default function ThongBaoNhacNho() {
    return (
        <div className="wrapper">
            <Sidenavbar />
            <div className="main-content">
                <div className="container" id="full-resize-table">
                    <div className="main-section-content" id="contnet">
                        <div className="row">
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n    .loadmore {\n        background-color: #1da1f2;\n        color: #fff;\n        border-radius: 3px !important;\n    }\n\n        .loadmore:hover {\n            background-color: #e7ecf0;\n            color: #1da1f2;\n        }\n\n" }} />
                            <div className="col-md-12 col-xs-12">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject font-blue-madison bold" lang="thongbaonhacnho-pagetitle">Ghi chú nhắc nhở</span>
                                            </div>

                                        </div>
                                        <div id="viewThongBaoNhacNho">
                                            <style dangerouslySetInnerHTML={{ __html: "\n    .box-zoom a {\n        font-size: 11px;\n        padding: 2px 5px;\n        margin-top: 15px !important;\n        width: 100%;\n    }\n\n        .box-zoom a:hover {\n            background-color: #f36a5a !important;\n            border-color: red !important;\n        }\n\n    .box-zoom i {\n        font-size: 11px !important;\n    }\n\n    .DaXem {\n        color: #34658e;\n    }\n\n    .more-nhacnho {\n        color: #F44336;\n        font-weight: bold;\n        float: right;\n    }\n" }} />
                                            <div className="portlet-body notification">
                                                <div className="item clearfix">
                                                    <div>
                                                        <a href="/khao-sat" title className="title view-nhacnho" data-idnn={5634050}>
                                                            <span>Phiếu khảo sát chất lượng học phần Lập trình di động</span>
                                                            <span className="date">-  03/07/2023</span>
                                                        </a>
                                                        <div>
                                                            <a className="view-nhacnho more-nhacnho more-nhacnho-5634050" data-idnn={5634050} lang="thongbaonhacnho-xemchitiet-button">Xem chi tiết</a>
                                                            <p className="content-nhacnho-5634050" style={{ display: 'none' }}>ĐH Công Nghiệp TP. HCM  ● Thông báo lịch học thay đổi ● Hệ thống Máy tính ● Ngày 03/07/2020, Từ tiết 6, Đến tiết 8, Phòng rỗng, </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item clearfix">
                                                    <div>
                                                        <a href="/khao-sat" title className="title view-nhacnho" data-idnn={5634086}>
                                                            <span>Phiếu khảo sát chất lượng học phần Lập trình di động Nâng cao</span>
                                                            <span className="date">-  08/06/2023</span>
                                                        </a>
                                                        <div>
                                                            <a className="view-nhacnho more-nhacnho more-nhacnho-5634086" data-idnn={5634086} lang="thongbaonhacnho-xemchitiet-button">Xem chi tiết</a>
                                                            <p className="content-nhacnho-5634086" style={{ display: 'none' }}>ĐH Công Nghiệp TP. HCM  ● Thông báo lịch học thay đổi ● Hệ thống Máy tính ● Ngày 08/06/2020, Từ tiết 12, Đến tiết 14, Phòng rỗng, </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item clearfix">
                                                    <div>
                                                        <a href="/khao-sat" title className="title view-nhacnho" data-idnn={5634115}>
                                                            <span>Phiếu khảo sát chất lượng học phần Lập trình nhúng</span>
                                                            <span className="date">-  15/06/2023</span>
                                                        </a>
                                                        <div>
                                                            <a className="view-nhacnho more-nhacnho more-nhacnho-5634115" data-idnn={5634115} lang="thongbaonhacnho-xemchitiet-button">Xem chi tiết</a>
                                                            <p className="content-nhacnho-5634115" style={{ display: 'none' }}>ĐH Công Nghiệp TP. HCM  ● Thông báo lịch học thay đổi ● Hệ thống Máy tính ● Ngày 15/06/2020, Từ tiết 12, Đến tiết 14, Phòng rỗng, </p>
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
        </div>
    )
}