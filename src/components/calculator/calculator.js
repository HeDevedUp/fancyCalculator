/* eslint-disable */
import React, { Component } from 'react';
import Header from '../header/header';
import Button from './button/ButtonCard';
import ButtonValue from './button/ButtonScreen';
import './calculator.css';
import calculate from './logic/calculate';

export default class App extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  }

  btnValues = [
    ['AC', '+/-', '%', '+'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '/'],
    [0, '.', '='],
  ];

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <ButtonValue value={this.state.next || this.state.total || '0'} />
          <Button
            clickHandler={this.handleClick}
          />
        </div>

      </>

    );
  }
}
