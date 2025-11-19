/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "../component/Header";
import Clover from "../assets/clover_complete.png";

const mobileWrapper = css`
  width: 100vw;
  height: 100vh;
  max-width: 402px;
  margin: 0 auto;
  //   flex-direction: column;
  // border: 1px solid #000;
  background-color: #fff;
`;

const h1 = css`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const container = css`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 수직 중앙 */
  align-items: center; /* 수평 중앙 */
`;

const name = "리액트 스터디";

export default function LookBook() {
  return (
    <>
      <div css={mobileWrapper}>
        <Header />
        <div className="container" css = "container">
          <h1 css={h1}>{name}</h1>
        </div>
      </div>
    </>
  );
}
