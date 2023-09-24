export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="me">
        <img
          className="me__avatar"
          src="/src/assets/happy-mem.png"
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
              <use
                href="/src/assets/icons.svg#mail"
                width={25}
                height={25}
                x={12.5}
                y={12}
              ></use>
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
              <use
                href="/src/assets/icons.svg#phone"
                width={25}
                height={25}
                x={12.5}
                y={12.5}
              ></use>
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
                href="/src/assets/icons.svg#calendar"
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
                href="/src/assets/icons.svg#location"
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
            <use
              href="/src/assets/icons.svg#github"
              width={35}
              height={35}
            ></use>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/bukreievh">
          <svg className="social__icon">
            <use
              href="/src/assets/icons.svg#linkedin"
              width={35}
              height={35}
            ></use>
          </svg>
        </a>
      </div>
    </aside>
  );
}
