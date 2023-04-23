import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
// import * as Corecss from "../../../assets/vendor/css/core.css";
import { useState, useEffect } from "react";
import Popup from "../../Popup";
import adminAPI from "../../../api/adminAPI";
import PopupNotify from "../../PopupNotify";


export const MonHoc = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dsMon, setDsMon] = useState();
    const [maKhoa, setMaKhoa] = useState();
    const [dsKhoa, setDSKhoa] = useState();
    const [dsMonTheoKhoa, setDsMonTheoKhoa] = useState();
    useEffect(() => {
        const getDSMonHoc = async () => {
            try {
                const res = await adminAPI.getDSMonHoc();
                setDsMon(res.data);
                const allKhoa = await adminAPI.getDanhSachToanBoKhoa();
                setDSKhoa(allKhoa.data);
            } catch (error) {

            }
        };
        getDSMonHoc();
    }, [])
    useEffect(() => {
        const getDsTheoKhoa = async () => {
            try {
                const ds = await adminAPI.getDsMonTheoKhoa(maKhoa);
                console.log(ds.data);
                setDsMonTheoKhoa(ds.data);
            } catch (error) {

            }
        };
        getDsTheoKhoa();
    }, [maKhoa])

    const getMaKhoa = (e) => {
        setDsMon('');
        setMaKhoa(e.target.value);
    }
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
                                                }}>Lọc Danh sách môn</h5>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                            <h4 className="card-header" style={{ fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý môn học </h4>
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
                                                }}>Danh sách môn học</h5>
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
                                                                    <th style={{ border: "2px solid" }}>Mã môn</th>
                                                                    <th style={{ border: "2px solid" }}>Tên môn</th>
                                                                    <th style={{ border: "2px solid" }}>Mã khoa</th>
                                                                    <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                {
                                                                    dsMon && dsMon?.result.length > 0
                                                                        ?
                                                                        <>
                                                                            {
                                                                                dsMon["result"].map((ds) => (
                                                                                    <tr>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <input type="checkbox" value=""></input>
                                                                                        </td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_mon_hoc}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ten_mon_hoc}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_khoa}</td>
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
                                                                                dsMonTheoKhoa && dsMonTheoKhoa?.ds.length > 0
                                                                                    ?
                                                                                    <>
                                                                                        {
                                                                                            dsMonTheoKhoa["ds"].map((ds) => (
                                                                                                <tr>
                                                                                                    <td style={{ border: "2px solid" }}>
                                                                                                        <input type="checkbox" value=""></input>
                                                                                                    </td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_mon_hoc}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ten_mon_hoc}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_khoa}</td>
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
                    title="Thêm Môn học"
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
                                                                }}>Mã môn</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Tên môn</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã khoa</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn khoa</option>
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

