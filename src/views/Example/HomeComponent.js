import React from "react";
import Color from "../HOC/Color";
import { connect } from "react-redux";
class HomeComponent extends React.Component {
  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    let listUser = this.props.dataRedux;
    return (
      <>
        <div>Hello word from HomePage!</div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button type="button" onClick={() => this.handleCreateUser()}>
            Add new
          </button>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE_USER",
        payload: userDelete,
      }),
    addUserRedux: () =>
      dispatch({
        type: "CREATE_USER",
      }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color(HomeComponent));
