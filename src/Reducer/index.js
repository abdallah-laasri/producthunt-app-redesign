const initialState = {
  data: [],
  dayCount: 1,
  MorePosts: [],
  product: [],
  comments: [],
  replies: [],
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "get new data":
      return { ...state, data: [...state.data, action.data] };
    case "incrementDayCount":
      return { ...state, dayCount: state.dayCount + 1 };
    case "more posts":
      return {
        ...state,
        data: state.data.map((item, index) =>
          index === action.index
            ? {
                ...state.data[action.index],
                edges: [...state.data[action.index].edges, ...action.moreposts],
              }
            : item
        ),
      };
    case "get product by id":
      return {
        ...state,
        product: state.data[action.listId].edges.filter(
          (item) => item.node.id === action.id
        ),
      };
    case "comments":
      return {
        ...state,
        comments: action.comments,
      };
    case "replies":
      return {
        ...state,
        replies: action.replies,
      };
    case "incrementCounter":
      return { ...state, counter: state.counter + 1 };
    case "decrementCounter":
      return { ...state, counter: state.counter - 1 };
    case "resetCounter":
      return { ...state, counter: 0 };
    default:
      return state;
  }
};
export default reducer;
