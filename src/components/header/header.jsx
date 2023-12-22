import React from "react";
import './style.scss'
import '../style/style.scss'



class Header extends React.Component {

    render() {
        return <div className="container">
            <header className="header-block">            
            <a className="logo" href="">BRICKER</a>
            <ul className="menu"><li><a href="">HOME</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">GALLERY</a></li>
                <li><a href="">CONTACT</a></li></ul>
               
        </header> </div>
    }
}

export default Header