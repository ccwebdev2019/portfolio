import React from "react";
import * as posts from "../../../images/blogposts.jpg";
import * as login from "../../../images/login.jpg";
import * as vue from "../../../images/vue.jpg";
import * as dicegame from "../../../images/dicegame.jpg";
import * as budget from "../../../images/budget.jpg";
import * as reactposts from "../../../images/reactposts.jpg";

export const STwoNonMobile = props => {
  return (
    <div id='section2' className='sec2 container'>
      <header className='sec2__header text-center'>
        <h2>Code Section</h2>
      </header>
      <div className='sec2__card'>
        <div className='sec2__card-div'>
          <img src={posts} alt='blog posts build with angular and node js' />
          <div className='sec2__card-div-overlay'>
            <h4 style={{ color: "#fff" }}>*Blog Post Web App*</h4>
            <small style={{ color: "#fff" }}>
              Angular, Routing, Authentication, Services
            </small>
            <small style={{ color: "#fff" }}>
              JWT, AuthGuards, Express, Schemas
            </small>
            <div>
              <a
                href='https://github.com/ccwebdev2019/angular-posts'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view Github
              </a>
              <a
                href='https://blog-aposts.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-light font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view in Browser
              </a>
            </div>
          </div>
        </div>
        <div className='sec2__card-div'>
          <img src={login} alt='login web app built with react and node js' />
          <div className='sec2__card-div-overlay'>
            <h4 style={{ color: "#fff" }}>*Login Web App*</h4>
            <small style={{ color: "#fff" }}>React, React Router, Redux</small>
            <small style={{ color: "#fff" }}>
              JWT, AuthGuards, Express, Schemas
            </small>
            <div>
              <a
                href='https://github.com/ccwebdev2019/react-login'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view Github
              </a>
              <a
                href='https://react-logincc.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-light font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view in Browser
              </a>
            </div>
          </div>
        </div>
        <div className='sec2__card-div'>
          <img src={vue} alt='Todo web app built with vue and node js' />
          <div className='sec2__card-div-overlay'>
            <h4 style={{ color: "#fff" }}>*Vue Web App*</h4>
            <small style={{ color: "#fff" }}>Vue, Vue Router, Vuex</small>
            <small style={{ color: "#fff" }}>
              Bcrypt, Vue Router Guards, Express, Schemas
            </small>
            <div>
              <a
                href='https://github.com/ccwebdev2019/vue-todos'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view Github
              </a>
              <a
                href='https://vue-jstodos.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-light font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view in Browser
              </a>
            </div>
          </div>
        </div>
        <div className='sec2__card-div'>
          <img src={dicegame} alt='Dice game web app built with javascript' />
          <div className='sec2__card-div-overlay'>
            <h4 style={{ color: "#fff" }}>*Javascript Web App*</h4>
            <small style={{ color: "#fff" }}>HMTL, CSS, Javascript</small>
            <small style={{ color: "#fff" }}>DOM manipulation</small>
            <div>
              <a
                href='https://github.com/ccwebdev2019/dice-game'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view Github
              </a>
              <a
                href='https://ccwebdev2019.github.io/dice-game/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-light font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view in Browser
              </a>
            </div>
          </div>
        </div>
        <div className='sec2__card-div'>
          <img src={budget} alt='Budget web app built with javascript' />
          <div className='sec2__card-div-overlay'>
            <h4 style={{ color: "#fff" }}>*Budget Web App*</h4>
            <small style={{ color: "#fff" }}>HTML, CSS, Javascript</small>
            <small style={{ color: "#fff" }}>
              Module Patter, DOM maniputalion
            </small>
            <div>
              <a
                href='https://github.com/ccwebdev2019/budget'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view Github
              </a>
              <a
                href=' https://ccwebdev2019.github.io/budget/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-light font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view in Browser
              </a>
            </div>
          </div>
        </div>
        <div className='sec2__card-div'>
          <img
            src={reactposts}
            alt='Blog Post web app built with react redux'
          />
          <div className='sec2__card-div-overlay'>
            <h4 style={{ color: "#fff" }}>*React Redux Web App*</h4>
            <small style={{ color: "#fff" }}>
              React, Redux, JSONPlaceholder
            </small>
            <small style={{ color: "#fff" }}>
              HTML, CSS, Javascript, React Router Dom
            </small>
            <div>
              <a
                href='https://github.com/ccwebdev2019/react-posts'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view Github
              </a>
              <a
                href='https://react-postscc.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-light font-weight-bold'
                style={{ margin: ".5rem" }}
              >
                view in Browser
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
