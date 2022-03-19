import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Sobre from './Pages/Sobre';

export default function App() {
    return (
        <BrowserRouter>
            <div className="application">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="produtos">Produtos</Link>
                        </li>
                        <li>
                            <Link to="contato">Contato</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route index path="produtos" element={<Produtos />} />
                    <Route path="contato" element={<Contato />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


function Produto() {
    return <div>Produto código</div>
}