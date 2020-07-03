import { connect } from "react-redux";
import {
  getProductById,
  addComments,
  incrementCounter,
  decrementCounter,
} from "../Action";
import Product from "../Product";

const mapStateToProps = (state) => {
  return {
    productData: state.product,
    comments: state.comments,
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductById: (id, listId) => dispatch(getProductById(id, listId)),
    addComments: (comments) => dispatch(addComments(comments)),
    // addReplies: (replies) => dispatch(addReplies(replies)),
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
