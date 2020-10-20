import React from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "Sign In",
  link: (
    <div>
      <span>New to Kineto? </span>
      <Link className="link" to="/signup">
        Sign up now.
      </Link>
    </div>
  ),
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
