import React, { Component } from "react";
import {
  Container,
  Header,
  Media,
  Description,
  Avatar,
  Previous,
  Next,
  Body,
  H1,
  P,
  Img,
  Titles,
  Discussion,
  MediaRow,
  Span,
} from "./style";
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import CommentsList from "../Comments";
import request from "../Services/request";

class Product extends Component {
  componentDidMount() {
    this.props.getProductById(
      this.props.match.params.id,
      this.props.location.state.listId
    );
    request(`{
      post(id:${this.props.match.params.id}){
        comments{
          edges{
            node{
              id
              body
              votesCount
              createdAt
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
      this.props.addComments(data.data.post.comments.edges.reverse())
    );
  }

  getNext = () => {
    this.props.counter !== this.props.productData[0].node.media.length - 1 &&
      this.props.incrementCounter();
  };
  getPrevious = () => {
    this.props.counter !== 0 && this.props.decrementCounter();
  };

  render() {
    const { productData, comments, counter } = this.props;
    let productMedia = [];
    productData.length > 0 &&
      (productMedia = productData[0].node.media.filter(
        (item) => item.url !== productData[0].node.thumbnail.url
      ));
    // productData.length > 0 && (productMedia = productData[0].node.media);
    return (
      <Container>
        <Media>
          <Previous
            onClick={this.getPrevious}
            className="fas fa-chevron-left"
            counterIs={counter}
          />
          <Next
            onClick={this.getNext}
            className="fas fa-chevron-right"
            counterIs={counter >= productMedia.length - 1}
          />
          {productMedia.length > 0 &&
            (productMedia[counter].type === "image" ? (
              <Avatar src={productMedia[counter].url} />
            ) : (
              <ReactPlayer
                url={productMedia[counter].videoUrl}
                controls
                style={{ maxHeight: "-webkit-fill-available" }}
              />
            ))}
        </Media>
        <MediaRow>
          {productMedia.map((item, index) => (
            <Span key={index}>
              <img src={item.url} alt='' style={{ height: "100%", width: "100%" }} />
            </Span>
          ))}
        </MediaRow>
        {productData.length > 0 && (
          <Body>
            <Header>
              {productData[0].node.thumbnail && (
                <Img src={productData[0].node.thumbnail.url} />
              )}
              <Titles>
                <H1>{productData[0].node.name}</H1>
                <P>{productData[0].node.tagline}</P>
              </Titles>
            </Header>
            <Description>{productData[0].node.description}</Description>
          </Body>
        )}

        <Discussion>discussion</Discussion>
        <CommentsList comments={comments} />
      </Container>
    );
  }
}
export default withRouter(Product);
