import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
// import * as Corecss from "../../../assets/vendor/css/core.css";
import { useState, useEffect } from "react";
import Popup from "../../Popup";
import adminAPI from "../../../api/adminAPI";
import PopupNotify from "../../PopupNotify";



export const HocKi = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dsHK, setDsHK] = useState();
    useEffect(() => {
        const getAllHK = async () => {
            try {
                const res = await adminAPI.getAllHocKi();
                setDsHK(res.data);
            } catch (error) {

            }
        };
        getAllHK();
    }, [])
    return (
        <>
            <Sidebar />
            <div className="qlhp" style={{ backgroundColor: "#E7EEF1" }}>
                <div class="layout-wrapper layout-content-navbar">
                    <div class="layout-container">
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
                                                            <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
                                                        </div>
                                                    </div>
                                                    {/* /Search */}

                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                            <h4 className="card-header" style={{ fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý học kỳ </h4>
                                        </div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-5">
                                            <div className="mb-3">
                                                <div className="demo-inline-spacing">
                                                    <button type="button" class="btn btn-primary"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiOutlineUpload /> Export</button>
                                                    <button type="button" class="btn  btn-success"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiOutlineDownload /> Import</button>
                                                    <button type="button" class="btn  btn-danger"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiFillDelete /> Xóa</button>
                                                    <button type="button" class="btn btn-info"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme",
                                                        }}
                                                        onClick={() => { setOpenPopup(true); }}
                                                    > <AiIcons.AiFillPlusSquare /> Thêm mới</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Danh sách học kỳ</h5>
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
                                                                        <input type="checkbox"></input>
                                                                    </th>
                                                                    <th style={{ border: "2px solid" }}>Mã học kỳ</th>
                                                                    <th style={{ border: "2px solid" }}>Năm bắt đầu</th>
                                                                    <th style={{ border: "2px solid" }}>Năm kết thúc</th>
                                                                    <th style={{ border: "2px solid" }}>Thứ tự học kỳ</th>
                                                                    <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                {
                                                                    dsHK && dsHK?.result.length > 0
                                                                        ? <>
                                                                            {
                                                                                dsHK["result"].map((ds) => (
                                                                                    <tr>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <input type="checkbox" value=""></input>
                                                                                        </td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_hoc_ki}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.nam_hoc_bat_dau}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.nam_hoc_ket_thuc}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.thu_tu_hoc_ki}</td>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <a ><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                            <a style={{ marginLeft: "15px" }} ><i className="bx bx-trash me-1" /> Delete</a>
                                                                                        </td>
                                                                                    </tr>

                                                                                ))
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
                            {/* Content wrapper */}
                        </div>
                    </div>
                </div>

                <Popup
                    title="Thêm Học kỳ"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <div className="qlhp">
                        <div className="layout-wrapper layout-content-navbar">
                            <div className="layout-container">
                                <div className="layout-page">
                                    <div className="content-wrapper">
                                        <div className="container-xxl flex-grow-1 container-p-y">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card mb-4">
                                                        <div className="card-body">
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã học kỳ</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Năm bắt đầu</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Năm kết thúc</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Thứ tự học kỳ</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="demo-inline-spacing">
                                                                    <button type="button" class="btn rounded-pill btn-outline-primary"
                                                                        style={{
                                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                        }}
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            setOpenPopup(false)
                                                                        }}
                                                                    >Lưu</button>
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
                </Popup>
            </div>
        </>
    );
};

