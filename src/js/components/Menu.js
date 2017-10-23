import React, { Component } from 'react';
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        visible: true
    }
    handleClick(){
        this.setState({visible: !this.state.visible})
    }
    render() {
        let switchStyle = this.state.visible ? 'switch open' : 'switch close';
        return (
            <nav className="menu-container">
                <div className={switchStyle} onClick={this.handleClick}></div>
                {this.state.visible ? 
                    <ul>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul> : null}
            </nav>
        )
    }
}



