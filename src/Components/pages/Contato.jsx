import React, { useState } from 'react';
import './Contato.css'

export const MeuContato = () => {
    const [backgroundColor] = useState('#282c34');
    return (
        <section className='contato' style={{ backgroundColor }}>
            <div>
                <h1>Meu Contato</h1>
                <p>Telefone: </p>
                <p>Email: luiz_noal@estudante.sesisenai.org.br</p>
            </div>
        </section>
    )
}