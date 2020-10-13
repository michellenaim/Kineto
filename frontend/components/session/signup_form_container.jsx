import { connect } from 'react-redux';
import { createNewUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up!',
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(createNewUser(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);