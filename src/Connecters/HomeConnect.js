import { connect } from "react-redux";
import { getNewData, incrementDayCount, resetCounter } from "../Action";
import Home from "../Home";

const mapStateToProps = (state) => {
  return {
    data: state.data,
    dayCount: state.dayCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewData: (data) => dispatch(getNewData(data)),
    incrementDayCount: () => dispatch(incrementDayCount()),
    resetCounter: () => dispatch(resetCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
