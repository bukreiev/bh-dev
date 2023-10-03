import avatar from '../assets/happy-mem.png';
import mail from '../assets/icons.svg#mail';
import phone from '../assets/icons.svg#phone';
import calendar from '../assets/icons.svg#calendar';
import location from '../assets/icons.svg#location';
import github from '../assets/icons.svg#github';
import linkedin from '../assets/icons.svg#linkedin';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="me">
        <img
          className="me__avatar"
          src={avatar}
          alt="avatar"
          width={200}
          height={200}
        />
        <h2 className="me__title">Hennadii Bukreiev</h2>
        <p className="me__position">Fullstack Web Developer</p>
      </div>
      <div className="contacts">
        <ul className="contacts__list">
          <li>
            <svg className="contacts__icon">
              <use href={mail} width={25} height={25} x={12.5} y={12}></use>
            </svg>
            <div>
              <p className="contacts__label">EMAIL</p>
              <a className="contacts__link" href="mailto:bukreiev@ukr.net">
                bukreiev@ukr.net
              </a>
            </div>
          </li>
          <li>
            <svg className="contacts__icon">
              <use href={phone} width={25} height={25} x={12.5} y={12.5}></use>
            </svg>
            <div>
              <p className="contacts__label">PHONE</p>
              <a className="contacts__link" href="tel:+380637432666">
                +38 063 743 26 66
              </a>
            </div>
          </li>
          <li>
            <svg className="contacts__icon">
              <use
                href={calendar}
                width={25}
                height={25}
                x={12.5}
                y={12.5}
              ></use>
            </svg>
            <div>
              <p className="contacts__label">BIRTHDAY</p>
              <p className="contacts__text">22 July 1995</p>
            </div>
          </li>
          <li>
            <svg className="contacts__icon">
              <use
                href={location}
                width={25}
                height={25}
                x={12.5}
                y={12.5}
              ></use>
            </svg>
            <div>
              <p className="contacts__label">LOCATION</p>
              <p className="contacts__text">Khmelnytskiy, Ukraine</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="social">
        <a href="https://github.com/bukreiev">
          <svg className="social__icon">
            <use href={github} width={35} height={35}></use>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/bukreievh">
          <svg className="social__icon">
            <use href={linkedin} width={35} height={35}></use>
          </svg>
        </a>
      </div>
    </aside>
  );
}
