import * as types from '../constants';
var _ = require('lodash');

export const initialState = {

    userType: 'individual',
    showHideInput : true,
    formValidationSSN :{
        'error' : 'false',
        'text' : 'Please enter a valid social security number',
        'value' : '',//'___-__-____',
        'changeInput': false,
        'backSpace':false,
        'nomask':'',
        'id':'ssnInput',
        'submit': function(){

        }

    },
    formValidationLast :{
        'error' : 'false',
        'text' : 'Please enter your last name',
        'value' : '',
        'id':'LastNameInput'

    },
    formValidationDOB :{
        'error' : 'false',
        'text' : 'Please enter a valid birth date',
        'value' : '',
        'nomask':'',
        'backSpace':false,
        'id':'DOBInput'

    },
    formValidationEmail :{
        'error' : 'false',
        'text' : 'Please enter a valid email',
        'value' : '',
        'id':'employerEmailInput'

    }
};

export default (state = initialState, action) => {
    console.log(action,'4::::::::::::::action:::::::::');
    switch (action.type) {
        case types.SWITCH_USER:
            return {
                ...state,
                userType: action.userType
            }
        case types.SUBMIT_ACTION:
            console.log('39::::::::::::::submit', action,state);
            let newStateSubmit = _.cloneDeep(action);
            delete newStateSubmit.type;
            return newStateSubmit;

        case types.INPUT_CHANGE:
            console.log('39', action,state)
            let newState = _.cloneDeep(action);
            delete newState.type;
            return newState;

        case types.INPUT_CHANGE_OUTSIDE:
            console.log('39', action,state)
            let newStateBlur = _.cloneDeep(action);
            delete newStateBlur.type;
            return newStateBlur;

        case types.MASK:
            console.log('39', action,state)
            let newStateMask = _.cloneDeep(action);
            delete newStateMask.type;
            return newStateMask;

        case types.SHOW_HIDE:
            console.log('39', action,state)
            let newStateShowHide = _.cloneDeep(action);
            delete newStateShowHide.type;
            return newStateShowHide;
        default:
            return state
    }
}
