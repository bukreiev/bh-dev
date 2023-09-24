export default function About() {
  return (
    <>
      <h1 className="title">About me</h1>
      <div className="about">
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          maiores similique minus quidem voluptatem impedit deleniti illum natus
          adipisci totam. Eaque praesentium ipsa laboriosam obcaecati quod sed
          aspernatur enim voluptatibus?
        </p>
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          maiores similique minus quidem voluptatem impedit deleniti illum natus
          adipisci totam. Eaque praesentium ipsa laboriosam obcaecati quod sed
          aspernatur enim voluptatibus?
        </p>
      </div>
      <div className="directions">
        <h2 className="directions__title">What I`m Doing</h2>
        <ul className="directions__list">
          <li>
            <svg className="directions__icon" width={50} height={50}>
              <use
                href="/src/assets/icons.svg#display"
                width={50}
                height={50}
              ></use>
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
              <use
                href="/src/assets/icons.svg#server"
                width={50}
                height={50}
              ></use>
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
