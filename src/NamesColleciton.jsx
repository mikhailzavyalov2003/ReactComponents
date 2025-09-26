import React from 'react';


export default function NamesCollection() {
  return React.createElement("ul", { }, [
    React.createElement("li", { key: 1 }, "Адрей"),
    React.createElement("li", { key: 2 }, "Миша"),
    React.createElement("li", { key: 3 }, "Сергей"),
    <li key="4">Георгий</li>
  ]);
}
