import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
import { useEffect, useState } from "react";

export const CongNo = () => {
    const [sinhVienSearch, setSinhVienSearch] = useState('');
    const searchSinhVien = (e) => {
        if (e.key === 'Enter') {
            setSinhVienSearch(e.target.value);
        }
    }
    useEffect(() => {
        console.log(sinhVienSearch)
    }, [sinhVienSearch])
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
                                                <h5 className="card-header" style={{
                                                    fontSize: "1.125rem", marginTop: "0", fontWeight: "500"
                                                    , lineHeight: "1.1", color: "#566a7f", fontFamily: "var(--bs-body-font-family)"
                                                }}>Danh sách công nợ</h5>
                                                <div className="card-body">
                                                    <div className="table-responsive text-nowrap">
                                                        <table className="table table-bordered" style={{
                                                            borderColor: "#d9dee3", color: "#697a8d",
                                                            border: "2px solid", backgroundColor: "#fff"
                                                        }} >
                                                            <thead>
                                                                <tr style={{ backgroundColor: "#CADAE1" }}>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Mã học phí</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Mã môn</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Mã LHP</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Nội dung thu</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Trạng thái</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Số tiền</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Công nợ</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Đã nộp</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">

                                                                <tr>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>1</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>DHKTPM</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>9</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>Tiền học phí</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                        <select className="form-control" style={{ textAlign: "center" }}
                                                                            defaultValue={1}>
                                                                            <option value={2}>Đã thanh toán</option>
                                                                            <option value={1}>Chưa thanh toán</option>
                                                                        </select>
                                                                    </td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>1860000</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>1860000</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>0</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                        <button type="button" class="btn  btn-success"
                                                                            style={{
                                                                                display: "inline-block", fontWeight: "400"
                                                                                , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                                , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                            }}><AiIcons.AiTwotoneEdit /> Cập nhật</button>
                                                                    </td>
                                                                </tr>
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
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Số tiền</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Đơn vị xử lý</th>
                                                                    <th style={{ border: "2px solid", textAlign: "center" }}>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="adminClassHover">
                                                                <tr>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>10144</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>03-03-2023</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>1860000</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>Giáo vụ IUH</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                        <button type="button" class="btn  btn-primary"
                                                                            style={{
                                                                                display: "inline-block", fontWeight: "400"
                                                                                , lineHeight: "1.53", userSelect: "none"
                                                                                , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                            }}><AiIcons.AiFillPrinter /> Xuất phiếu</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>10144</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>03-03-2023</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>1860000</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>Momo</td>
                                                                    <td style={{ border: "2px solid", textAlign: "center", verticalAlign: "middle" }}>
                                                                        <button type="button" class="btn  btn-primary"
                                                                            style={{
                                                                                display: "inline-block", fontWeight: "400"
                                                                                , lineHeight: "1.53", userSelect: "none"
                                                                                , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                            }}><AiIcons.AiFillPrinter /> Xuất phiếu</button>
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
            </div>
        </>
    )
};