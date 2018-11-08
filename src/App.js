import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const recipes = ['Waffles', 'Omelette'];

const Recipe = () => (
    <li>Waffel</li>
);

const App = () => (
    <div>
      <h1>Recipes:</h1>
      <ul>
        <Recipe />
        <Recipe />
      </ul>
    </div>
);

export default App;
