import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'

const renderInput = ({input, meta, type, placeholder}) => {
    return (
        <input {...input} type={type} placeholder={placeholder} autoComplete="off"/>
    );
}

const ParticipantContributionInput = ({participant}) => {
    return (
        <form className="ui form">
            <div className="ui horizontal divider">
                MAIN-POT
            </div>
            <div className="field">
                <div className="two fields">
                    <div className="field">
                        <label>Contribution to main-pot</label>
                        <Field 
                            name="mainpot-sum"
                            type="number"
                            placeholder="0"
                            component={renderInput}
                        />
                    </div>
                    <div className="field">
                        <label>Pays for how many participants</label>
                        <Field 
                            name="count"
                            type="number"
                            placeholder="1"
                            component={renderInput}
                        />
                    </div>
                </div>
            </div>
            <div className="ui horizontal divider">
                SIDE-POTS
            </div>
            <div className="field">
                <div className="two fields">
                    <div className="field">
                        <label>Contribution to side-pot</label>
                        <Field 
                            name="sidepot-sum"
                            type="number"
                            placeholder="0"
                            component={renderInput}
                        />
                    </div>
                    <div className="field">
                        <label>Side-pot participants</label>
                        {/* <Field 
                            name="sidepot-participants"
                            type="multiselect"
                            placeholder=""
                            component={renderInput}
                        /> */}
                        <select name="skills" multiple="" className="ui fluid dropdown">
                            <option value="">Skills</option>
                            <option value="angular">Angular</option>
                            <option value="css">CSS</option>
                            <option value="design">Graphic Design</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'form_participantContribution'
})(connect(
        null,
        {}
    )(ParticipantContributionInput));