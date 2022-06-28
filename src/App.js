import Header from './components/header/header'
import Wrapper from './components/calculator/Wrapper'
import Button from './components/calculator/button/Button';
import ButtonCard from './components/calculator/button/ButtonCard';
import ButtonValue from './components/calculator/button/ButtonScreen';
import React, { Component } from 'react'






export default class App extends Component {

  btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  render() {

    return (
      <>
        <Header />
        <Wrapper>
          <ButtonValue value='0' />
          <ButtonCard>
            {this.btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn == '=' ? 'equals' : ''}
                  value={btn}
                  OnClick={() => {
                    console.log('button was clicked')
                  }}
                />

              )
            })}

          </ButtonCard>
        </Wrapper>

      </>

    );

  }
}
