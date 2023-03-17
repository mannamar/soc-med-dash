import { Container, Col, Row } from 'react-bootstrap';
import BigCard from './BigCard';
import './BottomRow.css'
import fbIcon from '../assets/images/icon-facebook.svg';
import twIcon from '../assets/images/icon-twitter.svg';
import igIcon from '../assets/images/icon-instagram.svg';
import ytIcon from '../assets/images/icon-youtube.svg';
import upIcon from '../assets/images/icon-up.svg';
import downIcon from '../assets/images/icon-down.svg';
import SmallCard from './SmallCard';

export default function BottomRow() {
    return (
        <Container className="botRowCont">

            <p className='botTitle'>Overview - Today</p>

            <Row className="gx-4">
                <Col>
                    <SmallCard icon={fbIcon} text='Page Views' num='87' arrow={upIcon} percent='3' textColor='green-text'/>
                </Col>
                <Col>
                    <SmallCard icon={fbIcon} text='Likes' num='52' arrow={downIcon} percent='2' textColor='red-text'/>
                </Col>
                <Col>
                    <SmallCard icon={igIcon} text='Likes' num='5462' arrow={upIcon} percent='2257' textColor='green-text'/>
                </Col>
                <Col>
                    <SmallCard icon={igIcon} text='Profile Views' num='52k' arrow={upIcon} percent='1375' textColor='green-text'/>
                </Col>
            </Row>

            <Row className="gx-4 pt-4">
                <Col>
                    <SmallCard icon={twIcon} text='Retweets' num='117' arrow={upIcon} percent='303' textColor='green-text'/>
                </Col>
                <Col>
                    <SmallCard icon={twIcon} text='Likes' num='507' arrow={upIcon} percent='553' textColor='green-text'/>
                </Col>
                <Col>
                    <SmallCard icon={ytIcon} text='Likes' num='107' arrow={downIcon} percent='19' textColor='red-text'/>
                </Col>
                <Col>
                    <SmallCard icon={ytIcon} text='Total Views' num='1407' arrow={downIcon} percent='12' textColor='red-text'/>
                </Col>
            </Row>

        </Container>
    )
}