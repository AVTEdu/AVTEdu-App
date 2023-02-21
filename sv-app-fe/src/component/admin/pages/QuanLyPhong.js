import React from "react";
import Sidebar from "../components/Sidebar";


export const LoaiPhong = () => {
    return (
        <>
            <Sidebar />
            <div className="qlph">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm loại phòng</h2>
                    <br />
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã loại phòng</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên loại phòng</label>
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
                </div>
            </div>
        </>
    );
};

export const Phong = () => {
    return (
        <>
            <Sidebar />
            <div className="qlph">
                <div>
                    <h2>Thêm phòng học</h2>
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã phòng</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên dãy nhà</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên phòng học</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Loại phòng</label>
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
                    <h2 style={{ fontWeight: "bold" }}>Danh sách phòng học</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã phòng học</th>
                            <th>Tên dãy nhà</th>
                            <th>Tên phòng học</th>
                            <th>Loại phòng</th>
                            <th>Ghi chú</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>111</td>
                                <td>H</td>
                                <td>H2.2</td>
                                <td>Thực Hành</td>
                                <td>...</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>111</td>
                                <td>H</td>
                                <td>H2.2</td>
                                <td>Thực Hành</td>
                                <td>...</td>
                                <td>
                                    <button className="btnUpdate" style={{ margin: "1px" }}>Update</button>
                                    <button className="btnDelete" style={{ margin: "1px" }}>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>111</td>
                                <td>H</td>
                                <td>H2.2</td>
                                <td>Thực Hành</td>
                                <td>...</td>
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