export const LopHocPhan = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dsLopHP, setDsLopHP] = useState();
    const [dsLopTheoHK, setDsLopTheoHK] = useState();
    const [dsHK, setDsHk] = useState();
    const [maHK, setMaHK] = useState();
    const [dsKhoa, setDSKhoa] = useState();
    const [maKhoa, setMaKhoa] = useState();
    const [dsChuyenNganh, setDsChuyenNganh] = useState();
    const [maCN, setMaCN] = useState();
    useEffect(() => {
        const getAllLop = async () => {
            try {
                const res = await adminAPI.getAllLopHocPhan();
                setDsLopHP(res.data);
            } catch (error) {

            }
        };
        getAllLop();
    }, [])
    useEffect(() => {
        const getDSKhoa = async () => {
            try {
                const res = await adminAPI.getDanhSachToanBoKhoa();
                setDSKhoa(res.data);
            } catch (error) {

            }
        };
        getDSKhoa();
    }, [])
    useEffect(() => {
        const getAllHK = async () => {
            try {
                const res = await adminAPI.getAllHocKi();
                setDsHk(res.data);
            } catch (error) {

            }
        };
        getAllHK();
    }, [])
    const getDSLopTheoCNvaHK = async (e) => {
        try {
            const res = await adminAPI.getDSLopTheoChuyenNganhHocKi(e.target.value, maCN)
            setDsLopTheoHK(res.data);
            setDsLopHP('');
        } catch (error) {

        }
    };
    useEffect(() => {
        const getdsCNtheoK = async () => {
            try {
                const res = await adminAPI.getDsChuyenNganhTheoKhoa(maKhoa);
                setDsChuyenNganh(res.data);
            } catch (error) {

            }
        };
        getdsCNtheoK();
    }, [maKhoa])
    const getMaHK = (e) => {
        setMaHK(e.target.value);
    }
    const getMaKhoa = (e) => {
        setMaKhoa(e.target.value);
    }
    const getMaChuyenNganh = (e) => {
        setMaCN(e.target.value);
    }
    if (!dsHK) return null;
    if (!dsKhoa) return null;
    return (
        <>
            <Sidebar />
            <div className="qlhp" style={{ backgroundColor: "#E7EEF1" }}>
                <div class="layout-wrapper layout-content-navbar">
                    <div class="layout-container">
                        <div className="layout-page">

                            {/* Content wrapper */}
                            <div className="content-wrapper">
                                {/* Content */}
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">

                                            <div className="card-gv-header grid-bg">
                                                <h5 style={{
                                                    display: "inline-flex",
                                                    position: "relative",
                                                    boxSizing: "border-box",
                                                    backgroundColor: "transparent",
                                                    border: "0",
                                                    margin: "0",
                                                    textDecoration: "none",
                                                    fontWeight: "500",
                                                    fontSize: "0.875rem",
                                                    lineHeight: "1.75",
                                                    letterSpacing: "0.02857em",
                                                    textTransform: "uppercase",
                                                    minWidth: "64px",
                                                    padding: "6px 8px",
                                                }}>Lọc Danh sách lớp học phần</h5>
                                                <div className="card-body">
                                                    <div className="demo-inline-spacing">
                                                        <div className="col-md-3">
                                                            <label htmlFor="exampleFormControlSelect1" className="form-label">Khoa</label>
                                                            <select className="form-select" id="exampleFormControlSelect1" aria-label="Default select example"
                                                                onChange={(e) => getMaKhoa(e)}
                                                            >
                                                                <option selected>Chọn Khoa</option>
                                                                {
                                                                    dsKhoa["result"].map((dsK) => (
                                                                        <option key={dsK.ma_khoa} value={dsK.ma_khoa} >
                                                                            {dsK.ten_khoa}
                                                                        </option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label htmlFor="exampleFormControlSelect1" className="form-label">Chuyên ngành</label>
                                                            <select className="form-select" id="exampleFormControlSelect1" aria-label="Default select example"
                                                                onChange={(e) => getMaChuyenNganh(e)}
                                                            >
                                                                <option selected>Chọn chuyên ngành</option>
                                                                {
                                                                    dsChuyenNganh["ds"].map((ds) => (
                                                                        <option key={ds.ma_chuyen_nganh} value={ds.ma_chuyen_nganh} >
                                                                            {ds.ten_chuyen_nganh}
                                                                        </option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label htmlFor="exampleFormControlSelect1" className="form-label">Học kỳ</label>
                                                            <select className="form-select" id="exampleFormControlSelect1" aria-label="Default select example"
                                                                onChange={(e) => getDSLopTheoCNvaHK(e)}
                                                            >
                                                                <option selected>Chọn học kỳ</option>
                                                                {
                                                                    dsHK["result"].map((ds) => (
                                                                        <option key={ds.ma_hoc_ki} value={ds.ma_hoc_ki} >
                                                                            {ds.nam_hoc_bat_dau}-{ds.nam_hoc_ket_thuc} HK{ds.thu_tu_hoc_ki}
                                                                        </option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                            <h4 className="card-header" style={{ fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý lớp học phần </h4>
                                        </div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-5">
                                            <div className="mb-3">
                                                <div className="demo-inline-spacing">
                                                    <button type="button" class="btn btn-primary"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiOutlineUpload /> Export</button>
                                                    <button type="button" class="btn  btn-success"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiOutlineDownload /> Import</button>
                                                    <button type="button" class="btn  btn-danger"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiFillDelete /> Xóa</button>
                                                    <button type="button" class="btn btn-info"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme",
                                                        }}
                                                        onClick={() => { setOpenPopup(true); }}
                                                    > <AiIcons.AiFillPlusSquare /> Thêm mới</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Danh sách lớp học phần</h5>
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
                                                                        <input type="checkbox"></input>
                                                                    </th>
                                                                    <th style={{ border: "2px solid" }}>Mã lớp học phần</th>
                                                                    <th style={{ border: "2px solid" }}>Tên lớp học phần</th>
                                                                    <th style={{ border: "2px solid" }}>Số lượng sv tối đa</th>
                                                                    <th style={{ border: "2px solid" }}>Số lượng đã đăng ký</th>
                                                                    <th style={{ border: "2px solid" }}>Số nhóm thực hành</th>
                                                                    <th style={{ border: "2px solid" }}>Trạng thái</th>
                                                                    <th style={{ border: "2px solid" }}>Mã học kỳ</th>
                                                                    <th style={{ border: "2px solid" }}>Mã học phần</th>
                                                                    <th style={{ border: "2px solid" }}>Mô tả</th>
                                                                    <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                {
                                                                    dsLopHP && dsLopHP?.result.length > 0
                                                                        ?
                                                                        <>
                                                                            {
                                                                                dsLopHP["result"].map((ds) => (
                                                                                    <tr>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <input type="checkbox" value=""></input>
                                                                                        </td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_lop_hoc_phan}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ten_lop_hoc_phan}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.so_luong_dang_ki_toi_da}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.so_luong_dang_ki_hien_tai}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.so_nhom_thuc_hanh}</td>
                                                                                        <td style={{ border: "2px solid" }}>{
                                                                                            ds.trang_thai == 1 ? "Chờ sv đăng ký" : "Đã khóa"
                                                                                        }</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_hoc_ki}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_hoc_phan}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.mo_ta}</td>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <a ><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                            <a style={{ marginLeft: "15px" }} ><i className="bx bx-trash me-1" /> Delete</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            {
                                                                                dsLopTheoHK && dsLopTheoHK?.ds.length > 0
                                                                                    ?
                                                                                    <>
                                                                                        {
                                                                                            dsLopTheoHK["ds"].map((ds) => (
                                                                                                <tr>
                                                                                                    <td style={{ border: "2px solid" }}>
                                                                                                        <input type="checkbox" value=""></input>
                                                                                                    </td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_lop_hoc_phan}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ten_lop_hoc_phan}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.so_luong_dang_ki_toi_da}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.so_luong_dang_ki_hien_tai}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.so_nhom_thuc_hanh}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{
                                                                                                        ds.trang_thai == 1 ? "Chờ sv đăng ký" : "Đã khóa"
                                                                                                    }</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_hoc_ki}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_hoc_phan}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.mo_ta}</td>
                                                                                                    <td style={{ border: "2px solid" }}>
                                                                                                        <a ><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                                        <a style={{ marginLeft: "15px" }} ><i className="bx bx-trash me-1" /> Delete</a>
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
                                                                        </>
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

                <Popup
                    title="Thêm lớp học phần"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <div className="qlhp">
                        <div className="layout-wrapper layout-content-navbar">
                            <div className="layout-container">
                                <div className="layout-page">
                                    <div className="content-wrapper">
                                        <div className="container-xxl flex-grow-1 container-p-y">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card mb-4">
                                                        <div className="card-body">
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã lớp học phần</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Tên lớp học phần</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Tên viết tắt</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Số lượng sv tối đa</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Số nhóm thực hành</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Loại lớp học phần</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn loại LHP</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Trạng thái lớp</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Học kỳ</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Học phần</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mô tả</label>
                                                                <textarea className="form-control" id="" rows={3} defaultValue={""} />
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="demo-inline-spacing">
                                                                    <button type="button" class="btn rounded-pill btn-outline-primary"
                                                                        style={{
                                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                        }}
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            setOpenPopup(false)
                                                                        }}
                                                                    >Lưu</button>
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
                </Popup>
            </div>
        </>
    );
};

