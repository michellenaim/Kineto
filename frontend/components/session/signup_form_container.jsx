import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up!',
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(createNewUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);