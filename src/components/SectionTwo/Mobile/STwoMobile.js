import React from "react";
import * as posts from "../../../images/blogposts.jpg";
import * as login from "../../../images/login.jpg";
import * as vue from "../../../images/vue.jpg";
import * as dicegame from "../../../images/dicegame.jpg";
import * as budget from "../../../images/budget.jpg";
import * as reactposts from "../../../images/reactposts.jpg";

export const STwoMobile = props => {
  return (
    <div id='section2' className='sec2 container'>
      <header className='sec2__header text-center'>
        <h2>Code Section</h2>
      </header>
      <div className='sec2__card'>
        <div className='card m-2' style={{ width: "24rem" }}>
          <img
            src={posts}
            className='card-img-top'
            alt='blog post web app built with angular and node js'
          />
          <div className='card-body'>
            <h5 className='card-title'>*Blog Post Web App*</h5>
            <small>Angular, Routing, Authentication, Services</small>
            <small>JWT, AuthGuards, Express, Schemas</small>
          </div>
          <div className='card-footer'>
            <a
              href='https://github.com/ccwebdev2019/angular-posts'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view Github
            </a>
            <a
              href='https://blog-aposts.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-success font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view in Browser
            </a>
          </div>
        </div>
        <div className='card m-2' style={{ width: "24rem" }}>
          <img
            src={login}
            className='card-img-top'
            alt='login web app built with react and node js'
          />
          <div className='card-body'>
            <h5 className='card-title'>*Login Web App*</h5>
            <small>React, React Router, Redux</small>
            <small>JWT, AuthGuards, Express, Schemas</small>
          </div>
          <div className='card-footer'>
            <a
              href='https://github.com/ccwebdev2019/react-login'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view Github
            </a>
            <a
              href='https://react-logincc.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-success font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view in Browser
            </a>
          </div>
        </div>
        <div className='card m-2' style={{ width: "24rem" }}>
          <img src={vue} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>*Vue Web App*</h5>
            <small>Vue, Vue Router, Vuex</small>
            <small>Bcrypt, Vue Router Guards, Express, Schemas</small>
          </div>
          <div className='card-footer'>
            <a
              href='https://github.com/ccwebdev2019/vue-todos'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view Github
            </a>
            <a
              href='https://vue-jstodos.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-success font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view in Browser
            </a>
          </div>
        </div>
        <div className='card m-2' style={{ width: "24rem" }}>
          <img src={dicegame} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>*Javascript Web App*</h5>
            <small>HMTL, CSS, Javascript</small>
            <small>DOM manipulation</small>
          </div>
          <div className='card-footer'>
            <a
              href='https://github.com/ccwebdev2019/dice-game'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view Github
            </a>
            <a
              href='https://ccwebdev2019.github.io/dice-game/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-success font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view in Browser
            </a>
          </div>
        </div>
        <div className='card m-2' style={{ width: "24rem" }}>
          <img src={budget} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>*Budget Web App*</h5>
            <small>HTML, CSS, Javascript</small>
            <small>Module Patter, DOM maniputalion</small>
          </div>
          <div className='card-footer'>
            <a
              href='https://github.com/ccwebdev2019/budget'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view Github
            </a>
            <a
              href=' https://ccwebdev2019.github.io/budget/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-success font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view in Browser
            </a>
          </div>
        </div>
        <div className='card m-2' style={{ width: "24rem" }}>
          <img src={reactposts} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>*React Redux Web App*</h5>
            <small>React, Redux, JSONPlaceholder</small>
            <small>HTML, CSS, Javascript, React Router Dom</small>
          </div>
          <div className='card-footer'>
            <a
              href='https://github.com/ccwebdev2019/react-posts'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view Github
            </a>
            <a
              href='https://react-postscc.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-success font-weight-bold'
              style={{ margin: ".5rem" }}
            >
              view in Browser
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
