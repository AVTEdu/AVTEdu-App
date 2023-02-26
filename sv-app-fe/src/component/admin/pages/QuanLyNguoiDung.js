import React from "react";
import Sidebar from "../components/Sidebar";


export const Admin = () => {
    return (
        <>
            <Sidebar />
            <div className="qluser">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Tạo user Admin</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">UserName</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Password</label>
                                </div>
                                <div className="col-75">
                                    <input type="password" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Khoa</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">CNTT</option>
                                        <option value="">May</option>
                                        <option value="">Cơ khí</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách Admin</h2>
                    <table>
                        <tbody><tr>
                            <th>Username</th>
                            <th>Khoa</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>Admin111</td>
                                <td>CNTT</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Admin222</td>
                                <td>May</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Admin333</td>
                                <td>Cơ khí</td>
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

export const GiangVien = () => {
    return (
        <><Sidebar />
            <div className="qluser">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Tạo user giảng viên</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã giảng viên</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên giảng viên</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Ngày sinh</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Email</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Giới tính</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">Nam</option>
                                        <option value="">Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Khoa</label>
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
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách giảng viên</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã GV</th>
                            <th>Tên GV</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Giới tính</th>
                            <th>Khoa</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>1515120</td>
                                <td>Lý Thu Minh</td>
                                <td>1989-11-30 17:00:00</td>
                                <td>anb@gmail.com</td>
                                <td>Nam</td>
                                <td>CNTT</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1515120</td>
                                <td>Lý Thu Minh</td>
                                <td>1989-11-30 17:00:00</td>
                                <td>anb@gmail.com</td>
                                <td>Nam</td>
                                <td>CNTT</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1515120</td>
                                <td>Lý Thu Minh</td>
                                <td>1989-11-30 17:00:00</td>
                                <td>anb@gmail.com</td>
                                <td>Nam</td>
                                <td>CNTT</td>
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

export const SinhVien = () => {
    return (
        <>
            <Sidebar />
            <div className="qllhp">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Tạo user sinh viên</h2>
                    <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã sinh viên</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Mật khẩu</label>
                                </div>
                                <div className="col-75">
                                    <input type="password" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Họ tên</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Ngày sinh</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Email</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Giới tính</label>
                                </div>
                                <div className="col-75">
                                    <select id="country" name="country">
                                        <option value="1">Nam</option>
                                        <option value="2">Nữ</option>
                                        <option value="usa">USA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Hộ khẩu thường trú</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="subject" name="subject" style={{ height: '200px' }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số điện thoại</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">CMND</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Khoa</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Chuyên ngành</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                    <h2 style={{ fontWeight: "bold" }}>Danh sách sinh viên</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã sv</th>
                            <th>Tên</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Giới tính</th>
                            <th>HKTT</th>
                            <th>Sdt</th>
                            <th>Cmnd</th>
                            <th>Khoa</th>
                            <th>Chuyên ngành</th>
                        </tr>
                            <tr>
                                <td>19507399</td>
                                <td>Smith</td>
                                <td>15/10/2000</td>
                                <td>ll@gmail.com</td>
                                <td>Nam</td>
                                <td>48 Nguyễn Quý Anh</td>
                                <td>089961</td>
                                <td>155555</td>
                                <td>CNTT</td>
                                <td>KTPM</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>19507399</td>
                                <td>Smith</td>
                                <td>15/10/2000</td>
                                <td>ll@gmail.com</td>
                                <td>Nam</td>
                                <td>48 Nguyễn Quý Anh</td>
                                <td>089961</td>
                                <td>155555</td>
                                <td>CNTT</td>
                                <td>KTPM</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>19507399</td>
                                <td>Smith</td>
                                <td>15/10/2000</td>
                                <td>ll@gmail.com</td>
                                <td>Nam</td>
                                <td>48 Nguyễn Quý Anh</td>
                                <td>089961</td>
                                <td>155555</td>
                                <td>CNTT</td>
                                <td>KTPM</td>
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
