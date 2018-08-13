import React, { Component } from 'react';   
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>

         );
    }
}
 
export default MyApp;