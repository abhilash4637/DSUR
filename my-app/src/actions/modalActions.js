import * as types from '../constants';
import {browserHistory  } from 'react-router';


export const onChangeShowHide = (event) => {
    return (dispatch, getState) => {
        const formValidationSSNchange = getState().modal.formValidationSSN;
        let showHideInputchange = getState().modal.showHideInput;
        formValidationSSNchange.changeInput = !formValidationSSNchange.changeInput;
        showHideInputchange = !showHideInputchange;
        dispatch({
            type: types.SHOW_HIDE,
            formValidationSSN: formValidationSSNchange,
            formValidationLast: getState().modal.formValidationLast,
            formValidationDOB: getState().modal.formValidationDOB,
            formValidationEmail : getState().modal.formValidationEmail,
            showHideInput:  showHideInputchange,
            userType: getState().modal.userType
        })
    }
}
export const onChangeMaskInputType = (event) => {
    return (dispatch, getState) => {
        const formValidationSSNchange = getState().modal.formValidationSSN;
        formValidationSSNchange.nomask = event.target.value;
        formValidationSSNchange.value = event.target.value;
        if(event.keyCode == 8){
            formValidationSSNchange.error= 'true';
        }
        if(event.target.value.length == 9){
            formValidationSSNchange.error= 'false';
        }
        dispatch({
            type: types.MASK,
            formValidationSSN: formValidationSSNchange,
            formValidationLast: getState().modal.formValidationLast,
            formValidationDOB: getState().modal.formValidationDOB,
            formValidationEmail : getState().modal.formValidationEmail,
            showHideInput:  getState().modal.showHideInput,
            userType: getState().modal.userType
        })
    }
}
export const onChangeUserType = (event) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.SWITCH_USER,
            userType: event.target.value
        })
    }
}
export const onChangeOutsideInputType = (event) => {
    return (dispatch, getState) => {
        const formValidationSSNchange = getState().modal.formValidationSSN;
        const formValidationdobchange = getState().modal.formValidationDOB;
        const formValidationemailchange = getState().modal.formValidationEmail;
        let showHideInputchange = getState().modal.showHideInput;

        if(event.target.name == "ssnInput"){
            if(formValidationSSNchange.nomask.length != 9){
                formValidationSSNchange.error = 'true';
                showHideInputchange = false;
                formValidationSSNchange.changeInput = 'true'
            }
        }
        else if(event.target.name == "DOBInput"){
            if(formValidationdobchange.nomask.length != 8){
                formValidationdobchange.error = 'true';
            }
            if(new Date(formValidationdobchange.value) == 'Invalid Date'){
                formValidationdobchange.error = 'true';
            }
            if(new Date(formValidationdobchange.value).getFullYear() < 1990 ){
                formValidationdobchange.error = 'true';
            }
        }else if(event.target.name == "employerEmailInput"){
            if(/^\w+([\.-]*\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(formValidationemailchange.value)){
                formValidationemailchange.error= formValidationemailchange.value ? 'false' : 'true';
            }
            else{
                formValidationemailchange.error= 'true';
            }
        }

        dispatch({
            type: types.INPUT_CHANGE_OUTSIDE,
            formValidationSSN: formValidationSSNchange,
            formValidationLast: getState().modal.formValidationLast,
            formValidationDOB: formValidationdobchange,
            formValidationEmail : getState().modal.formValidationEmail,
            showHideInput:  showHideInputchange,
            userType: getState().modal.userType
        })
    }
}
function checkValidationForInput(propertyName,flag){
    if(!propertyName.value){
        propertyName.error = 'true';
    }
}
export const onSubmitAction = (event) => {
    return (dispatch, getState) => {
        if(getState().modal.userType =='individual'){
            const allInput = [getState().modal.formValidationSSN,getState().modal.formValidationLast,getState().modal.formValidationDOB];
            for(var i =0; i< allInput.length ;i++){
                const eachInput = allInput[i];
                checkValidationForInput(eachInput);
            }
        }else{
            checkValidationForInput(getState().modal.formValidationEmail);
        }
        if(getState().modal.formValidationSSN.nomask.length == 9 && getState().modal.formValidationLast.value && getState().modal.formValidationDOB.nomask.length == 8){
           // console.log(this,':::::::::::::::::::::::::::return', getState().modal.formValidationSSN.submit.getResponse());
            getState().modal.formValidationSSN.submit.execute();
            console.log(this,':::::::::::::::::::::::::::return',  getState().modal.formValidationSSN.submit);
            //browserHistory.push('/submit');
            browserHistory.push({
                pathname: '/submit',
                //state: { some:  getState().modal }
            });
        }else if(getState().modal.formValidationSSN.nomask.length == 9 && getState().modal.formValidationLast.value && getState().modal.formValidationDOB.nomask.length == 8){
            console.log(':::::::::::::::::::::::::::return',browserHistory);
            this.recaptcha.execute();
            //browserHistory.push('/submit');
            browserHistory.push({
                pathname: '/submit',
                state: { some:  getState().modal }
            });
        }
        else{
            dispatch({
                type: types.SUBMIT_ACTION,
                formValidationSSN: getState().modal.formValidationSSN,
                formValidationLast: getState().modal.formValidationLast,
                formValidationDOB: getState().modal.formValidationDOB,
                formValidationEmail : getState().modal.formValidationEmail,
                userType: getState().modal.userType,
                showHideInput : getState().modal.showHideInput
            })
        }


    }
}
function renderContent(propertyName,event) {
    let fieldName=event.target.name;
  //  console.log(':::::::::::::::::::::event',event.keyCode);
    switch (fieldName){
        case 'ssnInput':
            var txt = event.target.value;
            var str = txt.match(/\d+/g, "")+'';
            var s = str.split(',').join('');
            propertyName.nomask = s;
            propertyName.value = event.target.value;
            propertyName.error = propertyName.value ? 'false' : 'true';
            if(event.keyCode == 8){
                propertyName.error= 'true';
                propertyName.backSpace = true;
            }
            if(propertyName.backSpace &&  propertyName.nomask.length != 9 ){
                propertyName.error= 'true';
            }

            break;
        case 'LastNameInput':
                propertyName.value = event.target.value;
                propertyName.error = propertyName.value ? 'false' : 'true';
            break;
        case 'DOBInput':
            var txt = event.target.value;
            var str = txt.match(/\d+/g, "")+'';
            var s = str.split(',').join('');
            propertyName.nomask = s;
            propertyName.value = event.target.value;
            propertyName.error = propertyName.value ? 'false' : 'true';
            if(event.keyCode == 8){
                propertyName.error= 'true';
                propertyName.backSpace = true;
            }
            if(propertyName.backSpace &&  propertyName.nomask.length != 8 ){
                propertyName.error= 'true';
            }
            if(new Date(propertyName.value) == 'Invalid Date'){
                propertyName.error = 'true';
            }
            if(new Date(propertyName.value).getFullYear() < 1990 ){
                propertyName

                    .error = 'true';
            }
            break;
        case 'employerEmailInput':
            if(/^\w+([\.-]*\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(event.target.value)){
                propertyName.error= propertyName.value ? 'false' : 'true';
            }
            else{
                propertyName.error= 'true';
            }
            propertyName.value = event.target.value;
            /*if( propertyName.error =='true'){
                if(/^\w+([\.-]*\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(event.target.value)){
                    propertyName.error= propertyName.value ? 'false' : 'true';
                }
            }else{
                propertyName.error= propertyName.value ? 'false' : 'true';
                if(event.keyCode == 8 && /^\w+([\.-]*\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(event.target.value)){
                    propertyName.error= 'true';
                }
            }*/
            break;
        default :
            break;

    }
}
export const onChangeInputType = (event) => {
    return (dispatch, getState) => {
        //console.log(':::::::::::::::getState():::::::::::::',getState());
        const formValidationSSNchange = getState().modal.formValidationSSN;
        const formValidationlastchange = getState().modal.formValidationLast;
        const formValidationdobchange = getState().modal.formValidationDOB;
        const formValidationemailchange = getState().modal.formValidationEmail;
        if(event.target.name == "ssnInput"){
            renderContent(formValidationSSNchange,event)
        }else if(event.target.name == "LastNameInput"){
            renderContent(formValidationlastchange,event)
        }else if(event.target.name == "DOBInput"){
            renderContent(formValidationdobchange,event)
        }else if(event.target.name == "employerEmailInput"){
            renderContent(formValidationemailchange,event)
        }
        dispatch({
            type: types.INPUT_CHANGE,
            formValidationSSN: formValidationSSNchange,
            formValidationLast: formValidationlastchange,
            formValidationDOB: formValidationdobchange,
            formValidationEmail:formValidationemailchange,
            userType:  getState().modal.userType,
            showHideInput : getState().modal.showHideInput

        })
    }

}