import React from 'react';
 
const Resume = () => {
    return (
        <div>
        <title>Lindsay Wilhelm's Resume</title>
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
        <article className="resume-container">
          <h1>Lindsay Wilhelm</h1>
          <h4>Future Web Developer</h4>
        </article>
        <hr />
        <main>
          <h3>Education</h3>
          <h4>
            <li>York University Continuing Education</li>
          </h4>
          <ul>
            <li>Certificate in Full-Stack Web Development</li>
            <li>September 2020 - August 2021</li>
          </ul>
          <h4>
            <li>University of Guelph</li>
          </h4>
          <ul>
            <li>Bachelor of Arts, General</li>
            <li>September 2015 - April 2019</li>
          </ul>
          <br />
          <h3>Work Experience</h3>
          <h4>
            <li>Waitress at Sushi Cove</li>
          </h4>
          <ul>
            <li>August 2020 - Present</li>
            <p>Responsible for taking dine-in and take out orders, maintaining store cleanliness, and providing excellent customer service.</p>
          </ul>
          <h4>
            <li>Guest Services Agent at YWCA Banff Hotel</li>
          </h4>
          <ul>
            <li>September 2019 - December 2019</li>
            <p>Responsible for entering guest information into the computer, providing information about Banff and the surrounding area, and accurately processing transactions.</p>
          </ul>
        </main>
        <br />
        <br />
        <hr />
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
 
export default Resume;