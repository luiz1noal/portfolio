import React, { useState } from 'react';
import './Home.css';

export const Home = () => {
  const [backgroundColor] = useState('#282c34');

  return (
    <section className='fundo' style={{ backgroundColor }}>
      <div>
        <h1>Luiz Henrique Santiago Noal</h1>
        <p>Desenvolvedor em formação.</p>
        <h2>Eu desenvolvo, Você navega</h2>
        <div className='imagen'>
          <img src="/imagens/pc.png" alt="" />
        </div>
      </div>
    </section>
  );
}
