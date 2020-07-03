import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  H3,
  Node,
  Avatar,
  Tagline,
  Vote,
  Title,
  Container,
  NodeBody,
  VotesCount,
  I,
  CommentsCount,
  CommentIcon,
  MorePostsDiv,
  MorePostsBtn,
} from "./style";
import request from "../Services/request";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { totalCount: null };
  }

  getMorePoste = (day) => {
    request(`{
      posts (postedBefore:"${new Date(
        new Date().getTime() - 1000 * 60 * 60 * 24 * day
      ).toUTCString()}"
      ,postedAfter:"${new Date(
        new Date().getTime() - 1000 * 60 * 60 * 24 * (day + 1)
      ).toUTCString()}",
    featured:true,after:"${
      this.props.data[this.props.data.length - 1].cursor
    }"){
      totalCount
        edges {
          cursor
          node {
            id
            name
            description 
            votesCount
            commentsCount
            website
            tagline
            thumbnail {
              url
            }
            media {
              videoUrl
              type
              url
            }
          }
        }
      }
    }`).then((data) => {
      this.props.morePosts(data.data.posts.edges, this.props.index);
    });
  };

  componentDidMount() {
    // request(`{
    //               posts (postedBefore:"${new Date().toUTCString()}",postedAfter:"${new Date(
    //   new Date().getTime() - 1000 * 60 * 60 * 24
    // )}",featured:true){
    //                 totalCount
    //                 edges {
    //                   cursor
    //                   node {
    //                     id
    //                     name
    //                     description
    //                     votesCount
    //                     commentsCount
    //                     website
    //                     tagline
    //                     thumbnail {
    //                       url
    //                     }
    //                     media {
    //                       videoUrl
    //                       type
    //                       url
    //                     }
    //                   }
    //                 }
    //               }
    //             }`).then((data) => {
    //   this.props.addNewData(data.data.posts.edges);
    //   this.setState({ totalCount: data.data.posts.totalCount });
    // });
    // this.props.resetCounter();
  }
  render() {
    const { data, index, totalCount } = this.props;
    return (
      <Container>
        <H3> {index === 0 ? " Today " : index + " Day ago"}</H3>
        {data.map((item) => (
          <Link
            to={{
              pathname: `/${item.node.id}`,
              state: { listId: index },
            }}
            key={item.node.id}
            style={{ textDecoration: "none" }}
          >
            <Node>
              <Avatar src={item.node.thumbnail.url} />
              <NodeBody>
                <Title>{item.node.name}</Title>
                <Tagline>{item.node.tagline}</Tagline>
                <CommentsCount>
                  <CommentIcon className="fas fa-comment"></CommentIcon>
                  {item.node.commentsCount}
                </CommentsCount>
              </NodeBody>
              <Vote>
                <VotesCount>
                  <I className="fas fa-caret-up" />
                  {item.node.votesCount}
                </VotesCount>
              </Vote>
            </Node>
          </Link>
        ))}
        {data.length > 0 && (
          <MorePostsDiv isComplet={totalCount === data.length}>
            <MorePostsBtn onClick={() => this.getMorePoste(index)}>
              more posts
              <I style={{ marginLeft: "12px" }} className="fas fa-caret-down" />
            </MorePostsBtn>
          </MorePostsDiv>
        )}

        {console.log("posts update")}
      </Container>
    );
  }
}
export default withRouter(Posts);
