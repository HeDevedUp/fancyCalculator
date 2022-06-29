/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        const className =[ 
             this.props.equals?" equals":"",
             this.props.orangee?" orangee":""

        ]
        return (

            <button className={className.join(" ").trim()} onClick={this.handleClick}>{this.props.name}</button>

        );
    }
}
