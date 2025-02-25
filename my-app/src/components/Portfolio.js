import React from 'react';
 
const Portfolio = () => {
    return (
        <div>
        <title>Lindsay Wilhelm's Portfolio</title>
        <link rel="stylesheet" href="PSstylesheet.css" />
        <header className="headerNav">
          <nav>
            <ul>
              <li><a href="Home.html">Home</a></li>
              <li><a href="About.html">About</a></li>
              <li><a href="Portfolio.html">Portfolio</a></li>
              <li><a href="Resume.html">Resume</a></li>
              <li><a href="Contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
        <article className="top-container">
          <h1>Lindsay Wilhelm</h1>
          <h4>Future Web Developer</h4>
        </article>
        <hr />
        <h3>Thanks for checking out my portfolio.</h3>
        <p>I currently do not have any relevant or live projects to put in this section <br />
          but as I work through York University's Full-Stack Web Development Certificate program, <br /> 
          I will have more to show in my portfolio.</p>
        <br />
        <p>Please enjoy some of my photography instead.</p>
        <main>
          <img src="images/edinburgh-photo.jpg" alt="Edinburgh Castle" />
          <img src="images/helsinki-photo.jpg" alt="Helsinki" />
          <img src="images/ireland-photo.jpg" alt="Cork, Ireland" />
          <br />
          <img src="images/moraine-photo.jpg" alt="Moraine Lake" />
          <img src="images/sweden-photo.jpg" alt="Malmo, Sweden" />
          <img src="images/washington-photo.jpg" alt="Washington, D.C." />
        </main>
        <hr />
        <br /><br />
        <footer className="footerNav">
          <nav>
            <ul>
              <li><a href="Home.html">Home</a></li>
              <li><a href="About.html">About</a></li>
              <li><a href="Portfolio.html">Portfolio</a></li>
              <li><a href="Resume.html">Resume</a></li>
              <li><a href="Contact.html">Contact</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  };
 
export default Portfolio;