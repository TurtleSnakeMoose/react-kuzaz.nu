import ACTION_TYPE from '../actions/types'

const INITIAL_STATE = []

export const participantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ACTION_TYPE.ADD_PARTICIPANT :
            return [...state, 
                {
                    name: action.payload,
                    count: 1,
                    contribution: {
                                    mainpot: 0,
                                    sidepot: [
                                        {
                                            amount: 0,
                                            participants: []
                                        }
                                    ]
                                }
                }
            ];

        case ACTION_TYPE.REMOVE_PARTICIPANT :
            return state.filter(participant => participant.name !== action.payload);

        default:
            return state;
    }
}