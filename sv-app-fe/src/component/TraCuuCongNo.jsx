import { React, useState, useEffect } from "react";
import Sidenavbar from "./Sidenavbar";
import dkhpAPI from "../api/dkhpAPI";
import * as AiIcons from "react-icons/ai";

export default function TraCuuCongNo() {
    const [dsHocPhi, setDsHocPhi] = useState();
    let sttDsHP = 1;
    let tongSoTien = 0;
    let tongDaNop = 0;
    let tongCongNo = 0;
    useEffect(() => {
        const activeHocPhi = async () => {
            try {
                const res = await dkhpAPI.getDanhSachHocPhi();

                setDsHocPhi(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        activeHocPhi();
    }, []);

    if (!dsHocPhi) return null;

    return (

        <div className="wrapper">
            <Sidenavbar />
            <div className="main-content">
                <div className="container" id="full-resize-table">
                    <div className="main-section-content" id="contnet">
                        <div className="row">
                            <style dangerouslySetInnerHTML={{ __html: "\n    .form-control-actions {\n        display: inline-block !important;\n        padding: 6px 12px !important;\n        line-height: 1.5 !important;\n    }\n\n    .btn-thanhtoantructuyen {\n        margin-right: 0 !important;\n    }\n\n        .btn-thanhtoantructuyen:hover {\n            background-color: #bde2ff;\n            color: #1da1f2;\n            margin-right: 0 !important;\n        }\n\n    .form-control-actions {\n        display: inline-block !important;\n        padding: 6px 12px !important;\n        line-height: 1.5 !important;\n    }\n\n    .tableFixHead {\n        overflow-y: auto;\n        max-height: 780px;\n    }\n\n        .tableFixHead thead th {\n            position: sticky;\n            top: 0;\n            background: #f3f7f9;\n            box-shadow: inset 0px 1px 0px 0px #e7e7e7;\n        }\n\n        .tableFixHead tbody td {\n            padding: 8px 16px;\n        }\n\n    .table-thanhtoan {\n        border-collapse: collapse;\n        width: 100%;\n        border: 0 !important;\n    }\n" }} />
                            <div className="col-md-12 col-xs-12">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <label style={{ paddingTop: '8px !important' }} className="caption-subject bold">Tra cứu công nợ</label>
                                            </div>
                                            <div className="actions">
                                                {/* <label style={{ fontWeight: 'normal' }} className="caption-subject">Học Kỳ</label>
                                            <select className="form-control-actions" id="IDDot" name="IDDot" placeholder="Tất cả"><option value>Tất cả</option>
                                                <option value={45}>HK3 (2022-2023)</option>
                                                <option value={44}>HK2 (2022-2023)</option>
                                                <option value={43}>HK1 (2022-2023)</option>
                                                <option value={42}>HK3 (2021-2022)</option>
                                                <option value={41}>HK2 (2021-2022)</option>
                                                <option value={40}>HK1 (2021-2022)</option>
                                                <option value={39}>HK3 (2020-2021)</option>
                                                <option value={38}>HK2 (2020-2021)</option>
                                                <option value={37}>HK1 (2020-2021)</option>
                                                <option value={36}>HK3 (2019-2020)</option>
                                                <option value={35}>HK2 (2019-2020)</option>
                                                <option value={34}>HK1 (2019-2020)</option>
                                            </select> */}
                                                <a href="javascript:;" className="btn btn-action" id="btn_InCongNo" onclick="PrintElem($('#id-cong-no'))" lang="congnosinhvien-print-button">
                                                    <AiIcons.AiFillPrinter />
                                                    In công nợ
                                                </a>
                                            </div>
                                        </div>
                                        <div id="viewCongNo">    <div className="table-responsive tableFixHead">
                                            <table className="table-pointer table-custom table table-bordered text-center no-footer dtr-inline table-thanhtoan" width="100%" role="grid">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_disabled" lang="congnosinhvien-stt">STT</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-mamh">Mã</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-noidungthu">Nội dung thu</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-trangthaidk">Trạng thái<br />đăng ký</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-sotien">Số tiền<br />(VNĐ)</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-phantrammiengiam">Miễn giảm<br />(%)</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-headerdanop">Đã nộp<br />(VNĐ)</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-congno">Công nợ<br />(VNĐ)</th>
                                                        <th className="sorting_disabled" lang="congnosinhvien-trangthai">Trạng thái</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        dsHocPhi?.dsHocPhiSinhVien.length > 0 && dsHocPhi ?
                                                            <>
                                                                {
                                                                    dsHocPhi["dsHocPhiSinhVien"].map((dshp) => (
                                                                        <tr key={dshp.ma_hoc_phi}>
                                                                            <td>{sttDsHP++}</td>
                                                                            <td>{dshp.ma_hoc_phi}</td>
                                                                            <td className="text-left">{dshp.ten_mon_hoc}</td>
                                                                            <td className="text-left">{dshp.trang_thai_dang_ki}</td>
                                                                            <td className="text-right">
                                                                                <span>{dshp.so_tien}</span>
                                                                            </td>
                                                                            <td className="text-center">
                                                                                <span>{dshp.mien_giam}</span>
                                                                            </td>
                                                                            <td className="text-right">
                                                                                <span>{dshp.so_tien_da_nop}</span>
                                                                            </td>
                                                                            <td className="text-right">
                                                                                <span>{dshp.cong_no}</span>
                                                                            </td>
                                                                            <td className="text-center">
                                                                                <span>
                                                                                    {/* {dshp.trang_thai == 0 ? 'Đã nộp' : 'Chưa nộp'} */}
                                                                                    {dshp.trang_thai == 1 ? 'Đã nộp' : 'Chưa nộp'}
                                                                                </span>
                                                                            </td>
                                                                            <p hidden>{tongSoTien = tongSoTien + dshp.so_tien}</p>
                                                                            <p hidden>{tongDaNop = tongDaNop + dshp.so_tien_da_nop}</p>
                                                                            <p hidden>{tongCongNo = tongCongNo + dshp.cong_no}</p>
                                                                        </tr>
                                                                    ))
                                                                }
                                                                <tr role="row" className="row-head">
                                                                    <td colSpan={4} className="uppercase"><span lang="congnosinhvien-total">Tổng</span>:</td>
                                                                    <td className="cl-red text-right">
                                                                        <span>{tongSoTien}</span>
                                                                    </td>
                                                                    <td className="cl-red text-right">
                                                                        <span />
                                                                    </td>
                                                                    <td className="cl-red text-right">
                                                                        <span>{tongDaNop}</span>
                                                                    </td>
                                                                    <td className="cl-red text-right">
                                                                        <span>{tongCongNo}</span>
                                                                    </td>
                                                                    <td>
                                                                    </td>
                                                                </tr>
                                                            </>

                                                            : <tr className="row-head">
                                                                <td colSpan={9} className="uppercase">
                                                                    <span>Bạn là sinh viên mới à ? Mau đi đăng ký môn đi</span>
                                                                </td>
                                                            </tr>
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                            {/* <div id="id-cong-no" style={{ display: 'none' }}>
                                            <table style={{ width: '95%', fontFamily: '"Times New Roman"' }}>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ paddingTop: '20px' }}>
                                                            <table style={{ width: '100%' }}>
                                                                <tbody><tr>
                                                                    <td style={{ width: '60px' }}>
                                                                        <img />
                                                                    </td>
                                                                    <td style={{ textAlign: 'center', width: '300px', fontWeight: 'bolder', fontSize: 'smaller' }}>
                                                                        <p style={{ marginTop: '0pt', marginBottom: '0pt', marginLeft: '0in', textAlign: 'center' }}><span style={{ language: 'en-US' }}><span style={{ unicodeBidi: 'embed' }}><span style={{ fontSize: '11.0pt' }}><span style={{ fontFamily: '"Times New Roman"' }}><span style={{ color: 'black' }}><span style={{ language: 'en-US' }}><span style={{ fontWeight: 'bold' }}><span style={{ fontStyle: 'normal' }}><span style={{ verticalAlign: 'baseline' }}>BỘ CÔNG THƯƠNG</span></span></span></span></span></span></span></span></span></p>
                                                                        <p style={{ marginTop: '0pt', marginBottom: '0pt', marginLeft: '0in', textAlign: 'center' }}><span style={{ language: 'en-US' }}><span style={{ unicodeBidi: 'embed' }}><span style={{ fontSize: '11.0pt' }}><span style={{ fontFamily: '"Times New Roman"' }}><span style={{ color: 'black' }}><span style={{ language: 'en-US' }}><span style={{ fontWeight: 'bold' }}><span style={{ fontStyle: 'normal' }}><span style={{ verticalAlign: 'baseline' }}>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM</span></span></span></span></span></span></span></span></span></p>
                                                                        --------------------------
                                                                    </td>
                                                                    <td style={{ width: 'auto' }} />
                                                                    <td style={{ textAlign: 'center', width: '350px', fontWeight: 'bolder', fontSize: 'smaller' }}>
                                                                        CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br />
                                                                        Độc Lập - Tự Do - Hạnh Phúc<br />
                                                                        ---------------------------------
                                                                    </td>
                                                                </tr>
                                                                </tbody></table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', fontSize: '26px', fontWeight: 'bolder', height: '40px' }} lang="congnosinhvien-phieutonghop">
                                                            PHIẾU TỔNG HỢP CÔNG NỢ SINH VIÊN
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ paddingLeft: '10px' }}>
                                                            <table style={{ width: '100%', fontWeight: 'bold' }}>
                                                                <tbody><tr>
                                                                    <td style={{ width: '300px', paddingBottom: '5px' }}><span lang="congnosinhvien-masinhvien">Mã sinh viên</span>: 19507391</td>
                                                                    <td style={{ width: '400px' }}><span lang="congnosinhvien-hoten">Họ tên</span>: Phạm Nguyễn Văn  Trường</td>
                                                                    <td style={{ width: '200px' }}><span lang="congnosinhvien-lophoc">Lớp học</span>: DHKTPM15A </td>
                                                                </tr>
                                                                    <tr>
                                                                        <td style={{ width: '300px', paddingBottom: '5px' }}><span lang="congnosinhvien-hedaotao">Hệ đào tạo</span>: Đại học</td>
                                                                        <td style={{ width: '400px' }}><span lang="congnosinhvien-khoa">Khoa</span>: Khoa Công nghệ Thông tin </td>
                                                                        <td style={{ width: '300px' }}><span lang="congnosinhvien-ngayinphieu">Ngày in phiếu</span>: 05/03/2023 </td>
                                                                    </tr>
                                                                </tbody></table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ paddingLeft: '10px' }}>
                                                            <table className="table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                                                <thead>
                                                                    <tr role="row">
                                                                        <th className="sorting_disabled" lang="congnosinhvien-stt">STT</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-mamh">Mã</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-noidungthu">Nội dung thu</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-stcfull">Số tín chỉ</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-trangthaidkfull">Trạng thái đăng ký</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-sotienfull">Số tiền (VNĐ)</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-phantrammiengiam">Miễn giảm<br />(%)</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-headerdanopfull">Đã nộp (VNĐ)</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-khautrufull">Khấu trừ (VNĐ)</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-congnofull">Công nợ (VNĐ)</th>
                                                                        <th className="sorting_disabled" lang="congnosinhvien-trangthai">Trạng thái</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr role="row">
                                                                        <td>1</td>
                                                                        <td>4203000941</td>
                                                                        <td className="text-left">Kỹ thuật lập trình</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>2</td>
                                                                        <td>4203003067</td>
                                                                        <td className="text-left">Tiếng Anh 1</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>3</td>
                                                                        <td>4203002421</td>
                                                                        <td className="text-left">Tiếng Anh 2</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>4</td>
                                                                        <td>4203003242</td>
                                                                        <td className="text-left">Giáo dục Quốc phòng và an ninh 1</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.200.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.200.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>5</td>
                                                                        <td>4203003307</td>
                                                                        <td className="text-left">Giáo dục thể chất 1</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>6</td>
                                                                        <td>4203000685</td>
                                                                        <td className="text-left">Những nguyên lý cơ bản của chủ nghĩa Mác - Lênin</td>
                                                                        <td className="text-center">
                                                                            <span>5</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.750.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.750.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>7</td>
                                                                        <td>4203002009</td>
                                                                        <td className="text-left">Nhập môn Tin học</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>8</td>
                                                                        <td>4203003848</td>
                                                                        <td className="text-left">Nhập môn Lập trình</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>9</td>
                                                                        <td>4203003259</td>
                                                                        <td className="text-left">Toán cao cấp 1</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>10</td>
                                                                        <td>4203003288</td>
                                                                        <td className="text-left">Toán cao cấp 2</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>11</td>
                                                                        <td>4203003345</td>
                                                                        <td className="text-left">Vật lý đại cương</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>12</td>
                                                                        <td>4203003306</td>
                                                                        <td className="text-left">Giáo dục thể chất 2</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>13</td>
                                                                        <td>4203003354</td>
                                                                        <td className="text-left">Giáo dục Quốc phòng và an ninh 2</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.200.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.200.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>14</td>
                                                                        <td>4203002137</td>
                                                                        <td className="text-left">Hệ thống Máy tính</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.200.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.200.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>15</td>
                                                                        <td>SHCN</td>
                                                                        <td className="text-left">Sinh hoạt chủ nhiệm</td>
                                                                        <td className="text-center">
                                                                            <span>1</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>16</td>
                                                                        <td>4203003192</td>
                                                                        <td className="text-left">Kỹ năng làm việc nhóm</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>17</td>
                                                                        <td>SHCN</td>
                                                                        <td className="text-left">Sinh hoạt chủ nhiệm</td>
                                                                        <td className="text-center">
                                                                            <span>1</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>18</td>
                                                                        <td>4203000597</td>
                                                                        <td className="text-left">Đường lối cách mạng của Đảng Cộng sản Việt Nam</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.650.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>19</td>
                                                                        <td>4203000664</td>
                                                                        <td className="text-left">Tư tưởng Hồ Chí Minh</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.100.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>20</td>
                                                                        <td>4203003198</td>
                                                                        <td className="text-left">Phương pháp luận nghiên cứu khoa học</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.160.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.160.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>21</td>
                                                                        <td>4203000901</td>
                                                                        <td className="text-left">Cấu trúc rời rạc</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>22</td>
                                                                        <td>4203001146</td>
                                                                        <td className="text-left">Hệ cơ sở dữ liệu</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.320.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.320.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>23</td>
                                                                        <td>4203000942</td>
                                                                        <td className="text-left">Cấu trúc dữ liệu và giải thuật</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.320.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.320.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>24</td>
                                                                        <td>4203003591</td>
                                                                        <td className="text-left">Lập trình hướng đối tượng</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>25</td>
                                                                        <td>4203001058</td>
                                                                        <td className="text-left">Mạng máy tính</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>26</td>
                                                                        <td>SHCN</td>
                                                                        <td className="text-left">Sinh hoạt chủ nhiệm</td>
                                                                        <td className="text-center">
                                                                            <span>1</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>27</td>
                                                                        <td>4203002145</td>
                                                                        <td className="text-left">Hệ Thống và Công nghệ Web</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>28</td>
                                                                        <td>4203002044</td>
                                                                        <td className="text-left">Lập trình hướng sự kiện với công nghệ .NET</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.320.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.320.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>29</td>
                                                                        <td>4203000908</td>
                                                                        <td className="text-left">Lý thuyết đồ thị</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>30</td>
                                                                        <td>4203001207</td>
                                                                        <td className="text-left">Hệ quản trị  cơ sở dữ liệu</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>31</td>
                                                                        <td>4203003753</td>
                                                                        <td className="text-left">Phân tích thiết kế hệ thống</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>32</td>
                                                                        <td>4203003451</td>
                                                                        <td className="text-left">Thống kê máy tính và ứng dụng</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>33</td>
                                                                        <td>4203003217</td>
                                                                        <td className="text-left">Quản trị học</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>34</td>
                                                                        <td>4203003245</td>
                                                                        <td className="text-left">Tiếng Việt thực hành</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.740.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>35</td>
                                                                        <td>4203003443</td>
                                                                        <td className="text-left">Khai thác dữ liệu và ứng dụng</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>36</td>
                                                                        <td>4203001004</td>
                                                                        <td className="text-left">Nhập môn an toàn thông tin</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>37</td>
                                                                        <td>4203002117</td>
                                                                        <td className="text-left">Những vấn đề xã hội và đạo đức nghề nghiệp</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>38</td>
                                                                        <td>4203003501</td>
                                                                        <td className="text-left">Phát triển ứng dụng</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>39</td>
                                                                        <td>4203001111</td>
                                                                        <td className="text-left">Công nghệ phần mềm</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>40</td>
                                                                        <td>4203002422</td>
                                                                        <td className="text-left">Pháp luật đại cương</td>
                                                                        <td className="text-center">
                                                                            <span>2</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.160.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.160.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>41</td>
                                                                        <td>4203003621</td>
                                                                        <td className="text-left">Lập trình WWW (Java)</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.400.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.400.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>42</td>
                                                                        <td>4203003592</td>
                                                                        <td className="text-left">Đảm bảo chất lượng và Kiểm thử phần mềm</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.800.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>43</td>
                                                                        <td>4203001432</td>
                                                                        <td className="text-left">Lập trình thiết bị di động</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.400.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.400.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>44</td>
                                                                        <td>4203002070</td>
                                                                        <td className="text-left">Lập trình hướng sự kiện với công  nghệ Java</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.400.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.400.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>45</td>
                                                                        <td>4203004056</td>
                                                                        <td className="text-left">Quản lý dự án CNTT</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>46</td>
                                                                        <td>4203003453</td>
                                                                        <td className="text-left">Tiếp thị điện tử</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>47</td>
                                                                        <td>4203003147</td>
                                                                        <td className="text-left">Công nghệ mới trong phát triển ứng dụng CNTT</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>48</td>
                                                                        <td>4203001549</td>
                                                                        <td className="text-left">Kiến trúc và Thiết kế phần mềm</td>
                                                                        <td className="text-center">
                                                                            <span>4</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>2.520.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>2.520.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>49</td>
                                                                        <td>4203002790</td>
                                                                        <td className="text-left">Khóa luận tốt nghiệp</td>
                                                                        <td className="text-center">
                                                                            <span>5</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>3.150.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>3.150.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>50</td>
                                                                        <td>4203003098</td>
                                                                        <td className="text-left">Thực tập doanh nghiệp</td>
                                                                        <td className="text-center">
                                                                            <span>5</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>3.150.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>3.150.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>51</td>
                                                                        <td>4203002146</td>
                                                                        <td className="text-left">Lập trình phân tán với công nghệ Java</td>
                                                                        <td className="text-center">
                                                                            <span>3</span>
                                                                        </td>
                                                                        <td className="text-center">Đăng ký mới</td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.890.000</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>52</td>
                                                                        <td>BHYT2020</td>
                                                                        <td className="text-left">Thu bảo hiểm y tế năm 2020</td>
                                                                        <td className="text-center">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center" />
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>53</td>
                                                                        <td>BHYT2021</td>
                                                                        <td className="text-left">Thu bảo hiểm y tế năm 2021</td>
                                                                        <td className="text-center">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center" />
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>54</td>
                                                                        <td>BHYT2022</td>
                                                                        <td className="text-left">Thu bảo hiểm y tế năm 2022</td>
                                                                        <td className="text-center">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center" />
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>55</td>
                                                                        <td>BHYT2023</td>
                                                                        <td className="text-left">Thu bảo hiểm y tế năm 2023</td>
                                                                        <td className="text-center">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center" />
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>563.500</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span lang="congnosinhvien-danop">Đã nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row">
                                                                        <td>56</td>
                                                                        <td>TN</td>
                                                                        <td className="text-left">Học phí tốt nghiệp</td>
                                                                        <td className="text-center">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-center" />
                                                                        <td className="text-right">
                                                                            <span>1.000.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span />
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <span>1.000.000</span>
                                                                        </td>
                                                                        <td className="text-center">
                                                                            <span className="cl-red" lang="congnosinhvien-chuanop">Chưa nộp</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr role="row" className="row-head">
                                                                        <td colSpan={5} className="uppercase"><span lang="congnosinhvien-total">Tổng</span>:</td>
                                                                        <td className="cl-red text-right">
                                                                            <span>89.124.000</span>
                                                                        </td>
                                                                        <td className="cl-red text-right">
                                                                            <span />
                                                                        </td>
                                                                        <td className="cl-red text-right">
                                                                            <span>88.124.000</span>
                                                                        </td>
                                                                        <td className="cl-red text-right">
                                                                            <span>0</span>
                                                                        </td>
                                                                        <td className="cl-red text-right">
                                                                            <span>1.000.000</span>
                                                                        </td>
                                                                        <td className="cl-red">
                                                                            <span lang="congnosinhvien-nopthieu">Nộp thiếu</span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}