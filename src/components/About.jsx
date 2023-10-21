import display from '../assets/icons.svg#display';
import server from '../assets/icons.svg#server';

export default function About() {
  return (
    <>
      <h1 className="title">About me</h1>
      <div className="about">
        <p className="text">
          I am highly motivated and dedicated junior fullstack JavaScript
          developer seeking an opportunity to utilize my skills and contribute
          to the success of a dynamic tech company. With a strong foundation in
          both front-end and back-end development, I am eager to gain real-world
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
                Adaptive and responsive development for all purposes
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
                Back-end development using Node.js
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="reviews">
        <h2 className="reviews__title">Reviews</h2>
      </div>
    </>
  );
}
