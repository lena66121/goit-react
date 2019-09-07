import React from 'react';
import ReactDOM from 'react-dom';

const Product = props => (
  <div>
    <img src={props.imgUrl} alt={props.alt} />
    <h2>{props.name}</h2>
    <p>Price: {10}$</p>
    <button type="button">Add to cart</button>
  </div>
);

ReactDOM.render(
  <Product
  name="Tacos With Lime" 
  imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
  alt="Tacos With Lime"/>, 
  document.getElementById('root'));
