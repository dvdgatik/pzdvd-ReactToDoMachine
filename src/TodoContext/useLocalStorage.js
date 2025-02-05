import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialItem) {
  const [item, setItem] = useState(initialItem);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem("TODOS_V1");

        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialItem));
          parsedItem = initialItem;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    }, 3000);
  }, []);

  console.log("Item", item);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  // Si requieres retornar mas de dos elementos, hay que convertir el array en un objeto
  return {
    item,
    saveItem,
    isLoading,
    error,
  };
}

export { useLocalStorage };
