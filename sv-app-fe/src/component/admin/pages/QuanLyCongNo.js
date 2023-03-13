import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
import { useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import PrintPhieuThu from "../../print/PrintPhieuThu";

export const CongNo = () => {
    const [sinhVienSearch, setSinhVienSearch] = useState('');
    const [dsHocPhi, setDsHocPhi] = useState('');
    const [dsPhieuThu, setDsPhieuThu] = useState('');
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [maPhieuThu, setMaPhieuThu] = useState('');


    const searchSinhVien = (e) => {
        if (e.key === 'Enter') {
            setSinhVienSearch(e.target.value);
        }
    }
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
                        alert("Không tìm thấy sinh viên");
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
        window.localStorage.clear();
        window.localStorage.setItem('ma', maPhieuThu);
    }, [maPhieuThu])

    const thanhToanCongNo = async () => {
        try {
            const res = await adminAPI.thanhToanCongNoSinhVien(sinhVienSearch, isCheck);
            if (res.status == 200) {
                alert('Thanh toán cho sinh viên thành công!!!');
                setIsCheck([]);
                setIsCheckAll(false);
                const dshpsv_res = await adminAPI.getDSHocPhiSinhVien(sinhVienSearch);
                const dsphieuthu_res = await adminAPI.getDanhSachPhieuThuSinhVien(sinhVienSearch);
                setDsPhieuThu(dsphieuthu_res.data);
                setDsHocPhi(dshpsv_res.data);
            }
        } catch (error) {
            console.log(error.message);
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
                                                                                    <tr onClick={(e) => {
                                                                                        setMaPhieuThu(dspth.ma_phieu_thu)
                                                                                    }}>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dspth.ma_phieu_thu}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dspth.ngay_thu}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>1860000</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>{dspth.don_vi_thu}</td>
                                                                                        <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                                            {/* <button type="button" className="btn  btn-primary"
                                                                                                style={{
                                                                                                    display: "inline-block", fontWeight: "400"
                                                                                                    , lineHeight: "1.53", userSelect: "none"
                                                                                                    , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                                                }}><AiIcons.AiFillPrinter /> Xuất phiếu</button> */}
                                                                                            <PrintPhieuThu />
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
        </>
    )
};