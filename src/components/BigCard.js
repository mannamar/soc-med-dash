import './BigCard.css';
import fbIcon from '../assets/images/icon-facebook.svg';
import upIcon from '../assets/images/icon-up.svg';

export default function BigCard(props) {
    return (
        <div className={`bigCard d-flex flex-column align-items-center ${props.border}`}>

            <div className="d-flex usernameBox align-items-center">
                <img src={props.icon} alt="Social Icon" className="icon"></img>
                <p className="userTxt">{props.user}</p>
            </div>

            <p className="folNum">{props.num}</p>
            <p className="folTxt">{props.type}</p>

            <div className="folBox d-flex align-items-center">
                <img src={props.arrow} alt="Facebook Icon" className="arrow"></img>
                <p className={`folChangeNum ${props.textColor}`}>{props.numChange} Today</p>
            </div>

        </div>
    )
}