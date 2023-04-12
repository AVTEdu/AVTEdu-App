import React, { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
// import * as Corecss from "../../../assets/vendor/css/core.css";
import { useState, useEffect } from "react";
import Popup from "../../Popup";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import adminAPI from "../../../api/adminAPI";
import PopupNotify from "../../PopupNotify";
import { event } from "jquery";


export const Admin = () => {
    return (
        <>
            <Sidebar />
            <div className="qluser">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Tạo user Admin</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">UserName</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Password</label>
                                </div>
                                <div className="col-75">
                                    <input type="password" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Khoa</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">CNTT</option>
                                        <option value="">May</option>
                                        <option value="">Cơ khí</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách Admin</h2>
                    <table>
                        <tbody><tr>
                            <th>Username</th>
                            <th>Khoa</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>Admin111</td>
                                <td>CNTT</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Admin222</td>
                                <td>May</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Admin333</td>
                                <td>Cơ khí</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>

                        </tbody></table>
                </div>
            </div>
        </>
    );
};

export const GiangVien = () => {
    return (
        <><Sidebar />
            <div className="qluser">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Tạo user giảng viên</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã giảng viên</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên giảng viên</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Ngày sinh</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Email</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Giới tính</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">Nam</option>
                                        <option value="">Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Khoa</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách giảng viên</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã GV</th>
                            <th>Tên GV</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Giới tính</th>
                            <th>Khoa</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>1515120</td>
                                <td>Lý Thu Minh</td>
                                <td>1989-11-30 17:00:00</td>
                                <td>anb@gmail.com</td>
                                <td>Nam</td>
                                <td>CNTT</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1515120</td>
                                <td>Lý Thu Minh</td>
                                <td>1989-11-30 17:00:00</td>
                                <td>anb@gmail.com</td>
                                <td>Nam</td>
                                <td>CNTT</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1515120</td>
                                <td>Lý Thu Minh</td>
                                <td>1989-11-30 17:00:00</td>
                                <td>anb@gmail.com</td>
                                <td>Nam</td>
                                <td>CNTT</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </>
    );
};

export const NhapDiemSinhVien = () => {
    const [maLopHP, setMaLopHP] = useState(localStorage.getItem("maLHP"));
    const alertMaLHP = (e) => {
        alert(maLopHP);
    }
    alertMaLHP();
    return (
        <>
            <Sidebar />
            <div className="qlhp" style={{ backgroundColor: "#E7EEF1" }}>
                <p style={{ marginLeft: "350px" }}>{maLopHP}</p>
            </div>
        </>
    )
};

export const ReadOnlyRowDiem = ({ dsDiem, handleEditClick }) => {
    return (
        <tr>
            <td style={{ border: "2px solid" }}>{dsDiem.ma_sinh_vien}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.ho_ten_sinh_vien}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_tk_1}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_tk_2}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_tk_3}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_tk_4}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_tk_5}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_th_1}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_th_2}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_th_3}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_th_4}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_th_5}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_gk}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_ck}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.diem_tk_hs_10}</td>
            <td style={{ border: "2px solid" }}>
                <button type="button" className="btn btn-primary"
                    style={{
                        float: "right", display: "inline-block", fontWeight: "400"
                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                    }}
                    onClick={() => handleEditClick(dsDiem)}
                >
                    Cập nhật
                </button>
            </td>
        </tr>
    )
};

