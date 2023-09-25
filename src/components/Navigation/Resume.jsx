/* eslint-disable react/no-unescaped-entities */
export default function Resume() {
  return (
    <>
      <h1 className="title">Resume</h1>
      <div className="section">
        <h2 className="section__title">Education</h2>
        <div className="timeline">
          <div className="timeline__container right">
            <div className="timeline__content">
              <h3 className="timeline__title">GoIT school</h3>
              <p className="timeline__period">2021-2023</p>
              <p className="timeline__text">Fullstack Web Developer</p>
            </div>
          </div>
          <div className="timeline__container right">
            <div className="timeline__content">
              <h3 className="timeline__title">
                Vasyl' Stus Donetsk National University
              </h3>
              <p className="timeline__period">2018-2021</p>
              <p className="timeline__text">Bachelor's degree of Law</p>
            </div>
          </div>
          <div className="timeline__container right">
            <div className="timeline__content">
              <h3 className="timeline__title">
                Vasyl' Stus Donetsk National University
              </h3>
              <p className="timeline__period">2019-2020</p>
              <p className="timeline__text">
                Master's degree of Public management and administration
              </p>
            </div>
          </div>
          <div className="timeline__container right">
            <div className="timeline__content">
              <h3 className="timeline__title">
                Taras Shevchenko National University of Kyiv
              </h3>
              <p className="timeline__period">2012-2017</p>
              <p className="timeline__text">
                Master's degree of Finance, banking and insurance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          <div className="timeline__container right">
            <div className="timeline__content">
              <h3 className="timeline__title">Web development freelance</h3>
              <p className="timeline__period">2023 - up to now</p>
              <p className="timeline__text">
                Adaptive and responsive development, back-end development
              </p>
            </div>
          </div>
          <div className="timeline__container right">
            <div className="timeline__content">
              <h3 className="timeline__title">
                CFO at State-financed organization
              </h3>
              <p className="timeline__period">2017-up to now</p>
              <p className="timeline__text">
                Reporting, planning, purchasing, salary
              </p>
            </div>
          </div>
          <div className="timeline__container right">
            <div className="timeline__content">
              <h3 className="timeline__title">Photo freelance</h3>
              <p className="timeline__period">2013-2017</p>
              <p className="timeline__text">
                Photoshoots, photo retouching, Color correction
              </p>
            </div>
          </div>
        </div>
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
            <li className="skills__item">Parcel</li>
            <li className="skills__item">Sass</li>
          </ul>
          <ul className="skills__list">
            <li className="skills__item">WebPack</li>
            <li className="skills__item">Scrum</li>
            <li className="skills__item">Git</li>
            <li className="skills__item">VS Code</li>
            <li className="skills__item">X Code</li>
          </ul>
          <ul className="skills__list">
            <li className="skills__item">Friendliness</li>
            <li className="skills__item">Honesty</li>
            <li className="skills__item">Adaptability</li>
            <li className="skills__item">Teamwork</li>
            <li className="skills__item">Flexibility</li>
            <li className="skills__item">Trainable</li>
          </ul>
          <ul className="skills__list">
            <li className="skills__item">Communication</li>
            <li className="skills__item">Multitasking</li>
            <li className="skills__item">Confidence</li>
            <li className="skills__item">Perseverance</li>
          </ul>
        </div>
      </div>
    </>
  );
}
