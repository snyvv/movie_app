import React from 'react';

function Food(props) {
  return <h2>I love { props.fav }</h2>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="Kimchi" />
      <Food fav="ramen" />
      <Food fav="sikhye" />
    </div>
  );
}

export default App;
