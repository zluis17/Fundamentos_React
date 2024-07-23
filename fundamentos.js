function MyButton() {
  return (
    <button>Soy un botón</button>
  );
}

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

function AboutPage() {
return (
<>
<h1></h1>
<p>Hola.<br />¿Cómo vas?</p>
);
}

return (
  <h1>
    {user.name}
  </h1>


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


  <div>
    {isLoggedIn ? (
      <AdminPanel />
    ) : (
      <LoginForm />
    )}
  </div>

  <div>
    {isLoggedIn && <AdminPanel />}
  </div>


  const products = [
  { title: 'Col', id: 1 },
  { title: 'Ajo', id: 2 },
  { title: 'Manzana', id: 3 },
  ];


  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );


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

import { useState } from 'react';

////////////////
function MyButton() {
const [count, setCount] = useState(0);
// ...


import { useState } from 'react';

export default function MyApp() {
const [count, setCount] = useState(0);

function handleClick() {
setCount(count + 1);
return (


<MyButton count={count} onClick={handleClick} />
<MyButton count={count} onClick={handleClick} />
</div>
function MyButton({ count, onClick }) {
return (
<button onClick={onClick}>
Hiciste clic {count} veces
</button>