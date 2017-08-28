import React from 'react';
import Footer from "../conponents/Footer/index";
import Header from "../conponents/Header/index";

export default class Warp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}