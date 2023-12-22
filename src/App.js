import React from "react";
import Header from "./components/header/header";
import Slide from "./components/slide/slide";
import Section from "./components/references/index"
import Share from "./components/share/index"

class App extends React.Component{

render(){
  return <div>
    <Header/>
    <Slide/>
    <Section/>
    <Share/>
  </div>
}


}

export default App