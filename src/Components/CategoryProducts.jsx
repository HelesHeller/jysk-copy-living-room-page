import { useParams } from 'react-router-dom';
import './CategoryProducts.css';

const productsData = {
    "wardrobes": [
        { id: 1, name: "Диван для вітальні", description: "Зручний і стильний диван для будь-якої вітальні", price: 8000, image: "/src/assets/images/products/living-room-sofa.jpg" },
        { id: 2, name: "Кутовий диван", description: "Затишний кутовий диван для великої родини", price: 10000, image: "/src/assets/images/products/corner-sofa.jpg" },
        { id: 3, name: "Диван з підлокітниками", description: "Стильний диван з підлокітниками", price: 8500, image: "/src/assets/images/products/sofa-with-armrest.jpg" }
    ],
    "storage-furniture": [
        { id: 4, name: "Двомісний диван", description: "Ідеально підходить для невеликих просторів", price: 6000, image: "/src/assets/images/products/two-seat-sofa.jpg" },
        { id: 5, name: "Тримісний диван", description: "Комфортний диван для всієї родини", price: 8500, image: "/src/assets/images/products/three-seat-sofa.jpg" },
        { id: 6, name: "Диван-ліжко", description: "Функціональний диван, який перетворюється в ліжко", price: 9500, image: "/src/assets/images/products/sofa-bed.jpg" }
    ],
    "hallway-furniture": [
        { id: 7, name: "Кавовий столик", description: "Маленький столик для кави або чаю", price: 2000, image: "/src/assets/images/products/coffee-table.jpg" },
        { id: 8, name: "Журнальний столик", description: "Стильний столик для вітальні", price: 2500, image: "/src/assets/images/products/side-table.jpg" },
        { id: 9, name: "Консольний столик", description: "Тонкий столик для зберігання біля стіни", price: 3000, image: "/src/assets/images/products/console-table.jpg" }
    ],
    "laundry-accessories": [
        { id: 10, name: "Крісло", description: "Зручне крісло для відпочинку", price: 4000, image: "/src/assets/images/products/armchair.jpg" },
        { id: 11, name: "Пуф", description: "М'який пуф для додаткового комфорту", price: 1500, image: "/src/assets/images/products/ottoman.jpg" },
        { id: 12, name: "Розкладне крісло", description: "Крісло, яке можна розкласти для більшого комфорту", price: 5000, image: "/src/assets/images/products/recliner.jpg" }
    ],
    "storage": [
        { id: 13, name: "Книжкова шафа", description: "Шафа для зберігання книг та аксесуарів", price: 3000, image: "/src/assets/images/products/bookshelf.jpg" },
        { id: 14, name: "Комод", description: "Просторий комод для зберігання речей", price: 5000, image: "/src/assets/images/products/dresser.jpg" },
        { id: 15, name: "Полиця для стін", description: "Полиця для зберігання дрібниць", price: 1200, image: "/src/assets/images/products/wall-shelf.jpg" }
    ],
    "accessories": [
        { id: 16, name: "Декоративні подушки", description: "М'які подушки для прикраси вітальні", price: 800, image: "/src/assets/images/products/decorative-pillows.jpg" },
        { id: 17, name: "Килимок для вітальні", description: "М'який килимок для затишку в кімнаті", price: 3000, image: "/src/assets/images/products/living-room-rug.jpg" },
        { id: 18, name: "Свічки", description: "Набір ароматичних свічок", price: 600, image: "/src/assets/images/products/candles.jpg" }
    ],
    "lighting": [
        { id: 19, name: "Настільна лампа", description: "Лампа для додаткового освітлення", price: 1500, image: "/src/assets/images/products/table-lamp.jpg" },
        { id: 20, name: "Торшер", description: "Високий торшер для освітлення кімнати", price: 4000, image: "/src/assets/images/products/floor-lamp.jpg" },
        { id: 21, name: "Люстра", description: "Сучасна люстра для освітлення вітальні,", price: 2000, image: "/src/assets/images/products/chandelier.jpg" }
    ]
};


function CategoryProducts() {
    const { categoryName } = useParams();
    const products = productsData[categoryName] || [];

    return (
        <div className="category-products">
            <h1>Товары для категории: {categoryName}</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <h2>{product.name}</h2>
                        <p>Цена: {product.price} грн</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryProducts;
