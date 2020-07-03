import React, { Component } from "react";
import Post from "../Connecters/PostsConnect.js";
import { withRouter } from "react-router-dom";
import request from "../Services/request";
import { MoreDataBtn, MoreDataDiv, Loader, LoaderContainer } from "./style";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getDayPosts = (day) => {
    request(`{
                posts (postedBefore:"${new Date(
                  new Date().getTime() - 1000 * 60 * 60 * 24 * day
                ).toUTCString()}",
                postedAfter:"${new Date(
                  new Date().getTime() - 1000 * 60 * 60 * 24 * (day + 1)
                ).toUTCString()}",
                featured:true)
                {
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
      this.props.getNewData(data.data.posts);
    });
  };
  componentDidMount() {
    this.props.dayCount === 1 && this.getDayPosts(0);
    this.props.resetCounter();
  }
  render() {
    const { data, dayCount } = this.props;
    return (
      <div>
        {data.length === 0 && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        {data.length > 0 &&
          data.map((item, index) => (
            <Post
              data={item.edges}
              key={index}
              index={index}
              totalCount={item.totalCount}
            />
          ))}
        {/* {console.log(data)} */}
        {data.length > 0 && (
          <MoreDataDiv>
            <MoreDataBtn
              onClick={() => {
                this.props.incrementDayCount();
                this.getDayPosts(dayCount);
              }}
            >
              Get Previous Days Products
            </MoreDataBtn>
          </MoreDataDiv>
        )}
      </div>
    );
  }
}
export default withRouter(Home);
