import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  // useLocalStorage hook'u ile hem state hem de localStorage yönetiliyor
  const [cart, setCart] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    // Sepete ürün ekle ve localStorage'a yaz
    const updatedCart = [...cart, item];
    setCart(updatedCart);
  };

  const removeItem = (index) => {
    // verilen itemi sepete ekleyin
    const newCard = cart.filter((item, fIndex) => fIndex !== index);
    setCart(newCard);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
