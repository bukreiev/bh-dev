import webstudio from '../../assets/webstudio.png';
import icecream from '../../assets/icecream.png';
import filmoteka from '../../assets/filmoteka.png';
import taskpro from '../../assets/taskpro.png';

export default function Portfolio() {
  return (
    <>
      <h1 className="title">Portfolio</h1>
      <div className="projects">
        <ul className="projects__list">
          <li className="projects__item">
            <a className="projects__link" href="">
              <img className="projects__img" src={webstudio} alt="project" />
              <h3 className="projects__title">WebStudio</h3>
              <p className="projects__text">
                Website development for web studio
              </p>
            </a>
          </li>
          <li className="projects__item">
            <a className="projects__link" href="">
              <img className="projects__img" src={icecream} alt="project" />
              <h3 className="projects__title">Ice Cream</h3>
              <p className="projects__text">
                Website development for ice cream shop
              </p>
            </a>
          </li>
          <li className="projects__item">
            <a className="projects__link" href="">
              <img className="projects__img" src={filmoteka} alt="project" />
              <h3 className="projects__title">Filmoteka</h3>
              <p className="projects__text">Search movies app</p>
            </a>
          </li>
          <li className="projects__item">
            <a className="projects__link" href="">
              <img className="projects__img" src={taskpro} alt="project" />
              <h3 className="projects__title">TaskPro</h3>
              <p className="projects__text">App for planning tasks</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
