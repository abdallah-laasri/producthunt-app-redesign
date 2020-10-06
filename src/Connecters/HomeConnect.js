import { connect } from "react-redux";
import {
  getNewData,
  incrementDayCount,
  resetCounter,
  isNotFirstLoad,
  getUser,
} from "../Action";
import Home from "../Home";

const mapStateToProps = (state) => {
  return {
    data: state.data,
    dayCount: state.dayCount,
    isFirstLoad: state.isFirstLoad,
    // user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewData: (data) => dispatch(getNewData(data)),
    incrementDayCount: () => dispatch(incrementDayCount()),
    isNotFirstLoad: () => dispatch(isNotFirstLoad()),
    resetCounter: () => dispatch(resetCounter()),
    getUser: (user) => dispatch(getUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
