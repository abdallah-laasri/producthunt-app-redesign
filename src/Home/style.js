import styled from "styled-components";

export const MoreDataBtn = styled.button`
  background: #ff5722;
  color: white;
  font-size: 20px;
  border: none;
  padding: 15px 73px;
  margin: 20px;
  cursor: pointer;
`;
export const MoreDataDiv = styled.div`
  text-align: center;
`;
export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #da5431;
  border-radius: 50%;
  animation: spinner 1.2s linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const LoaderContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
