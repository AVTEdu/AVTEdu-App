import { React, useState, useEffect } from "react";
import Sidenavbar from "./Sidenavbar";
import dkhpAPI from "../api/dkhpAPI";

export default function XacNhanThanhToan() {
    const queryParameters = new URLSearchParams(window.location.search);
    const resultCode = queryParameters.get("resultCode");
    const orderInfo = queryParameters.get("orderInfo");
    const [dataXacNhan, setDataXacNhan] = useState();
    useEffect(() => {
        const activeXacNhan = async () => {
            try {
                const res = await dkhpAPI.xacNhanThanhToanTrucTuyen(resultCode, orderInfo);
                setDataXacNhan(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        activeXacNhan();
    }, []);
    return (
        <div className="wrapper">
            <Sidenavbar />
            {
                dataXacNhan && dataXacNhan.success == true
                    ?
                    <div className="main-content">
                        <div className="container" id="full-resize-table">
                            <div className="main-section-content" id="contnet">
                                <div className="row">
                                    <div className="col-md-12 col-xs-12">
                                        <div className="box-df">
                                            <div className="portlet">
                                                <div className="portlet-title">
                                                    <div className="caption">
                                                        <span className="caption-subject bold" style={{ textAlign: "center" }}>Thanh toán thành công</span>
                                                    </div>
                                                </div>
                                                <div id="box_congnothanhtoan">
                                                    <meta charSet="utf-8" />
                                                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                                    <title />
                                                    <style dangerouslySetInnerHTML={{ __html: "\n    .background-tr {\n        background-color: #f3f7f9;\n    }\n" }} />
                                                    <div style={{ fontSize: '15px' }}>
                                                        <p /><p><span style={{ color: '#e74c3c' }}><strong>Lưu ý:</strong></span> Với các giao dịch không thành công thì sau 30 phút hệ thống sẽ làm mới các khoản thu để sinh viên tiếp tục thanh toán.</p>  <p />
                                                        <p lang="thanhtoanonline-huygiaodich">
                                                            Để kiểm tra lại công nợ, vui lòng bấm <a href="/cong-no-sinh-vien" style={{ color: 'deepskyblue' }}>vào đây</a>.
                                                        </p>
                                                        <p>Trở về trang chủ <a target="_blank" style={{ color: 'deepskyblue' }} href="/trang-chu">tại đây</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="main-content">
                        <div className="container" id="full-resize-table">
                            <div className="main-section-content" id="contnet">
                                <div className="row">
                                    <div className="col-md-12 col-xs-12">
                                        <div className="box-df">
                                            <div className="portlet">
                                                <div className="portlet-title">
                                                    <div className="caption">
                                                        <span className="caption-subject bold" style={{ textAlign: "center" }}>Giao dịch không thành công</span>
                                                    </div>
                                                </div>
                                                <div id="box_congnothanhtoan">
                                                    <meta charSet="utf-8" />
                                                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                                    <title />
                                                    <style dangerouslySetInnerHTML={{ __html: "\n    .background-tr {\n        background-color: #f3f7f9;\n    }\n" }} />
                                                    <div style={{ fontSize: '15px' }}>
                                                        <p /><p><span style={{ color: '#e74c3c' }}><strong>Lưu ý:</strong></span> Với các giao dịch không thành công thì sau 30 phút hệ thống sẽ làm mới các khoản thu để sinh viên tiếp tục thanh toán.</p>  <p />
                                                        <p >
                                                            Để kiểm tra lại công nợ, vui lòng bấm <a href="/cong-no-sinh-vien" style={{ color: 'deepskyblue' }}>vào đây</a>.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}