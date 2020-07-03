import { connect } from "react-redux";
import { addReplies } from "../Action";
import Replies from "../Replies";

const mapStateToProps = (state) => {
  return {
    replies: state.replies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReplies: (replies) => dispatch(addReplies(replies)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Replies);
