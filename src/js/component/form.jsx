import React from "react";

const Form =()=>{
    return(
        <form class="row w-75 mt-5 mx-auto" id="formbox">
            <h3>Sign Up</h3>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Please put your email"/>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" placeholder="Tell us your city"/>
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                <option selected>São Paulo</option>
                <option selected>Paraná</option>
                <option selected>Minas Gerais</option>
                <option selected>Choose...</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label d-flex justify-content-start" for="gridCheck">
                    I Agree
                </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-light">Sign up</button>
            </div>
        </form>
    );
};

export default Form