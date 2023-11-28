import React, { useState, useEffect, useRef } from "react";

// Dado un texto cuenta la frecuencia de palabras en él.
export const countWords = (text) => {
  const words = text.toLowerCase().match(/\w+/g);
  const count = {};

  for (let i = 0; i < words.length; i++) {
    if (count[words[i]] === undefined) {
      count[words[i]] = 1;
    } else {
      count[words[i]]++;
    }
  }

  return count;
};

//Escribe el el cuerpo de la funcion helloProperties(obj) y devuelve un array que contiene todas sus proiedades con el prefijo "Hello";
export const helloProperties = (obj) => {
  let array = [];
  for (let key in obj) {
    array.push("Hello " + key);
  }
  return array;
};

// Dada una matriz de números y un objetivo, encuentra dos números cuya suma sea igual al objetivo.
export const findTwoSum = (nums, target) => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return null;
};

// Dada una cadena, determina si es un palíndromo.
export const isPalindrome = (argument) => {
  const cleanSentence = argument.toLowerCase().replace(/[^a-z]/g, "");
  const reversedSentence = cleanSentence.split("").reverse().join("");
  return cleanSentence === reversedSentence;
};

// Dada una matriz de objetos, ordénalos en función de una propiedad específica.
export const sortByProperty = (arr, prop) => {
  return arr.sort((a, b) => a[prop] - b[prop]);
};

// Dada una matriz de objetos, ordénalos en función de una propiedad específica.
export const sortByLength = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};

// Dada una matriz de números donde todos los elementos aparecen dos veces, excepto uno. Encuentra el número único. Utiliza XOR.
export const findUniqueNumber = (nums) => {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
};

// Dada una matriz de números, encuentra si existe algún subconjunto cuya suma sea igual a cero.
export const hasZeroSumSubset = (nums) => {
  const set = new Set();
  let sum = 0;

  for (const num of nums) {
    set.add(sum);
    sum += num;

    if (set.has(sum) || num === 0) {
      return true;
    }
  }

  return false;
};

// Crea un botón en React que haga focus sobre un input de texto al hacer click en él.
export const InputWithfocusButton = () => {
  const inputRef = useRef(null);
  const focusOnButtonClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusOnButtonClick}>Focus the input</button>
    </>
  );
};

// Crea un temporizador en React que cuente hacia atrás desde un número dado.
const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div>
      <p>Tiempo restante: {time} segundos</p>
    </div>
  );
};

const App = () => {
  return <Timer initialTime={60} />;
};

export default App;
