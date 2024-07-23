

###  ¿Qué es React.js?

React JS, o simplemente React, es una biblioteca de
JavaScript desarrollada por Facebook. Se utiliza para construir
interfaces de usuario interactivas y eficientes para aplicaciones web.
Lo que hace que React sea único es su enfoque en la construcción de interfaces
de usuario mediante el uso de componentes reutilizables.

#### ¿Cómo Funciona React.js?
En lugar de trabajar directamente
con el DOM (Document Object Model), React introduce el
concepto de Virtual DOM. Cuando hay cambios en los datos de la aplicación,
React compara el Virtual DOM con el DOM actual y actualiza solo las partes que han cambiado,
en lugar de volver a renderizar toda la página. Esto mejora significativamente el rendimiento y la
eficiencia de la aplicación.

React también utiliza JSX, una sintaxis que permite escribir
la estructura de los componentes de manera similar a HTML dentro
de archivos JavaScript. Esta sintaxis facilita la creación y comprensión
de la interfaz de usuario.

Además, React sigue el principio de unidireccionalidad de datos,
lo que significa que el flujo de datos tiene una dirección única, facilitando
la gestión del estado de la aplicación y mejorando la predictibilidad del flujo de datos.

<h3> Crear y anidar componentes: </h3>
function MyButton() {
return (
<button>Soy un botón</button>
);
}
<h3>Ahora que has declarado MyButton, puedes anidarlo en otro componente: </h3>

export default function MyApp() {
return (
<div>
<MyButton />
</div>

<h3>Escribir marcado con JSX </h3>

La sintaxis de marcado que viste arriba se llama
JSX. Es totalmente opcional, pero la mayoría de los proyectos
de React usan JSX por la comodidad que ofrece. Todas las herramientas
que recomendamos para el desarrollo local son compatibles con JSX sin ningún tipo de configuración.

JSX es más estricto que HTML. Tienes que cerrar etiquetas
como <br />. Tu componente tampoco puede devolver múltiples etiquetas de JSX.
Debes envolverlas en un padre compartido, como <div>...</div> o en un envoltorio vacío <>...</>:

function AboutPage() {
return (
<>
<h1></h1>
<p>Hola.<br />¿Cómo vas?</p>
);
}

<h3>Añadir estilos </h3>

En React, especificas una clase de CSS con className. Funciona
de la misma forma que el atributo class de HTML:

<img className="avatar" />
Luego escribes las reglas CSS para esa clase en un archivo CSS aparte:

/* Esto va En El CSS */

.avatar {
border-radius: 50%;
}

<h3> Mostrar datos </h3>

JSX te permite poner marcado dentro de JavaScript. 
Las llaves te permiten «escapar de nuevo» hacia 
JavaScript de forma tal que puedas incrustar una variable 
de tu código y mostrársela al usuario. Por ejemplo, esto mostrará user.name:

return (
  <h1>
    {user.name}
  </h1>

<h3>Concatenación</h3>

Puedes también poner
expresiones más complejas dentro de llaves,
por ejemplo, concatenación de cadenas:

return (
<>
<h1>{user.name}</h1>
<img
className avatar
src={user.imageUrl}
alt={'Foto de' + user.name}
style={{
width: user.imageSize,
height: user.imageSize
}}

<h3> Renderizado condicional </h3>

En React, no hay una sintaxis especial para escribir condicionales. En cambio, usarás las 
mismas técnicas que usas al escribir código regular de 
JavaScript. Por ejemplo, puedes usar una sentencia if para incluir JSX condicionalmente:


<h5> Si prefieres un código más compacto, puedes utilizar el operador ?condicional. A diferencia de if, funciona dentro de JSX: </h5>

let content;
if (isLoggedIn) {
content = <AdminPanel />;
} else {
content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>

<h5> Si prefieres un código más compacto, puedes utilizar el operador ?condicional. A diferencia de if, funciona dentro de JSX:</h5>

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

<h5> Cuando no necesites la rama else, puedes también usar la sintaxis lógica &&, más breve: </h5>

<div>
  {isLoggedIn && <AdminPanel />}
</div>

<h3>Renderizado De Listas</h3>

Dependerás de funcionalidades de JavaScript como los bucles for y la función map() de
los arreglos para renderizar listas de componentes.
Por ejemplo, digamos que tienes un arreglo de productos:

const products = [
{ title: 'Col', id: 1 },
{ title: 'Ajo', id: 2 },
{ title: 'Manzana', id: 3 },
];

<H5> Dentro de tu componente, utiliza la función map() para transformar el arreglo de productos en un arreglo de elementos <li>: 
</h5>

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);

<h3>Responder  A Eventos</h3>

Puedes responder a eventos declarando funciones controladoras de eventos dentro de tus componentes:

function MyButton() {
function handleClick() {
alert('¡Me hiciste clic!');
}

return (
<button onClick={handleClick}>
Hazme clic
</button>
);
}

<h3>Actualizar Pantalla</h3>

A menudo, querrás que tu componente «recuerde» alguna información y la muestre. Por ejemplo,
quizá quieras contar el número de veces que hiciste clic en un botón. Para lograrlo, añade estado a tu componente.
Primero, importa useState de React:

import { useState } from 'react';

Ahora puedes declarar una variable de estado dentro de tu componente:

function MyButton() {
const [count, setCount] = useState(0);
// ...

<h3>El uso De hooks</h3>

Las funciones que comienzan con use se llaman Hooks. useState es un Hook nativo dentro de React. Puedes
encontrar otros Hooks nativos en la referencia de la API de React. También puedes escribir tus propios Hooks mediante la combinación de otros existentes.
Los Hooks son más restrictivos que las funciones regulares. Solo puedes llamar a
los Hooks en el primer nivel de tus componentes (u otros Hooks). Si quisieras utilizar useState
en una condicional o en un bucle, extrae un nuevo componente y ponlo ahí.}

import { useState } from 'react';

export default function MyApp() {
const [count, setCount] = useState(0);

function handleClick() {
setCount(count + 1);
return (


<div>
<h3>Contadores que se actualizan juntos</h3>

<MyButton count={count} onClick={handleClick} />
<MyButton count={count} onClick={handleClick} />
</div>
function MyButton({ count, onClick }) {
return (
<button onClick={onClick}>
Hiciste clic {count} veces
</button>

<h3> Ejemplo Funcional de lo anterior: </h3>

import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor actual: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;

