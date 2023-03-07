import Sidebar from "./components/Sidebar";
// import "../../assets/css/admin.css";
import "../../assets/vendor/fonts/boxicons.css";
import "../../assets/vendor/css/core.css";
import "../../assets/vendor/css/theme-default.css";
import "../../assets/css/demo.css";
import "../../assets/vendor/js/bootstrap.js";
import LogoAdmin from "../../assets/img/admin/man-with-laptop-light.png"

export const AdminApp = () => {
    return (
        // <div style={{ backgroundColor: "#e0ffff" }}>
        //     <Sidebar />
        // </div>
        <>
            <Sidebar />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row" style={{ marginLeft: "250px" }}>
                        <div className="col-sm-8"></div>
                        <div classname="col-sm-4">
                            <div className="card">
                                <div className="d-flex align-items-end row">
                                    <div className="col-sm-7">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary" style={{ fontSize: "30px" }}>Trang quản trị AVTEDU 🎉</h5>
                                            <p className="mb-4" style={{ fontSize: "20px" }}>
                                                Bạn đang sử dụng trang quản trị !! <br />
                                                Tại đây có thể thêm mới, cập nhật các mục: <br />
                                                - Sinh viên, giảng viên. <br />
                                                - Thời gian biểu cho sv, gv. <br />
                                                - Công nợ, phiếu thu. <br />
                                                - Học phần, chi tiết lớp học phần. <br />
                                                - Khoa, chuyên ngành, phòng học. <br />
                                                Mọi thắc mắc xin vui lòng liên hệ với đội ngũ <br /> quản trị viên
                                                tại đây!!
                                            </p>
                                            <a href="javascript:;" className="btn btn-sm btn-outline-primary" style={{ fontSize: "20px" }}>Liên hệ với quản trị viên</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 text-center text-sm-left">
                                        <div className="card-body pb-0 px-0 px-md-4">
                                            <img src={LogoAdmin} style={{ height: "300px" }} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img={LogoAdmin} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
