import React, { Component } from 'react';
import Header from '../header/header';
import Button from './button/Button';
import ButtonCard from './button/ButtonCard';
import ButtonValue from './button/ButtonScreen';
import './calculator.css';

export default class App extends Component {
  btnValues = [
    ['AC', '+-', '%', '+'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '/'],
    [0, '.', '='],
  ];

  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <ButtonValue value="0" />
          <ButtonCard>
            {this.btnValues.flat().map((btn) => (
              <Button
                key={btn}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                OnClick={() => {
                  alert('lol');
                }}
              />

            ))}

          </ButtonCard>
        </div>

      </>

    );
  }
}
