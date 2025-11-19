import Exit from "../assets/exit.png";
import Clover_Btn from "../assets/clover_btn.png";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToMain = () => {
    navigate("/main");
  };
  const goToLookbook = () =>{
    navigate("/look-book");
  };

  const isLookBookPage = location.pathname === "/look-book";
  
  return (
    <div className="header-grid">
      <img src={Exit} alt="exit icon" className="exit" onClick={goToMain} />
      {!isLookBookPage && (<img src = {Clover_Btn} alt = "cloverbtn icon" className = "cloverbtn" onClick = {goToLookbook} />)}
    </div>
  );
}
