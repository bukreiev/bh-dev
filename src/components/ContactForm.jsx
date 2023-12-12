import { Field, Form, Formik } from 'formik';
import axios from 'axios';

export default function ContactForm() {
  const handleSubmit = async values => {
    try {
      // const response = await axios.post(
      //   'https://bh-serv-3a73c9528832.herokuapp.com/send-email',
      //   values
      // );
      // const response = await axios.post(
      //   'http://localhost:8888/send-email',
      //   values
      // );
      const response = await axios.post('https://bh-serv.onrender.com', values);
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <>
      <Formik
        className="form_section"
        initialValues={{ name: '', email: '', message: '' }}
        onSubmit={values => handleSubmit(values)}
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
          <Field
            className="textarea"
            id="message"
            name="message"
            placeholder="Leave your message here"
            as="textarea"
          />
          <button className="submit" type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}
