import React from 'react'
import { Field, reduxForm  } from 'redux-form'
import { connect } from 'react-redux'

import Button from '../shared/Button'
import {participantAdd} from '../../actions'

const renderInput = ({ input, meta, placeholder, type }) => {
    return (
        <div className="field">
            <input {...input} type={type} placeholder={placeholder} autoComplete="off"/>
            {meta.touched && meta.error ? meta.error : ''}
        </div>
    );
}

const validate = (formValues) => {
    var error = {};
    // FIGURE OUT HOW TO VALIDATE AGAINST THE STORE
    // if(!formValues.name){
    //     error.name = 'Name is required!'
    // }

    return error;
}

var ParticipantInput = props => {

    const onSubmit = formValues => {
        props.participantAdd(formValues.name);
        formValues.name = '';
    }

    return (
        <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
            <div className="inline fields">
                <Field name="name" type="text" placeholder="Participant Name" component={renderInput}/>
                <Button text="ADD"/>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        participants: state.participants
    };
}

export default reduxForm({
    form: 'form_participantInput',
    validate: validate
})(connect(
        mapStateToProps,
        {participantAdd}
    )(ParticipantInput));