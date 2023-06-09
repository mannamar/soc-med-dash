import './Header.css';
import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import Switch from './Switch';

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
        <>
            <div className='bg-box'></div>
            <Container className="headCont d-flex justify-content-between">

                <div>
                    <p className="title">Social Media Dashboard</p>
                    <p className="subTitle">Total Followers: 23,004</p>
                </div>

                <hr></hr>
                <div className="switchCont d-flex flex-row-reverse">
                    <Switch function={toggleTheme} className="toggle"/>
                    <p className="switchText">Dark Mode</p>
                </div>
                
            </Container> 
        </>
    )
}