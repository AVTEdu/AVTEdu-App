import { useState } from "react";
import ClosePopUp from "../assets/img/logo_img/close-pop.png";

function PopupCTPhieuThu({ onDialog, dsChiTietPhieuThu }) {
    const [dsCTPT, setDsCTPT] = useState(dsChiTietPhieuThu);
    let stt = 1;
    let tongTien = 0;
    console.log(dsCTPT?.getChiTietPhieuThu[0].ngay_thu);
    return (
        <div id="boxes" style={{ height: 'inherit !important' }} onClick={() => onDialog(true)}>
            <div id="dialog" className="window" onClick={(e) => e.stopPropagation()}
                style={{ height: 'inherit !important', position: 'fixed', width: '800px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'block' }}>
                {/* <a onclick="closePopup()" className="closePopup agree" /> */}
                <a onClick={() => onDialog(true)} style={{
                    background: "#369ef4", position: "absolute"
                    , right: "0", top: "0", width: "26px", height: "26px", opacity: "1", textShadow: "none",
                    margin: "0", padding: "0", border: "0", fontSize: "100%", verticalAlign: "baseline", borderRadius: "0"
                }}
                >
                    <img src={ClosePopUp} style={{ marginLeft: "8px" }} />
                </a>
                <div className="content"><style dangerouslySetInnerHTML={{ __html: "\n    .class-Tong {\n        background-color: lightgoldenrodyellow;\n        font-weight: bold;\n        color: red;\n    }\n" }} />
                    <div className="clearfix" style={{ marginBottom: '10px' }}>
                        <div style={{ float: 'right' }}>
                            <span className="caption-subject font-blue-madison bold">
                                Ngày thu: <span>{dsCTPT?.getChiTietPhieuThu[0].ngay_thu}</span>          </span>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                            <thead>
                                <tr role="row">
                                    <th className="sorting_disabled">STT</th>
                                    <th className="sorting_disabled">Mã</th>
                                    <th className="sorting_disabled">Nội dung thu</th>
                                    <th className="sorting_disabled">Học kỳ</th>
                                    <th className="sorting_disabled">Số tiền (VNĐ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dsCTPT ?
                                    <>
                                        {
                                            dsCTPT["getChiTietPhieuThu"].map((ds) => (
                                                <>
                                                    <tr role="row">
                                                        <td>{stt++}</td>
                                                        <td>{ds.ma_hoc_phi}</td>
                                                        <td className="text-left">{ds.ten_mon_hoc}</td>
                                                        <td>{ds.nam_hoc_bat_dau}-{ds.nam_hoc_ket_thuc}</td>
                                                        <td className="text-right">
                                                            <span>{ds.so_tien}</span>                      </td>
                                                        <p style={{ display: "none" }}>{tongTien += ds.so_tien}</p>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={5} />
                                                    </tr>
                                                </>
                                            ))
                                        }
                                        <tr role="row" className="row-head">
                                            <td className="uppercase" colSpan={4}>Tổng:</td>
                                            <td className="cl-red text-right">
                                                <span>{tongTien}</span>
                                            </td>
                                        </tr>
                                    </>
                                    : <tr>
                                        <td colSpan={9} className="text-center">
                                            <p className="bold"><span>Tạm chưa có dữ liệu</span></p>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="madonhang text-right">
                        <div><button className="payment-print-button" onClick="PrintElem($('#id-phieu-thu'));">In phiếu thu</button></div>
                    </div>
                    <div id="id-phieu-thu" style={{ display: 'none' }}>
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
                                                    <p>--------------------------</p>
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
                                    <td style={{ textAlign: 'center', fontSize: '26px', fontWeight: 'bolder', height: '40px' }}>
                                        PHIẾU XÁC NHẬN ĐÃ ĐÓNG HỌC PHÍ
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', height: '30px' }}>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px' }}>
                                        <table style={{ width: '100%', fontWeight: 'bold' }}>
                                            <tbody><tr>
                                                <td style={{ width: '300px', paddingBottom: '5px' }}>Mã sinh viên: 19507391</td>
                                                <td style={{ width: '400px' }}>Họ tên: Phạm Nguyễn Văn  Trường</td>
                                                <td style={{ width: '200px' }}>Lớp học: DHKTPM15A </td>
                                            </tr>
                                                <tr>
                                                    <td style={{ width: '300px', paddingBottom: '5px' }}>Hệ đào tạo: Đại học </td>
                                                    <td style={{ width: '400px' }}>Khoa: Khoa Công nghệ Thông tin </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '300px', paddingBottom: '5px' }}>Mã hóa đơn: 0097946 </td>
                                                    <td style={{ width: '400px' }}>Số phiếu: 199805 </td>
                                                    <td style={{ width: '300px' }}>Ngày in phiếu: 03/04/2023 </td>
                                                </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px', paddingTop: '15px', paddingBottom: '5px' }}>
                                        Các khoản đã nộp:
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: '10px' }}>
                                        <table className="table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting_disabled">STT</th>
                                                    <th className="sorting_disabled">Mã</th>
                                                    <th className="sorting_disabled">Nội dung thu</th>
                                                    <th className="sorting_disabled">Học kỳ</th>
                                                    <th className="sorting_disabled">Số tiền (VNĐ)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row">
                                                    <td>1</td>
                                                    <td>BHYT2023</td>
                                                    <td className="text-left">Thu bảo hiểm y tế năm 2023</td>
                                                    <td>2022-2023</td>
                                                    <td className="text-right">
                                                        <span>563.500</span>                                      </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'right', paddingTop: '5px' }}>
                                        <div style={{ fontWeight: 'bold' }}>
                                            Tổng cộng:                                  <span>563.500</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'left', paddingLeft: '10px' }}>
                                        <div style={{ fontWeight: 'bold' }}>Số tiền bằng chữ: <span>Năm trăm sáu mươi ba nghìn, năm trăm đồng</span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table style={{ width: '100%', textAlign: 'center' }}>
                                            <tbody><tr>
                                                <td />
                                                <td style={{ width: '300px' }} />
                                            </tr>
                                                <tr>
                                                    <td />
                                                    <td style={{ width: '300px', fontWeight: 'bold', paddingTop: '25px' }}>
                                                        Người thu<br />
                                                        (Ký, ghi rõ họ tên)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td />
                                                    <td style={{ width: '300px', paddingTop: '40px', fontWeight: 'bold' }}>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div></div><div id="mask" style={{ width: '100%', height: '100vh', display: 'block', opacity: '0.9' }} /></div>
    )
}

export default PopupCTPhieuThu;