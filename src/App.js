import React from 'react';
import Form from './Form';
import Container from './Container';
import Header from './Header';
import Result from './Result';

function App() {
  return (
    <>
    <Header 
    title = "Kalkulator walutowy"
    />
    <Container>
        <Form />
        <Result />
    </Container>
    </>
  );
};

export default App;
