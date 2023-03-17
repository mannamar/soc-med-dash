import './BigCard.css';
import './SmallCard.css';
import fbIcon from '../assets/images/icon-facebook.svg';
import upIcon from '../assets/images/icon-up.svg';

export default function SmallCard(props) {
    return (
        <div className={`smallCard d-flex flex-column align-items-center ${props.border}`}>

            <div className="d-flex topBox justify-content-between">
                <p className="smallTxt">{props.text}</p>
                <img src={props.icon} alt="Social Icon" className="icon"></img>
            </div>

            <div className="d-flex botBox justify-content-between align-items-end">
                <p className="smallNum">{props.num}</p>
                <div className="percentBox d-flex align-items-center">
                    <img src={props.arrow} alt="Facebook Icon" className="arrow"></img>
                    <p className={`perChangeNum ${props.textColor}`}>{props.percent}%</p>
                </div>
            </div>

        </div>
    )
}