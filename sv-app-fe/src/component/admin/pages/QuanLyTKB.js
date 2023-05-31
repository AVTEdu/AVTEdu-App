import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
// import * as Corecss from "../../../assets/vendor/css/core.css";
import { useState, useEffect } from "react";
import Popup from "../../Popup";
import adminAPI from "../../../api/adminAPI";
import PopupNotify from "../../PopupNotify";
import { format } from 'date-fns';
import dayjs from "dayjs";


export const ThoiKhoaBieu = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [dsTKB, setDsTKB] = useState();
    const [dSTKBTheoCNvaHK, setDSTKBTheoCNvaHK] = useState();
    const [dsHK, setDsHk] = useState();
    const [dsKhoa, setDSKhoa] = useState();
    const [maKhoa, setMaKhoa] = useState();
    const [dsChuyenNganh, setDsChuyenNganh] = useState();
    const [maCN, setMaCN] = useState();
    const [newMaPC, setNewMaPC] = useState();
    const [popupNotify, setPopupNotify] = useState({
        title: '',
        mes: '',
        isLoading: false
    })
    function handleNotify(choose) {
        if (choose) {
            setPopupNotify({
                title: '',
                mes: '',
                isLoading: false
            });
        }
    }

    useEffect(() => {
        const getAllTKB = async () => {
            try {
                const res = await adminAPI.getAllTKB();
                console.log(res.data);
                setDsTKB(res.data);
            } catch (error) {

            }
        };
        getAllTKB();
    }, [])
    useEffect(() => {
        const getNewMaPC = async () => {
            try {
                const res = await adminAPI.getNewMaPhanCong();
                setNewMaPC(res.data);
            } catch (error) {

            }
        }
        getNewMaPC();
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
    const getDSTKBTheoCNvaHK = async (e) => {
        try {
            const res = await adminAPI.getDSTKBTheoMaCNVaHocKi(e.target.value, maCN)
            setDSTKBTheoCNvaHK(res.data);
            setDsTKB('');
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
    const getMaKhoa = (e) => {
        setMaKhoa(e.target.value);
    }
    const getMaChuyenNganh = (e) => {
        setMaCN(e.target.value);
    }
    if (!dsHK) return null;
    if (!dsKhoa) return null;
    if (!newMaPC) return null;
    const newTKB = async () => {
        var nhapThuTuNgayHocTrongTuan = document.querySelector('#nhapThuTuNgayHocTrongTuan').value;
        var nhapTGBatDau = document.querySelector('#nhapTGBatDau').value;
        var nhapTGKetThuc = document.querySelector('#nhapTGKetThuc').value;
        var nhapTietBD = document.querySelector('#nhapTietBD').value;
        var nhapTietKT = document.querySelector('#nhapTietKT').value;
        var nhapMaPhong = document.querySelector('#nhapMaPhong').value;
        var nhapMaPhanCong = document.querySelector('#nhapMaPhanCong').value;
        try {
            const newTKB = await adminAPI.createThoiKhoaBieu(nhapThuTuNgayHocTrongTuan, nhapTGBatDau, nhapTGKetThuc, nhapTietBD, nhapTietKT, nhapMaPhong, nhapMaPhanCong);
            setPopupNotify({
                title: 'Thông báo',
                mes: 'Thêm lịch thành công',
                isLoading: true
            });
        } catch (error) {
            console.log(error.message)
            setPopupNotify({
                title: 'Thông báo',
                mes: 'Thêm lịch thất bại',
                isLoading: true
            });
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
                                                }}>Lọc Danh sách thời khóa biểu</h5>
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
                                                                onChange={(e) => getDSTKBTheoCNvaHK(e)}
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
                                            <h4 className="card-header" style={{ fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý Thời khóa biểu </h4>
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
                                                }}>Danh sách lịch dạy - học</h5>
                                                <div className="card-body">
                                                    <div className="table-responsive text-nowrap">
                                                        <table className="table table-bordered" style={{
                                                            borderColor: "#d9dee3", color: "#697a8d",
                                                            border: "2px solid", backgroundColor: "#fff"
                                                        }} >
                                                            <thead>
                                                                <tr style={{ backgroundColor: "#CADAE1" }}>
                                                                    {/* <th style={{
                                                                        border: "2px solid"
                                                                    }}>
                                                                        <input type="checkbox"></input>
                                                                    </th> */}
                                                                    <th style={{ border: "2px solid" }}>Mã thời khóa biểu</th>
                                                                    {/* <th style={{ border: "2px solid" }}>Loại học phần</th> */}
                                                                    <th style={{ border: "2px solid" }}>Số ngày học trong tuần</th>
                                                                    {/* <th style={{ border: "2px solid" }}>Nhóm TH</th> */}
                                                                    <th style={{ border: "2px solid" }}>Thời gian bắt đầu</th>
                                                                    <th style={{ border: "2px solid" }}>Thời gian kết thúc</th>
                                                                    <th style={{ border: "2px solid" }}>Tiết học bắt đầu</th>
                                                                    <th style={{ border: "2px solid" }}>Tiết học kết thúc</th>
                                                                    <th style={{ border: "2px solid" }}>Mã phòng học</th>
                                                                    <th style={{ border: "2px solid" }}>Mã phân công</th>
                                                                    <th style={{ border: "2px solid" }}>Ghi chú</th>
                                                                    <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                {
                                                                    dsTKB && dsTKB?.result.length > 0
                                                                        ?
                                                                        <>
                                                                            {
                                                                                dsTKB["result"].map((ds) => (
                                                                                    <tr>
                                                                                        {/* <td style={{ border: "2px solid" }}>
                                                                                            <input type="checkbox" value=""></input>
                                                                                        </td> */}
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_thoi_khoa_bieu}</td>
                                                                                        {/* <td style={{ border: "2px solid" }}>{
                                                                                            ds.loai_hoc_phan == 1 ? "Lý thuyết" : "Thực hành"
                                                                                        }</td> */}
                                                                                        <td style={{ border: "2px solid" }}>Thứ {ds.ngay_hoc_trong_tuan}</td>
                                                                                        {/* <td style={{ border: "2px solid" }}>{
                                                                                            ds.nhom_thuc_hanh == null ? "Không có" : ds.nhom_thuc_hanh
                                                                                        }</td> */}
                                                                                        <td style={{ border: "2px solid" }}>{
                                                                                            ds.thoi_gian_bat_dau
                                                                                        }</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.thoi_gian_ket_thuc}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.tiet_hoc_bat_dau}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.tiet_hoc_ket_thuc}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_phong_hoc}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ma_phan_cong_lop_hoc_phan}</td>
                                                                                        <td style={{ border: "2px solid" }}>{ds.ghi_chu}</td>
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
                                                                                dSTKBTheoCNvaHK && dSTKBTheoCNvaHK?.ds.length > 0
                                                                                    ?
                                                                                    <>
                                                                                        {
                                                                                            dSTKBTheoCNvaHK["ds"].map((ds) => (
                                                                                                <tr>
                                                                                                    {/* <td style={{ border: "2px solid" }}>
                                                                                                        <input type="checkbox" value=""></input>
                                                                                                    </td> */}
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_thoi_khoa_bieu}</td>
                                                                                                    {/* <td style={{ border: "2px solid" }}>{
                                                                                                        ds.loai_hoc_phan == 1 ? "Lý thuyết" : "Thực hành"
                                                                                                    }</td> */}
                                                                                                    <td style={{ border: "2px solid" }}>Thứ {ds.ngay_hoc_trong_tuan}</td>
                                                                                                    {/* <td style={{ border: "2px solid" }}>{
                                                                                                        ds.nhom_thuc_hanh == null ? "Không có" : ds.nhom_thuc_hanh
                                                                                                    }</td> */}
                                                                                                    <td style={{ border: "2px solid" }}>{
                                                                                                        ds.thoi_gian_bat_dau
                                                                                                    }</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.thoi_gian_ket_thuc}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.tiet_hoc_bat_dau}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.tiet_hoc_ket_thuc}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_phong_hoc}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ma_phan_cong_lop_hoc_phan}</td>
                                                                                                    <td style={{ border: "2px solid" }}>{ds.ghi_chu}</td>
                                                                                                    <td style={{ border: "2px solid" }}>
                                                                                                        <a ><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                                        <a style={{ marginLeft: "15px" }} ><i className="bx bx-trash me-1" /> Delete</a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            ))
                                                                                        }
                                                                                    </>
                                                                                    : <>
                                                                                        <tr>
                                                                                            <td colSpan={13} className="text-center">
                                                                                                <p className="bold"><span>Tạm chưa có dữ liệu</span></p>
                                                                                            </td>
                                                                                        </tr>
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
                    title="Thêm Lịch"
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
                                                                }}>Thứ tự ngày học trong tuần</label>
                                                                <input type="text" className="form-control" id="nhapThuTuNgayHocTrongTuan" placeholder="" defaultValue="1" />
                                                            </div>

                                                            {/* <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Nhóm thực hành</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div> */}
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Thời gian bắt đầu</label>
                                                                <input type="date" className="form-control" id="nhapTGBatDau" placeholder="" defaultValue="2023-06-01" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Thời gian kết thúc</label>
                                                                <input type="date" className="form-control" id="nhapTGKetThuc" placeholder="" defaultValue="2023-09-01" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Tiết học bắt đầu</label>
                                                                <input type="text" className="form-control" id="nhapTietBD" placeholder="" defaultValue="1" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Tiết học kết thúc</label>
                                                                <input type="text" className="form-control" id="nhapTietKT" placeholder="" defaultValue="3" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã phòng học</label>
                                                                <input type="text" className="form-control" id="nhapMaPhong" placeholder="" defaultValue="11" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Mã phân công</label>
                                                                <input type="text" className="form-control" id="nhapMaPhanCong" placeholder="" defaultValue={newMaPC.new_ma_PCLHP} />
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
                                                                            newTKB();
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
            {popupNotify.isLoading && <PopupNotify onDialog={handleNotify} title={popupNotify.title} mes={popupNotify.mes} />}
        </>
    );
};




