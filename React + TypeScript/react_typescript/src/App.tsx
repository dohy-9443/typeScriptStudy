import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import './App.css';

let a :string = 'kim';

let box :JSX.Element = <div>qwerty</div>;

let box2 :JSX.IntrinsicElements['div'] = <div>asdfghhj</div>

const App = () => {

  const [ user, setUser ] = useState<string | number>('kim')

  return (
    <>
      <Reset />
      <div>
        {box}
        {box2}
        <h4>{a} 안녕하십니까</h4>
        <Profile name={'철수'} age={20}></Profile>
      </div>
    </>
  );
};

type ProfileType = {
  name : string,
  age : number
}

function Profile({name, age} :ProfileType) :JSX.Element{
  return (
    <DIV>{name}이고, 나이는 {age}입니다.</DIV>
  )
}

export default App;
const DIV = styled.div``;