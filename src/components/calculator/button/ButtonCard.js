import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
/* eslint-disable */

import './Button.css';

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="buttonBox">

        <Button name="AC" clickHandler={this.handleClick} />
        <Button name="+/-" clickHandler={this.handleClick} />
        <Button name="%" clickHandler={this.handleClick} />
        <Button name="÷" clickHandler={this.handleClick} orangee/>


        <Button name="7" clickHandler={this.handleClick} />
        <Button name="8" clickHandler={this.handleClick} />
        <Button name="9" clickHandler={this.handleClick} />
        <Button name="x" clickHandler={this.handleClick} orangee/>

        <Button name="4" clickHandler={this.handleClick} />
        <Button name="5" clickHandler={this.handleClick} />
        <Button name="6" clickHandler={this.handleClick} />
        <Button name="-" clickHandler={this.handleClick} orangee/>

        <Button name="1" clickHandler={this.handleClick} />
        <Button name="2" clickHandler={this.handleClick} />
        <Button name="3" clickHandler={this.handleClick} />
        <Button name="+" clickHandler={this.handleClick} orangee/>

        <Button name="0" clickHandler={this.handleClick} />
        <Button name="." clickHandler={this.handleClick} />
        <Button name="=" clickHandler={this.handleClick} equals/>

      </div>
    );
  }
}
