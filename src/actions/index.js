import ACTION_TYPE from './types'

export const participantAdd = (name) => {  
    return {
        type: ACTION_TYPE.ADD_PARTICIPANT,
        payload: name
    };
}

export const participantRemove = (name) => {    
    return {
        type: ACTION_TYPE.REMOVE_PARTICIPANT,
        payload: name
    };
}