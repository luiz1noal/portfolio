import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Components/pages/Layouts';
import { Home } from './Components/pages/Home';
import { SobreMim } from './Components/pages/sobre';
import { Projeto } from './Components/pages/Projeto';
import { MeuContato } from './Components/pages/Contato';
import { MeuRodape } from './Components/pages/Rodape';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='Projeto' element={<Projeto />} />
            <Route path='sobre' element={<SobreMim />} />
            <Route path='Contato' element={<MeuContato />} />
            <Route path='*' element={<h1>404 not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <MeuRodape />
    </div>
  );
}

export default App;
