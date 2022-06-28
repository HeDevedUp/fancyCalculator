import Header from './components/header/header'
import Wrapper from './components/calculator/Wrapper'
// import Screen from './components/calculator/Screen'
import Button from './components/calculator/button/Button';
import ButtonCard from './components/calculator/button/ButtonCard';
import ButtonValue from './components/calculator/button/ButtonScreen';


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <ButtonValue value='0' />
        <ButtonCard>
          {btnValues.flat().map((btn, i) => {
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

export default App;
