import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
// import * as Corecss from "../../../assets/vendor/css/core.css";
import { useState, useEffect } from "react";
import Popup from "../../Popup";


export const MonHoc = () => {
    return (
        <>
            <Sidebar />
            <div className="qlhp" style={{ backgroundColor: "#e0ffff" }}>
                <div class="layout-wrapper layout-content-navbar">
                    <div class="layout-container">
                        <div className="layout-page">
                            {/* Content wrapper */}
                            <div className="content-wrapper">
                                {/* Content */}
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <h4 className="fw-bold py-3 mb-4" style={{ marginLeft: "250px", fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý môn học </h4>
                                    <div className="row">

                                        {/* Form controls */}
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="card mb-4">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Thêm môn học</h5>
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
                                                            <option selected>Chọn Khoa</option>
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
                                                                }}>Lưu</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>

                                    </div>


                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <h5 className="card-header" style={{
                                                fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                            }}>Danh sách môn học</h5>
                                            <div className="card-body">
                                                <div className="table-responsive text-nowrap">
                                                    <table className="table table-bordered" style={{
                                                        borderColor: "#d9dee3", color: "#697a8d",
                                                        border: "2px solid"
                                                    }} >
                                                        <thead>
                                                            <tr>

                                                                <th style={{ border: "2px solid" }}>Mã môn</th>
                                                                <th style={{ border: "2px solid" }}>Tên môn</th>
                                                                <th style={{ border: "2px solid" }}>Mã khoa</th>
                                                                <th style={{ border: "2px solid" }}>Mô tả</th>
                                                                <th style={{ border: "2px solid" }}>Chức năng</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>

                                                                <td style={{ border: "2px solid" }}>DHKTPM</td>
                                                                <td style={{ border: "2px solid" }}>Hướng đối tượng</td>
                                                                <td style={{ border: "2px solid" }}>CNTT</td>
                                                                <td style={{ border: "2px solid" }}></td>
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
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>

                            </div>
                            {/* Content wrapper */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const HocPhan = () => {
    const [openPopup, setOpenPopup] = useState(false);
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
                                    {/* <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="card mb-4">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Thêm học phần</h5>
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
                                                                }}>Lưu</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>

                                    </div> */}


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
                                                                    <th style={{ border: "2px solid" }}>Mã môn song hành</th>
                                                                    <th style={{ border: "2px solid" }}>Mã môn tiên quyết</th>
                                                                    <th style={{ border: "2px solid" }}>Mã chuyên ngành</th>
                                                                    <th style={{ border: "2px solid" }}>Mô tả</th>
                                                                    <th style={{ border: "2px solid" }}>Chức năng</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                <tr>
                                                                    <td style={{ border: "2px solid" }}>
                                                                        <input type="checkbox" value=""></input>
                                                                    </td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPM</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>2</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMA</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMB</td>
                                                                    <td style={{ border: "2px solid" }}>KTPM</td>
                                                                    <td style={{ border: "2px solid" }}></td>
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
                                                                <tr>
                                                                    <td style={{ border: "2px solid" }}>
                                                                        <input type="checkbox" value=""></input>
                                                                    </td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPM</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>2</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMA</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMB</td>
                                                                    <td style={{ border: "2px solid" }}>KTPM</td>
                                                                    <td style={{ border: "2px solid" }}></td>
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
                                                                <tr>
                                                                    <td style={{ border: "2px solid" }}>
                                                                        <input type="checkbox" value=""></input>
                                                                    </td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPM</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>2</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMA</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMB</td>
                                                                    <td style={{ border: "2px solid" }}>KTPM</td>
                                                                    <td style={{ border: "2px solid" }}></td>
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
                                                                <tr>
                                                                    <td style={{ border: "2px solid" }}>
                                                                        <input type="checkbox" value=""></input>
                                                                    </td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPM</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>2</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMA</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMB</td>
                                                                    <td style={{ border: "2px solid" }}>KTPM</td>
                                                                    <td style={{ border: "2px solid" }}></td>
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
                                                                <tr>
                                                                    <td style={{ border: "2px solid" }}>
                                                                        <input type="checkbox" value=""></input>
                                                                    </td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPM</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>2</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMA</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMB</td>
                                                                    <td style={{ border: "2px solid" }}>KTPM</td>
                                                                    <td style={{ border: "2px solid" }}></td>
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
                                                                <tr>
                                                                    <td style={{ border: "2px solid" }}>
                                                                        <input type="checkbox" value=""></input>
                                                                    </td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPM</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>3</td>
                                                                    <td style={{ border: "2px solid" }}>2</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMA</td>
                                                                    <td style={{ border: "2px solid" }}>DHKTPMB</td>
                                                                    <td style={{ border: "2px solid" }}>KTPM</td>
                                                                    <td style={{ border: "2px solid" }}></td>
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
