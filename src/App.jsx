import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import CategoryProducts from './components/CategoryProducts';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CategoryPage />} />
                <Route path="/categories/:categoryName" element={<CategoryProducts />} />
            </Routes>
        </Router>
    );
}

export default App;
