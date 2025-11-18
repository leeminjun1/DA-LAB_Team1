/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import No_777 from '../assets/No_777.png'
import No777_2 from '../assets/No777_2.png'
import { useNavigate } from 'react-router-dom'


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


const group2 = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 73.02px;
    

`


const groupBtn = css`
    width: 100%;
    height: 40px;
    background-color: #80A867;
    width: 354px;
    height: 60px;
    font-size: 15px;
    color: #ffffff;
    border: none;
    cursor: pointer;
    margin-bottom: 11px;
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

const extra = css`
    display: flex;
    flex-direction: row;
    // align-items: center;
    //text-align: center;
    justify-content: center;
`

const eText2 = css`
    font-size: 14px;
    color: #989898;
    // margin-left: 145px;
    text-decoration: underline;
    // text-align: center;
    margin-top: 43px;

`



export default function SpaceMain() {

    const navigate = useNavigate()
    
    const goToReceiverMain = () => {
        navigate('/receiver-main')
    }

    const goToGiverMain = () =>{
        navigate('/giver-main')
    }


    return (
        <>
            <div css={mobileWrapper}>
                <div css={group1}>
                    <img src={No_777} alt="No.777" css={img1} />
                    <img src={No777_2} alt="No.777_2" css={img2} />
                </div>

                <div css={group2}>
                    <button css={groupBtn} onClick={goToGiverMain}>그룹 생성하기</button>
                    <button onClick={goToReceiverMain} css={groupBtn}>그룹 입장하기</button>
                </div>

                <div css={extra}>
                    <p css={eText2}>로그아웃</p>
                </div>

            </div>
        </>
    )
}