import React, { useState } from 'react';
import './Habilidades.css'

export const MinhasHabilidades = () => {
      const [backgroundColor] = useState('#282c34');
    return (
        <section className='habilidades' style={{ backgroundColor }}>

            <h1>Minhas Habilidades</h1>
            <p></p>

        </section>
    )
}