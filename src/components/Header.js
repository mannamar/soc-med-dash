import './Header.css';
import { Container, Form } from 'react-bootstrap';

export default function Header() {
    return (
        <Container className="headCont d-flex justify-content-between">

            <div>
                <p className="title">Social Media Dashboard</p>
                <p className="subTitle">Total Followers: 23,004</p>
            </div>

            <div className="switchCont d-flex">
                <p className="switchText">Dark Mode</p>
                <Form.Switch/>
            </div>
            
        </Container>
    )
}