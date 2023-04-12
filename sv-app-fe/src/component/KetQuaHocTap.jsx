import { React, useState, useEffect } from "react";
import Sidenavbar from "./Sidenavbar";
import dkhpAPI from "../api/dkhpAPI";

export default function KetQuaHocTap() {
    const [dsDiemMaHK1, setDsDiemMaHK1] = useState();
    const [dsDiemMaHK2, setDsDiemMaHK2] = useState();
    const [dsDiemMaHK3, setDsDiemMaHK3] = useState();
    const [dsDiemMaHK4, setDsDiemMaHK4] = useState();
    const [dsDiemMaHK5, setDsDiemMaHK5] = useState();
    const [dsDiemMaHK6, setDsDiemMaHK6] = useState();
    const [dsDiemMaHK7, setDsDiemMaHK7] = useState();
    const [dsDiemMaHK8, setDsDiemMaHK8] = useState();

    let stt1 = 1;
    let stt2 = 1;
    let stt3 = 1;
    // let stt4 = 1;
    // let stt5 = 1;
    // let stt6 = 1;
    // let stt7 = 1;
    // let stt8 = 1;

    useEffect(() => {
        const activeAllDSDiem = async () => {
            try {
                const resHK1 = await dkhpAPI.getKetQuaHocTap(1);
                const resHK2 = await dkhpAPI.getKetQuaHocTap(2);
                const resHK3 = await dkhpAPI.getKetQuaHocTap(3);
                // const resHK4 = await dkhpAPI.getKetQuaHocTap(4);
                // const resHK5 = await dkhpAPI.getKetQuaHocTap(5);
                // const resHK6 = await dkhpAPI.getKetQuaHocTap(6);
                // const resHK7 = await dkhpAPI.getKetQuaHocTap(7);
                // const resHK8 = await dkhpAPI.getKetQuaHocTap(8);
                setDsDiemMaHK1(resHK1.data);
                setDsDiemMaHK2(resHK2.data);
                setDsDiemMaHK3(resHK3.data);
                // setDsDiemMaHK4(resHK4.data);
                // setDsDiemMaHK5(resHK5.data);
                // setDsDiemMaHK6(resHK6.data);
                // setDsDiemMaHK7(resHK7.data);
                // setDsDiemMaHK8(resHK8.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        activeAllDSDiem();
    }, [])

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

                                                            <th colSpan={5} lang="Row_1_3">
                                                                Thường xuyên
                                                            </th>
                                                            <th rowSpan={3} colSpan={2} lang="Row_1_2">
                                                                Giữa kỳ
                                                            </th>
                                                            <th colSpan={5} lang="Row_1_5">
                                                                Thực hành
                                                            </th>

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

                                                            <th colSpan={5} lang="Row_2_3_2">LT Hệ số 1</th>
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
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ overflowY: "auto", overflowX: "auto" }}>
                                                        {
                                                            (dsDiemMaHK1 && dsDiemMaHK1?.getKetQuaHocTap.length > 0) ?
                                                                <>
                                                                    <tr role="row">
                                                                        {/* <td colSpan={28} className="text-left row-head">HK1 (2019-2020)</td> */}
                                                                        <td colSpan={28} className="text-left row-head">
                                                                            HK
                                                                            {dsDiemMaHK1?.getKetQuaHocTap[0].thu_tu_hoc_ki}
                                                                            ( {dsDiemMaHK1?.getKetQuaHocTap[0].nam_hoc_bat_dau}-{dsDiemMaHK1?.getKetQuaHocTap[0].nam_hoc_ket_thuc})</td>
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
                                                                    {
                                                                        dsDiemMaHK1?.getKetQuaHocTap.length > 0
                                                                            ?
                                                                            <>
                                                                                {
                                                                                    dsDiemMaHK1["getKetQuaHocTap"].map((ds) => (
                                                                                        <>
                                                                                            <tr role="row">
                                                                                                <td style={{ width: '100px !important' }}><div style={{}}>{stt1++}</div></td>
                                                                                                <td style={{ width: '200px !important' }}>
                                                                                                    <div style={{}} title>
                                                                                                        {ds.ma_lop_hoc_phan}
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}>{ds.ten_mon_hoc}</div></td>
                                                                                                <td style={{ width: '100px !important' }}
                                                                                                    title={ds.so_tin_chi_thuc_hanh}
                                                                                                ><div style={{ display: 'inline-table' }}>{ds.so_tin_chi_ly_thuyet + ds.so_tin_chi_thuc_hanh}</div></td>

                                                                                                <td className title="DiemThuongKy1">{ds.diem_tk_1}</td>
                                                                                                <td className title="DiemThuongKy2">{ds.diem_tk_2}</td>
                                                                                                <td className title="DiemThuongKy3">{ds.diem_tk_3}</td>
                                                                                                <td className title="DiemThuongKy4" >{ds.diem_tk_4}</td>
                                                                                                <td className title="DiemThuongKy5" >{ds.diem_tk_5}</td>
                                                                                                <td className title="DiemGiuaKy" colSpan={2}>{ds.diem_gk}</td>
                                                                                                <td className title="DiemThucHanh1" >{ds.diem_th_1}</td>
                                                                                                <td className title="DiemThucHanh2" >{ds.diem_th_2}</td>
                                                                                                <td className title="DiemThucHanh3" >{ds.diem_th_3}</td>
                                                                                                <td className title="DiemThucHanh4" >{ds.diem_th_4}</td>
                                                                                                <td className title="DiemThucHanh5" >{ds.diem_th_5}</td>
                                                                                                <td className title="DiemThiCK">{ds.diem_ck}</td>
                                                                                                <td className title="DiemTongKetHe10">{ds.diem_tk_hs_10}</td>
                                                                                                <td className title="DiemTongKetHe4">{ds.diem_tk_hs_4}</td>
                                                                                                <td className title="DiemChu">{ds.diem_chu}</td>
                                                                                                <td className title="XepLoai">{
                                                                                                    (ds.xep_loai == 1) ? 'Yếu' : (ds.xep_loai == 2) ? 'Trung bình' :
                                                                                                        (ds.xep_loai == 3) ? 'Khá' : (ds.xep_loai == 4) ? 'Giỏi' :
                                                                                                            (ds.xep_loai == 5) ? 'Xuất sắc' : ''
                                                                                                }</td>
                                                                                                <td className title="GhiChu" />
                                                                                                <td>
                                                                                                    <div>
                                                                                                        {
                                                                                                            (ds.tinh_trang_hoc_tap == 0)
                                                                                                                ? <div className="check" />
                                                                                                                : (ds.tinh_trang_hoc_tap == 1)
                                                                                                                    ? <div className="no-check" />
                                                                                                                    : <></>
                                                                                                        }
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </>
                                                                            :
                                                                            <>
                                                                            </>
                                                                    }
                                                                </>
                                                                : <></>
                                                        }

                                                        {/* HK2 */}

                                                        {
                                                            (dsDiemMaHK2 && dsDiemMaHK2?.getKetQuaHocTap.length > 0) ?
                                                                <>
                                                                    <tr role="row">
                                                                        {/* <td colSpan={28} className="text-left row-head">HK1 (2019-2020)</td> */}
                                                                        <td colSpan={28} className="text-left row-head">
                                                                            HK
                                                                            {dsDiemMaHK2?.getKetQuaHocTap[0].thu_tu_hoc_ki}
                                                                            ( {dsDiemMaHK2?.getKetQuaHocTap[0].nam_hoc_bat_dau}-{dsDiemMaHK2?.getKetQuaHocTap[0].nam_hoc_ket_thuc})</td>
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
                                                                    {
                                                                        dsDiemMaHK2?.getKetQuaHocTap.length > 0
                                                                            ?
                                                                            <>
                                                                                {
                                                                                    dsDiemMaHK2["getKetQuaHocTap"].map((ds) => (
                                                                                        <>
                                                                                            <tr role="row">
                                                                                                <td style={{ width: '100px !important' }}><div style={{}}>{stt2++}</div></td>
                                                                                                <td style={{ width: '200px !important' }}>
                                                                                                    <div style={{}} title>
                                                                                                        {ds.ma_lop_hoc_phan}
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}>{ds.ten_mon_hoc}</div></td>
                                                                                                <td style={{ width: '100px !important' }}
                                                                                                    title={ds.so_tin_chi_thuc_hanh}
                                                                                                ><div style={{ display: 'inline-table' }}>{ds.so_tin_chi_ly_thuyet + ds.so_tin_chi_thuc_hanh}</div></td>

                                                                                                <td className title="DiemThuongKy1">{ds.diem_tk_1}</td>
                                                                                                <td className title="DiemThuongKy2">{ds.diem_tk_2}</td>
                                                                                                <td className title="DiemThuongKy3">{ds.diem_tk_3}</td>
                                                                                                <td className title="DiemThuongKy4" >{ds.diem_tk_4}</td>
                                                                                                <td className title="DiemThuongKy5" >{ds.diem_tk_5}</td>
                                                                                                <td className title="DiemGiuaKy" colSpan={2}>{ds.diem_gk}</td>
                                                                                                <td className title="DiemThucHanh1" >{ds.diem_th_1}</td>
                                                                                                <td className title="DiemThucHanh2" >{ds.diem_th_2}</td>
                                                                                                <td className title="DiemThucHanh3" >{ds.diem_th_3}</td>
                                                                                                <td className title="DiemThucHanh4" >{ds.diem_th_4}</td>
                                                                                                <td className title="DiemThucHanh5" >{ds.diem_th_5}</td>
                                                                                                <td className title="DiemThiCK">{ds.diem_ck}</td>
                                                                                                <td className title="DiemTongKetHe10">{ds.diem_tk_hs_10}</td>
                                                                                                <td className title="DiemTongKetHe4">{ds.diem_tk_hs_4}</td>
                                                                                                <td className title="DiemChu">{ds.diem_chu}</td>
                                                                                                <td className title="XepLoai">{
                                                                                                    (ds.xep_loai == 1) ? 'Yếu' : (ds.xep_loai == 2) ? 'Trung bình' :
                                                                                                        (ds.xep_loai == 3) ? 'Khá' : (ds.xep_loai == 4) ? 'Giỏi' :
                                                                                                            (ds.xep_loai == 5) ? 'Xuất sắc' : ''
                                                                                                }</td>
                                                                                                <td className title="GhiChu" />
                                                                                                <td>
                                                                                                    <div>
                                                                                                        {
                                                                                                            (ds.tinh_trang_hoc_tap == 0)
                                                                                                                ? <div className="check" />
                                                                                                                : (ds.tinh_trang_hoc_tap == 1)
                                                                                                                    ? <div className="no-check" />
                                                                                                                    : <></>
                                                                                                        }
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </>
                                                                            :
                                                                            <>
                                                                            </>
                                                                    }
                                                                </> :
                                                                <>
                                                                </>
                                                        }
                                                        {/* HK3 */}
                                                        {
                                                            (dsDiemMaHK3 && dsDiemMaHK3?.getKetQuaHocTap.length > 0) ?
                                                                <>
                                                                    <tr role="row">
                                                                        {/* <td colSpan={28} className="text-left row-head">HK1 (2019-2020)</td> */}
                                                                        <td colSpan={28} className="text-left row-head">
                                                                            HK
                                                                            {dsDiemMaHK3?.getKetQuaHocTap[0].thu_tu_hoc_ki}
                                                                            ( {dsDiemMaHK3?.getKetQuaHocTap[0].nam_hoc_bat_dau}-{dsDiemMaHK3?.getKetQuaHocTap[0].nam_hoc_ket_thuc})</td>
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
                                                                    {
                                                                        dsDiemMaHK3?.getKetQuaHocTap.length > 0
                                                                            ?
                                                                            <>
                                                                                {
                                                                                    dsDiemMaHK3["getKetQuaHocTap"].map((ds) => (
                                                                                        <>
                                                                                            <tr role="row">
                                                                                                <td style={{ width: '100px !important' }}><div style={{}}>{stt3++}</div></td>
                                                                                                <td style={{ width: '200px !important' }}>
                                                                                                    <div style={{}} title>
                                                                                                        {ds.ma_lop_hoc_phan}
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td style={{ width: '200px !important' }} className="text-left"><div style={{ wordBreak: 'break-word' }}>{ds.ten_mon_hoc}</div></td>
                                                                                                <td style={{ width: '100px !important' }}
                                                                                                    title={ds.so_tin_chi_thuc_hanh}
                                                                                                ><div style={{ display: 'inline-table' }}>{ds.so_tin_chi_ly_thuyet + ds.so_tin_chi_thuc_hanh}</div></td>

                                                                                                <td className title="DiemThuongKy1">{ds.diem_tk_1}</td>
                                                                                                <td className title="DiemThuongKy2">{ds.diem_tk_2}</td>
                                                                                                <td className title="DiemThuongKy3">{ds.diem_tk_3}</td>
                                                                                                <td className title="DiemThuongKy4" >{ds.diem_tk_4}</td>
                                                                                                <td className title="DiemThuongKy5" >{ds.diem_tk_5}</td>
                                                                                                <td className title="DiemGiuaKy" colSpan={2}>{ds.diem_gk}</td>
                                                                                                <td className title="DiemThucHanh1" >{ds.diem_th_1}</td>
                                                                                                <td className title="DiemThucHanh2" >{ds.diem_th_2}</td>
                                                                                                <td className title="DiemThucHanh3" >{ds.diem_th_3}</td>
                                                                                                <td className title="DiemThucHanh4" >{ds.diem_th_4}</td>
                                                                                                <td className title="DiemThucHanh5" >{ds.diem_th_5}</td>
                                                                                                <td className title="DiemThiCK">{ds.diem_ck}</td>
                                                                                                <td className title="DiemTongKetHe10">{ds.diem_tk_hs_10}</td>
                                                                                                <td className title="DiemTongKetHe4">{ds.diem_tk_hs_4}</td>
                                                                                                <td className title="DiemChu">
                                                                                                    {
                                                                                                        (ds.diem_tk_hs_10 > 9) ? 'A+' : (ds.diem_tk_hs_10 > 8.5) ? 'A' :
                                                                                                            (ds.diem_tk_hs_10 > 8) ? 'B+' : (ds.diem_tk_hs_10 > 7) ? 'B' :
                                                                                                                (ds.xep_loai > 6) ? 'C+' : (ds.xep_loai > 5.5) ? 'C' :
                                                                                                                    (ds.xep_loai > 5) ? 'D+' : (ds.xep_loai > 4) ? 'D' : 'F'
                                                                                                    }
                                                                                                </td>
                                                                                                <td className title="XepLoai">{
                                                                                                    (ds.xep_loai == 1) ? 'Yếu' : (ds.xep_loai == 2) ? 'Trung bình' :
                                                                                                        (ds.xep_loai == 3) ? 'Khá' : (ds.xep_loai == 4) ? 'Giỏi' :
                                                                                                            (ds.xep_loai == 5) ? 'Xuất sắc' : ''
                                                                                                }</td>
                                                                                                <td className title="GhiChu" />
                                                                                                <td>
                                                                                                    <div>
                                                                                                        {
                                                                                                            (ds.tinh_trang_hoc_tap == 0)
                                                                                                                ? <div className="check" />
                                                                                                                : (ds.tinh_trang_hoc_tap == 1)
                                                                                                                    ? <div className="no-check" />
                                                                                                                    : <></>
                                                                                                        }
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </>
                                                                            :
                                                                            <>
                                                                            </>
                                                                    }
                                                                </>
                                                                : <></>
                                                        }
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