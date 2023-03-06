import React from "react";
import Sidebar from "../components/Sidebar";



export const Khoa = () => {
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
                                    <h4 className="fw-bold py-3 mb-4" style={{ marginLeft: "250px", fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý khoa </h4>

                                    {/* <div className="row"> 
                                        <div className="col-md-2"></div>
                                        <div className="col-md-10">
                                            <div className="card mb-4">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Thêm khoa</h5>
                                                <div className="card-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="" className="form-label" style={{
                                                            display: "inline-block", boxSizing: "border-box"
                                                            , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                        }}>Mã khoa</label>
                                                        <input type="text" className="form-control" id="" placeholder="" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="" className="form-label" style={{
                                                            display: "inline-block", boxSizing: "border-box"
                                                            , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                        }}>Tên khoa</label>
                                                        <input type="text" className="form-control" id="" placeholder="" />
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

                                    </div> */}

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

export const ChuyenNganh = () => {
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
                                    <h4 className="fw-bold py-3 mb-4" style={{ marginLeft: "250px", fontSize: "calc(1.2625rem + 0.15vw)" }}> Quản lý chuyên ngành </h4>
                                    <div className="row">

                                        {/* Form controls */}
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="card mb-4">
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Thêm chuyên ngành</h5>
                                                <div className="card-body">
                                                    <div className="mb-3">
                                                        <label htmlFor="" className="form-label" style={{
                                                            display: "inline-block", boxSizing: "border-box"
                                                            , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                        }}>Mã chuyên ngành</label>
                                                        <input type="text" className="form-control" id="" placeholder="" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="" className="form-label" style={{
                                                            display: "inline-block", boxSizing: "border-box"
                                                            , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                        }}>Tên chuyên ngành</label>
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

                                                    <div className="mb-3">
                                                        <label htmlFor="" className="form-label" style={{
                                                            display: "inline-block", boxSizing: "border-box"
                                                            , cursor: "default", fontFamily: "var(--bs-body-font-family)", lineHeight: "var(--bs-body-line-height)"
                                                        }}>Số tín chỉ</label>
                                                        <input type="text" className="form-control" id="" placeholder="" />
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
