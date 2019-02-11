import React from "react";

export const Welcome = () => {
  return (
    <div id='section0' className='sec0'>
      <header className='sec0__header px-3'>
        <h1>Hello, I'm Carlos Coello</h1>
        <h2>a Full Stack web developer :)</h2>
        <p className='lead'>building the web through code!</p>
      </header>
      <i className='fas fa-7x fa-laptop-code' />
      <a href='#section1' className='nav-link sec0__cta'>
        Get Started
      </a>
    </div>
  );
};
