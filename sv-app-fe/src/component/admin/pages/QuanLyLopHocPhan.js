import React from "react";
import Sidebar from "../components/Sidebar";



export const HocKi = () => {
    return (
        <>
            <Sidebar />
            <div className="qllhp">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm học kì mới</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã học kỳ</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Năm bắt đầu</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Năm kết thúc</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Thứ tự học kỳ</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Mô tả</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="subject" name="subject" style={{ height: '200px' }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách học kỳ</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã học kỳ</th>
                            <th>Năm bắt đầu</th>
                            <th>Năm kết thúc</th>
                            <th>Thứ tự học kỳ</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                                <td>50</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>94</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>Johnson</td>
                                <td>67</td>
                                <td>67</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>Johnson</td>
                                <td>67</td>
                                <td>67</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Adam</td>
                                <td>Johnson</td>
                                <td>67</td>
                                <td>67</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </>
    );
};

export const LopHocPhan = () => {
    return (
        <>
            <Sidebar />
            <div className="qllhp">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm lớp học phần</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã lớp học phần</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên lớp học phần</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên viết tắt</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số lượng sinh viên tối đa</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số nhóm thực hành</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Loại lớp học phần</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Trạng thái lớp học phần</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Học kỳ</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">HK1 2019 - 2020</option>
                                        <option value="">HK1 2019 - 2020</option>
                                        <option value="">HK1 2019 - 2020</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Học phần</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">1</option>
                                        <option value="">1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Mô tả</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="subject" name="subject" style={{ height: '200px' }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách lớp học phần</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã lớp học phần</th>
                            <th>Tên lớp</th>
                            <th>Tên viết tắt</th>
                            <th>Số lượng đăng ký tối đa</th>
                            <th>Số lượng đăng ký hiện tại</th>
                            <th>Số nhóm thực hành</th>
                            <th>Loại</th>
                            <th>Trạng thái</th>
                            <th>Mã học kỳ</th>
                            <th>Mã học phần</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>1</td>
                                <td>DHKTPM15A-GDQP</td>
                                <td>DHKTPM15A</td>
                                <td>81</td>
                                <td>0</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>DHKTPM15A-GDQP</td>
                                <td>DHKTPM15A</td>
                                <td>81</td>
                                <td>0</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </>
    );
};

export const PhanCong = () => {
    return (
        <>
            <Sidebar />
            {/* <div className="qllhp">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Phân công lớp</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã phân công</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="fname" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Loại học phần phụ trách</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Nhóm thực hành phụ trách</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số lượng sinh viên phụ trách</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Mã giảng viên</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Mã lớp học phần</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Ghi chú</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="subject" name="subject" style={{ height: '200px' }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách phân công lớp</h2>
                    <br />
                    <table>
                        <tbody><tr>
                            <th>Mã phân công</th>
                            <th>Loại học phần</th>
                            <th>Nhóm thực hành</th>
                            <th>Số lượng sv</th>
                            <th>Giảng viên</th>
                            <th>Lớp học phần</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>15</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>15</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>15</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>15</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>15</td>
                                <td>1</td>
                                <td>1</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
            </div> */}

        </>
    );
};
