

import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class Button extends Component {
    static PropTypes = {
        value: PropTypes.string
    }

    render() {
        return (
            <div className="screen" >
                <h1> {this.props.value}</h1>
            </div>
        )
    }
}

