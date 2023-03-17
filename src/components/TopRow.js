import { Container, Col, Row } from 'react-bootstrap';
import BigCard from './BigCard';
import './TopRow.css'
import fbIcon from '../assets/images/icon-facebook.svg';
import twIcon from '../assets/images/icon-twitter.svg';
import igIcon from '../assets/images/icon-instagram.svg';
import ytIcon from '../assets/images/icon-youtube.svg';
import upIcon from '../assets/images/icon-up.svg';
import downIcon from '../assets/images/icon-down.svg';

export default function TopRow() {
    return (
        <Container className="topRowCont">
            <Row className="gx-4">
                <Col>
                    <BigCard icon={fbIcon} user='@nathanf' num='1987' type='FOLLOWERS' arrow={upIcon} textColor='green-text' numChange='12' border='blue-border'/>
                </Col>
                <Col>
                    <BigCard icon={twIcon} user='@nathanf' num='1044' type='FOLLOWERS' arrow={upIcon} textColor='green-text' numChange='99' border='blue-border'/>
                </Col>
                <Col>
                    <BigCard icon={igIcon} user='@realnathanf' num='11k' type='FOLLOWERS' arrow={upIcon} textColor='green-text' numChange='99' border='blue-border'/>
                </Col>
                <Col>
                    <BigCard icon={ytIcon} user='Nathan F.' num='1044' type='SUBSCRIBERS' arrow={downIcon} textColor='red-text' numChange='99' border='blue-border'/>
                </Col>
            </Row>
        </Container>
    )
}