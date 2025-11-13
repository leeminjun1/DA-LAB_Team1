/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import No_777 from '../../assets/No_777.png';
import No777_2 from '../../assets/No777_2.png';
import { useNavigate } from 'react-router-dom';
import "./Login.css"


const mobileWrapper = css`
  width: 100vw;
  height: 100vh;
  max-width: 402px;
  margin: 0 auto;
//   flex-direction: column;
  // border: 1px solid #000;
   background-color: #fff;
`;

const group1 = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // margin-top: 200px;

`

const img1 = css`
    margin: auto;
    display: block;
    margin-top: 200px;
`

const img2 = css`
    margin: auto;
    display: block;
    margin-top: 20px;
    margin-bottom: 40px;
`

const email = css`
    padding: 20px;
`

const password = css`
    padding: 20px;
`

const password2 = css`
    font-size: 15px;
`

const extra = css`
    display: flex;
    flex-direction: row;

`

const loginBtn = css`
    padding: 20px;
`

const input_email = css`
    width: 100%;
    height: 40px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
`


const input_password = css`
    width: 100%;
    height: 40px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
`

const email2 = css`
    font-size: 15px;

`

const eText1 = css`
    color: #989898;
    font-size; 12px;
    bottom: 40px;
    margin-left: 20px;
`
const eText2 = css`
    font-size: 14px;
    color: #989898;
    margin-left: 145px;
    text-decoration: underline;

`

const lgnBtn = css`
    width: 100%;
    height: 40px;
    background-color: #80A867;
    width: 354px;
    height: 60px;
    font-size: 15px;
    color: #ffffff;
    border: none;
    cursor: pointer;
`

export default function Login() {
    const navigate = useNavigate()

    const goToSignUp = () => {
        navigate('/signup')
    }

        
    return (
        <>
            <div css={mobileWrapper}>
                <div css={group1}>
                    <img src={No_777} alt="No.777" css={img1} />
                    <img src={No777_2} alt="No.777_2" css={img2} />
                </div>
                <form action="" method='post'>
                    
                    <div css={email}>
                        <label css={email2}>이메일</label>
                        <input type="email" name="email" css={input_email} className='input_email' placeholder='이메일 입력'/>
                    </div>

                    <div css={password}>
                        <label htmlFor="" css={password2}>비밀번호</label>
                        <input type="password" name="password"  css={input_password} className='input_password' placeholder='비밀번호 입력'/>
                    </div>

                    <div css={extra} onClick={goToSignUp}>
                        <p css={eText1}>아직 회원이 아니라면?</p>
                        <p css={eText2}>회원가입하기</p>
                    </div>

                    <div css={loginBtn}>
                        <button css={lgnBtn}>로그인</button>
                    </div>



                </form>
            </div>
        </>
    )
}

