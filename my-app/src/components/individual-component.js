import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import MaskInput from 'react-maskinput';
var classNames = require('classnames');

class Individual extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {formValidationSSN, formValidationLast, formValidationDOB, onChangeInputType,onChangeOutsideInputType,onChangeMaskInputType,showHideInput,onChangeShowHide} = this.props;
        console.log(this.props, ':::::individaula::::::::::::::::::::::::::::');
       /*  className={classNames('foo', { errorMsg: formValidationSSN.error == 'true'})}*/

        return (
            <div>
                <div id="forgot-username" className="container">
                    <div className="section form">
                        <section className="form-section divided-section">
                            <div className="form-errors">
                            {formValidationSSN.error == 'false' ? '' :  <label id="ssnInput-error" className="tooltip-text form-error"
                                           htmlFor={formValidationSSN.id}>{formValidationSSN.text}</label> }
                            {formValidationLast.error == 'false' ? '' :  <label id="lastNameInput-error" className="tooltip-text form-error"
                                           htmlFor={formValidationLast.id}>{formValidationLast.text}</label> }
                            {formValidationDOB.error == 'false' ? '' :  <label id="dobInput-error" className="tooltip-text form-error"
                                           htmlFor={formValidationDOB.id}>{formValidationDOB.text}</label> }
                            </div>
                            <div id="individual" className="show">
                                <div className="form-group ssn-group reveal  has-error has-feedback">
                                    <label className="form-label" htmlFor="ssnInput">SSN</label>
                                    { formValidationSSN.changeInput == false ?
                                        <InputMask  className={classNames('form-control ssn-control', { errorMsg: formValidationSSN.error == 'true'})}  mask="999-99-9999" id="ssnInput"
                                                   defaultValue={formValidationSSN.value}  name="ssnInput" onKeyUp={(e) => onChangeInputType(e)}
                                                   onBlur={(e) => onChangeOutsideInputType(e)}
                                                    autoFocus />
                                        :<input className={classNames('form-control ssn-control', { errorMsg: formValidationSSN.error == 'true'})}   defaultValue={formValidationSSN.nomask} type="password" id="ssnInput"
                                                   name="ssnInput" onKeyUp={(e) => onChangeMaskInputType(e)}
                                                   maxLength="9"/>
                                    }
                                   {showHideInput == false ?
                                       <span className="toggle-ssn">
                                           <a className="" href="#" id="show" title="Click to reveal your social security number" onClick={(e) => onChangeShowHide(e)}>SHOW</a>
                                       </span>
                                       :
                                       <span className="toggle-ssn" >
                                           <a className="" href="#" id="hide" title="Click to reveal your social security number" onClick={(e) => onChangeShowHide(e)}>HIDE</a>
                                       </span>
                                   }


                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="lastNameInput">Last name</label>
                                    <input className={classNames('form-control ', { errorMsg: formValidationLast.error == 'true'})}  defaultValue={formValidationLast.value} type="text"
                                           id="LastNameInput" name="LastNameInput" onKeyUp={(e) => onChangeInputType(e)}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="dobInput">Date of birth</label>
                                    <MaskInput
                                        className={classNames('form-control birth-date-control', { errorMsg: formValidationDOB.error == 'true'})}
                                        mask="00/00/0000" id="DOBInput"
                                        name="DOBInput"  onBlur={(e) => onChangeOutsideInputType(e)} onKeyUp={(e) => onChangeInputType(e)}

                                        maskString='MM/DD/YYYY'
                                        alwaysShowMask
                                    />
                                    {/*<InputMask className={classNames('form-control birth-date-control', { errorMsg: formValidationDOB.error == 'true'})}  mask="99/99/9999" id="DOBInput"*/}
                                               {/*name="DOBInput"  onBlur={(e) => onChangeOutsideInputType(e)} onKeyUp={(e) => onChangeInputType(e)}*/}
                                              {/*/>*/}
                                    {/*<input className="form-control birth-date-control" type="date" maxLength="8"  maskChar="mm/dd/yyyy"*/}
                                           {/*defaultValue={formValidationDOB.value} id="DOBInput" name="DOBInput"*/}
                                           {/*onChange={(e) => onChangeInputType(e)}/>*/}
                                </div>

                            </div>

                        </section>
                    </div>
                </div>
            </div>
        );
    }

}
export default Individual;

