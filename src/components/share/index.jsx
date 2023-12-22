import React from "react";
import './style.scss'
import '../style/style.scss'

class Share extends React.Component {

    render() {
        return <div className="container media">
            <div className="share-inside">
                <h6>LET'S KEEP IN TOUCH</h6>
                <p>Deleniti pertinacia eu est, te his soluta quaestio pericula illum vulputate lobortis facilisis.</p>
            </div>
            <span className="icon-facebook facebook"></span>
            <span className="icon-twitter twitter"></span>
            <span className="icon-youtube youtube"></span>
            <span className="icon-linkedin2 linkedin"></span>
        </div>
    }
}

export default Share