import React from "react";


const PaginationComponent = ({ dataPerPage, total, paginate, nextPage, prevPage }) => {
    const dataNumbers = [];
    for (let i = 1; i <= Math.ceil(total / dataPerPage); i++) {
        dataNumbers.push(i);
    }
    const activeNextPage = (next) => {
        if (next < dataNumbers.length) {
            paginate(next)
        }
    }
    const activePrevPage = (prevPage) => {
        if (prevPage > 0) {
            paginate(prevPage)
        }
    }
    return (
        <div>
            {
                dataNumbers.length > 0 ?
                    <div className="row" style={{ marginLeft: "250px" }}>
                        <div className="col">
                            <div className="demo-inline-spacing">
                                <nav>
                                    <ul className="pagination" style={{ display: "flex" }}>
                                        <li className="page-item prev">
                                            {/* <a className="page-link" href=""
                                ><i className="tf-icon bx bx-chevron-left"></i></a> */}
                                            <button className="page-link" onClick={() => activePrevPage(prevPage)}>
                                                <i className="tf-icon bx bx-chevron-left"></i>
                                            </button>
                                        </li>
                                        {dataNumbers.map(number => (
                                            <li key={number} className="page-item">
                                                {/* <a href="!#" onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a> */}
                                                <button onClick={() => paginate(number)} className="page-link">
                                                    {number}
                                                </button>
                                            </li>
                                        ))}
                                        <li className="page-item next">
                                            {/* <a className="page-link" href=""
                                ><i className="tf-icon bx bx-chevron-right"></i></a> */}
                                            <button className="page-link" onClick={() => activeNextPage(nextPage)} >
                                                <i className="tf-icon bx bx-chevron-right"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> : <></>
            }
        </div>
    )
}
export default PaginationComponent