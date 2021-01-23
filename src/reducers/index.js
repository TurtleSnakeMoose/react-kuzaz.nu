import {combineReducers} from 'redux';
import {reducer as formReducers} from 'redux-form';

import {participantReducer} from './participantReducer'

export default combineReducers({
    participants: participantReducer,
    form: formReducers
});