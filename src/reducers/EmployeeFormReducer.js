import { EMPLOYEE_CREATE, EMPLOYEE_FORM_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FORM_UPDATE :
            return { ...state, [action.payload.name]: action.payload.value };
        case EMPLOYEE_CREATE: 
            return { INITIAL_STATE };  
        default :
            return state;
    }
};

