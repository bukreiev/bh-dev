import { Field, Form, Formik } from 'formik';
import axios from 'axios';

export default function ContactForm() {
  const handleSubmit = async values => {
    try {
      const response = await axios.post(
        'https://github.com/bukreiev/bh-serv',
        values
      );
      console.log(response.data); // Выводим ответ сервера в консоль
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <>
      <Formik
        className="form_section"
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={values => handleSubmit(values)} // Вызываем функцию handleSubmit при отправке формы
      >
        <Form className="form">
          <Field
            className="form__field"
            id="name"
            name="name"
            placeholder="John Brooklin"
          />
          <Field
            className="form__field"
            id="email"
            name="email"
            placeholder="J.Brooklin@gmail.com"
          />
          <textarea
            className="form__field"
            id="message"
            name="message"
            placeholder="Leave your message here"
            type="textarea"
          ></textarea>
          <button className="submit" type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}
