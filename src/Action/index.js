export function getNewData(data) {
  return {
    type: "get new data",
    data,
  };
}
export function addNewData(postData) {
  return {
    type: "add new data",
    postData,
  };
}
export function incrementDayCount() {
  return {
    type: "incrementDayCount",
  };
}
export function morePosts(moreposts, index) {
  return {
    type: "more posts",
    moreposts,
    index,
  };
}
export function getProductById(id, listId) {
  return {
    type: "get product by id",
    id,
    listId,
  };
}
export function addComments(comments) {
  return {
    type: "comments",
    comments,
  };
}
export function addReplies(replies) {
  return {
    type: "replies",
    replies,
  };
}
export function incrementCounter() {
  return {
    type: "incrementCounter",
  };
}
export function decrementCounter() {
  return {
    type: "decrementCounter",
  };
}
export function resetCounter() {
  return {
    type: "resetCounter",
  };
}
