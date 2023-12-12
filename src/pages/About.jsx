import display from '../assets/icons.svg#display';
import server from '../assets/icons.svg#server';

export default function About() {
  return (
    <>
      <h1 className="title">About me</h1>
      <div className="about">
        <p className="text">
          I am highly motivated and dedicated fullstack JavaScript developer
          seeking an opportunity to utilize my skills and contribute to the
          success of a dynamic tech company. With a strong foundation in both
          front-end and back-end development, I am eager to gain real-world
          experience and actively contribute to the growth of innovative
          projects.
        </p>
        <p className="text">
          Committed to continuously learning and staying updated with the latest
          trends in technology. Excellent problem-solving abilities with a
          strong attention to detail.
        </p>
      </div>
      <div className="directions">
        <h2 className="directions__title">What I`m Doing</h2>
        <ul className="directions__list">
          <li>
            <svg className="directions__icon" width={50} height={50}>
              <use href={display} width={50} height={50}></use>
            </svg>
            <div>
              <h3 className="directions__name">Front-end</h3>
              <p className="directions__text">
                Adaptive and responsive development using JS, React.js
              </p>
            </div>
          </li>
          <li>
            <svg className="directions__icon" width={50} height={50}>
              <use href={server} width={50} height={50}></use>
            </svg>
            <div>
              <h3 className="directions__name">Back-end</h3>
              <p className="directions__text">
                Back-end development using Node.js, MongoDB, Rest API
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="section">
        <h2 className="section__title">Skills</h2>
        <div className="skills__container">
          <ul className="skills__list">
            <li className="skills__item">Hmtl</li>
            <li className="skills__item">Css</li>
            <li className="skills__item">JavaScript</li>
            <li className="skills__item">React</li>
            <li className="skills__item">Node</li>
            <li className="skills__item">Sass</li>
          </ul>
          <ul className="skills__list">
            <li className="skills__item">Parcel</li>
            <li className="skills__item">WebPack</li>
            <li className="skills__item">Scrum</li>
            <li className="skills__item">Git</li>
            <li className="skills__item">VS Code</li>
            <li className="skills__item">X Code</li>
          </ul>
          <ul className="skills__list">
            <li className="skills__item">Honesty</li>
            <li className="skills__item">Friendliness</li>
            <li className="skills__item">Adaptability</li>
            <li className="skills__item">Flexibility</li>
            <li className="skills__item">Trainable</li>
          </ul>
          <ul className="skills__list">
            <li className="skills__item">Teamwork</li>
            <li className="skills__item">Communication</li>
            <li className="skills__item">Multitasking</li>
            <li className="skills__item">Confidence</li>
            <li className="skills__item">Perseverance</li>
          </ul>
        </div>
      </div>

      {/* <div className="reviews">
        <h2 className="reviews__title">Reviews</h2>
      </div> */}
    </>
  );
}
