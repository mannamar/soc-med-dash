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
            <Row className="gx-4 gy-4">
                <Col xs={12} md={6} lg={3}>
                    <BigCard icon={fbIcon} user='@mannamar' num='1987' type='FOLLOWERS' arrow={upIcon} textColor='green-text' numChange='12' border='fb-border'/>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <BigCard icon={twIcon} user='@mannamar' num='1044' type='FOLLOWERS' arrow={upIcon} textColor='green-text' numChange='99' border='tw-border'/>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <BigCard icon={igIcon} user='@therealmannamar' num='11k' type='FOLLOWERS' arrow={upIcon} textColor='green-text' numChange='1099' border='ig-border'/>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <BigCard icon={ytIcon} user='Amar M.' num='8239' type='SUBSCRIBERS' arrow={downIcon} textColor='red-text' numChange='144' border='yt-border'/>
                </Col>
            </Row>
        </Container>
    )
}