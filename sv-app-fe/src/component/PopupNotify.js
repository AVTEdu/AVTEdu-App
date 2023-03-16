import NotifyIcon from "../assets/img/logo_img/caution.png"

function PopupNotify({ title, mes, onDialog }) {
    return (
        <div onClick={() => onDialog(true)} className='popup-question' style={{ border: "1px solid black" }}>
            <div onClick={(e) => e.stopPropagation()} className="popup-question-modal">
                <div className="header2">
                    <p>{title}</p>
                </div>
                <div className="body2" >
                    <div className="row">
                        <div className="col-md-2">
                            <img src={NotifyIcon} ></img>
                        </div>
                        <div className="col-md-8">
                            <p className="title2" >{mes}</p>
                        </div>
                    </div>
                    <div className='btn-group2'>
                        <button onClick={() => onDialog(true)} className="btn no">OK</button>
                    </div>
                    <div className='clear2'></div>
                </div>
            </div>
        </div>
    );
}

export default PopupNotify;