import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <>
      <h1 className="title">Contact</h1>
      <div className="section">
        <div className="map">
          <iframe
            className="map__frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83069.26379579012!2d26.912858003477375!3d49.41052267409877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4732064344bb178b%3A0xd9f30b3b24d9c964!2z0KXQvNC10LvRjNC90LjRhtGM0LrQuNC5LCDQpdC80LXQu9GM0L3QuNGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAyOTAwMA!5e0!3m2!1suk!2sua!4v1697619305369!5m2!1suk!2sua"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <h2 className="section__title">Contact form</h2>
        <ContactForm />
      </div>
    </>
  );
}
