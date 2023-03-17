import { React, useState, useEffect } from "react";
import "../assets/css/kendo.cms.min.css";
import "../assets/css/kendo.common.min.css";
import lichHocAPI from "../api/lichhocAPI";
import Sidenavbar from "./Sidenavbar";
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export default function XemLichHoc() {
    const [ngayHoc, setNgayHoc] = useState("2023-02-28");//doi thanh ngay hien tai
    const [thoiKhoaBieu, setThoiKhoaBieu] = useState("");
    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const [selectDatePicker, setSelectDatePicker] = useState(dayjs(currentDate));
    // const [currentWeek,setCurrentWeek] = new Date(selectDatePicker.format('YYYY-MM-DD'));
    // const [nextWeek, setNextWeek] = useState(dayjs(new Date(currentWeek.getTime() + 7 * 24 * 60 * 60 * 1000)));
    // const formatNextWeek = nextWeek.format('YYYY-MM-DD');
    const [changeWeek, setChangeWeek] = useState(new Date());
    var sendDate = (new Date()).getTime();
    const [loading, setLoading] = useState(false);
    const [resTime, setResTime] = useState(0);


    // console.log(formatNextWeek);

    function getNextWeek() {
        const curr = new Date(dayjs(changeWeek).format('YYYY-MM-DD'));
        const next = dayjs(new Date(curr.getTime() + 7 * 24 * 60 * 60 * 1000));
        const formatNextWeek = next.format('YYYY-MM-DD');
        // setSelectDatePicker(formatNextWeek);
        setChangeWeek(formatNextWeek);
    }

    function getPreviousWeek() {
        const curr = new Date(dayjs(changeWeek).format('YYYY-MM-DD'));
        const next = dayjs(new Date(curr.getTime() - 7 * 24 * 60 * 60 * 1000));
        const formatNextWeek = next.format('YYYY-MM-DD');
        // setSelectDatePicker(formatNextWeek);
        setChangeWeek(formatNextWeek);
    }

    function getCurrentWeek() {
        setChangeWeek(new Date());
        setSelectDatePicker(dayjs(currentDate));
    }
    useEffect(() => {
        if (resTime > 0) {
            console.log(resTime);
            setTimeout(() => {
                setLoading(false);
            }, resTime)
        }
    }, [resTime])

    useEffect(() => {
        setSelectDatePicker(dayjs(changeWeek));
    }, [changeWeek])



    useEffect(() => {
        const activeLichHoc = async () => {
            try {
                setLoading(true);
                const res = await lichHocAPI.getThoiKhoaBieuSinhVienTrongMotTuan(currentDate);
                setThoiKhoaBieu(res.data);
                var receiveDate = (new Date()).getTime();
                var responseTimeMs = receiveDate - sendDate;
                setResTime(responseTimeMs);
            } catch (error) {
                console.log(error.message);
            }
        };
        activeLichHoc();
    }, []);

    useEffect(() => {
        const activeLichHocNew = async () => {
            try {
                setLoading(true);
                const res = await lichHocAPI.getThoiKhoaBieuSinhVienTrongMotTuan(selectDatePicker.format('YYYY-MM-DD'));
                setThoiKhoaBieu(res.data);
                var receiveDate = (new Date()).getTime();
                var responseTimeMs = receiveDate - sendDate;
                setResTime(responseTimeMs);
            } catch (error) {
                console.log(error.message);
            }
        }
        activeLichHocNew();
    }, [selectDatePicker])

    return (
        <>
            <div className="wrapper">
                {/* {console.log(ngayDayJS.format('YYYY-MM-DD'))} */}
                {loading ? (
                    <div className="load-container">
                        <div>
                            <h1 style={{ color: "white", marginBottom: "25px", fontSize: "20px", letterSpacing: "2px" }}>Loading...</h1>
                        </div>
                        <div className="loading">
                            <div className="load-line-box">
                                <div className="load-line"></div>
                            </div>
                        </div>
                    </div>
                ) : <></>}
                <Sidenavbar />
                <div className="main-content">
                    <div className="container" id="full-resize-table">
                        <div className="main-section-content" id="contnet">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <div className="box-df" >
                                        <div className="portlet">
                                            <div className="portlet-title">
                                                <div className="caption">
                                                    <span className="caption-subject bold" lang="lichtheotuan-pagetitle">Lịch học, lịch thi theo tuần</span>

                                                </div>
                                                <div className="actions">
                                                    <div className="mt-radio-inline" style={{ width: '255px', float: 'left', padding: '5px 0px 0px 0px' }}>
                                                        <label className="mt-radio" style={{ paddingLeft: '25px', marginBottom: '0px' }}>
                                                            <input defaultChecked="checked" id="rdoLoaiLich" name="rdoLoaiLich" type="radio" defaultValue={0} /> <label lang="lichtheotuan-tatca">Tất cả</label>
                                                            <span />
                                                        </label>
                                                        <label className="mt-radio" style={{ paddingLeft: '25px', marginBottom: '0px' }}>
                                                            <input id="rdoLoaiLich" name="rdoLoaiLich" type="radio" defaultValue={1} /> <label lang="lichtheotuan-lichhoc">Lịch học</label>
                                                            <span />
                                                        </label>
                                                        <label className="mt-radio" style={{ paddingLeft: '25px', marginBottom: '0px' }}>
                                                            <input id="rdoLoaiLich" name="rdoLoaiLich" type="radio" defaultValue={2} /> <label lang="lichtheotuan-lichthi">Lịch thi</label>
                                                            <span />
                                                        </label>
                                                    </div>
                                                    {/* <span style={{}} className="k-widget k-datepicker k-header"><span className="k-picker-wrap k-state-default"><input id="dateNgayXemLich" name="dateNgayXemLich" type="text" defaultValue="25/02/2023" data-role="datepicker" className="k-input" role="combobox" aria-expanded="false" aria-owns="dateNgayXemLich_dateview" aria-disabled="false" style={{ width: '100%' }} aria-activedescendant="0d9a1a41-cbff-4f73-b657-d7cfaa490fbc_cell_selected" /><span unselectable="on" className="k-select" aria-label="select" role="button" aria-controls="dateNgayXemLich_dateview"><span className="k-icon k-i-calendar" /></span></span></span> */}
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DesktopDatePicker
                                                            value={selectDatePicker}
                                                            minDate={dayjs('2005-01-01')}
                                                            maxDate={dayjs('2050-01-01')}
                                                            // format="DD-MM-YYYY"
                                                            onChange={(newValue) => {
                                                                setSelectDatePicker(newValue);
                                                                setChangeWeek(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField sx={{
                                                                "& .MuiInputBase-input": {
                                                                    height: "10px" // Set your height here.
                                                                }
                                                            }} size="small" {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                    {/* {console.log(thoiKhoaBieu)} */}
                                                    <a className="btn btn-action" id="btn_HienTai" onClick={getCurrentWeek} style={{ marginRight: "2px", marginLeft: "2px" }}>
                                                        <RiIcons.RiCalendar2Fill style={{ marginRight: "4px" }} />
                                                        Hiện tại
                                                    </a>
                                                    <a className="btn btn-action" id="btn_InLich" style={{ marginRight: "2px", marginLeft: "2px" }}>
                                                        <RiIcons.RiPrinterFill style={{ marginRight: "4px" }} />
                                                        In lịch
                                                    </a>
                                                    <a className="btn btn-action" id="btn_TroVe" onClick={getPreviousWeek} style={{ marginRight: "2px", marginLeft: "2px" }}>
                                                        <AiIcons.AiOutlineStepBackward style={{ marginRight: "4px" }} />
                                                        Trở về
                                                    </a>
                                                    <a className="btn btn-action" id="btn_Tiep" onClick={getNextWeek} style={{ marginRight: "2px", marginLeft: "2px" }} >
                                                        Tiếp
                                                        <AiIcons.AiOutlineStepForward style={{ marginLeft: "4px" }} />
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="viewLichTheoTuan">
                                                <style dangerouslySetInnerHTML={{ __html: "\n    .box-zoom a {\n        font-size: 11px;\n        padding: 2px 5px;\n        margin-top: 15px !important;\n        width: 100%;\n    }\n\n        .box-zoom a:hover {\n            background-color: #f36a5a !important;\n            border-color: red !important;\n        }\n\n    .box-zoom i {\n        font-size: 11px !important;\n    }\n\n    .tooltip > .tooltip-inner {\n        border: 1px solid #c1c1c1;\n        padding: 10px;\n        max-width: 450px;\n        color: black;\n        text-align: left;\n        background-color: rgba(255, 255, 200,1);\n        background: rgba(255, 255, 200,1);\n        opacity: 1;\n        filter: alpha(opacity=100);\n        border-radius: 6px !important;\n        box-shadow: 3px 2px 4px 0px #c7c3c3;\n    }\n\n    .tooltip > .tooltip-arrow {\n        border-bottom-color: black;\n    }\n" }} />
                                                <span hidden id="warningPhongHoc" name="warningPhongHoc" lang="lichtheotuan-warningPhongHoc">Phòng học chưa được khởi tạo</span>
                                                <span hidden id="warningGVNotFound" name="warningGVNotFound" lang="lichtheotuan-warningGVNotFound">Không tìm thấy thông tin</span>
                                                <span hidden id="popupThongTinGV" name="popupThongTinGV" lang="lichtheotuan-popupThongTinGV">Thông tin giảng viên</span>
                                                <span hidden id="popupHoTenGV" name="popupHoTenGV" lang="lichtheotuan-popupHoTenGV">Họ tên</span>
                                                <span hidden id="popupSDTGV" name="popupSDTGV" lang="lichtheotuan-popupSDTGV">Số điện thoại</span>
                                                <span hidden id="popupEmailGV" name="popupEmailGV" lang="lichtheotuan-popupEmailGV">Email</span>


                                                {
                                                    thoiKhoaBieu ?
                                                        <div className="table-responsive">
                                                            <table className="fl-table table table-bordered text-center no-footer dtr-inline" style={{ width: "100%", display: "contents" }}>
                                                                <thead>
                                                                    <tr role={"row"}>
                                                                        <th>Ca học</th>
                                                                        {thoiKhoaBieu["result"].map((tkb) =>

                                                                            <th><span>{tkb.Thu}</span><br />{tkb.Ngay}</th>
                                                                        )}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr role={"row"}>
                                                                        <td><b>Sáng</b></td>
                                                                        {
                                                                            thoiKhoaBieu["result"].map((tkb) =>
                                                                                tkb?.TKB.length > 0 ?
                                                                                    <td>
                                                                                        {
                                                                                            tkb["TKB"].map((t =>
                                                                                                t.tiet_hoc_ket_thuc < 7 ?

                                                                                                    <div className="content color-lichhoc text-left" style={{ textAlign: 'left' }}>
                                                                                                        <b style={{ color: "#003763" }}>{t.ten_mon_hoc}</b>
                                                                                                        <p>{t.ten_lop_hoc_phan}</p>
                                                                                                        <p><span lang="lichtheotuan-tiet">Tiết</span>: {t.tiet_hoc_bat_dau} - {t.tiet_hoc_ket_thuc}<br /></p>
                                                                                                        <p><span lang="giang-duong">Phòng</span>: {t.ten_phong_hoc}</p>
                                                                                                        <p><span lang="lichtheotuan-gv">GV</span>: {t.ten_giang_vien}</p>
                                                                                                    </div>

                                                                                                    : <></>
                                                                                            ))
                                                                                        }
                                                                                    </td>
                                                                                    : <td style={{ height: "150px" }}><div>
                                                                                        <b hidden>no data</b>
                                                                                    </div></td>
                                                                            )
                                                                        }

                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td><b>Chiều</b></td>
                                                                        {thoiKhoaBieu["result"].map((tkb) =>
                                                                            tkb?.TKB.length > 0 ?
                                                                                <td>
                                                                                    {
                                                                                        tkb["TKB"].map((t =>
                                                                                            (t.tiet_hoc_ket_thuc > 7 && t.tiet_hoc_ket_thuc < 13) ?

                                                                                                <div className="content color-lichhoc text-left" style={{ textAlign: 'left' }}>
                                                                                                    <b style={{ color: "#003763" }}>{t.ten_mon_hoc}</b>
                                                                                                    <p>{t.ten_lop_hoc_phan}</p>
                                                                                                    <p><span lang="lichtheotuan-tiet">Tiết</span>: {t.tiet_hoc_bat_dau} - {t.tiet_hoc_ket_thuc}<br /></p>
                                                                                                    <p><span lang="giang-duong">Phòng</span>: {t.ten_phong_hoc}</p>
                                                                                                    <p><span lang="lichtheotuan-gv">GV</span>: {t.ten_giang_vien}</p>
                                                                                                </div>

                                                                                                : <></>
                                                                                        ))
                                                                                    }
                                                                                </td>
                                                                                : <td style={{ height: "150px" }}><div>
                                                                                    <b hidden>no data</b>
                                                                                </div></td>
                                                                        )}
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td><b>Tối</b></td>
                                                                        {thoiKhoaBieu["result"].map((tkb) =>
                                                                            tkb?.TKB.length > 0 ?
                                                                                <td>
                                                                                    {
                                                                                        tkb["TKB"].map((t =>
                                                                                            (t.tiet_hoc_ket_thuc == 15) ?

                                                                                                <div className="content color-lichhoc text-left" style={{ textAlign: 'left' }}>
                                                                                                    <b style={{ color: "#003763" }}>{t.ten_mon_hoc}</b>
                                                                                                    <p>{t.ten_lop_hoc_phan}</p>
                                                                                                    <p><span lang="lichtheotuan-tiet">Tiết</span>: {t.tiet_hoc_bat_dau} - {t.tiet_hoc_ket_thuc}<br /></p>
                                                                                                    <p><span lang="giang-duong">Phòng</span>:{t.ten_phong_hoc}</p>
                                                                                                    <p><span lang="lichtheotuan-gv">GV</span>: {t.ten_giang_vien}</p>
                                                                                                </div>

                                                                                                : <></>
                                                                                        ))
                                                                                    }
                                                                                </td>
                                                                                : <td style={{ height: "150px" }}><div>
                                                                                    <b hidden>no data</b>
                                                                                </div></td>
                                                                        )}
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div> : <></>
                                                }


                                                <div className="tableGC">
                                                    <ul>
                                                        <li>
                                                            <span className="colorSTLichHoc" /><label lang="lichtheotuan-lichhoc">Lịch học</label>
                                                        </li>
                                                        <li>
                                                            <span className="colorSTLichHoc" style={{ backgroundColor: '#92d6ff', borderColor: '#1da1f2' }} /><label lang="lichtheotuan-lichhoconline">Lịch học trực tuyến</label>
                                                        </li>
                                                        <li>
                                                            <span className="colorSTLichThi" /><label lang="lichtheotuan-lichthi">Lịch thi</label>
                                                        </li>
                                                        <li>
                                                            <span className="colorSTTamNgung" /><label lang="lichtheotuan-lichtamngung">Lịch tạm ngưng</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div style={{ marginTop: '10px' }}>
                                                </div>
                                                <input id="firstDatePrevOffWeek" name="firstDatePrevOffWeek" type="hidden" defaultValue="14/02/2022" />
                                                <input id="firstDateOffWeek" name="firstDateOffWeek" type="hidden" defaultValue="21/02/2022" />
                                                <input id="firstDateNextOffWeek" name="firstDateNextOffWeek" type="hidden" defaultValue="28/02/2022" />
                                            </div>
                                            <div style={{ marginTop: '7px' }} id="viewDsCamThi">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}