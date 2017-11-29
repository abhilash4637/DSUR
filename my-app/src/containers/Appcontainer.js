import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ForgotUserName from '../components/forgot-username.component';
import { onChangeUserType,onChangeInputType,onChangeOutsideInputType,onChangeMaskInputType,onSubmitAction,onChangeShowHide } from '../actions/modalActions'

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       // const { userType, addTeams } = this.props;
        console.log('::::::::::::::::::::props::::::::::::::::',this.history);
        return (
            <div className="App">
                <ForgotUserName {...this.props}  />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('31:::::::::::::::::::::::', state);
    return {
        userType: state.modal.userType,
        showHideInput: state.modal.showHideInput,
        formValidationSSN: state.modal.formValidationSSN,
        formValidationLast: state.modal.formValidationLast,
        formValidationDOB: state.modal.formValidationDOB,
        formValidationEmail: state.modal.formValidationEmail,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
        onChangeUserType: onChangeUserType,
        onChangeInputType: onChangeInputType,
        onChangeOutsideInputType:onChangeOutsideInputType,
        onChangeMaskInputType:onChangeMaskInputType,
        onSubmitAction: onSubmitAction,
        onChangeShowHide: onChangeShowHide,
        //onChangeInsideInputType:onChangeInsideInputType

}, dispatch);


export default connect(
    mapStateToProps,mapDispatchToProps
)(AppContainer)




