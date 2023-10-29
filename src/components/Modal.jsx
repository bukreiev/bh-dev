import close from '../assets/icons.svg#close';

// eslint-disable-next-line react/prop-types
export default function Modal({ active, setActive, children }) {
  return (
    <>
      <div
        className={active ? 'backdrop active' : 'backdrop'}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? 'modal active' : 'modal'}
          onClick={e => e.stopPropagation()}
        >
          {children}
          <button
            type="button"
            className="close__btn"
            onClick={() => setActive(false)}
          >
            <svg className="close__icon">
              <use href={close} width={35} height={35}></use>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
