import React from "react";

const Modal =()=>{
    return(
        <React.Fragment>
            <div>
                <button
                  type="button"
                  className="btn btn-light me-3 ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                    >
                  Log in
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"></label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label d-flex justify-content-start" htmlfor="exampleCheck1">Remember me</label>
                        </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
    
export default Modal