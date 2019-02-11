import React from "react";

export const SectionThree = () => {
  return (
    <div id='section3' className='sec3'>
      <div className='container'>
        <header className='sec3__header text-center'>
          <h2>Say Hello :)</h2>
        </header>
        <p className='lead mb-5'>
          Well there you have it, now that you know more about me feel free to
          contact me. I would like to learn more about the opportunities you are
          currently trying to fill. I can be reached either by phone{" "}
          <i className='fas fa-mobile-alt' />{" "}
          <span className='text-primary'>512-999-0000</span> or you can send me
          an email <i className='far fa-envelope-open' /> at{" "}
          <span className='text-primary'>carlos@example.com</span>
        </p>
        <div className='code__logo'>
          <span style={{ color: "#f0db4f" }}>
            <i className='fab fa-js' />
          </span>
          <span style={{ color: "#e34f26" }}>
            <i className='fab fa-html5' />
          </span>
          <span style={{ color: "darkblue" }}>
            <i className='fab fa-css3-alt' />
          </span>
          <span style={{ color: "pink" }}>
            <i className='fab fa-sass' />
          </span>
          <span style={{ color: "darkgreen" }}>
            <i className='fab fa-node' />
          </span>
          <span style={{ color: "darkred" }}>
            <i className='fab fa-angular' />
          </span>
          <span style={{ color: "lightsteelblue" }}>
            <i className='fab fa-react' />
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2575fc",
          height: "230px"
        }}
      >
        <p className='lead' style={{ color: "#fff", fontFamily: "Lobster" }}>
          Carlos Coello Full Stack Web Developer
        </p>
      </div>
    </div>
  );
};
