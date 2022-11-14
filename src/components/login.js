import React from 'react';

export default function Login() {
    return(
        <div className="container container-login">
            <div className="row justify-content-center row-login">
                <div className="col-6">
                    <div className="title-login-text">
                        <p className="name-login-text">Tatiana Vasylieva</p>
                    </div>
                    <div>
                        <p className="input-field-text">Please enter password</p>
                        <input className={"password-input-field"}/>
                        <button className="submit-button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}