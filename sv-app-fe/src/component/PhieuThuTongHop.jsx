import { React, useState, useEffect } from "react";
import Sidenavbar from "./Sidenavbar";
import dkhpAPI from "../api/dkhpAPI";
import PopupNotify from "./PopupNotify";
import PopupCTPhieuThu from "./popupCTPhieuThu";

export default function PhieuThuTongHop() {
    const [dsPhieuThu, setDsPhieuThu] = useState('');
    const [maPhieuThu, setMaPhieuThu] = useState();
    const [popupNotify, setPopupNotify] = useState({
        title: '',
        mes: '',
        isLoading: false
    })
    const [popupCTPhieuThu, setPopupCTPhieuThu] = useState({
        isLoading: false,
        dsChiTietPhieuThu: null
    })
    const [dsChiTietPhieuThu, setDsChiTietPhieuThu] = useState();
    let stt = 1;
    function handleNotify(choose) {
        if (choose) {
            setPopupNotify({
                title: '',
                mes: '',
                isLoading: false
            });
        }
    }
    function handleChiTietPhieuThu(choose) {
        if (choose) {
            setPopupCTPhieuThu({
                isLoading: false,
                dsChiTietPhieuThu: null
            });
        }
    }

    const activeChiTietPhieuThu = async (maPhieuThu) => {
        try {
            const res = await dkhpAPI.getChiTietPhieuThuTongHopBySV(maPhieuThu);
            setPopupCTPhieuThu({
                isLoading: true,
                dsChiTietPhieuThu: res.data
            });
            setMaPhieuThu('');
        } catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {
        const getDSPhieuThu = async () => {
            try {
                const dsphieuthu_res = await dkhpAPI.getDanhSachPhieuThuSinhVien();
                setDsPhieuThu(dsphieuthu_res.data);
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 403) {
                        setPopupNotify({
                            title: 'Thông báo',
                            mes: 'Không tìm thấy sinh viên',
                            isLoading: true
                        });
                        setDsPhieuThu("");
                    }
                }
            }
        };
        getDSPhieuThu();
    }, [])

    return (
        <div className="wrapper">
            <Sidenavbar />
            <div className="main-content">
                <div className="container" id="full-resize-table">
                    <div className="main-section-content" id="contnet">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="box-df">
                                    <div className="portlet">
                                        <div className="portlet-title">
                                            <div className="caption">
                                                <span className="caption-subject bold" lang="phieuthutonghop-pagetitle">Phiếu thu tổng hợp</span>
                                            </div>
                                        </div>
                                        <div id="viewPhieuThuTongHop"><div id="viewPhieuThuTongHop">
                                            <div className="table-responsive">
                                                <table className="table-pointer table-custom table table-bordered text-center no-footer dtr-inline" width="100%" role="grid">
                                                    <thead>
                                                        <tr role="row">
                                                            <th className="sorting_disabled" lang="phieuthutonghop-stt">STT</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-mahoadon">Mã hóa đơn</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-ngaythu">Ngày thu</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-sotien">Số tiền</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-donvi">Đơn vị thu</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-hddt">Chi tiết HĐ</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="adminClassHover">
                                                        {/* <tr role="row" onclick="SelectRow(this);">
                                                            <td>2</td>
                                                            <td>659582</td>
                                                            <td>0097946</td>
                                                            <td>
                                                                <span>10/12/2022 15:42</span>                          </td>
                                                            <td className="text-right">
                                                                <span>6.300.000</span>
                                                            </td>
                                                            <td className="text-left">Hồ Đặng Thanh Nga</td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(659582, 2)">Chi tiết</a></td>
                                                        </tr> */}
                                                        {
                                                            dsPhieuThu && dsPhieuThu?.dsHocPhiSinhVien.length > 0
                                                                ? <>
                                                                    {
                                                                        dsPhieuThu["dsHocPhiSinhVien"].map((dspth) => (
                                                                            <tr>
                                                                                <td>{stt++}</td>
                                                                                <td>{dspth.ma_phieu_thu}</td>
                                                                                <td>
                                                                                    <span>{dspth.ngay_thu}</span>                          </td>
                                                                                <td className="text-right">
                                                                                    <span>{dspth.tong_tien}</span>
                                                                                </td>
                                                                                <td className="text-left">{dspth.don_vi_thu}</td>
                                                                                <td><a id="ChiTietPhieuThuSinhVien" onClick={(e) => {
                                                                                    //setMaPhieuThu(dspth.ma_phieu_thu)
                                                                                    activeChiTietPhieuThu(dspth.ma_phieu_thu)
                                                                                }}>Chi tiết</a></td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                </>
                                                                : <tr>

                                                                    <td colSpan={6} className="text-center">
                                                                        <p className="bold"><span>Tạm chưa có dữ liệu</span></p>
                                                                    </td>
                                                                </tr>
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                            <div id="viewChiTietPhieuThuSinhVien" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {popupNotify.isLoading && <PopupNotify onDialog={handleNotify} title={popupNotify.title} mes={popupNotify.mes} />}
            {popupCTPhieuThu.isLoading && <PopupCTPhieuThu onDialog={handleChiTietPhieuThu} dsChiTietPhieuThu={popupCTPhieuThu.dsChiTietPhieuThu} />}
        </div>
    )
}