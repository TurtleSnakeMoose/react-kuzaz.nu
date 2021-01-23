import React from 'react'

const ParticipantQuickInfo = ({participant, remove}) => {

    return (
        <>
            <div className="four wide column">
                <i className="dropdown icon"></i>
                <label>{participant.name}</label>
            </div>
            <div className="ten wide column">
                <label>Pays for:{participant.count}</label>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <label>MainPot:{participant.contribution.mainpot}</label>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <label>SidePot:{participant.contribution.sidepot.reduce((a, b) => a + b.amount, 0)}</label>
            </div>
            <div className="two wide column">
                <i className="right floated trash alternate icon" onClick={(e) => remove(e, participant.name) } ></i>
            </div>
        </>
    );
}

export default ParticipantQuickInfo