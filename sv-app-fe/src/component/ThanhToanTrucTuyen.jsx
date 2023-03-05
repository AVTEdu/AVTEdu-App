import { React, useState, useEffect } from "react";
import LogoMomo from "../assets/img/logo_img/LogoMomo.png";
import Sidenavbar from "./Sidenavbar";

export default function ThanhToanTrucTuyen() {
    return (
        <div className="wrapper">
            <Sidenavbar />
            <div className="main-content">
                <div className="container" id="full-resize-table">
                    <div className="main-section-content" id="contnet">
                        <div className="row">
                            <input id="IdRedirectPhieuThu" name="IdRedirectPhieuThu" type="hidden" defaultValue={0} />
                            <input id="TransID" name="TransID" type="hidden" defaultValue />
                            <input id="PayVersion" name="PayVersion" type="hidden" defaultValue />
                            <style dangerouslySetInnerHTML={{ __html: "\n    .jconfirm-content {\n        font-size: 14px !important;\n    }\n\n    .jconfirm-title {\n        font-size: 19px !important;\n    }\n" }} />
                            <div className="col-md-12 col-xs-12">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold" lang="thanhtoanonline-pagetitle">Thanh toán trực tuyến</span>
                                            </div>
                                            <div className="actions">
                                                <div><select className="form-control" id="cboIDDotThanhToan" langid="thanhtoanonline-dotthanhtoan-combobox" name="cboIDDotThanhToan" placeholder="Tất cả"><option value>Tất cả</option>
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
                                                </select></div>
                                            </div>
                                        </div>
                                        <div id="box_congnothanhtoan">
                                            <meta charSet="utf-8" />
                                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                            <title />
                                            <style dangerouslySetInnerHTML={{ __html: "\n    .background-tr {\n        background-color: #f3f7f9;\n    }\n" }} />
                                            <input id="txtMessLockThanhToan" name="txtMessLockThanhToan" type="hidden" defaultValue />
                                            <div className="table-responsive">
                                                <table className="table-pointer table-custom table table-bordered text-center" width="100%" role="grid" id="ThanhToanOl">
                                                    <thead>
                                                        <tr role="row">
                                                            <td style={{ width: '40px' }}>
                                                                <input type="checkbox" id="chkAll" onclick="checkAll(this); sumKhoanNop();" defaultChecked="checked" />
                                                            </td>
                                                            <th lang="thanhtoanonline-stt">STT</th>
                                                            <th lang="thanhtoanonline-ma">Mã</th>
                                                            <th lang="thanhtoanonline-noidungthu">Nội dung thu</th>
                                                            <th lang="thanhtoanonline-tinchi">Tín chỉ</th>
                                                            <th lang="thanhtoanonline-batbuoc">Bắt buộc</th>
                                                            <th lang="thanhtoanonline-sotien">Số tiền (VND)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center">
                                                                <input defaultChecked="checked" className="chkKTT" data-allowcheck="True" data-bankid data-batbuoc="True" data-dongiabgvat="False" data-idcongnonoitru data-iddangkyhocphan data-iddangkythilai data-iddangkythitotnghiep data-iddukienthu data-idkehoachthuchung="1XdEn96ANSePkE4PvFkEKw" data-idloaithu="9jZsNbbF7Eduwkz6f6TnOw" data-idsub="qOD4AsGAVmCsDBDBQqqxVw" data-idthu="1XdEn96ANSePkE4PvFkEKw" data-ma="TN" data-mucnop={1000000} data-noidungthu="Hoc phi tot nghiep" data-sotien={1000000} data-trandate data-transid id="ckbThanhToan3280" name="ckbThanhToan3280" onclick="sumKhoanNop()" type="checkbox" defaultValue="true" /><input name="ckbThanhToan3280" type="hidden" defaultValue="false" />
                                                            </td>
                                                            <td onclick="chonKhoanThu('ckbThanhToan' + 3280)">1</td>
                                                            <td onclick="chonKhoanThu('ckbThanhToan' + 3280)">TN</td>
                                                            <td className="text-left" onclick="chonKhoanThu('ckbThanhToan' + 3280)">Hoc phi tot nghiep</td>
                                                            <td />
                                                            <td>
                                                                <div>
                                                                    <div className="check" />
                                                                </div>
                                                            </td>
                                                            <td className="text-right">1.000.000</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={6} className="text-right">
                                                                <p className="bold"><span lang="thanhtoanonline-tongtien">Tổng thanh toán</span>:</p>
                                                            </td>
                                                            <td className="text-right">
                                                                <p className="bold"><span id="balanceSum" data-tongtien={1000000} className="total">1.000.000</span></p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={7} style={{ textAlign: 'left', fontSize: '15px' }}>
                                                                <p />
                                                                <p lang="thanhtoanonline-internetbanking" style={{ padding: '5px 0' }}>Vui lòng kiểm tra<strong style={{ fontSize: '15px', color: '#e74c3c' }}> HẠN MỨC THẺ </strong>trước khi thanh toán</p>
                                                                <p lang="thanhtoanonline-internetbanking"><strong style={{ fontSize: '15px', color: '#e74c3c' }}>Lưu ý:</strong> Khuyến cáo thanh toán qua các loại <strong style={{ fontSize: '15px', color: '#e74c3c' }}>thẻ ATM</strong> nội địa.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={7}>
                                                                <div>
                                                                    <div id="boxPhiDVThanhToanOnline" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4}>
                                                                <div className="radio-bank-box">
                                                                    <div className="col-box">
                                                                        <label className="label-bank">
                                                                            <input id className="radio-bank-ckb" type="radio" name="radBank" data-manganhang="VNPAY" defaultValue={999} data-tgtt={1} data-phidv={0} data-phidvphantram="0,000" data-messphidv />
                                                                            <div className="radio-bank-img" style={{ width: '100px' }}>
                                                                                <img src={LogoMomo} />
                                                                                {/* <div className="label-phiDV-VNPAY" style={{ fontSize: 'small' }} /> */}
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    {/* <div className="col-box">
                                                                    <label className="label-bank">
                                                                        <input id className="radio-bank-ckb" type="radio" name="radBank" data-manganhang="NAMABANK" defaultValue={7} data-tgtt={2} data-phidv={0} data-phidvphantram="0,000" data-messphidv />
                                                                        <div className="radio-bank-img" style={{ width: '235px' }}>
                                                                            <img src="/Content/images/banks/NAMABANK.png" />
                                                                            <div className="label-phiDV-NAMABANK" style={{ fontSize: 'small' }} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-box">
                                                                    <label className="label-bank">
                                                                        <input id className="radio-bank-ckb" type="radio" name="radBank" data-manganhang="VIETCOMBANK" defaultValue={2} data-tgtt={1} data-phidv={0} data-phidvphantram="0,000" data-messphidv />
                                                                        <div className="radio-bank-img" style={{ width: '235px' }}>
                                                                            <img src="/Content/images/banks/VIETCOMBANK.png" />
                                                                            <div className="label-phiDV-VIETCOMBANK" style={{ fontSize: 'small' }} />
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-box">
                                                                    <a href="https://ibank.agribank.com.vn/ibank/index.jsp" target="_blank">
                                                                        <label className="label-bank">
                                                                            <div className="radio-bank-img" style={{ width: '235px' }}>
                                                                                <img src="/Content/images/banks/AGRIBANK.png" />
                                                                            </div>
                                                                        </label>
                                                                    </a>
                                                                </div> */}
                                                                </div>
                                                            </td>
                                                            <td colSpan={3}>
                                                                <button onclick="checkShowPopupChonThongTinXuatHDDT()" className="btn btn--m block first btn-bank-custom" lang="thanhtoanonline-checkout-button">THANH TOÁN</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                {/* <div style={{ fontSize: '15px' }}>
                                                <p /><p><span style={{ color: '#e74c3c' }}><strong>Lưu ý:</strong></span> Với các giao dịch không thành công thì sau 30 phút hệ thống sẽ làm mới các khoản thu để sinh viên tiếp tục thanh toán.</p>  <p />
                                                <p lang="thanhtoanonline-huygiaodich">
                                                    Để hủy giao dịch chờ gạch nợ, vui lòng bấm <a href="/phieu-thu.html" style={{ color: 'deepskyblue' }}>vào đây</a>.
                                                </p>
                                                <p>Xem hướng dẫn thanh toán <a target="_blank" style={{ color: 'deepskyblue' }} href="https://ascvn.com.vn/huong-dan-thao-tac-sinh-vien-thanh-toan-hoc-phi-online.html">tại đây</a></p>
                                            </div> */}
                                            </div>
                                        </div>
                                        <div id="boxQRCodeThanhToan">
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