export const EditTableRowDiem = ({ dsDiem, editFormData, handleEditFormChange, handleEditFormSubmit }) => {
    return (
        <tr>
            <td style={{ border: "2px solid" }}>{dsDiem.ma_sinh_vien}</td>
            <td style={{ border: "2px solid" }}>{dsDiem.ho_ten_sinh_vien}</td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_tk_1" onChange={handleEditFormChange} value={editFormData.diem_tk_1}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_tk_2" onChange={handleEditFormChange} value={editFormData.diem_tk_2}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_tk_3" onChange={handleEditFormChange} value={editFormData.diem_tk_3}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_tk_4" onChange={handleEditFormChange} value={editFormData.diem_tk_4}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_tk_5" onChange={handleEditFormChange} value={editFormData.diem_tk_5}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_th_1" onChange={handleEditFormChange} value={editFormData.diem_th_1}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_th_2" onChange={handleEditFormChange} value={editFormData.diem_th_2}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_th_3" onChange={handleEditFormChange} value={editFormData.diem_th_3}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_th_4" onChange={handleEditFormChange} value={editFormData.diem_th_4}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_th_5" onChange={handleEditFormChange} value={editFormData.diem_th_5}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_gk" onChange={handleEditFormChange} value={editFormData.diem_gk}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_ck" onChange={handleEditFormChange} value={editFormData.diem_ck}
                />
            </td>
            <td style={{ border: "2px solid" }}>
                <input
                    type="text" name="diem_tk_hs_10" onChange={handleEditFormChange} value={editFormData.diem_tk_hs_10}
                />
            </td>

            <td style={{ border: "2px solid" }}>
                <button type="button" className="btn btn-primary"
                    style={{
                        float: "right", display: "inline-block", fontWeight: "400"
                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                    }}
                    onClick={handleEditFormSubmit}
                >
                    Lưu
                </button>
            </td>
        </tr>
    )
};

