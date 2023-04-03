import { React, useState, useEffect } from "react";
import Sidenavbar from "./Sidenavbar";

export default function PhieuThuTongHop() {
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
                                                            <th className="sorting_disabled" lang="phieuthutonghop-sophieu">Số phiếu</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-mahoadon">Mã hóa đơn</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-ngaythu">Ngày thu</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-sotien">Số tiền</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-donvi">Đơn vị thu</th>
                                                            <th className="sorting_disabled" lang="phieuthutonghop-hddt">HĐĐT</th>
                                                            <th className="sorting_disabled" />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>1</td>
                                                            <td>199805</td>
                                                            <td>0097946</td>
                                                            <td>
                                                                <span>10/12/2022 15:42</span>                          </td>
                                                            <td className="text-right">
                                                                <span>563.500</span>
                                                            </td>
                                                            <td className="text-left">Hồ Đặng Thanh Nga</td>
                                                            <td>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(199805, 3)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>2</td>
                                                            <td>659582</td>
                                                            <td>0097946</td>
                                                            <td>
                                                                <span>10/12/2022 15:42</span>                          </td>
                                                            <td className="text-right">
                                                                <span>6.300.000</span>
                                                            </td>
                                                            <td className="text-left">Hồ Đặng Thanh Nga</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=659582&LoaiSoThu=1&InvoiceUrl=VNPT%5C10122022%5C00097946-19507391-2-659582.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(659582, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>3</td>
                                                            <td>575460</td>
                                                            <td>00003109</td>
                                                            <td>
                                                                <span>05/07/2022 09:04</span>                          </td>
                                                            <td className="text-right">
                                                                <span>10.080.000</span>
                                                            </td>
                                                            <td className="text-left">Trình Thị Hương</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=575460&LoaiSoThu=1&InvoiceUrl=VNPT%5C05072022%5C00003109-19507391-2-575460.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(575460, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>4</td>
                                                            <td>136811</td>
                                                            <td>0298874</td>
                                                            <td>
                                                                <span>10/12/2021 09:22</span>                          </td>
                                                            <td className="text-right">
                                                                <span>563.500</span>
                                                            </td>
                                                            <td className="text-left">Phạm Thị Hải</td>
                                                            <td>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(136811, 3)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>5</td>
                                                            <td>474645</td>
                                                            <td>0298874</td>
                                                            <td>
                                                                <span>10/12/2021 09:22</span>                          </td>
                                                            <td className="text-right">
                                                                <span>9.000.000</span>
                                                            </td>
                                                            <td className="text-left">Phạm Thị Hải</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=474645&LoaiSoThu=1&InvoiceUrl=VNPT%5C10122021%5C19507391-2-474645.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(474645, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>6</td>
                                                            <td>407224</td>
                                                            <td>0213399</td>
                                                            <td>
                                                                <span>02/08/2021 08:40</span>                          </td>
                                                            <td className="text-right">
                                                                <span>10.800.000</span>
                                                            </td>
                                                            <td className="text-left">Ngân hàng Agribank</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=407224&LoaiSoThu=1&InvoiceUrl=VNPT%5C02082021%5C19507391-2-407224.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(407224, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>7</td>
                                                            <td>369097</td>
                                                            <td>0178666</td>
                                                            <td>
                                                                <span>07/06/2021 09:58</span>                          </td>
                                                            <td className="text-right">
                                                                <span>2.900.000</span>
                                                            </td>
                                                            <td className="text-left">Ngân hàng Agribank</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=369097&LoaiSoThu=1&InvoiceUrl=VNPT%5C07062021%5C19507391-2-369097.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(369097, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>8</td>
                                                            <td>318231</td>
                                                            <td>0126732</td>
                                                            <td>
                                                                <span>28/12/2020 16:02</span>                          </td>
                                                            <td className="text-right">
                                                                <span>12.180.000</span>
                                                            </td>
                                                            <td className="text-left">Phạm Thị Hải</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=318231&LoaiSoThu=1&InvoiceUrl=VNPT%5C28122020%5C19507391-2-318231.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(318231, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>9</td>
                                                            <td>107064</td>
                                                            <td>0107125</td>
                                                            <td>
                                                                <span>19/12/2020 14:26</span>                          </td>
                                                            <td className="text-right">
                                                                <span>563.500</span>
                                                            </td>
                                                            <td className="text-left">Nguyễn Thị Hiền</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=107064&LoaiSoThu=2&InvoiceUrl=VNPT%5C19122020%5C19507391-3-107064.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(107064, 3)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>10</td>
                                                            <td>254841</td>
                                                            <td>0043911</td>
                                                            <td>
                                                                <span>21/08/2020 07:00</span>                          </td>
                                                            <td className="text-right">
                                                                <span>9.860.000</span>
                                                            </td>
                                                            <td className="text-left">Phạm Ngân Trang</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=254841&LoaiSoThu=1&InvoiceUrl=VNPT%5C21082020%5C19507391-2-254841.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(254841, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>11</td>
                                                            <td>239041</td>
                                                            <td>0026053</td>
                                                            <td>
                                                                <span>28/07/2020 15:02</span>                          </td>
                                                            <td className="text-right">
                                                                <span>1.650.000</span>
                                                            </td>
                                                            <td className="text-left">Phạm Ngân Trang</td>
                                                            <td>
                                                                <a href="/SinhVien/DownloadHDDT?SoPhieu=239041&LoaiSoThu=1&InvoiceUrl=VNPT%5C28072020%5C19507391-2-239041.pdf&Mode=1" target="_blank">Xem</a>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(239041, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>12</td>
                                                            <td>230245</td>
                                                            <td>NTA.47899</td>
                                                            <td>
                                                                <span>09/07/2020 14:34</span>                          </td>
                                                            <td className="text-right">
                                                                <span>2.750.000</span>
                                                            </td>
                                                            <td className="text-left">Đặng Thị Ngân</td>
                                                            <td>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(230245, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>13</td>
                                                            <td>55548</td>
                                                            <td>NTA.18406</td>
                                                            <td>
                                                                <span>09/12/2019 09:48</span>                          </td>
                                                            <td className="text-right">
                                                                <span>563.500</span>
                                                            </td>
                                                            <td className="text-left">Nguyễn Thị Hiền</td>
                                                            <td>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(55548, 3)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>14</td>
                                                            <td>181327</td>
                                                            <td>NTA.18406</td>
                                                            <td>
                                                                <span>09/12/2019 09:48</span>                          </td>
                                                            <td className="text-right">
                                                                <span>11.000.000</span>
                                                            </td>
                                                            <td className="text-left">Nguyễn Thị Hiền</td>
                                                            <td>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(181327, 2)">Chi tiết</a></td>
                                                        </tr>
                                                        <tr role="row" onclick="SelectRow(this);">
                                                            <td>15</td>
                                                            <td>159909</td>
                                                            <td>NTA.01655</td>
                                                            <td>
                                                                <span>13/08/2019 09:03</span>                          </td>
                                                            <td className="text-right">
                                                                <span>9.350.000</span>
                                                            </td>
                                                            <td className="text-left">Phạm Thị Thùy Trang</td>
                                                            <td>
                                                            </td>
                                                            <td><a href="javascript:void(0)" id="ChiTietPhieuThuSinhVien" onclick="getChiTietPhieuThu(159909, 1)">Chi tiết</a></td>
                                                        </tr>
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
        </div>
    )
}