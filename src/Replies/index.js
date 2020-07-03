import React from "react";
import { Header, Description, H1, Img, Replie, Pre } from "./style";
import request from "../Services/request";

class Replies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { replies: [] };
  }
  componentDidMount() {
    request(`{
      comment(id:${this.props.commentId}){
            replies{
              edges{
                node{
                  id
                  body
                  user{
                    name
                    profileImage
                    isMaker
                  }
                }
              }
            }
          }
        }`).then((data) =>
      this.setState({ replies: data.data.comment.replies.edges })
    );
  }

  render() {
    const { replies } = this.state;
    return (
      <>
        {replies.length > 0 &&
          replies.map((item) => (
            <Replie key={item.node.id}>
              <Header>
                <Img src={item.node.user.profileImage} />
                <H1>{item.node.user.name}</H1>
              </Header>
              <Pre>
                <Description>{item.node.body}</Description>
              </Pre>
            </Replie>
          ))}
        {console.log("replies update")}
      </>
    );
  }
}
export default Replies;