export const SinhVien = () => {
    const [editFormData, setEditFormData] = useState({
        "diem_tk_1": null,
        "diem_tk_2": null,
        "diem_tk_3": null,
        "diem_tk_4": null,
        "diem_tk_5": null,
        "diem_th_1": null,
        "diem_th_2": null,
        "diem_th_3": null,
        "diem_th_4": null,
        "diem_th_5": null,
        "diem_gk": null,
        "diem_ck": null,
        "diem_tk_hs_10": null
    });

    const handleEditFormChange = (event) => {

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const handleEditClick = (sinhvien) => {
        setEditDiemId(sinhvien.ma_sinh_vien);
        setEditDiemHoTen(sinhvien.ho_ten_sinh_vien);
        setEditMaKetQuaHT(sinhvien.ma_ket_qua_hoc_tap);
        setTinChiLyThuyet(sinhvien.so_tin_chi_ly_thuyet);
        setTinChiThucHanh(sinhvien.so_tin_chi_thuc_hanh);
        const formValues = {
            "diem_tk_1": sinhvien.diem_tk_1,
            "diem_tk_2": sinhvien.diem_tk_2,
            "diem_tk_3": sinhvien.diem_tk_3,
            "diem_tk_4": sinhvien.diem_tk_4,
            "diem_tk_5": sinhvien.diem_tk_5,
            "diem_th_1": sinhvien.diem_th_1,
            "diem_th_2": sinhvien.diem_th_2,
            "diem_th_3": sinhvien.diem_th_3,
            "diem_th_4": sinhvien.diem_th_4,
            "diem_th_5": sinhvien.diem_th_5,
            "diem_gk": sinhvien.diem_gk,
            "diem_ck": sinhvien.diem_ck,
            "diem_tk_hs_10": sinhvien.diem_tk_hs_10
        }
        setEditFormData(formValues);
    };



    const [openPopup, setOpenPopup] = useState(false);
    const chuyenMaLop = (e) => {
        // var maLopHocPhanDeChuyen = document.querySelector('#TimTheoMaLopHocPhan').value;
        // alert(maLopHocPhanDeChuyen);
        // setTimeout(() => {
        //     <NhapDiemSinhVien maLopHP={123} />
        // }, 1000);
        window.localStorage.setItem('maLHP', document.querySelector('#TimTheoMaLopHocPhan').value);
    }
    const [dsSVTheoLop, setDsSVTheoLop] = useState();
    const [searchLopTheoMa, setSearchLopTheoMa] = useState();
    const [popupNotify, setPopupNotify] = useState({
        title: '',
        mes: '',
        isLoading: false
    })

    const [editDiemId, setEditDiemId] = useState(null);
    const [editDiemHoTen, setEditDiemHoTen] = useState(null);
    const [editMaKetQuaHT, setEditMaKetQuaHT] = useState(null);
    const [tinChiLyThuyet, setTinChiLyThuyet] = useState(null);
    const [tinChiThucHanh, setTinChiThucHanh] = useState(null);


    useEffect(() => {
        const activeLopTimDuoc = async () => {
            try {
                const dsDiemSVTheoLop = await adminAPI.getDanhSachDiemSVTheoLop(searchLopTheoMa);
                setDsSVTheoLop(dsDiemSVTheoLop.data);
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403 && searchLopTheoMa) {
                        setPopupNotify({
                            title: 'Thông báo',
                            mes: 'Không tìm thấy lớp',
                            isLoading: true
                        });
                        setSearchLopTheoMa("");
                    }
                }
            }
        };
        activeLopTimDuoc();
    }, [searchLopTheoMa])


    const handleEditFormSubmit = async () => {
        try {
            let trungbinhTK = (Number(editFormData.diem_tk_1) + Number(editFormData.diem_tk_2) +
                Number(editFormData.diem_tk_3) + Number(editFormData.diem_tk_4) + Number(editFormData.diem_tk_5)) / 5;
            let trungbinhTH = (Number(editFormData.diem_th_1) + Number(editFormData.diem_th_2) +
                Number(editFormData.diem_th_3) + Number(editFormData.diem_th_4) + Number(editFormData.diem_th_5));
            let tongKetHe10 = (((trungbinhTK * 0.2) + Number(editFormData.diem_ck) * 0.3 + Number(editFormData.diem_ck) * 0.5) *
                tinChiLyThuyet + trungbinhTH * tinChiThucHanh) / (tinChiLyThuyet + tinChiThucHanh);
            let tongKetHe4 = (tongKetHe10 * 4) / 10;
            const editedDiem = {
                ma_sinh_vien: editDiemId,
                ho_ten_sinh_vien: editDiemHoTen,
                ma_ket_qua_hoc_tap: editMaKetQuaHT,
                diem_tk_1: Number(editFormData.diem_tk_1),
                diem_tk_2: Number(editFormData.diem_tk_2),
                diem_tk_3: Number(editFormData.diem_tk_3),
                diem_tk_4: Number(editFormData.diem_tk_4),
                diem_tk_5: Number(editFormData.diem_tk_5),
                diem_th_1: Number(editFormData.diem_th_1),
                diem_th_2: Number(editFormData.diem_th_2),
                diem_th_3: Number(editFormData.diem_th_3),
                diem_th_4: Number(editFormData.diem_th_4),
                diem_th_5: Number(editFormData.diem_th_5),
                diem_gk: Number(editFormData.diem_gk),
                diem_ck: Number(editFormData.diem_ck),
                diem_tk_hs_4: tongKetHe4,
                diem_tk_hs_10: tongKetHe10
            }
            // const newDiems = [...dsSVTheoLop?.dssv];
            // const index = dsSVTheoLop?.dssv.findIndex(
            //     (sv) => sv.ma_sinh_vien === editDiemId.ma_sinh_vien
            // )
            // newDiems[index] = editedDiem;
            console.log(editedDiem.diem_tk_hs_10);
            //setDsSVTheoLop(newDiems);
            const updatDiem = await adminAPI.putDiemMotSinhVien(editedDiem.ma_ket_qua_hoc_tap, editedDiem.diem_tk_1,
                editedDiem.diem_tk_2, editedDiem.diem_tk_3, editedDiem.diem_tk_4, editedDiem.diem_tk_5,
                editedDiem.diem_th_1, editedDiem.diem_th_2, editedDiem.diem_th_3, editedDiem.diem_th_4,
                editedDiem.diem_th_5, editedDiem.diem_gk, editedDiem.diem_ck, editedDiem.diem_tk_hs_10,
                editedDiem.diem_tk_hs_4);
            const dsDiemSVTheoLop = await adminAPI.getDanhSachDiemSVTheoLop(searchLopTheoMa);
            setDsSVTheoLop(dsDiemSVTheoLop.data);
            setEditDiemId(null);
            setEditDiemHoTen(null);
            setEditMaKetQuaHT(null);
        } catch (error) {

        }
    }

    const searchLop = (e) => {
        if (e.key === 'Enter') {
            setSearchLopTheoMa(e.target.value);
        }
    };

    function handleNotify(choose) {
        if (choose) {
            setPopupNotify({
                title: '',
                mes: '',
                isLoading: false
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
                                                }}>Lọc Danh sách Sinh viên</h5>
                                                <div className="card-body">
                                                    <div className="demo-inline-spacing">
                                                        <div className="col-md-3">
                                                            <label htmlFor="exampleFormControlSelect1" className="form-label">Khoa</label>
                                                            <select className="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                                                <option selected>Chọn Khoa</option>
                                                                <option value="1">Khoa Công nghệ Thông Tin</option>
                                                                <option value="2">Khoa Công nghệ Cơ khí</option>
                                                                <option value="3">Khoa Công nghệ Điện</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label htmlFor="defaultFormControlInput" className="form-label">Tìm theo Mã lớp học phần</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="TimTheoMaLopHocPhan"
                                                                aria-describedby="defaultFormControlHelp"
                                                                onKeyDown={searchLop}
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label htmlFor="defaultFormControlInput" className="form-label">Tìm theo Mã lớp danh nghĩa</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="defaultFormControlInput"
                                                                aria-describedby="defaultFormControlHelp"
                                                            />
                                                        </div>
                                                        {/* <button type="button" className="btn btn-secondary">Secondary</button>
                                                        <button type="button" className="btn btn-success">Success</button>
                                                        <button type="button" className="btn btn-danger">Danger</button>
                                                        <button type="button" className="btn btn-warning">Warning</button>
                                                        <button type="button" className="btn btn-info">Info</button>
                                                        <button type="button" className="btn btn-dark">Dark</button> */}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                            <h4 className="card-header" style={{ fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý Sinh viên </h4>
                                        </div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-5">
                                            <div className="mb-3">
                                                <div className="demo-inline-spacing">


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
                                                }}>Danh sách sinh viên theo khoa</h5>
                                                <div className="card-body">
                                                    <div className="table-responsive text-nowrap">
                                                        <table className="table table-bordered" style={{
                                                            borderColor: "#d9dee3", color: "#697a8d",
                                                            border: "2px solid", backgroundColor: "#fff"
                                                        }} >
                                                            <thead>
                                                                <tr style={{ backgroundColor: "#CADAE1" }}>
                                                                    <th style={{ border: "2px solid" }}>Mã sv</th>
                                                                    <th style={{ border: "2px solid" }}>Tên</th>
                                                                    <th style={{ border: "2px solid" }}>Lớp danh nghĩa</th>
                                                                    <th style={{ border: "2px solid" }}>Ngày sinh</th>
                                                                    <th style={{ border: "2px solid" }}>Email</th>
                                                                    <th style={{ border: "2px solid" }}>Giới tính</th>
                                                                    <th style={{ border: "2px solid" }}>Số điện thoại</th>
                                                                    <th style={{ border: "2px solid" }}>Số chứng minh nhân dân</th>
                                                                    <th style={{ border: "2px solid" }}>Khoa</th>
                                                                    <th style={{ border: "2px solid" }}>Chuyên ngành</th>
                                                                    <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                <tr>
                                                                    <td style={{ border: "2px solid" }}>19507399</td>
                                                                    <td style={{ border: "2px solid" }}>Lý Liên Kiệt</td>
                                                                    <td style={{ border: "2px solid" }}>DHCNTT15B</td>
                                                                    <td style={{ border: "2px solid" }}>15/02/2003</td>
                                                                    <td style={{ border: "2px solid" }}>nmm@iuh.edu.vn</td>
                                                                    <td style={{ border: "2px solid" }}>Nam</td>
                                                                    <td style={{ border: "2px solid" }}>0899613042</td>
                                                                    <td style={{ border: "2px solid" }}>079202003152</td>
                                                                    <td style={{ border: "2px solid" }}>Công nghệ Thông tin</td>
                                                                    <td style={{ border: "2px solid" }}>Công nghệ Thông tin</td>
                                                                    <td style={{ border: "2px solid" }}>
                                                                        <div className="dropdown">
                                                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                                <i className="bx bx-dots-vertical-rounded" />
                                                                            </button>
                                                                            <div className="dropdown-menu">
                                                                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" /> Edit</a>
                                                                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /> Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Danh sách sinh viên theo lớp học phần</h5>
                                                <div className="card-body">
                                                    <div className="table-responsive text-nowrap">
                                                        <form>
                                                            <table className="table table-bordered" style={{
                                                                borderColor: "#d9dee3", color: "#697a8d",
                                                                border: "2px solid", backgroundColor: "#fff"
                                                            }} >
                                                                <thead>
                                                                    <tr style={{ backgroundColor: "#CADAE1" }}>
                                                                        <th style={{ border: "2px solid" }}>Mã sv</th>
                                                                        <th style={{ border: "2px solid" }}>Tên</th>
                                                                        <th style={{ border: "2px solid" }}>Thường kỳ 1</th>
                                                                        <th style={{ border: "2px solid" }}>Thường kỳ 2</th>
                                                                        <th style={{ border: "2px solid" }}>Thường kỳ 3</th>
                                                                        <th style={{ border: "2px solid" }}>Thường kỳ 4</th>
                                                                        <th style={{ border: "2px solid" }}>Thường kỳ 5</th>
                                                                        <th style={{ border: "2px solid" }}>Thực hành 1</th>
                                                                        <th style={{ border: "2px solid" }}>Thực hành 2</th>
                                                                        <th style={{ border: "2px solid" }}>Thực hành 3</th>
                                                                        <th style={{ border: "2px solid" }}>Thực hành 4</th>
                                                                        <th style={{ border: "2px solid" }}>Thực hành 5</th>
                                                                        <th style={{ border: "2px solid" }}>Giữa kỳ</th>
                                                                        <th style={{ border: "2px solid" }}>Cuối kỳ</th>
                                                                        <th style={{ border: "2px solid" }}>Tổng kết</th>
                                                                        <th style={{ border: "2px solid" }}>Thao tác</th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody className="adminClassHover">
                                                                    {
                                                                        dsSVTheoLop && dsSVTheoLop?.dssv.length > 0
                                                                            ?
                                                                            <>
                                                                                {
                                                                                    dsSVTheoLop["dssv"].map((dsDiem) => (
                                                                                        <>
                                                                                            <Fragment>
                                                                                                {editDiemId === dsDiem.ma_sinh_vien ?
                                                                                                    (
                                                                                                        <EditTableRowDiem dsDiem={dsDiem}
                                                                                                            editFormData={editFormData}
                                                                                                            handleEditFormChange={handleEditFormChange}
                                                                                                            handleEditFormSubmit={handleEditFormSubmit}
                                                                                                        />
                                                                                                    )
                                                                                                    : (
                                                                                                        <ReadOnlyRowDiem dsDiem={dsDiem}
                                                                                                            handleEditClick={handleEditClick}
                                                                                                        />
                                                                                                    )
                                                                                                }
                                                                                            </Fragment>
                                                                                        </>

                                                                                    ))
                                                                                }
                                                                            </>
                                                                            :
                                                                            <tr>
                                                                                <td colSpan={16} className="text-center">
                                                                                    <p className="bold"><span>Tạm chưa có dữ liệu</span></p>
                                                                                </td>
                                                                            </tr>
                                                                    }

                                                                </tbody>

                                                            </table>
                                                        </form>
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
                    title="Thêm Sinh viên"
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
                                                                }}>Mã sv</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Tên</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Lớp danh nghĩa</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Ngày sinh</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Email</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Giới tính</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Số điện thoại</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Số chứng minh nhân dân</label>
                                                                <input type="text" className="form-control" id="" placeholder="" />
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Khoa</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn khoa</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label htmlFor="" className="form-label" style={{
                                                                    display: "inline-block", boxSizing: "border-box"
                                                                    , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                                }}>Chuyên ngành</label>
                                                                <select className="form-select" id="" aria-label="Default select example">
                                                                    <option selected>Chọn chuyên ngành</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
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
            {popupNotify.isLoading && <PopupNotify onDialog={handleNotify} title={popupNotify.title} mes={popupNotify.mes} />}
        </>
    );
};
