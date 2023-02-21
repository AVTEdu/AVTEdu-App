import React from "react";
import Sidebar from "../components/Sidebar";

export const ThoiKhoaBieu = () => {
    return (
        <>
            <Sidebar />
            <div className="qltkb">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm thời khóa biểu</h2>
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã thời khóa biểu</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Loại học phần</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số ngày học trong tuần</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Nhóm thực hành</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Thời gian bắt đầu</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Thời gian kết thúc</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tiết học bắt đầu</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tiết học kết thúc</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Mã lớp học phần</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">DHKTPM15A</option>
                                        <option value="">DHKTPM15B</option>
                                        <option value="">DHKTPM15C</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Mã phòng học</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">H2.2</option>
                                        <option value="">H4.2</option>
                                        <option value="">A2.2</option>
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
                    <h2 style={{ fontWeight: "bold" }}>Danh sách thời khóa biểu</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã TKB</th>
                            <th>Loại học phần</th>
                            <th>Số ngày học</th>
                            <th>Nhóm TH</th>
                            <th>TG bắt đầu</th>
                            <th>TG kết thúc</th>
                            <th>Tiết bắt đầu</th>
                            <th>Tiết kết thúc</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>1</td>
                                <td>Thực hành</td>
                                <td>2</td>
                                <td>3</td>
                                <td>2010-02-11 17:00:00</td>
                                <td>2011-01-04 17:00:00</td>
                                <td>1</td>
                                <td>3</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Thực hành</td>
                                <td>2</td>
                                <td>3</td>
                                <td>2010-02-11 17:00:00</td>
                                <td>2011-01-04 17:00:00</td>
                                <td>1</td>
                                <td>3</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Thực hành</td>
                                <td>2</td>
                                <td>3</td>
                                <td>2010-02-11 17:00:00</td>
                                <td>2011-01-04 17:00:00</td>
                                <td>1</td>
                                <td>3</td>
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




