import travolta from '../assets/travolta.gif';

export default function NotFound() {
  return (
    <>
      <div className="err">
        <h1 className="err__title">OOPS!</h1>
        <p className="err__text">John Travolta lose your page...</p>
        <img
          className="err__img"
          src={travolta}
          alt="error image"
          width={490}
          height={490}
        />
        <a className="err__link" href="https://bukreiev.github.io/bh-dev/">
          Go to homepage
        </a>
      </div>
    </>
  );
}
