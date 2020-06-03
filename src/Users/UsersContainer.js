import React, { Component } from "react";
import { connect } from "react-redux";

import { actions as userActions } from "./users";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.fetUsersList();
    }
    render () {
        return {

        }
    }
}

const mapStateToProps = (state) => ({
    users: state.usersList
});

const mapDispatchToProps = (dispatch) => (
    {
        fetUsersList: () => dispatch(userActions.fetUsersList())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);