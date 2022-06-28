
import React, { Component } from 'react'
import PropTypes from "prop-types";
import './Button.css'

export default class Button extends Component {
    static PropTypes = {
        className: PropTypes.string,
        value: PropTypes.string,
        OnClick: PropTypes.func,
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.props.OnClick}>
                {this.props.value}
            </button>
        )
    }
}















