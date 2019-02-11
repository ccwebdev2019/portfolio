import React from "react";

export const Menu = () => {
  return (
    <nav id='scroll' className='sticky-top navbar-light bg-light'>
      <ul className='nav nav-pills justify-content-center'>
        <li className='nav-item'>
          <a className='nav-link' href='#section0'>
            Welcome
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#section1'>
            About
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#section2'>
            Code
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#section3'>
            Say Hello
          </a>
        </li>
      </ul>
    </nav>
  );
};
