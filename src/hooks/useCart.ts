import { useEffect, useState } from "react";
import { ImageSourcePropType } from 'react-native'

type CartItem = {
  title: string;
  price: number;
  customizations: any;
  image: ImageSourcePropType;
};

let globalCart: CartItem | null = null;
let listeners: Function[] = [];

export default function useCart() {
  const [, setUpdate] = useState(0);

  function notify() {
    listeners.forEach((listener) => listener());
  }

  function addToCart(item: CartItem) {
    globalCart = item;
    notify();
  }

  function getCart() {
    return globalCart;
  }

  useEffect(() => {
    const listener = () => {
      setUpdate((prev) => prev + 1);
    };

    listeners.push(listener);

    return () => {
      listeners = listeners.filter(
        (item) => item !== listener
      );
    };
  }, []);

  return {
    addToCart,
    getCart,
  };
}