export const PhanCong = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dsPhanCong, setDsPhanCong] = useState();
    const [dsPCTheoMaGV, setDsPCTheoMaGV] = useState();
    const [dsPCTheoLHP, setDsPCTheoLHP] = useState();
    useEffect(() => {
        const getAllPhanCong = async () => {
            try {
                const res = await adminAPI.getAllPhanCong();
                setDsPhanCong(res.data);
            } catch (error) {

            }
        };
        getAllPhanCong();
    }, [])
    const searchTheoGiangVien = async (e) => {
        try {
            if (e.target.value === '') {
                const res = await adminAPI.getAllPhanCong();
                setDsPhanCong(res.data);
                setDsPCTheoMaGV('');
                setDsPCTheoLHP('');
            } else {
                const res = await adminAPI.getDSPhanCongTheoMaGiangVien(e.target.value);
                setDsPCTheoMaGV(res.data);
                setDsPCTheoLHP('');
                setDsPhanCong('');
            }
        } catch (error) {

        }
    }
    const searchTheoMaLHP = async (e) => {
        try {
            if (e.target.value === '') {
                const res = await adminAPI.getAllPhanCong();
                setDsPhanCong(res.data);
                setDsPCTheoMaGV('');
                setDsPCTheoLHP('');
            } else {
                const res = await adminAPI.getDSPhanCongTheoMaLHP(e.target.value);
                setDsPCTheoLHP(res.data);
                setDsPCTheoMaGV('');
                setDsPhanCong('');
            }
        } catch (error) {

        }
    }
    return (
        <>
            <Sidebar />
            <div className="qlhp" style={{ backgroundColor: "#E7EEF1" }}>
                <div class="layout-wrapper layout-content-navbar">
                    <div class="layout-container">
                        <div className="layout-page">

                            {/* Content wrapper */}
                            <div className="content-wrapper">
                                {/* Content */}
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card-gv-header grid-bg">
                                                <h5 style={{
                                                    display: "inline-flex",
                                                    position: "relative",
                                                    boxSizing: "border-box",
                                                    backgroundColor: "transparent",
                                                    border: "0",
                                                    margin: "0",
                                                    textDecoration: "none",
                                                    fontWeight: "500",
                                                    fontSize: "0.875rem",
                                                    lineHeight: "1.75",
                                                    letterSpacing: "0.02857em",
                                                    textTransform: "uppercase",
                                                    minWidth: "64px",
                                                    padding: "6px 8px",
                                                }}>Lọc Danh sách phân công</h5>
                                                <div className="card-body">
                                                    <div className="demo-inline-spacing">
                                                        <div className="col-md-3">
                                                            <label htmlFor="defaultFormControlInput" className="form-label">Tìm theo Mã giảng viên</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="TimTheoMaLopHocPhan"
                                                                aria-describedby="defaultFormControlHelp"
                                                                onKeyDown={(e) => searchTheoGiangVien(e)}
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label htmlFor="defaultFormControlInput" className="form-label">Tìm theo Mã lớp học phần</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="TimTheoMaLopHocPhan"
                                                                aria-describedby="defaultFormControlHelp"
                                                                onKeyDown={(e) => searchTheoMaLHP(e)}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                            <h4 className="card-header" style={{ fontSize: "calc(1.2625rem + 0.15vw)" }}> Phân công lớp học phần </h4>
                                        </div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-5">
                                            <div className="mb-3">
                                                <div className="demo-inline-spacing">
                                                    <button type="button" class="btn btn-primary"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiOutlineUpload /> Export</button>
                                                    <button type="button" class="btn  btn-success"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiOutlineDownload /> Import</button>
                                                    <button type="button" class="btn  btn-danger"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                        }}> <AiIcons.AiFillDelete /> Xóa</button>
                                                    <button type="button" class="btn btn-info"
                                                        style={{
                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme",
                                                        }}
                                                        onClick={() => { setOpenPopup(true); }}
                                                    > <AiIcons.AiFillPlusSquare /> Thêm mới</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Danh sách phân công</h5>
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
                                                                        <input type="checkbox"></input>
                                                                    </th>
                                                                    <th style={{ border: "2px solid" }}>Mã phân công</th>
                                                                    <th style={{ border: "2px solid" }}>Loại học phần phụ trách</th>
                                                                    <th style={{ border: "2px solid" }}>Nhóm thực hành phụ trách</th>
                                                                    <th style={{ border: "2px solid" }}>Số lượng sv phụ trách</th>
                                                                    <th style={{ border: "2px solid" }}>Mã giảng viên</th>
                                                                    <th style={{ border: "2px solid" }}>Mã lớp học phần</th>
                                                                    <th style={{ border: "2px solid" }}>Ghi chú</th>
                                                                    <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                {
                                                                    dsPhanCong && dsPhanCong?.result.length > 0
                                                                        ?
                                                                        <>
                                                                            {
                                                                                dsPhanCong["result"].map((ds) => (
                                                                                    <tr>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <input type="checkbox" value=""></input>
                                                                                        </td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_phan_cong}</td>
                                                                                        <td style={{ border: "2px solid" }}>{
                                                                                            ds.loai_hoc_phan_phu_trach == 1 ? "Thực hành" : "Lý thuyết"
                                                                                        }</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.nhom_thuc_hanh_phu_trach}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.so_luong_sv_phu_trach}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_giang_vien}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_lop_hoc_phan}</td>
                                                                                        <td style={{ border: "2px solid" }}></td>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <a ><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                            <a style={{ marginLeft: "15px" }} ><i className="bx bx-trash me-1" /> Delete</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </>
                                                                        : <>
                                                                            {
                                                                                dsPCTheoMaGV && dsPCTheoMaGV?.ds.length > 0
                                                                                    ?
                                                                                    <>
                                                                                        {
                                                                                            dsPCTheoMaGV["ds"].map((ds) => (
                                                                                                <tr>
                                                                                                    <td style={{ border: "2px solid" }}>
                                                                                                        <input type="checkbox" value=""></input>
                                                                                                    </td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_phan_cong}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{
                                                                                                        ds.loai_hoc_phan_phu_trach == 1 ? "Thực hành" : "Lý thuyết"
                                                                                                    }</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.nhom_thuc_hanh_phu_trach}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.so_luong_sv_phu_trach}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_giang_vien}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_lop_hoc_phan}</td>
                                                                                                    <td style={{ border: "2px solid" }}></td>
                                                                                                    <td style={{ border: "2px solid" }}>
                                                                                                        <a ><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                                        <a style={{ marginLeft: "15px" }} ><i className="bx bx-trash me-1" /> Delete</a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            ))
                                                                                        }
                                                                                    </>
                                                                                    : <>
                                                                                        {
                                                                                            dsPCTheoLHP && dsPCTheoLHP?.ds.length > 0
                                                                                                ?
                                                                                                <>
                                                                                                    {
                                                                                                        dsPCTheoLHP["ds"].map((ds) => (
                                                                                                            <tr>
                                                                                                                <td style={{ border: "2px solid" }}>
                                                                                                                    <input type="checkbox" value=""></input>
                                                                                                                </td>
                                                                                                                <td style={{ border: "2px solid" }}>{ds.ma_phan_cong}</td>
                                                                                                                <td style={{ border: "2px solid" }}>{
                                                                                                                    ds.loai_hoc_phan_phu_trach == 1 ? "Thực hành" : "Lý thuyết"
                                                                                                                }</td>
                                                                                                                <td style={{ border: "2px solid" }}>{ds.nhom_thuc_hanh_phu_trach}</td>
                                                                                                                <td style={{ border: "2px solid" }}>{ds.so_luong_sv_phu_trach}</td>
                                                                                                                <td style={{ border: "2px solid" }}>{ds.ma_giang_vien}</td>
                                                                                                                <td style={{ border: "2px solid" }}>{ds.ma_lop_hoc_phan}</td>
                                                                                                                <td style={{ border: "2px solid" }}></td>
                                                                                                                <td style={{ border: "2px solid" }}>
                                                                                                                    <a ><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                                                    <a style={{ marginLeft: "15px" }} ><i className="bx bx-trash me-1" /> Delete</a>
                                                                                                                </td>
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
                                                                                    </>
                                                                            }
                                                                        </>
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

                <Popup
                    title="Thêm Phân công"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <div className="qlhp">
                        <div className="layout-wrapper layout-content-navbar">
                            <div className="layout-container">
                                <div className="layout-page">
                                    <div className="content-wrapper">
                                        <div className="container-xxl flex-grow-1 container-p-y">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card mb-4">
                                                        <div className="card-body">
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã phân công</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Loại học phần phụ trách</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Nhóm thực hành phụ trách</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Số lượng sv phụ trách</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã giảng viên</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn giảng viên</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã lớp học phần</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn mã LHP</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Ghi chú</label>
                                                                <textarea className="form-control" id="" rows={3} defaultValue={""} />
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="demo-inline-spacing">
                                                                    <button type="button" class="btn rounded-pill btn-outline-primary"
                                                                        style={{
                                                                            float: "right", display: "inline-block", fontWeight: "400"
                                                                            , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                        }}
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            setOpenPopup(false)
                                                                        }}
                                                                    >Lưu</button>
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
                </Popup>
            </div>
        </>
    );
};
