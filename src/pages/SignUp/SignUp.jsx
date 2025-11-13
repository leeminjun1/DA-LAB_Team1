/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const mobileWrapper = css`
    width: 100vw;
    height: 100vh;
    max-width: 402px;
    margin: 0 auto;
    background-color: #fff;
`

const title = css`
    font-size: 24px;
    font-weight: 500;
    padding-top: 86px;
    padding-left: 24px;

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

const password_check = css`
    padding: 20px;
`

const extra = css`
    display: flex;
    flex-direction: row;

`

const signUpBtn = css`
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

const sgupBtn = css`
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

const nickName = css`
    padding: 20px;
   
`

const input_nick = css`
    width: 197px;
    height: 50px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
`

const nick = css`
    font-size: 15px;
    display: block;
    margin-bottom: 8px;
`

const duplicate_checkBtn = css`
    width: 125px;
    height: 50px;
    border-radius: 5px;
    background: #D7D7D7;
    margin-left: 30px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    color: #868686;
`

const box1 = css`
    display: flex;
`

export default function SignUp() {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }


    const [input, setInput] = useState('')
    
    const isButtonDisabled = input.trim() === '';

    const handleChange = (event) => {
        setInput(event.target.value);
        
    }






    return (
        <>
            <div css={mobileWrapper}>
                <div css={box1}>
                    <p css={title}>회원가입</p>
                </div>
                {/* <p css={title}>회원가입</p> */}

                <form action="" method='post'>

                    <div css={nickName}>
                        <label htmlFor="" css={nick}>닉네임</label>
                        <input type="text" value={input} onChange={handleChange} name="nickName" className='input_nick' css={input_nick} placeholder='닉네임 입력'/>
                        <button disabled={isButtonDisabled} 
                        style={{color: input ? "#000000ff" : "#868686"}}
                        css={duplicate_checkBtn}>중복확인</button>
                    </div>
                                    
                    <div css={email}>
                        <label css={email2}>이메일</label>
                        <input type="email" name="email" className='input_email' css={input_email} placeholder='이메일 입력'/>
                    </div>
                
                    <div css={password}>
                        <label htmlFor="" css={password2}>비밀번호</label>
                        <input type="password" name="password"  className='input_password' css={input_password} placeholder='비밀번호 입력'/>
                    </div>


                    <div css={password_check}>
                        <label htmlFor="" css={password2}>비밀번호 재확인</label>
                        <input type="password" name="password"  className='input_password'  css={input_password} placeholder='비밀번호 입력'/>
                    </div>
                
                    <div css={extra} onClick={goToLogin}>
                        <p css={eText1}>이미 회원가입을 하셨다면?</p>
                        <p css={eText2}>로그인하기</p>
                    </div>
                
                    <div css={signUpBtn}>
                        <button css={sgupBtn}>회원가입</button>
                    </div>
                
                
                
                </form>

            </div>
        </>
    )
}