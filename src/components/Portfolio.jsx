import { useState } from 'react';

import webstudio from '../assets/webstudio.png';
import icecream from '../assets/icecream.png';
import filmoteka from '../assets/filmoteka.png';
import taskpro from '../assets/taskpro.png';
import Modal from './Modal';

import github from '../assets/icons.svg#github';
import live from '../assets/icons.svg#earth';

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClickCard = card => {
    setSelectedCard(card);
    setModalOpen(true);
    window.onscroll = function () {
      return false;
    };
  };
  return (
    <>
      <h1 className="title">Portfolio</h1>
      <div className="projects">
        <ul className="projects__list">
          {/* proj1 */}
          <li
            className="projects__item"
            onClick={() =>
              handleClickCard({
                title: 'WebStudio',
                image: webstudio,
                desription:
                  'WebStudio individual project. Adaptive and responsive design developing, using HTML, CSS and JS.  The project is written using DOM technology using SASS. Re-developed by React.js using Vite.',
                link: 'https://bukreiev.github.io/webstudio-project/',
                git: 'https://github.com/bukreiev/webstudio-project',
                backend: '',
              })
            }
          >
            <img className="projects__img" src={webstudio} alt="project" />
            <h3 className="projects__title">WebStudio</h3>
            <p className="projects__text">Website development for web studio</p>
          </li>
          {/* proj2 */}
          <li
            className="projects__item"
            onClick={() =>
              handleClickCard({
                title: 'Ice Cream',
                image: icecream,
                desription:
                  'IceCream shop team project. Adaptive and responsive design developing, using HTML, CSS and JS. The project is assembled using Parcel. I had a developer role. Part of my job was to create the hero and header section. The website has an online order form where you can view the menu and place an order so you do not waste your time in line.',
                link: 'https://hayhelv.github.io/project-ice-cream/',
                git: 'https://github.com/hayhelv/project-ice-cream',
                backend: '',
              })
            }
          >
            <img className="projects__img" src={icecream} alt="project" />
            <h3 className="projects__title">Ice Cream</h3>
            <p className="projects__text">
              Website development for ice cream shop
            </p>
          </li>
          {/* proj3 */}
          <li
            className="projects__item"
            onClick={() =>
              handleClickCard({
                title: 'Filmoteka',
                image: filmoteka,
                desription:
                  'Filmoteka app. Adaptive and responsive design developing, using HTML, CSS and JS. Team work. The project is assembled using Parcel. I had a developer role. We can see rating movies, opening modal windows, use filter option.',
                link: 'https://anastasiiakor.github.io/JS-Team-Project-Filmoteka/',
                git: 'https://github.com/AnastasiiaKor/JS-Team-Project-Filmoteka/tree/main',
                backend: '',
              })
            }
          >
            <img className="projects__img" src={filmoteka} alt="project" />
            <h3 className="projects__title">Filmoteka</h3>
            <p className="projects__text">Search movies app</p>
          </li>
          {/* proj4 */}
          <li
            className="projects__item"
            onClick={() =>
              handleClickCard({
                title: 'TaskPro',
                image: taskpro,
                desription:
                  'TaskPro App. Adaptive and responsive design developing, using React.js for "Front" and Node.js for "Back". Team work for develop analogue of Trello. Possible to add, remove, change tasks, boards, columns. My role on this project was backend. Also I wrote Swagger.',
                link: 'https://davydiukdmytro.github.io/TaskPro/',
                git: 'https://github.com/DavydiukDmytro/TaskPro',
                backend: 'https://github.com/DavydiukDmytro/TaskProBack',
              })
            }
          >
            <img className="projects__img" src={taskpro} alt="project" />
            <h3 className="projects__title">TaskPro</h3>
            <p className="projects__text">App for planning tasks</p>
          </li>
        </ul>
      </div>
      <Modal active={modalOpen} setActive={setModalOpen}>
        {selectedCard && (
          <>
            <img
              className="modal__image"
              src={selectedCard.image}
              alt="project"
            />
            <div className="modal__container">
              <h2 className="modal__title">{selectedCard.title}</h2>
              <p className="modal__text">{selectedCard.desription}</p>
              <a className="modal__link" href={selectedCard.link}>
                <svg className="link__icon">
                  <use href={live} width={35} height={35}></use>
                </svg>
                {selectedCard.title} (Live page)
              </a>
              <a className="modal__git" href={selectedCard.git}>
                <svg className="link__icon">
                  <use href={github} width={35} height={35}></use>
                </svg>
                Project code on GitHub
              </a>
              {selectedCard.backend ? (
                <a className="modal__backend" href={selectedCard.backend}>
                  <svg className="link__icon">
                    <use href={github} width={35} height={35}></use>
                  </svg>
                  Project code on GitHub (Backend)
                </a>
              ) : (
                ''
              )}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
