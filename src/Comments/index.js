import React from "react";
import {
  Header,
  Description,
  Container,
  H1,
  Img,
  CommentContainer,
  Pre,
  Upvote,
  Span,
  Maker,
} from "./style";

import Replies from "../Connecters/RepliesConnect";

export default class Comments extends React.Component {
  render() {
    const { comments } = this.props;

    const commentAge = (today, createdAt) => {
      var x = today.getHours() - createdAt.getHours();
      if (x < 0) {
        return 24 - createdAt.getHours() + today.getHours();
      } else if (x === 0) {
        return today.getMinutes() - createdAt.getMinutes();
      } else {
        return x;
      }
    };

    return (
      <Container>
        {comments.length > 0 &&
          comments.map((item) => (
            <CommentContainer
              key={item.node.id}
              // haseReplies={item.node.replies.edges.length}
            >
              <Header>
                <Img src={item.node.user.profileImage} />
                <H1>{item.node.user.name}</H1>
                <Maker ismaker={item.node.user.isMaker}></Maker>
              </Header>

              <Description>
                <Pre>{item.node.body}</Pre>
                <Upvote>
                  <Span>Upvote({item.node.votesCount})</Span>
                  <Span>
                    {commentAge(new Date(), new Date(item.node.createdAt))}
                    hour ago
                  </Span>
                </Upvote>
                <Replies commentId={item.node.id} />
              </Description>
            </CommentContainer>
          ))}

        {console.log("comments update")}
      </Container>
    );
  }
}
