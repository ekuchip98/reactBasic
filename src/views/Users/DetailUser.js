import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    userInfo: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        userInfo: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handleBackButton = () => {
    this.props.history.push("/user");
  };
  render() {
    let { userInfo } = this.state;
    let isEmptyObj = Object.keys(userInfo).length === 0;
    return (
      <>
        <div>Hello user with id: {this.props.match.params.id}</div>
        {!isEmptyObj && (
          <>
            <div>
              User's name: {userInfo.first_name} {userInfo.last_name}
            </div>
            <div>User's email: {userInfo.email}</div>
            <div>
              <img src={userInfo.avatar} alt="" />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