export const HocPhan = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dsHocPhan, setDsHocPhan] = useState();
    const [dsHPTheoCN, setDsHPTheoCN] = useState();
    const [dsKhoa, setDSKhoa] = useState();
    const [maKhoa, setMaKhoa] = useState();
    const [dsChuyenNganh, setDsChuyenNganh] = useState();
    const [maCN, setMaCN] = useState();
    useEffect(() => {
        const getdsHocPhan = async () => {
            try {
                const res = await adminAPI.getAllHocPhan();
                setDsHocPhan(res.data);
            } catch (error) {

            }
        };
        getdsHocPhan();
    }, [])
    useEffect(() => {
        const getDSKhoa = async () => {
            try {
                const res = await adminAPI.getDanhSachToanBoKhoa();
                console.log(res.data)
                setDSKhoa(res.data);
            } catch (error) {

            }
        };
        getDSKhoa();
    }, [])
    useEffect(() => {
        const getDsTheoKhoa = async () => {
            try {
                const dsCN = await adminAPI.getDsChuyenNganhTheoKhoa(maKhoa);
                setDsChuyenNganh(dsCN.data);
            } catch (error) {

            }
        };
        getDsTheoKhoa();
    }, [maKhoa])
    useEffect(() => {
        const getDsTheoCN = async () => {
            try {
                const dsHP = await adminAPI.getHocPhanTheoChuyenNganh(maCN);
                setDsHPTheoCN(dsHP.data);
                setDsHocPhan('');
            } catch (error) {

            }
        };
        getDsTheoCN();
    }, [maCN])
    const getMaKhoa = (e) => {
        setMaKhoa(e.target.value);
    }
    const getMaCN = (e) => {
        setMaCN(e.target.value);
    }
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
                                                }}>Lọc Danh sách học phần</h5>
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
                                                                onChange={(e) => getMaCN(e)}
                                                            >
                                                                <option selected>Chọn Chuyên ngành</option>
                                                                {
                                                                    dsChuyenNganh && dsChuyenNganh?.ds.length > 0 ?
                                                                        <>
                                                                            {
                                                                                dsChuyenNganh["ds"].map((ds) => (
                                                                                    <option key={ds.ma_chuyen_nganh} value={ds.ma_chuyen_nganh}>
                                                                                        {ds.ten_chuyen_nganh}
                                                                                    </option>
                                                                                ))
                                                                            }
                                                                        </> : <></>
                                                                }
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
                                            <h4 className="card-header" style={{ fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý học phần </h4>
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
                                                }}>Danh sách học phần</h5>
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
                                                                    <th style={{ border: "2px solid" }}>Mã học phần</th>
                                                                    <th style={{ border: "2px solid" }}>Số tín chỉ lý thuyết</th>
                                                                    <th style={{ border: "2px solid" }}>Số tín chỉ thực hành</th>
                                                                    <th style={{ border: "2px solid" }}>Loại học phần</th>
                                                                    <th style={{ border: "2px solid" }}>Mã môn tiên quyết</th>
                                                                    <th style={{ border: "2px solid" }}>Mã môn học</th>
                                                                    <th style={{ border: "2px solid" }}>Mô tả</th>
                                                                    <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                {
                                                                    dsHocPhan && dsHocPhan?.result.length > 0
                                                                        ?
                                                                        <>
                                                                            {
                                                                                dsHocPhan["result"].map((ds) => (
                                                                                    <tr>
                                                                                        <td style={{ border: "2px solid" }}>
                                                                                            <input type="checkbox" value=""></input>
                                                                                        </td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_hoc_phan}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.so_tin_chi_ly_thuyet}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.so_tin_chi_thuc_hanh}</td>
                                                                                        <td style={{ border: "2px solid" }}>{
                                                                                            ds.hoc_phan_bat_buoc == 1 ? "Bắt buộc" : "Tự chọn"
                                                                                        }</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_mon_tien_quyet}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_mon_hoc}</td>
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
                                                                        <>
                                                                            {
                                                                                dsHPTheoCN && dsHPTheoCN?.ds.length > 0
                                                                                    ?
                                                                                    <>
                                                                                        {
                                                                                            dsHPTheoCN["ds"].map((ds) => (
                                                                                                <tr>
                                                                                                    <td style={{ border: "2px solid" }}>
                                                                                                        <input type="checkbox" value=""></input>
                                                                                                    </td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_hoc_phan}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.so_tin_chi_ly_thuyet}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.so_tin_chi_thuc_hanh}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{
                                                                                                        ds.hoc_phan_bat_buoc == 1 ? "Bắt buộc" : "Tự chọn"
                                                                                                    }</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_mon_tien_quyet}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_mon_hoc}</td>
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
                                                                                        <td colSpan={9} className="text-center">
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
                    title="Thêm Học phần"
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
                                                                }}>Mã học phần</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Số tín chỉ lý thuyết</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Số tín chỉ thực hành</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Loại học phần</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn loại học phần</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Môn học</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn môn</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Môn song hành</label>
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
                                                                }}>Môn tiên quyết</label>
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
                                                                }}>Mã chuyên ngành</label>
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
