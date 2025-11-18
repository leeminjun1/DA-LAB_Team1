import Exit from "../assets/exit.png";
import Clover_Btn from "../assets/clover_btn.png";
import './Header.css';

export default function Header() {
  return (
    <div className = "header-grid">
      <img src={Exit} alt="exit icon" className="exit" />
      <img src={Clover_Btn} alt="cloverbtn icon" className="cloverbtn" />
      
    </div>
  );
}
