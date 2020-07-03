import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  margin-top: 5px;
`;
export const CommentContainer = styled.div`
  margin: 20px 0;
  position: relative;
  &&:before {
    content: "";
    width: 2px;
    height: 93%;
    position: absolute;
    left: 14px;
    top: 30px;
    background-color: #d6dbe0;
    display: ${(props) => (props.haseReplies > 0 ? "block" : "none")};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Img = styled.img`
  width: 30px;
  height: 30px;
  border: none;
  margin-right: 20px;
  border-radius: 50%;
`;
export const H1 = styled.h1`
  font-size: 13px;
  color: #000;
`;
export const Maker = styled.h1`
  width: 40px;
  height: 15px;
  margin-left: 9px;
  position: relative;
  &&:before {
    content: "Maker";
    font-size: 13px;
    padding: 3px 10px;
    border-radius: 10px;
    font-weight: 500;
    background-color: rgba(0, 179, 126, 0.1);
    color: #056d4e;
    position: absolute;
    display: ${(props) => (props.ismaker ? "block" : "none")};
  }
`;
// export const Titles = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
export const Description = styled.div`
  margin-left: 45px;
  padding: 15px 0;
  font-size: 13px;
  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif; */
  line-height: 20px;
`;
export const Replie = styled.div`
  margin-left: 65px;
`;
export const Pre = styled.pre`
  white-space: pre-line;
  font-family: unset;
`;
export const Upvote = styled.div`
  margin-top: 20px;
`;
export const Span = styled.span`
  cursor: pointer;
  margin-right: 20px;
  color: #6f6f6f;
  font-weight: 600;
  text-decoration: none;
`;
