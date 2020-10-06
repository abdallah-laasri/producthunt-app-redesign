import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: auto;
  /* background: #e2f1ef; */
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Media = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  height: 500px;
  position: relative;
  /* margin-bottom: 5px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 430px) {
    height: 280px;
  }
`;
export const Next = styled.i`
  position: absolute;
  top: 44%;
  right: 12px;
  font-size: 2em;
  color: #000;
  padding: 10px;
  cursor: pointer;
  background: #e2f1ef8a;
  display: ${(props) => (props.counterIs ? "none" : "block")};
`;
export const Previous = styled(Next)`
  left: 12px;
  right: unset;
  display: ${(props) => (props.counterIs < 1 ? "none" : "block")};
`;
export const Description = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  font-size: 13px;
`;
export const Avatar = styled.img`
  cursor: pointer;
  height: 100%;
  max-width: -webkit-fill-available;
`;
export const Body = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  // width:80%;
  // height:500px;
  position: relative;
`;
export const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const H1 = styled.h1`
  font-size: 20px;
  color: #6f6f6f;
  margin-bottom: 21px;
`;
export const P = styled.p`
  line-height: 20px;
  margin: 0 0 12px;
  font-size: 13px;
  color: #6f6f6f;
`;
export const Img = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 20px;
  border: none;
  margin-right: 20px;
`;
export const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Discussion = styled.p`
  margin-top: 40px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
`;
export const MediaRow = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 0 0 5px 5px;
  background: white;
`;
export const Span = styled.span`
  height: 55px;
  width: 55px;
  margin-right: 5px;
  border: 1px solid #d0bdbd;
`;
