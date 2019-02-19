import React from "react";
import Scrollspy from "react-scrollspy";

export const Menu = () => {
  return (
    <nav id='scroll' className='sticky-top navbar-light bg-light'>
      <Scrollspy
        className='nav nav-pills justify-content-center'
        items={["section0", "section1", "section2", "section3"]}
        currentClassName='is-current'
      >
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
      </Scrollspy>
    </nav>
  );
};
