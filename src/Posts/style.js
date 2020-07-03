import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  background: #e2f1ef;
  padding: 20px;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px;
  }
`;
export const H3 = styled.h3`
  margin-bottom: 15px;
  font-size: 22px;
`;
export const Node = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  border-radius: 35px;
  margin-bottom: 20px;

  &:hover {
    background: #f1f1f1;
  }
`;
export const Avatar = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 20px;
  border: none;
  flex-grow: 1;
`;
export const NodeBody = styled.div`
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const Tagline = styled.div`
  line-height: 20px;
  margin: 0 0 12px;
  font-size: 13px;
  color: #6f6f6f;
`;
export const Title = styled.h1`
  font-size: 16px;
  color: #6f6f6f;
`;
export const Vote = styled.div`
  min-height: 74px;
  min-width: 64px;
  position: relative;
  border: 1px solid;
  border-radius: 20px;
  border-color: #e8e8e8;
  background: #fff;
  &:hover {
    background: #f1f1f1;
  }
`;
export const VotesCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  font-size: 13px;
`;
export const I = styled.i`
  font-size: 20px;
`;
export const CommentsCount = styled.span`
  width: fit-content;
  color: #6f6f6f;
  display: inline-block;
  padding: 4px 8px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  font-size: 11px;
  margin-right: 10px;
  background: #fff;
`;
export const CommentIcon = styled.i`
  color: #6f6f6f;
  font-size: 11px;
  line-height: 16px;
  margin-right: 3px;
`;
export const MorePostsDiv = styled.div`
  text-align: center;
  display: ${(props) => (props.isComplet ? "none" : "block")};
`;
export const MorePostsBtn = styled.button`
  border-style: none;
  background: #ffffff;
  padding: 14px 25px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
