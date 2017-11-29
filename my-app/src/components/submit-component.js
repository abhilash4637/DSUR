import React, { Component } from 'react';

class Submit extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props,':::::::::::::::::::::::::::::',this.props.match);
        return (
            <div className="container">
                    <div id="forgot-username-confirmation" >
                       <section className="page-title ">
                            <h1>Retrieve your username</h1>
                        </section>
                        <div className="content">
                            <h3 className="form-subtitle col-xs-12">We’ve emailed your username to:</h3>
                            <h4><strong>AxxxxxU@VALIC.COM</strong><br/>(Portions of your email address have been masked for your protection)</h4>
                            <h3>If you no longer have access to this email, or do not receive an email from us within one hour, please contact  VALIC Customer Support at <strong>1-800-448-2542 (TDD/TYY 1-800-248-2542)</strong></h3>
                            <div className="buttons">
                                <a href="https://int.dmp.valic.com/home" className="btn" title="Click here to return to Valic.com">Return to Valic.com</a>
                            </div>
                        </div>
                    </div>
            </div>

        );
    }
}
export default Submit;