import React, { Component } from 'react';
var classNames = require('classnames');

class Employer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {formValidationEmail,onChangeInputType,onChangeOutsideInputType} = this.props;
        return (
            <div className="container">
                <div className="show">
                <div className="form-errors">
                    {formValidationEmail.error == 'false' ? '' :  <label id="employerEmailInput-error" className="tooltip-text form-error"
                                htmlFor={formValidationEmail.id}>{formValidationEmail.text}</label> }
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="employerEmailInput">Email</label>
                    <input className={classNames('form-control', { errorMsg: formValidationEmail.error == 'true'})} type="email" id="employerEmailInput" name="employerEmailInput"
                           defaultValue={formValidationEmail.value}  onKeyUp={(e) => onChangeInputType(e)}
                           onBlur={(e) => onChangeOutsideInputType(e)}/>
                </div>
                {/*// <div className="captcha-container">*/}
                {/*//     <div className="g-recaptcha form-group" data-sitekey="6LcGfSoUAAAAAMmvZmdDWLoh3hXZ6cxXfvn9SjyX">*/}
                {/*//         <div>*/}
                {/*//                 <iframe src="https://www.google.com/recaptcha/api2/anchor?k=6LcGfSoUAAAAAMmvZmdDWLoh3hXZ6cxXfvn9SjyX&amp;co=aHR0cHM6Ly9sb2dpbi52YWxpYy5jb206NDQz&amp;hl=en&amp;v=r20171109115411&amp;size=normal&amp;cb=hyzytpe4hrck" width="304" height="78" role="presentation" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>*/}
                {/*//             </div>*/}
                {/*//     </div>*/}
                {/*// </div>*/}
                {/*// <div className="form-group buttons">*/}
                {/*//     <input className="btn grey cancel" type="submit" value="Cancel" name="ActionName"/>*/}
                {/*//     <input className="btn" type="submit" value="Submit" name="ActionName"/>*/}
                {/*</div>*/}
                {/*<div className="link-container">*/}
                    {/*<a className="cta" href="https://www.valic.com/security-center" target="_blank" title="Stay Secure">StaySecure<i className="icon-carrot-right"></i></a>*/}
                {/*</div>*/}
            </div>

            </div>

        );
    }
}
export default Employer;