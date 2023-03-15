import React from "react";
import Sidebar from "../components/Sidebar";
import * as AiIcons from "react-icons/ai";
// import * as Corecss from "../../../assets/vendor/css/core.css";
import { useState, useEffect } from "react";
import Popup from "../../Popup";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import * as xlsx from "xlsx";


export const DiemDanhTheoLHP = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                // for (let i = 1; i < json.length; i++) {
                //     // console.log(json[i]["Mã sinh viên"]);
                //     console.log(json[i]["Tieu De"]);
                //     console.log(json[i]["__EMPTY"]);
                // }
                // for (let i = 8; i < json.length; i++) {
                //     console.log(json[i].__EMPTY_1);
                //     console.log(json[i].__EMPTY_2);
                //     console.log(json[i].__EMPTY_3);
                //     console.log(json[i].__EMPTY_4);
                //     console.log(json[i].__EMPTY_5);
                // }
                console.log(json);

            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };

    const handleExpandClick = () => {
        setExpanded((oldExpanded) =>
            oldExpanded.length === 0 ? ['1', '10', '11', '12', '100', '101', '102'] : [],
        );
    };

    // const handleSelectClick = () => {
    //     setSelected((oldSelected) =>
    //         oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
    //     );
    // };
    return (
        <div>
            <Sidebar />
            <div className="qlhp" style={{ backgroundColor: "#E7EEF1", display: "grid" }}>
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
                                            <div className="card-gv-header">
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
                                                    color: "#1976d2"
                                                }}>Điểm danh theo lớp học phần</h5>
                                                <div className="card-body">
                                                    <div className="demo-inline-spacing">
                                                        <div className="col-md-3">
                                                            <label for="exampleFormControlSelect1" class="form-label">Đợt</label>
                                                            <select className="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                                                <option selected>Chọn đợt</option>
                                                                <option value="1">HK2 (2022 - 2023)</option>
                                                                <option value="2">HK1 (2023 - 2024)</option>
                                                                <option value="3">HK2 (2023 - 2024)</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label for="defaultFormControlInput" class="form-label">Môn học</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="defaultFormControlInput"
                                                                aria-describedby="defaultFormControlHelp"
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label for="defaultFormControlInput" class="form-label">Mã lớp học phần</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="defaultFormControlInput"
                                                                aria-describedby="defaultFormControlHelp"
                                                            />
                                                        </div>
                                                        <div className="col-md-1">
                                                            <br />
                                                            <button type="button" className="btn btn-primary" style={{ marginTop: "6px" }}>Tìm Lịch</button>
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
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <div>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-3">
                                            <div className="card-gv" >
                                                <Box sx={{
                                                    height: 270, flexGrow: 1,
                                                    overflowY: 'auto', overflowX: 'auto'
                                                }}>
                                                    <Box sx={{ mb: 1 }}>
                                                        <Button onClick={handleExpandClick}>
                                                            {expanded.length === 0 ? 'Danh sách lớp học phần' : 'Danh sách lớp học phần'}
                                                        </Button>
                                                    </Box>
                                                    <TreeView
                                                        aria-label="controlled"
                                                        defaultCollapseIcon={<ExpandMoreIcon />}
                                                        defaultExpandIcon={<ChevronRightIcon />}
                                                        expanded={expanded}
                                                        selected={selected}
                                                        onNodeToggle={handleToggle}
                                                        onNodeSelect={handleSelect}
                                                        multiSelect
                                                    >
                                                        {/* <TreeItem nodeId="1" label="Khoa Công nghệ Thông tin">
                                                            <TreeItem nodeId="2" label="00207" />
                                                            <TreeItem nodeId="3" label="Chrome" />
                                                            <TreeItem nodeId="4" label="Webstorm" />
                                                        </TreeItem>
                                                        <TreeItem nodeId="5" label="Documents">
                                                            <TreeItem nodeId="6" label="MUI">
                                                                <TreeItem nodeId="7" label="src">
                                                                    <TreeItem nodeId="8" label="02000700 - Lap trinh huong su kien" />
                                                                    <TreeItem nodeId="9" label="tree-view.js" />
                                                                </TreeItem>
                                                            </TreeItem>
                                                        </TreeItem> */}
                                                        <TreeItem nodeId="1" label="Khoa Công nghệ Thông tin">
                                                            <TreeItem nodeId="10" label="002070 - Lập trình hướng sự kiện" >
                                                                <TreeItem nodeId="100" label="420300207003 - DHKTPM17A">
                                                                    <TreeItem nodeId="1000" label="Nhóm LT" />
                                                                    <TreeItem nodeId="1001" label="Nhóm TH1" />
                                                                    <TreeItem nodeId="1002" label="Nhóm TH2" />
                                                                    <TreeItem nodeId="1003" label="Nhóm TH3" />
                                                                </TreeItem>
                                                            </TreeItem>
                                                            <TreeItem nodeId="11" label="002070 - Lập trình hướng sự kiện" >
                                                                <TreeItem nodeId="101" label="420300207003 - DHKTPM17A">
                                                                    <TreeItem nodeId="1004" label="Nhóm LT" />
                                                                    <TreeItem nodeId="1005" label="Nhóm TH1" />
                                                                    <TreeItem nodeId="1006" label="Nhóm TH2" />
                                                                    <TreeItem nodeId="1007" label="Nhóm TH3" />
                                                                </TreeItem>
                                                            </TreeItem>
                                                            <TreeItem nodeId="12" label="002070 - Lập trình hướng sự kiện" >
                                                                <TreeItem nodeId="102" label="420300207003 - DHKTPM17A">
                                                                    <TreeItem nodeId="1008" label="Nhóm LT" />
                                                                    <TreeItem nodeId="1009" label="Nhóm TH1" />
                                                                    <TreeItem nodeId="1010" label="Nhóm TH2" />
                                                                    <TreeItem nodeId="1011" label="Nhóm TH3" />
                                                                </TreeItem>
                                                            </TreeItem>
                                                        </TreeItem>
                                                    </TreeView>
                                                </Box>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card-gv">
                                                        <div className="mb-3">
                                                            <div className="demo-inline-spacing" style={{ marginRight: "17px" }} >

                                                                <button type="button" className="btn btn-primary"
                                                                    style={{
                                                                        float: "right", display: "inline-block", fontWeight: "400"
                                                                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme",
                                                                    }}
                                                                    onClick={() => { setOpenPopup(true); }}
                                                                > <AiIcons.AiFillPlusSquare /> Xuất file điểm danh tổng hợp</button>
                                                                {/* <button type="button" className="btn btn-warning"
                                                                    style={{
                                                                        float: "right", display: "inline-block", fontWeight: "400"
                                                                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                    }}> <AiIcons.AiFillDelete /> Import điểm danh</button> */}

                                                                {/* <input type="file" id="formFile"
                                                                    style={{
                                                                        float: "right", display: "inline-block", fontWeight: "400"
                                                                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                    }}>
                                                                    <AiIcons.AiFillDelete /> Import điểm danh
                                                                </input> */}
                                                                <label htmlFor="upload" className="btn btn-warning"
                                                                    style={{
                                                                        float: "right", display: "inline-block", fontWeight: "400"
                                                                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                    }}
                                                                >
                                                                    <AiIcons.AiFillDelete />
                                                                    Import điểm danh</label>
                                                                <input
                                                                    type="file"
                                                                    name="upload"
                                                                    id="upload"
                                                                    onChange={readUploadFile}
                                                                    style={{ display: "none" }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="table-responsive text-nowrap">
                                                                {/* <table className="table table-bordered" style={{
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
                                                                            <th style={{ border: "2px solid" }}>Mô tả</th>
                                                                            <th style={{ border: "2px solid" }}>Thao tác</th>
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
                                                                </table> */}
                                                                <table className="table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                                                    <thead>
                                                                        <tr role="row">
                                                                            <th className="sorting_disabled" rowSpan={2} >STT</th>
                                                                            <th className="sorting_disabled" colSpan={5} >Thông tin Sinh viên</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br /> 08/08/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />15/08/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />22/08/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />29/08/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />05/09/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />12/09/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />19/09/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />26/09/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] -<br /> 03/10/2022</th>
                                                                            <th className="sorting_disabled" colSpan={3} >[Thứ hai] - [13-&gt;15] - <br />10/10/2022</th>
                                                                            <th className="sorting_disabled" colSpan={4} >Tổng cộng</th>
                                                                        </tr>
                                                                        <tr role="row">
                                                                            {/* <th className="sorting_disabled" lang="lichhoctiendo-thu">Thứ</th>
                                                                            <th className="sorting_disabled" colSpan={2} style={{ width: '7%' }} lang="lichhoctiendo-tiet">Tiết</th>
                                                                            <th className="sorting_disabled" lang="lichhoctiendo-loailich">Loại lịch</th>
                                                                            <th lang="giang-duong" className="sorting_disabled" style={{ width: '7%' }}>Phòng</th>
                                                                            <th lang="phong" className="sorting_disabled">Nhóm</th>
                                                                            <th className="sorting_disabled" lang="lichhoctiendo-gio">Giờ</th>
                                                                            <th className="sorting_disabled" lang="lichhoctiendo-batdau">Bắt đầu</th>
                                                                            <th className="sorting_disabled" lang="lichhoctiendo-ketthuc">Kết thúc</th> */}
                                                                            <th className="sorting_disabled">Mã sinh viên</th>
                                                                            <th className="sorting_disabled">Họ đệm</th>
                                                                            <th className="sorting_disabled">Tên</th>
                                                                            <th className="sorting_disabled">Giới tính</th>
                                                                            <th className="sorting_disabled">Ngày sinh</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">(P/K)</th>
                                                                            <th className="sorting_disabled">ST</th>
                                                                            <th className="sorting_disabled">LD</th>
                                                                            <th className="sorting_disabled">Vắng có phép</th>
                                                                            <th className="sorting_disabled">Vắng không phép</th>
                                                                            <th className="sorting_disabled">Tổng số tiết</th>
                                                                            <th className="sorting_disabled">(%) vắng</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className role="row">
                                                                            <td>1</td>
                                                                            <td>19516131</td>
                                                                            <td className="text-left">Nguyễn Khoa</td>
                                                                            <td className="text-left">Bin</td>
                                                                            <td >Nam</td>
                                                                            <td>15/12/2001</td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td></td>
                                                                            <td>0</td>
                                                                            <td>0</td>
                                                                            <td>60</td>
                                                                            <td>0%</td>


                                                                            {/* <td>
                                                                                <span>7</span>                  </td>
                                                                            <td colSpan={2}>
                                                                                <span>16</span>                  </td>
                                                                            <td>Thực hành</td>
                                                                            <td>Khóa luận</td>
                                                                            <td />
                                                                            <td />
                                                                            <td>
                                                                                <span>31/12/2022</span>                  </td>
                                                                            <td>
                                                                                <span>31/12/2022</span>                  </td>
                                                                            <td className="text-center"><a href="javascript:;" data-magiangvien="TA00120118" onclick="getThongTinGiangVien(this)">TA00120118</a></td>
                                                                            <td className="text-left"><a href="javascript:;" data-magiangvien="TA00120118" onclick="getThongTinGiangVien(this)">Giảng viên tạm CNTT 3</a></td> */}
                                                                        </tr>
                                                                        {/* <tr className role="row">
                                                                            <td>2</td>
                                                                            <td>4203003098</td>
                                                                            <td className="name">Thực tập doanh nghiệp</td>
                                                                            <td className="text-center">5</td>
                                                                            <td>
                                                                                <span>7</span>                  </td>
                                                                            <td colSpan={2}>
                                                                                <span>16</span>                  </td>
                                                                            <td>Thực hành</td>
                                                                            <td>Thực tập</td>
                                                                            <td />
                                                                            <td />
                                                                            <td>
                                                                                <span>07/01/2023</span>                  </td>
                                                                            <td>
                                                                                <span>07/01/2023</span>                  </td>
                                                                            <td className="text-center"><a href="javascript:;" data-magiangvien="TA00120119" onclick="getThongTinGiangVien(this)">TA00120119</a></td>
                                                                            <td className="text-left"><a href="javascript:;" data-magiangvien="TA00120119" onclick="getThongTinGiangVien(this)">Giảng viên tạm CNTT 4</a></td>
                                                                        </tr> */}
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
        </div>
    );
};

