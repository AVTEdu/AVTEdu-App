import { React, useState, useEffect } from "react";
import LogoMomo from "../assets/img/logo_img/LogoMomo.png";
import Sidenavbar from "./Sidenavbar";
import dkhpAPI from "../api/dkhpAPI";

export default function ThanhToanTrucTuyen() {
    const [dsHocPhi, setDsHocPhi] = useState();
    const [dataMoMo, setDataMoMO] = useState();
    let sttDsHP = 1;
    let tongSoTien = 0;
    const [loading, setLoading] = useState(false);
    var sendDate = (new Date()).getTime();
    const [resTimeDshp, setResTimeDshp] = useState(0);
    const [resTimeMoMo, setResTimeMoMo] = useState(0);

    useEffect(() => {
        if (resTimeDshp > 0 && resTimeMoMo > 0) {
            console.log(resTimeMoMo + resTimeDshp)
            setTimeout(() => {
                setLoading(false);
            }, resTimeDshp + resTimeMoMo)
        }
    }, [resTimeDshp])

    useEffect(() => {
        const activeHocPhi = async () => {
            try {
                setLoading(true);
                const res = await dkhpAPI.getDanhSachHocPhi();

                setDsHocPhi(res.data);
                var receiveDate = (new Date()).getTime();
                var responseTimeMs = receiveDate - sendDate;
                setResTimeDshp(responseTimeMs);
            } catch (error) {
                console.log(error.message);
            }
        };
        activeHocPhi();
    }, []);

    useEffect(() => {
        const activeThanhToanMoMo = async () => {
            try {
                const res = await dkhpAPI.thanhToanHocPhiTrucTuyen();
                setDataMoMO(res.data);
                var receiveDate = (new Date()).getTime();
                var responseTimeMs = receiveDate - sendDate;
                setResTimeMoMo(responseTimeMs);
            } catch (error) {
                console.log(error.message);
            }
        };
        activeThanhToanMoMo();
    }, [])

    return (
        <>
            <div className="wrapper">
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
                ) : (<></>)}
                <Sidenavbar />
                {
                    dataMoMo ?
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
                                                            <span className="caption-subject bold" lang="thanhtoanonline-pagetitle">Thanh to??n tr???c tuy???n</span>
                                                        </div>
                                                        {/* <div className="actions">
                                                <div><select className="form-control" id="cboIDDotThanhToan" langid="thanhtoanonline-dotthanhtoan-combobox" name="cboIDDotThanhToan" placeholder="T???t c???"><option value>T???t c???</option>
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
                                            </div> */}
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
                                                                        {/* <td style={{ width: '40px' }}>
                                                                <input type="checkbox" id="chkAll" onclick="checkAll(this); sumKhoanNop();" defaultChecked="checked" />
                                                            </td> */}
                                                                        <th lang="thanhtoanonline-stt">STT</th>
                                                                        <th lang="thanhtoanonline-ma">M?? h???c ph??</th>
                                                                        <th lang="thanhtoanonline-noidungthu">N???i dung thu</th>
                                                                        <th lang="thanhtoanonline-tinchi">M??n h???c</th>
                                                                        <th lang="thanhtoanonline-batbuoc">M?? L???p h???c ph???n</th>
                                                                        <th lang="thanhtoanonline-sotien">S??? ti???n (VND)</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        dsHocPhi && dsHocPhi?.dsHocPhiSinhVien.length > 0 ? <>
                                                                            {
                                                                                dsHocPhi["dsHocPhiSinhVien"].map((dshp) => (
                                                                                    dshp.trang_thai == 1 ?
                                                                                        <tr>
                                                                                            {/* <td className="text-center">
                                                                        <input defaultChecked="checked" className="chkKTT" data-allowcheck="True" data-bankid data-batbuoc="True" data-dongiabgvat="False" data-idcongnonoitru data-iddangkyhocphan data-iddangkythilai data-iddangkythitotnghiep data-iddukienthu data-idkehoachthuchung="1XdEn96ANSePkE4PvFkEKw" data-idloaithu="9jZsNbbF7Eduwkz6f6TnOw" data-idsub="qOD4AsGAVmCsDBDBQqqxVw" data-idthu="1XdEn96ANSePkE4PvFkEKw" data-ma="TN" data-mucnop={1000000} data-noidungthu="Hoc phi tot nghiep" data-sotien={1000000} data-trandate data-transid id="ckbThanhToan3280" name="ckbThanhToan3280" onclick="sumKhoanNop()" type="checkbox" defaultValue="true" /><input name="ckbThanhToan3280" type="hidden" defaultValue="false" />
                                                                    </td> */}
                                                                                            <td >{sttDsHP++}</td>
                                                                                            <td >{dshp.ma_hoc_phi}</td>
                                                                                            <td className="text-left" >{dshp.noi_dung_thu}</td>
                                                                                            <td className="text-left" >{dshp.ten_mon_hoc}</td>
                                                                                            <td  >{dshp.ma_lop_hoc_phan}</td>
                                                                                            <td >{dshp.so_tien}</td>
                                                                                            <p hidden>{tongSoTien = tongSoTien + dshp.so_tien}</p>
                                                                                        </tr>
                                                                                        : <></>
                                                                                ))
                                                                            }
                                                                            <tr>
                                                                                <td colSpan={5} className="text-right">
                                                                                    <p className="bold"><span lang="thanhtoanonline-tongtien">T???ng thanh to??n</span>:</p>
                                                                                </td>
                                                                                <td >
                                                                                    <p className="bold"><span id="balanceSum" className="total">{tongSoTien}</span></p>
                                                                                </td>
                                                                            </tr>
                                                                        </> : <tr>
                                                                            <td colSpan={6} className="text-right">
                                                                                <p className="bold"><span lang="thanhtoanonline-tongtien">Hi???n kh??ng c?? c??ng n???</span>:</p>
                                                                            </td>
                                                                        </tr>
                                                                    }
                                                                    <tr>
                                                                        <td colSpan={7} style={{ textAlign: 'left', fontSize: '15px' }}>
                                                                            <p />
                                                                            <p lang="thanhtoanonline-internetbanking" style={{ padding: '5px 0' }}>Vui l??ng ki???m tra<strong style={{ fontSize: '15px', color: '#e74c3c' }}> H???N M???C TH??? </strong>tr?????c khi thanh to??n</p>
                                                                            <p lang="thanhtoanonline-internetbanking"><strong style={{ fontSize: '15px', color: '#e74c3c' }}>L??u ??:</strong> Khuy???n c??o thanh to??n qua c??c lo???i <strong style={{ fontSize: '15px', color: '#e74c3c' }}>th??? ATM</strong> n???i ?????a.</p>
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
                                                                            <button className="btn btn--m block first btn-bank-custom"
                                                                            > <a href={dataMoMo.payURL}>THANH TO??N</a></button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            {/* <div style={{ fontSize: '15px' }}>
                                                <p /><p><span style={{ color: '#e74c3c' }}><strong>L??u ??:</strong></span> V???i c??c giao d???ch kh??ng th??nh c??ng th?? sau 30 ph??t h??? th???ng s??? l??m m???i c??c kho???n thu ????? sinh vi??n ti???p t???c thanh to??n.</p>  <p />
                                                <p lang="thanhtoanonline-huygiaodich">
                                                    ????? h???y giao d???ch ch??? g???ch n???, vui l??ng b???m <a href="/phieu-thu.html" style={{ color: 'deepskyblue' }}>v??o ????y</a>.
                                                </p>
                                                <p>Xem h?????ng d???n thanh to??n <a target="_blank" style={{ color: 'deepskyblue' }} href="https://ascvn.com.vn/huong-dan-thao-tac-sinh-vien-thanh-toan-hoc-phi-online.html">t???i ????y</a></p>
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
                        : <>L???i url thanh to??n</>
                }
            </div>
        </>
    )
}