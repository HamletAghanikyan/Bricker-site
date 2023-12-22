import React from "react";
import slideimage from "../images/download.jpg";
import image from "../images/img-06.jpg"
import './style.scss'
import '../style/style.scss'
import '../icons/style.css'

class Slide extends React.Component {

    render() {
        return <div className="container">
                <div className="slide-inside">
                    <img src={slideimage} alt="" />
                    <h2>WE ARE WEB DESIGNS HEROES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias incidunt nemo.</p>
                </div>
            
            <div className="adds">
                <div className="adds-inside">
                    <div className="variants"><span className="icon-equalizer2 equa"></span>Lorem, ipsum dolor.</div>
                    <div className="variants1"><span className="icon-stack stack"></span>Lorem, ipsum dolor.</div>
                    <div className="variants2"><span className="icon-diamond diamond"></span>Lorem, ipsum dolor.</div>
                    <div className="variants3"><span className="icon-share2 share"></span>Lorem, ipsum dolor.</div>

                </div>
                <img className="picture" src={image} alt="" />
            </div>
        </div>
    }
}

export default Slide


