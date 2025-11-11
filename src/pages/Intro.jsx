// const Background = styled.div`
//   color: #80A867;
// `

// const MView = styled.div`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `

// export default function SignUp() {
//   return (
//     <>

//       <Background>
//     </>
//   )
// }


/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Intro1 from "../assets/Intro.png";
import { useEffect } from "react";
import Login from "./Login";
import { useNavigate } from 'react-router-dom';


const pageBackground = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const mobileWrapper = css`
  width: 100vw;
  height: 100vh;
  max-width: 402px;
  margin: 0 auto;
  // display: flex;
  flex-direction: column;
  // border: 1px solid #000;
   background-color: #80A867;
`;

const header = css`
  height: 10vh;
`;

const main = css`
  flex: 1;
  overflow-y: auto;
`;

const footer = css`
  height: 8vh;
`;

export default function Intro() {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/login'), 2000);
  }, []);

  return (
    <div css={pageBackground}>
      <div css={mobileWrapper}>
        {/* <header css={header}>Header</header>
        <main css={main}>Main Content</main>
        <footer css={footer}>Footer</footer> */}
        <img src={Intro1} alt="인트로" />
      </div>
    </div>
  );
}
