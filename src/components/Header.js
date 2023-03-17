import './Header.css';
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';

export default function Header() {

    const [isDark, setIsDark] = useState(false);

    function toggleTheme() {
        console.log("clicked");
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
        setIsDark(!isDark);
    }

    return (
        <Container className="headCont d-flex justify-content-between">

            <div>
                <p className="title">Social Media Dashboard</p>
                <p className="subTitle">Total Followers: 23,004</p>
            </div>

            <div className="switchCont d-flex">
                <p className="switchText">Dark Mode</p>
                <Form.Switch onChange={toggleTheme}/>
            </div>
            
        </Container>
    )
}