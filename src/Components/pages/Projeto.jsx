import React, { useState } from 'react';
import './Projeto.css'

export const Projeto = () => {
    const [backgroundColor] = useState('#282c34');
    return (
        <div className="projeto" style={{ backgroundColor }}>
            <div>
                <h1>Portfólio</h1>
                <p>
                    Este site foi desenvolvido para apresentar minhas habilidades como desenvolvedor.<br />
                    Construído com React, React Router e estilizado com CSS puro. <br />
                    Totalmente responsivo e hospedado gratuitamente.
                </p>
                <a
                    href="https://github.com/luiz1noal/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >Link Github
                </a>
                <div className='imagen'>
                    <h1>Imagem do prototipo</h1>
                    <img src="/imagens/prototipo-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}