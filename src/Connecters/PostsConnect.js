import { connect } from "react-redux";
import { addNewData, morePosts } from "../Action";
import Posts from "../Posts";

const mapStateToProps = (state) => {
  return {
    // postData: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewData: (postData) => dispatch(addNewData(postData)),
    morePosts: (moreposts, key) => dispatch(morePosts(moreposts, key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
