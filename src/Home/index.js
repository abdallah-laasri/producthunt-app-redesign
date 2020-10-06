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

  authenticationVerification = () => {
    // localStorage.setItem("jwt", document.cookie.split("=")[1]);
    document.cookie.includes("jwt") &&
      localStorage.setItem(
        "jwt",
        document.cookie
          .split(";")
          .filter((i) => i.includes("jwt"))[0]
          .split("=")[1]
      );
    const token = localStorage.getItem("jwt");
    if (token) {
      fetch("http://localhost:5000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((user) => this.props.getUser(user));
    } else {
      console.log("no token");
    }
  };

  componentDidMount() {
    this.props.isFirstLoad && this.getDayPosts(0);
    this.props.resetCounter();
    this.props.isNotFirstLoad();

    this.authenticationVerification();
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
