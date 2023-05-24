import { useState } from "react";
import ClosePopUp from "../assets/img/logo_img/close-pop.png";

function PopupCTHPdaDK({ onDialog, dsChiTietHPdaDK }) {
    const [dsCTHP, setDsCTHP] = useState(dsChiTietHPdaDK);
    let stt = 1;
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

                    <div className="table-responsive">
                        <table className="table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                            <thead>
                                <tr role="row">
                                    <th className="sorting_disabled">STT</th>
                                    <th className="sorting_disabled">Lịch học</th>
                                    <th className="sorting_disabled">Phòng</th>
                                    <th className="sorting_disabled">Dãy nhà</th>
                                    <th className="sorting_disabled">Cơ sở</th>
                                    <th className="sorting_disabled">Giảng viên</th>
                                    <th className="sorting_disabled">Thời gian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dsCTHP ?
                                    <>
                                        {
                                            dsCTHP["results"].map((ds) => (
                                                <>
                                                    <tr role="row">
                                                        <td>{stt++}</td>
                                                        <td>{
                                                            ds.loai_hoc_phan_phu_trach == 1 ? "TH" : "LT"
                                                        } - T{ds.ngay_hoc_trong_tuan + 1}   Tiết
                                                            ({ds.tiet_hoc_bat_dau})-({ds.tiet_hoc_ket_thuc})
                                                        </td>
                                                        <td>{ds.ten_phong_hoc}</td>
                                                        <td>{ds.ten_day_nha}</td>
                                                        <td>Cơ sở 1 (TP. Hồ Chí Minh)</td>
                                                        <td>{ds.ten_giang_vien}</td>
                                                        <td>({ds.thoi_gian_bat_dau})-({ds.thoi_gian_ket_thuc})</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={5} />
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </>
                                    : <></>
                                }
                            </tbody>
                        </table>
                    </div>
                </div></div><div id="mask" style={{ width: '100%', height: '100vh', display: 'block', opacity: '0.9' }} /></div>
    )
}

export default PopupCTHPdaDK;