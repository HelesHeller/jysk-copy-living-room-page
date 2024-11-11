
import './Cart.css';

const Cart = ({ cartItems }) => (
    <div className="cart">
        <h2>Кошик</h2>
        {cartItems.length === 0 ? (
            <p>Кошик порожній</p>
        ) : (
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price} грн
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default Cart;
