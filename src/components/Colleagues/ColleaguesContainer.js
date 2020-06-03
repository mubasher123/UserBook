import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as userActions } from "../../Users/users";
//import Colleagues from './Colleagues';
import Colleagues from '../Colleagues/Colleagues';

class ColleaguesContainer extends Component {
  componentDidMount() {
    this.props.fetchUsersList();
  }

  render() {
    return (
      <Colleagues {...this.props.users} />
    );
  }
}

const mapStateToProps = (state) => (
  {
    users: state,
  }
);

const mapDispatchToProps = (dispatch) => ({
  fetchUsersList: () => dispatch(userActions.fetchUsersList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColleaguesContainer);
