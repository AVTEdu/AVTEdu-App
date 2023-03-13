import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import * as AiIcons from "react-icons/ai";
import adminAPI from "../../api/adminAPI";

export default function PrintPhieuThu() {
    let componentRef = useRef();

    return (
        <>
            <div id="print_component_1">
                {/* button to trigger printing of target component */}
                <ReactToPrint
                    trigger={() => <button type="button" className="btn  btn-primary"
                        style={{
                            display: "inline-block", fontWeight: "400"
                            , lineHeight: "1.53", userSelect: "none"
                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                        }}><AiIcons.AiFillPrinter /> Xuất phiếu</button>}
                    content={() => componentRef}
                />

                {/* component to be printed */}
                <div style={{ display: "none" }}>
                    <ComponentToPrint ref={(el) => (componentRef = el)} />
                </div>
            </div>
        </>
    );
}

class ComponentToPrint extends React.Component {
    // componentDidMount() {
    //     const ma = window.localStorage.getItem('ma');
    //     console.log(ma);
    //     const active = async () => {
    //         const res = await adminAPI.getDSHocPhiSinhVien('19507391');
    //         const persons = res.data;
    //         this.setState({ persons });
    //         console.log(this.state.persons);
    //     };
    //     active();
    // }
    render() {
        return (
            <div>
                <h2 style={{ color: "green" }}>Attendance</h2>
                <table style={{ border: "1px solid black", width: "100%" }}>
                    <thead>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Njoku Samson</td>
                            <td>samson@yahoo.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ebere Plenty</td>
                            <td>ebere@gmail.com</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Undefined</td>
                            <td>No Email</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ textAlign: "right", color: "red" }}>ky va ghi ro ho ten</p>
            </div>
        );
    }
}