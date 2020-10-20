import React from "react";
import { connect } from "react-redux";
import { createNewUser, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: "Sign Up",
  link: (
    <div>
      <span>Already have an account? </span>
      <Link className="link" to="/login">
        {" "}
        Sign In
      </Link>
    </div>
  ),
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(createNewUser(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
