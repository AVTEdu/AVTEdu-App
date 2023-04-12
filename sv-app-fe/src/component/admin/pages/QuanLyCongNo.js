import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import adminAPI from "../../../api/adminAPI";
import $ from 'jquery';
import PopupNotify from "../../PopupNotify";


export const CongNo = () => {
    const [sinhVienSearch, setSinhVienSearch] = useState('');
    const [dsHocPhi, setDsHocPhi] = useState('');
    const [dsPhieuThu, setDsPhieuThu] = useState('');
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [maPhieuThu, setMaPhieuThu] = useState(0);
    const [dsChiTietPhieuThu, setDsChiTietPhieuThu] = useState();
    var sendDate = (new Date()).getTime();
    const [resTime, setResTime] = useState(0);
    let sttKhoanThu = 1;
    let tongTien = 0;
    const [stateThanhToanSinhVien, setStateThanhToanSinhVien] = useState();

    const searchSinhVien = (e) => {
        if (e.key === 'Enter') {
            setSinhVienSearch(e.target.value);
        }
    }
    const [popupNotify, setPopupNotify] = useState({
        title: '',
        mes: '',
        isLoading: false
    })
    useEffect(() => {
        const activeSinhVienTimDuoc = async () => {
            try {
                const dshpsv_res = await adminAPI.getDSHocPhiSinhVien(sinhVienSearch);
                const dsphieuthu_res = await adminAPI.getDanhSachPhieuThuSinhVien(sinhVienSearch);
                setDsPhieuThu(dsphieuthu_res.data);
                setDsHocPhi(dshpsv_res.data);
                // setSinhVienSearch("");
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403 && sinhVienSearch) {
                        setPopupNotify({
                            title: 'Thông báo',
                            mes: 'Không tìm thấy sinh viên',
                            isLoading: true
                        });
                        setSinhVienSearch("");
                        setDsHocPhi("");
                        setDsPhieuThu("");
                    }
                }
            }
        };
        activeSinhVienTimDuoc();
    }, [sinhVienSearch])

    useEffect(() => {
        if (resTime > 0) {
            console.log(resTime);
            setTimeout(() => {
                PrintElem($('#id-phieu-thu'));
                setMaPhieuThu('');
            }, resTime + 200)
        }
    }, [resTime])

    useEffect(() => {
        const activeRefresh = async () => {
            try {
                const dshpsv_res = await adminAPI.getDSHocPhiSinhVien(sinhVienSearch);
                const dsphieuthu_res = await adminAPI.getDanhSachPhieuThuSinhVien(sinhVienSearch);
                setDsPhieuThu(dsphieuthu_res.data);
                setDsHocPhi(dshpsv_res.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        activeRefresh();
    }, [stateThanhToanSinhVien])

    useEffect(() => {
        // setTimeout(() => {
        //     window.localStorage.setItem('ma_phieu_thu', maPhieuThu);
        //     window.localStorage.setItem('ma', sinhVienSearch);
        // }, 5000);
        // localStorage.setItem('ma_phieu_thu', JSON.stringify(maPhieuThu));
        if (maPhieuThu !== 0) {
            const activeChiTietPhieuThu = async () => {
                try {
                    const res = await adminAPI.getChiTietPhieuThuTongHop(sinhVienSearch, maPhieuThu);
                    setDsChiTietPhieuThu(res.data);
                    var receiveDate = (new Date()).getTime();
                    var responseTimeMs = receiveDate - sendDate;
                    setResTime(responseTimeMs);
                    console.log(res.data);
                } catch (error) {
                    console.log(error.message);
                }
            };
            activeChiTietPhieuThu();
            // setTimeout(() => {
            //     PrintElem($('#id-phieu-thu'));
            // }, 1000);
        }
    }, [maPhieuThu])
    // window.localStorage.setItem('ma_phieu_thu', maPhieuThu);
    // window.localStorage.setItem('ma', sinhVienSearch);

    function PrintElem(elem) {
        var mywindow = window.open('', 'PRINT', 'height=720,width=1200');
        mywindow.document.write('<html><head>')
        //mywindow.document.write('<link href = "../../../assets/css/style.css" rel = "stylesheet" type="text/css"/>');
        // mywindow.document.write('<link href = "/Content/ThemeMXH/css/responsive.css" rel = "stylesheet" type="text/css"/>');
        // mywindow.document.write('<link href = "/Content/ThemeMXH/css/main.css" rel = "stylesheet" type="text/css"/>');
        mywindow.document.write('</head><body >');
        mywindow.document.write($(elem).html());
        mywindow.document.write('</body></html>');
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/
        setTimeout(function () { mywindow.print(); mywindow.close(); }, 500);

        return true;
    }


    const thanhToanCongNo = async () => {
        try {
            const res = await adminAPI.thanhToanCongNoSinhVien(sinhVienSearch, isCheck);
            if (res.status == 200 && isCheck.length > 0) {
                setIsCheck([]);
                setIsCheckAll(false);
                setStateThanhToanSinhVien(res.data);
                setPopupNotify({
                    title: 'Thông báo',
                    mes: 'Thanh toán cho sinh viên thành công !!!',
                    isLoading: true
                });
            } else {
                setPopupNotify({
                    title: 'Thông báo',
                    mes: 'Hãy chọn ít nhất 1 công nợ để thanh toán !!!',
                    isLoading: true
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    function handleNotify(choose) {
        if (choose) {
            setPopupNotify({
                title: '',
                mes: '',
                isLoading: false
            });
        }
    }

    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(dsHocPhi["dsHocPhiSinhVien"].map((dshp) => dshp.ma_hoc_phi));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        const idConvert = Number(id);
        setIsCheck([...isCheck, idConvert]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== idConvert));
        }
    };

    console.log(isCheck);


    return (
        <>
            <Sidebar />
            <div className="qlhp">
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <div className="layout-page">

                            {/* Content wrapper */}
                            <div className="content-wrapper">
                                {/* Content */}
                                <div className="container-xxl flex-grow-1 container-p-y">

                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <nav className="layout-navbar container-xxl navbar navbar-expand-xl  align-items-center bg-navbar-theme" id="layout-navbar">

                                                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                                    {/* Search */}
                                                    <div className="navbar-nav align-items-center">
                                                        <div className="nav-item d-flex align-items-center">
                                                            <i className="bx bx-search fs-4 lh-0" />
                                                            <input type="text" className="form-control border-0 shadow-none"
                                                                onKeyDown={searchSinhVien}
                                                                placeholder="Mã số sinh viên..." />
                                                        </div>
                                                    </div>
                                                    {/* /Search */}

                                                </div>
                                            </nav>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card">
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <h5 style={{
                                                                fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                                , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                            }}>Danh sách công nợ</h5>
                                                        </div>
                                                        <div className="col-md-4">

                                                        </div>
                                                        <div className="col-md-4">
                                                            <button type="button" className="btn  btn-success"
                                                                style={{
                                                                    display: "inline-block", fontWeight: "400", float: "right"
                                                                    , lineHeight: "1.53", textAlign: "right", verticalAlign: "right", userSelect: "none"
                                                                    , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                }}
                                                                onClick={thanhToanCongNo}
                                                            ><AiIcons.AiTwotoneEdit /> Thanh toán</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card-body">
                                                    <div className="table-responsive text-nowrap">
                                                        <table className="table table-bordered" style={{
                                                            borderColor: "#d9dee3", color: "#697a8d",
                                                            border: "2px solid", backgroundColor: "#fff"
                                                        }} >
                                                            <thead>
                                                                <tr style={{ backgroundColor: "#CADAE1" }}>
                                                                    <th style={{
                                                                        border: "2px solid"
                                                                    }}>
                                                                        <input type="checkbox"
                                                                            name="selectAll"
                                                                            id="selectAll"
                                                                            onChange={handleSelectAll}
                                                                            checked={isCheckAll} />
                                                                    </th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Mã học phí</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Môn học</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Mã LHP</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Nội dung thu</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Trạng thái</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Số tiền</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Công nợ</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Đã nộp</th>
                                                                    {/* <th style={{ border: "2px solid", textAlign: "center" }}>Thao tác</th> */}
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">

                                                                {
                                                                    dsHocPhi
                                                                        ?
                                                                        <>
                                                                            {
                                                                                dsHocPhi["dsHocPhiSinhVien"].map((dshp) => (

                                                                                    <tr>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <input key={dshp.ma_hoc_phi}
                                                                                                type="checkbox"
                                                                                                id={dshp.ma_hoc_phi}
                                                                                                onChange={handleClick}
                                                                                                checked={isCheck.includes(dshp.ma_hoc_phi)}

                                                                                            />
                                                                                        </td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dshp.ma_hoc_phi}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dshp.ten_mon_hoc}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dshp.ma_lop_hoc_phan}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dshp.noi_dung_thu}</td>
                                                                                        {
                                                                                            // dshp.trang_thai != 0
                                                                                            //     ?
                                                                                            //     <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                                            //         <select className="form-control" style={{ textAlign: "center" }}
                                                                                            //             defaultValue={1}>
                                                                                            //             <option value={0}>Đã thanh toán</option>
                                                                                            //             <option value={1}>Chưa thanh toán</option>
                                                                                            //         </select>
                                                                                            //     </td>
                                                                                            //     :
                                                                                            //     <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                                            //         <select className="form-control" style={{ textAlign: "center" }}
                                                                                            //             defaultValue={0}>
                                                                                            //             <option value={0}>Đã thanh toán</option>
                                                                                            //             <option value={1}>Chưa thanh toán</option>
                                                                                            //         </select>
                                                                                            //     </td>
                                                                                            <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                                                <select className="form-control" style={{ textAlign: "center" }}
                                                                                                    value={dshp.trang_thai}>
                                                                                                    <option value={0}>Đã thanh toán</option>
                                                                                                    <option value={1}>Chưa thanh toán</option>
                                                                                                </select>
                                                                                            </td>
                                                                                        }
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dshp.so_tien}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dshp.cong_no}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dshp.so_tien_da_nop}</td>
                                                                                        {/* <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                                            <button type="button" className="btn  btn-success"
                                                                                                style={{
                                                                                                    display: "inline-block", fontWeight: "400"
                                                                                                    , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                                                    , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                                                }}><AiIcons.AiTwotoneEdit /> Cập nhật</button>
                                                                                        </td> */}
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </>
                                                                        : <tr>
                                                                            <td colSpan={9} className="text-center">
                                                                                <p className="bold"><span>Tạm chưa có dữ liệu</span></p>
                                                                            </td>
                                                                        </tr>
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br />
                                    <br />
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Danh sách phiếu thu</h5>
                                                <div className="card-body">
                                                    <div className="table-responsive text-nowrap">
                                                        <table className="table table-bordered" style={{
                                                            borderColor: "#d9dee3", color: "#697a8d",
                                                            border: "2px solid", backgroundColor: "#fff"
                                                        }} >
                                                            <thead>
                                                                <tr style={{ backgroundColor: "#CADAE1" }}>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Mã phiếu thu</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Ngày thu</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Tổng tiền</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Đơn vị thu</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                {
                                                                    dsPhieuThu && dsPhieuThu?.dsHocPhiSinhVien.length > 0
                                                                        ?
                                                                        <>
                                                                            {
                                                                                dsPhieuThu["dsHocPhiSinhVien"].map((dspth) => (
                                                                                    <tr
                                                                                    // onClick={(e) => {
                                                                                    //     setMaPhieuThu(dspth.ma_phieu_thu)
                                                                                    // }}
                                                                                    >
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dspth.ma_phieu_thu}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dspth.ngay_thu}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dspth.tong_tien}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dspth.don_vi_thu}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}
                                                                                        >
                                                                                            <button type="button" className="btn  btn-primary"
                                                                                                style={{
                                                                                                    display: "inline-block", fontWeight: "400"
                                                                                                    , lineHeight: "1.53", userSelect: "none"
                                                                                                    , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                                                }}
                                                                                                onClick={(e) => {
                                                                                                    setMaPhieuThu(dspth.ma_phieu_thu)
                                                                                                }}
                                                                                            // onClick={(e) => { PrintElem($('#id-phieu-thu')) }}
                                                                                            ><AiIcons.AiFillPrinter /> Xuất phiếu</button>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </>
                                                                        :
                                                                        <tr>
                                                                            <td colSpan={5} className="text-center">
                                                                                <p className="bold"><span>Tạm chưa có dữ liệu</span></p>
                                                                            </td>
                                                                        </tr>
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
                            {/* Content wrapper */}
                        </div>
                    </div>
                </div>
            </div>

            {
                dsChiTietPhieuThu
                    ?
                    <div id="id-phieu-thu"
                        style={{ display: 'none' }}
                    >
                        <table style={{ width: '95%', fontFamily: '"Times New Roman"' }}>
                            <tbody>
                                <tr>
                                    <td style={{ paddingTop: '20px' }}>
                                        <table style={{ width: '100%' }}>
                                            <tbody><tr>
                                                <td style={{ width: '60px' }}>
                                                    <img />
                                                </td>
                                                <td style={{ textAlign: 'center', width: '300px', fontWeight: 'bolder', fontSize: 'smaller' }}>
                                                    <p style={{ marginTop: '0pt', marginBottom: '0pt', marginLeft: '0in', textAlign: 'center' }}><span style={{ language: 'en-US' }}><span style={{ unicodeBidi: 'embed' }}><span style={{ fontSize: '11.0pt' }}><span style={{ fontFamily: '"Times New Roman"' }}><span style={{ color: 'black' }}><span style={{ language: 'en-US' }}><span style={{ fontWeight: 'bold' }}><span style={{ fontStyle: 'normal' }}><span style={{ alignItems: 'center' }}>BỘ CÔNG THƯƠNG</span></span></span></span></span></span></span></span></span></p>
                                                    <p style={{ marginTop: '0pt', marginBottom: '0pt', marginLeft: '0in', textAlign: 'center' }}><span style={{ language: 'en-US' }}><span style={{ unicodeBidi: 'embed' }}><span style={{ fontSize: '11.0pt' }}><span style={{ fontFamily: '"Times New Roman"' }}><span style={{ color: 'black' }}><span style={{ language: 'en-US' }}><span style={{ fontWeight: 'bold' }}><span style={{ fontStyle: 'normal' }}><span style={{ alignItems: 'center' }}>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM</span></span></span></span></span></span></span></span></span></p>
                                                    <p>--------------------------</p>
                                                </td>
                                                <td style={{ width: 'auto' }} />
                                                <td style={{ textAlign: 'center', width: '350px', fontWeight: 'bolder', fontSize: 'smaller' }}>
                                                    CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br />
                                                    Độc Lập - Tự Do - Hạnh Phúc<br />
                                                    ---------------------------------
                                                </td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', fontSize: '26px', fontWeight: 'bolder', height: '40px' }}>
                                        HÓA ĐƠN BÁN HÀNG
                                        <br />
                                        (THU TIỀN HỌC PHÍ)
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', height: '30px' }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px' }}>
                                        <table style={{ width: '100%', fontWeight: 'bold' }}>
                                            <tbody>
                                                {


                                                    dsChiTietPhieuThu?.data?.getThongTinCoBanSinhVien
                                                        .map((item, i) => (
                                                            <><tr key={i}>
                                                                <td style={{ width: '300px', paddingBottom: '5px' }}>Mã sinh viên: {item.ma_sinh_vien}</td>
                                                                <td style={{ width: '400px' }}>Họ tên: {item.ho_ten_sinh_vien}</td>
                                                                {/* <td style={{ width: '200px' }}>Lớp học: DHKTPM15A </td> */}
                                                            </tr><tr>
                                                                    <td style={{ width: '300px', paddingBottom: '5px' }}>Hệ đào tạo: Đại học </td>
                                                                    <td style={{ width: '400px' }}>Khoa: Khoa Công nghệ Thông tin </td>
                                                                </tr>
                                                                {/* <tr>
                                                            <td style={{ width: '300px', paddingBottom: '5px' }}>Mã phiếu thu: 0097946 </td>
                                                            <td style={{ width: '400px' }}>Hình thức thanh toán:  </td>
                                                        </tr> */}
                                                            </>
                                                        ))
                                                }
                                            </tbody></table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', paddingTop: '15px', paddingBottom: '5px' }}>
                                        Các khoản đã nộp:
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px' }}>
                                        <table className="table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting_disabled"
                                                        style={{
                                                            borderTop: "0", borderBottom: "0", verticalAlign: "middle", textAlign: "center"
                                                            , padding: "16px 5px", border: "1px solid #ddd"
                                                        }}>STT</th>
                                                    <th className="sorting_disabled" style={{
                                                        borderTop: "0", borderBottom: "0", verticalAlign: "middle", textAlign: "center"
                                                        , padding: "16px 5px", border: "1px solid #ddd"
                                                    }}>Mã khoản thu</th>
                                                    <th className="sorting_disabled" style={{
                                                        borderTop: "0", borderBottom: "0", verticalAlign: "middle", textAlign: "center"
                                                        , padding: "16px 5px", border: "1px solid #ddd"
                                                    }}>Tên khoản thu</th>
                                                    <th className="sorting_disabled" style={{
                                                        borderTop: "0", borderBottom: "0", verticalAlign: "middle", textAlign: "center"
                                                        , padding: "16px 5px", border: "1px solid #ddd"
                                                    }}>Học kỳ</th>
                                                    <th className="sorting_disabled" style={{
                                                        borderTop: "0", borderBottom: "0", verticalAlign: "middle", textAlign: "center"
                                                        , padding: "16px 5px", border: "1px solid #ddd"
                                                    }}>Thành tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    dsChiTietPhieuThu?.data?.getChiTietPhieuThu
                                                        .map((item, i) => (
                                                            <tr key={i}>
                                                                <td
                                                                    style={{
                                                                        border: "1px solid #ddd", lineHeight: "1.42857143"
                                                                        , textAlign: "center", borderRadius: "0"
                                                                    }}
                                                                >{sttKhoanThu++}</td>
                                                                <td
                                                                    style={{
                                                                        border: "1px solid #ddd", lineHeight: "1.42857143"
                                                                        , textAlign: "center", borderRadius: "0"
                                                                    }}
                                                                >{item.ma_hoc_phi}</td>
                                                                <td className="text-left"
                                                                    style={{
                                                                        border: "1px solid #ddd", lineHeight: "1.42857143"
                                                                        , textAlign: "left", borderRadius: "0"
                                                                    }}
                                                                >{item.ten_mon_hoc}</td>
                                                                <td
                                                                    style={{
                                                                        border: "1px solid #ddd", lineHeight: "1.42857143"
                                                                        , textAlign: "center", borderRadius: "0"
                                                                    }}
                                                                >{item.nam_hoc_bat_dau}-{item.nam_hoc_ket_thuc}</td>
                                                                <td className="text-right"
                                                                    style={{
                                                                        border: "1px solid #ddd", lineHeight: "1.42857143"
                                                                        , textAlign: "right", borderRadius: "0"
                                                                    }}
                                                                >
                                                                    <span>{item.so_tien}</span>
                                                                </td>
                                                                <p hidden>
                                                                    {tongTien = item.so_tien + tongTien};
                                                                </p>
                                                            </tr>
                                                        ))
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'right', paddingTop: '5px' }}>
                                        <div style={{ fontWeight: 'bold' }}>
                                            Tổng cộng:                                  <span>{tongTien}</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
                                        <div style={{ fontWeight: 'bold' }}>Số tiền bằng chữ: <span>Chưa có</span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table style={{ width: '100%', textAlign: 'center' }}>
                                            <tbody><tr>
                                                <td />
                                                <td style={{ width: '300px' }} />
                                            </tr>
                                                <tr>
                                                    <td />
                                                    <td style={{ width: '300px', fontWeight: 'bold', paddingTop: '25px' }}>
                                                        Người thu<br />
                                                        (Ký, ghi rõ họ tên)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td />
                                                    <td style={{ width: '300px', paddingTop: '40px', fontWeight: 'bold' }}>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    : <></>
            }
            {popupNotify.isLoading && <PopupNotify onDialog={handleNotify} title={popupNotify.title} mes={popupNotify.mes} />}
        </>
    )
};