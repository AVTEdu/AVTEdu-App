import { React, useState, useEffect } from "react";
import Sidenavbar from "./Sidenavbar";

export default function KetQuaHocTap() {
    return (
        <div className="wrapper">
            <Sidenavbar />
            <div className="main-content">
                <div className="container" id="full-resize-table">
                    <div className="main-section-content" id="contnet">
                        <div className="row">
                            <style dangerouslySetInnerHTML={{ __html: "\n    .tooltip {\n        position: absolute;\n        z-index: 1070;\n        display: block;\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-style: normal;\n        font-weight: 400;\n        line-height: 1.5;\n        text-align: left;\n        text-align: start;\n        text-decoration: none;\n        text-shadow: none;\n        text-transform: none;\n        letter-spacing: normal;\n        word-break: normal;\n        word-spacing: normal;\n        white-space: normal;\n        line-break: auto;\n        font-size: 0.875rem;\n        word-wrap: break-word;\n        opacity: 0;\n    }\n\n        .tooltip.show {\n            opacity: 0.9;\n        }\n\n        .tooltip .arrow {\n            position: absolute;\n            display: block;\n            width: 0.8rem;\n            height: 0.4rem;\n        }\n\n            .tooltip .arrow::before {\n                position: absolute;\n                content: \"\";\n                border-color: transparent;\n                border-style: solid;\n            }\n" }} />
                            <div className="col-md-12 col-xs-12">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold">Kết quả học tập </span>
                                            </div>
                                        </div>
                                        <div className="portlet-body">
                                            <style dangerouslySetInnerHTML={{ __html: "\n\n                    .container {\n                        width: auto;\n                    }\n\n                    .dataTables_scrollHeadInner {\n                        min-width: 100% !important;\n                    }\n\n                        .dataTables_scrollHeadInner table {\n                            min-width: 100% !important\n                        }\n\n                    .table-custom thead tr th {\n                        min-width: 48px;\n                        /*color:#0e2863!important;*/\n                    }\n\n                    .table-custom tbody tr td {\n                        min-width: 48px;\n                    }\n\n                    .th-chuandaura {\n                        color: red;\n                        background-color: lightgoldenrodyellow;\n                    }\n                " }} />
                                            <div className="table-wrapper" style={{ overflowX: 'auto' }}>
                                                <table id="xemDiem_aaa" className="table-custom table table-bordered text-center dataTable no-footer" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th rowSpan={3} style={{ width: '100px !important' }} lang="kqht-stt" className="sorting_disabled"><div>STT</div></th>
                                                            <th rowSpan={3} style={{ width: '200px !important', minWidth: '200px !important' }} lang="kqht-malhp" className="sorting_disabled"><div>Mã lớp học phần</div></th>
                                                            <th rowSpan={3} style={{ width: '200px !important' }} lang="kqht-tenlhp" className="sorting_disabled"><div>Tên môn học/học phần</div></th>
                                                            <th rowSpan={3} style={{ width: '100px !important' }} lang="kqht-stc" className="sorting_disabled"><div>Số tín chỉ</div></th>
                                                            <th colSpan={2} lang="Row_1_2">
                                                                Giữa kỳ
                                                            </th>
                                                            <th colSpan={9} lang="Row_1_3">
                                                                Thường xuyên
                                                            </th>
                                                            <th colSpan={5} lang="Row_1_5">
                                                                Thực hành
                                                            </th>
                                                            <th rowSpan={3} lang="DiemTBQuaTrinh" className="sorting_disabled">TBQT</th>
                                                            <th rowSpan={3} lang="Row_1_8" className="sorting_disabled">
                                                                Cuối kỳ
                                                            </th>
                                                            <th rowSpan={3} lang="Row_1_10" className="sorting_disabled">
                                                                Điểm tổng kết
                                                            </th>
                                                            <th rowSpan={3} lang="DiemTinChi" className="sorting_disabled">Thang điểm 4</th>
                                                            <th rowSpan={3} lang="DiemChu" className="sorting_disabled">Điểm chữ</th>
                                                            <th rowSpan={3} lang="XepLoai" className="sorting_disabled">Xếp loại</th>
                                                            <th rowSpan={3} lang="GhiChu" className="sorting_disabled">Ghi chú</th>
                                                            <th rowSpan={3} lang="IsDat" className="sorting_disabled">Đạt</th>
                                                        </tr>
                                                        <tr>
                                                            <th rowSpan={2} lang="DiemChuyenCan1" className="sorting_disabled">1</th>
                                                            <th rowSpan={2} lang="DiemChuyenCanE" className="sorting_disabled">Chuyên cần</th>
                                                            <th colSpan={9} lang="Row_2_3_2">LT Hệ số 1</th>
                                                            <th rowSpan={2} lang="DiemThucHanh1" className="sorting_disabled">1</th>
                                                            <th rowSpan={2} lang="DiemThucHanh2" className="sorting_disabled">2</th>
                                                            <th rowSpan={2} lang="DiemThucHanh3" className="sorting_disabled">3</th>
                                                            <th rowSpan={2} lang="DiemThucHanh4" className="sorting_disabled">4</th>
                                                            <th rowSpan={2} lang="DiemThucHanh5" className="sorting_disabled">5</th>
                                                        </tr>
                                                        <tr>
                                                            <th lang="DiemHeSo11" className="sorting_disabled">1</th>
                                                            <th lang="DiemHeSo12" className="sorting_disabled">2</th>
                                                            <th lang="DiemHeSo13" className="sorting_disabled">3</th>
                                                            <th lang="DiemHeSo14" className="sorting_disabled">4</th>
                                                            <th lang="DiemHeSo15" className="sorting_disabled">5</th>
                                                            <th lang="DiemThuongKy6" className="sorting_disabled">6</th>
                                                            <th lang="DiemThuongKy7" className="sorting_disabled">7</th>
                                                            <th lang="DiemThuongKy8" className="sorting_disabled">8</th>
                                                            <th lang="DiemThuongKy9" className="sorting_disabled">9</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr role="row">
                                                            <td colSpan={28} className="text-left row-head">HK1 (2019-2020)</td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr role="row">
                                                            <td style={{ width: '100px !important' }}><div style={{}}>1</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    4203000685134
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Những nguyên lý cơ bản của chủ nghĩa Mác - Lênin</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>5</div></td>
                                                            <td className title="DiemChuyenCan1">7,00</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11">7,00</td>
                                                            <td className title="DiemHeSo12">6,00</td>
                                                            <td className title="DiemHeSo13">7,00</td>
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">6,50</td>
                                                            <td className title="DiemTongKet">6,70</td>
                                                            <td className title="DiemTinChi">2,50</td>
                                                            <td className title="DiemChu">C+</td>
                                                            <td className title="XepLoai">Trung Bình</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr role="row">
                                                            <td style={{ width: '100px !important' }}><div style={{}}>2</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300200908
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Nhập môn Tin học</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>2</div></td>
                                                            <td className title="DiemChuyenCan1">7,50</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11">8,00</td>
                                                            <td className title="DiemHeSo12">8,50</td>
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">8,00</td>
                                                            <td className title="DiemTongKet">7,90</td>
                                                            <td className title="DiemTinChi">3,00</td>
                                                            <td className title="DiemChu">B </td>
                                                            <td className title="XepLoai">Khá</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr role="row">
                                                            <td style={{ width: '100px !important' }}><div style={{}}>3</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300306701
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Tiếng Anh 1</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>3</div></td>
                                                            <td className title="DiemChuyenCan1" />
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11" />
                                                            <td className title="DiemHeSo12" />
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">345,00</td>
                                                            <td className title="DiemTongKet">345,00</td>
                                                            <td className title="DiemTinChi" />
                                                            <td className title="DiemChu" />
                                                            <td className title="XepLoai" />
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr role="row">
                                                            <td style={{ width: '100px !important' }}><div style={{}}>4</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    4203003242120
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Giáo dục Quốc phòng và an ninh 1</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>4</div></td>
                                                            <td className title="DiemChuyenCan1" />
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11" />
                                                            <td className title="DiemHeSo12" />
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">6,00</td>
                                                            <td className title="DiemTongKet">6,00</td>
                                                            <td className title="DiemTinChi">2,50</td>
                                                            <td className title="DiemChu">C+</td>
                                                            <td className title="XepLoai">Trung Bình</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr role="row">
                                                            <td style={{ width: '100px !important' }}><div style={{}}>5</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    4203003259121
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Toán cao cấp 1</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>2</div></td>
                                                            <td className title="DiemChuyenCan1">9,50</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11">8,00</td>
                                                            <td className title="DiemHeSo12">8,00</td>
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">7,00</td>
                                                            <td className title="DiemTongKet">8,00</td>
                                                            <td className title="DiemTinChi">3,50</td>
                                                            <td className title="DiemChu">B+</td>
                                                            <td className title="XepLoai">Khá</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr role="row">
                                                            <td style={{ width: '100px !important' }}><div style={{}}>6</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    4203003307120
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Giáo dục thể chất 1</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>2</div></td>
                                                            <td className title="DiemChuyenCan1" />
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11" />
                                                            <td className title="DiemHeSo12" />
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className="cl-red" title="DiemThi">8,00</td>
                                                            <td className="cl-red" title="DiemTongKet">8,00</td>
                                                            <td className title="DiemTinChi">1,50</td>
                                                            <td className title="DiemChu">D+</td>
                                                            <td className title="XepLoai">Trung Bình Yếu</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr role="row">
                                                            <td style={{ width: '100px !important' }}><div style={{}}>7</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300384837
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Nhập môn Lập trình</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>2</div></td>
                                                            <td className title="DiemChuyenCan1" />
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11" />
                                                            <td className title="DiemHeSo12" />
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1">8,00</td>
                                                            <td className title="DiemThucHanh2">10,00</td>
                                                            <td className title="DiemThucHanh3">6,50</td>
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">8,00</td>
                                                            <td className title="DiemTongKet">7,20</td>
                                                            <td className title="DiemTinChi">3,00</td>
                                                            <td className title="DiemChu">B </td>
                                                            <td className title="XepLoai">Khá</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình học kỳ hệ 10:<span> 7,20</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình học kỳ hệ 4:<span> 2,86</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình tích lũy:<span> 7,20</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình tích lũy (hệ 4):<span> 2,86</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ đã đăng ký:<span> 11</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ tích lũy:<span> 11</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ đạt:<span> 11</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ nợ tính đến hiện tại:<span> 0</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Xếp loại học lực tích lũy:<span> Khá</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Xếp loại học lực học kỳ:<span> Khá</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={28} className="text-left row-head">HK2 (2019-2020)</td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '100px !important' }}><div style={{}}>8</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300094103
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Kỹ thuật lập trình</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>3</div></td>
                                                            <td className="cl-red" title="DiemChuyenCan1">3,00</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11">8,50</td>
                                                            <td className title="DiemHeSo12">8,00</td>
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1">8,00</td>
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">6,00</td>
                                                            <td className title="DiemTongKet">6,40</td>
                                                            <td className title="DiemTinChi">2,50</td>
                                                            <td className title="DiemChu">C+</td>
                                                            <td className title="XepLoai">Trung Bình</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '100px !important' }}><div style={{}}>9</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300213708
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Hệ thống Máy tính</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>4</div></td>
                                                            <td className="cl-red" title="DiemChuyenCan1">3,50</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className="cl-red" title="DiemHeSo11">4,00</td>
                                                            <td className title="DiemHeSo12">8,50</td>
                                                            <td className title="DiemHeSo13">8,00</td>
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className="cl-red" title="DiemThucHanh1">4,00</td>
                                                            <td className title="DiemThucHanh2">6,00</td>
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">7,50</td>
                                                            <td className title="DiemTongKet">5,90</td>
                                                            <td className title="DiemTinChi">2,00</td>
                                                            <td className title="DiemChu">C </td>
                                                            <td className title="XepLoai">Trung Bình</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '100px !important' }}><div style={{}}>10</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300319260
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Kỹ năng làm việc nhóm</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>2</div></td>
                                                            <td className title="DiemChuyenCan1">6,50</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11">8,50</td>
                                                            <td className title="DiemHeSo12">8,00</td>
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">7,00</td>
                                                            <td className title="DiemTongKet">7,10</td>
                                                            <td className title="DiemTinChi">3,00</td>
                                                            <td className title="DiemChu">B </td>
                                                            <td className title="XepLoai">Khá</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '100px !important' }}><div style={{}}>11</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300328883
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Toán cao cấp 2</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>2</div></td>
                                                            <td className title="DiemChuyenCan1">8,50</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11">6,50</td>
                                                            <td className title="DiemHeSo12">7,50</td>
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">5,50</td>
                                                            <td className title="DiemTongKet">6,70</td>
                                                            <td className title="DiemTinChi">2,50</td>
                                                            <td className title="DiemChu">C+</td>
                                                            <td className title="XepLoai">Trung Bình</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '100px !important' }}><div style={{}}>12</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300330674
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Giáo dục thể chất 2</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>2</div></td>
                                                            <td className title="DiemChuyenCan1" />
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11" />
                                                            <td className title="DiemHeSo12" />
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className="cl-red" title="DiemThi">5,00</td>
                                                            <td className="cl-red" title="DiemTongKet">5,00</td>
                                                            <td className title="DiemTinChi">1,50</td>
                                                            <td className title="DiemChu">D+</td>
                                                            <td className title="XepLoai">Trung Bình Yếu</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '100px !important' }}><div style={{}}>13</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    420300334509
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Vật lý đại cương</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>3</div></td>
                                                            <td className title="DiemChuyenCan1">7,50</td>
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11">8,50</td>
                                                            <td className title="DiemHeSo12">9,50</td>
                                                            <td className title="DiemHeSo13">6,00</td>
                                                            <td className title="DiemHeSo14">8,00</td>
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">9,50</td>
                                                            <td className title="DiemTongKet">8,60</td>
                                                            <td className title="DiemTinChi">3,80</td>
                                                            <td className title="DiemChu">A </td>
                                                            <td className title="XepLoai">Giỏi</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '100px !important' }}><div style={{}}>14</div></td>
                                                            <td style={{ width: '200px !important' }}>
                                                                <div style={{}} title>
                                                                    4203003354109
                                                                </div>
                                                            </td>
                                                            <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}> Giáo dục Quốc phòng và an ninh 2</div></td>
                                                            <td style={{ width: '100px !important' }}><div style={{ display: 'inline-table' }}>4</div></td>
                                                            <td className title="DiemChuyenCan1" />
                                                            <td className title="DiemChuyenCanE" />
                                                            <td className title="DiemHeSo11" />
                                                            <td className title="DiemHeSo12" />
                                                            <td className title="DiemHeSo13" />
                                                            <td className title="DiemHeSo14" />
                                                            <td className title="DiemHeSo15" />
                                                            <td className title="DiemThuongKy6" />
                                                            <td className title="DiemThuongKy7" />
                                                            <td className title="DiemThuongKy8" />
                                                            <td className title="DiemThuongKy9" />
                                                            <td className title="DiemThucHanh1" />
                                                            <td className title="DiemThucHanh2" />
                                                            <td className title="DiemThucHanh3" />
                                                            <td className title="DiemThucHanh4" />
                                                            <td className title="DiemThucHanh5" />
                                                            <td className title="DiemTBQuaTrinh" />
                                                            <td className title="DiemThi">7,00</td>
                                                            <td className title="DiemTongKet">7,00</td>
                                                            <td className title="DiemTinChi">3,00</td>
                                                            <td className title="DiemChu">B </td>
                                                            <td className title="XepLoai">Khá</td>
                                                            <td className title="GhiChu" />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình học kỳ hệ 10:<span> 6,90</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình học kỳ hệ 4:<span> 2,71</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình tích lũy:<span> 7,00</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Điểm trung bình tích lũy (hệ 4):<span> 2,78</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ đã đăng ký:<span> 25</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ tích lũy:<span> 25</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ đạt:<span> 14</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Tổng số tín chỉ nợ tính đến hiện tại:<span> 0</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Xếp loại học lực tích lũy:<span> Khá</span>
                                                            </td>
                                                            <td colSpan={2} className style={{ verticalAlign: 'top !important', textAlign: 'left !important', fontWeight: '' }}>
                                                                <span className />Xếp loại học lực học kỳ:<span> Khá</span>
                                                            </td>
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td colSpan={28} />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
                                                            <td className="hidden" />
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
    )
}