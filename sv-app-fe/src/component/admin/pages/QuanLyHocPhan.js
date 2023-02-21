import React from "react";
import Sidebar from "../components/Sidebar";



export const MonHoc = () => {
    return (
        <>
            <Sidebar />
            <div className="qlhp">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm môn học</h2>
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã môn</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên môn</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="">Mã khoa</label>
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
                    <h2>Danh sách môn học</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã môn</th>
                            <th>Tên môn</th>
                            <th>Mô tả</th>
                            <th>Mã khoa</th>
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

export const HocPhan = () => {
    return (
        <>
            <Sidebar />
            <div className="qlhp">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm học phần</h2>
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã học phần</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số tín chỉ lý thuyết</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số tín chỉ thực hành</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Loại học phần</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">Bắt buộc</option>
                                        <option value="">Không bắt buộc</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Chọn môn</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">WWW</option>
                                        <option value="">Mobile</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Mã môn song hành</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Mã môn tiên quyết</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Mã chuyên ngành</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">2</option>
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

                    <h2 style={{ fontWeight: "bold" }}>Danh sách học phần</h2>
                    <table>
                        <tbody><tr>
                            <th>Mã học phần</th>
                            <th>Số tín chỉ lý thuyết</th>
                            <th>Số tín chỉ thực hành</th>
                            <th>Loại học phần</th>
                            <th>Mã môn song hành</th>
                            <th>Mã môn tiên quyết</th>
                            <th>Mã môn học</th>
                            <th></th>
                        </tr>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                                <td>50</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
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
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
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
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
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
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
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
