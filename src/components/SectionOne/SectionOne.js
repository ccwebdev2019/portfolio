import React from "react";

export const SectionOne = () => {
  return (
    <div id='section1' className='sec1 container'>
      <header className='sec1__header text-center'>
        <h2>About Me</h2>
      </header>
      <p className='lead mb-5 l-height'>
        console.log('Hello World') Hey, thanks for visiting. So yes i am a Web
        Developer, building web applications is a skill that i have acquired
        through time. Translating a UI design into functional code, unit
        testing, functional testing, working solo, working with a team, pair
        programming, styling, updating existing templates are some skills that I
        use when building web applications.
      </p>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <div className='card' style={{ width: "100%", height: "100%" }}>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='fas fa-code' /> Front End
              </h5>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>React JS</li>
                <li>Redux JS</li>
                <li>Angular JS</li>
                <li>GraphQl</li>
                <li>Responsive Layout</li>
                <li>Webpack</li>
                <li>Gulp</li>
                <li>Grunt</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4'>
          <div className='card' style={{ width: "100%", height: "100%" }}>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='fas fa-server' /> Back End
              </h5>
              <ul>
                <li>Javascript</li>
                <li>Node JS</li>
                <li>Express JS</li>
                <li>Mongoose JS</li>
                <li>Routes</li>
                <li>Models</li>
                <li>Controllers</li>
                <li>Passport JS</li>
                <li>MongoDB</li>
                <li>Bcrypt</li>
                <li>GraphQL</li>
                <li>env</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-4'>
          <div className='card' style={{ width: "100%", height: "100%" }}>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='fas fa-tools' /> Dev Tools
              </h5>
              <ul>
                <li>VS Code Editor</li>
                <li>Terminal</li>
                <li>Git</li>
                <li>Github</li>
                <li>Inspector</li>
                <li>Debug</li>
                <li>Network tab</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
