import React from "react";
import './style.scss'
import '../style/style.scss'
import thumb1 from '../images/thumb-01.jpg'
import thumb2 from '../images/thumb-02.jpg'
import thumb3 from '../images/thumb-03.jpg'
import thumb4 from '../images/thumb-04.jpg'

class Section extends React.Component{

    render(){
        return <div className="container refer"><h3>TOP REFERENCES</h3>
        <div className="references">
        <img src={thumb1} alt="" />
        <img src={thumb2} alt="" />
        <img src={thumb3} alt="" />
        <img src={thumb4} alt="" /></div>
        </div>
    }
}

export default Section