import { Link } from 'react-router-dom';
import './CategoryPage.css';

const categories = [
    { name: "Усі софи", path: "wardrobes", image: "/src/assets/images/categories/sofa.jpg" },
    { name: "2-місні", path: "storage-furniture", image: "/src/assets/images/categories/two-seat-sofa.jpg" },
    { name: "3-місні", path: "hallway-furniture", image: "/src/assets/images/categories/three-seat-sofa.jpg" },
    { name: "Кутові софи", path: "hallway-furniture", image: "/src/assets/images/categories/corner-sofa.jpg" },
    { name: "Софа-ліжка", path: "hallway-furniture", image: "/src/assets/images/categories/sofa-bed.jpg" },
    { name: "Ліжка-кушетки", path: "laundry-accessories", image: "/src/assets/images/categories/daybed.jpg" },
    { name: "Крісла", path: "laundry-accessories", image: "/src/assets/images/categories/armchair.jpg" },
    { name: "Пуфи", path: "laundry-accessories", image: "/src/assets/images/categories/ottoman.jpg" },
    { name: "Кавові столики", path: "laundry-accessories", image: "/src/assets/images/categories/coffee-table.jpg" },
    { name: "Столики", path: "laundry-accessories", image: "/src/assets/images/categories/side-table.jpg" },
    { name: "Тумби під телевізор", path: "laundry-accessories", image: "/src/assets/images/categories/tv-stand.jpg" },
    { name: "Буфети та серванти", path: "laundry-accessories", image: "/src/assets/images/categories/cabinet.jpg" },
    { name: "Комоди", path: "laundry-accessories", image: "/src/assets/images/categories/dresser.jpg" },
    { name: "Книжкові шафи та перегородки", path: "laundry-accessories", image: "/src/assets/images/categories/bookshelf.jpg" },
    { name: "Консольні столики", path: "laundry-accessories", image: "/src/assets/images/categories/console-table.jpg" },
    { name: "Полицi", path: "laundry-accessories", image: "/src/assets/images/categories/shelf.jpg" }
];


function CategoryPage() {
    return (
        <div className="category-page">
            <h1>Зберігання і підкатегорії</h1>
            <div className="category-list">
                {categories.map((category) => (
                    <Link key={category.path} to={`/categories/${category.path}`} className="category-item">
                        <h2>{category.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
