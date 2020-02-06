import React from 'react';

const HolaMundo = () => {
  const hello = 'Hola Mundo';
  const isTrue = false;
  return (
      <div className="HolaMundo">
        <h1>{hello}</h1>
        <h2>Curso react</h2>

        {isTrue ? <h4> esto es verdadero</h4>: <h5>la variable es falsa</h5>}
        {isTrue && <h4> es verdadero</h4>}
      </div>
  );
};

export default HolaMundo;
