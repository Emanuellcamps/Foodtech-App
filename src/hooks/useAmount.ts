import { useState } from "react";

type SelectedItems = {
   [key: string]: {
      quantity: number
      price: number
   }
}

export default function useAmount() {
   const [selectedItems, setSelectedItems] =
      useState<SelectedItems>({})

   function increment(name: string, price: number) {
      setSelectedItems((prev) => ({
         ...prev,
         [name]: {
            quantity: (prev[name]?.quantity || 0) + 1,
            price: price
         }
      }))
   }

   function decrement(name: string) {
      setSelectedItems((prev) => ({
         ...prev,
         [name]: {
            quantity:
               prev[name]?.quantity > 0
                  ? prev[name].quantity - 1
                  : 0,
            price: prev[name]?.price || 0
         }
      }))
   }

   return {
      selectedItems,
      increment,
      decrement
   }
}