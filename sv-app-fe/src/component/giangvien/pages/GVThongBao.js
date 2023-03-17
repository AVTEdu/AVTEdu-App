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


export const GVThongBao = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

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
                                                                <button type="button" class="btn  btn-danger"
                                                                    style={{
                                                                        float: "right", display: "inline-block", fontWeight: "400"
                                                                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                                                                    }}> <AiIcons.AiFillDelete /> Import điểm danh</button>
                                                                <button type="button" class="btn btn-info"
                                                                    style={{
                                                                        float: "right", display: "inline-block", fontWeight: "400"
                                                                        , lineHeight: "1.53", textAlign: "center", verticalAlign: "middle", userSelect: "none"
                                                                        , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme",
                                                                    }}
                                                                    onClick={() => { setOpenPopup(true); }}
                                                                > <AiIcons.AiFillPlusSquare /> Xuất file điểm danh tổng hợp</button>

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

