import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

const phoneRegex = /(?:\+38)?0\d{9}/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

function App() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
      },
      onSubmit: (values) => {
        console.log('onSubmit', values);
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .required('This field is required')
          .min(3, 'Should have at least 3 characters'),
        phone: Yup.string()
          .matches(phoneRegex, 'The phone number must start with 0 or +380')
          .required('This field is required'),
        email: Yup.string()
          .matches(emailRegex, 'Email is invalid')
          .required('This field is required'),
        password: Yup.string()
          .matches(
            passwordRegex,
            'Password must contain at least 8 symbols and one digit'
          )
          .required('This field is required'),
      }),
      // validate: (values) => {
      //   const errors = {};
      //   if (!values.username) {
      //     errors.username = 'This field is required';
      //   } else if (values.username.length < 3) {
      //     errors.username = 'Should have at least 3 characters';
      //   }
      //   if (!values.phone) {
      //     errors.phone = 'This field is required';
      //   } else if (!/(?:\+38)?0\d{9}/.test(values.phone)) {
      //     errors.phone = 'The phone number must start with 0 or +380';
      //   }
      //   if (!values.email) {
      //     errors.email = 'This field is required';
      //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      //     errors.email = 'Email is invalid';
      //   }
      //   if (!values.password) {
      //     errors.password = 'This field is required';
      //   } else if (!/^(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(values.password)) {
      //     errors.password =
      //       'Password must contain at least 8 symbols and one digit';
      //   }
      //   return errors;
      // },
    });
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Create Account</h1>
        <div className="form__field">
          <label className="from__label" htmlFor="username">
            Username:
          </label>
          <input
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            id="username"
            name="username"
            type="text"
            placeholder="Enter your Name"
            className="form__input"
          />
          <div className="error">
            {errors.username && touched.username && errors.username}
          </div>
        </div>
        <div className="form__field">
          <label className="from__label" htmlFor="surname">
            Surname:
          </label>
          <input
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            id="surname"
            name="surname"
            type="text"
            placeholder="Enter your Surname"
            className="form__input"
          />
        </div>
        <div className="form__field">
          <label className="from__label" htmlFor="phone">
            Phone number:
          </label>
          <input
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            className="form__input"
          />
          <div className="error">
            {errors.phone && touched.phone && errors.phone}
          </div>
        </div>
        <div className="form__field">
          <label className="from__label" htmlFor="email">
            Email:
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            className="form__input"
          />
          <div className="error">
            {errors.email && touched.email && errors.email}
          </div>
        </div>
        <div className="form__field">
          <label className="from__label" htmlFor="password">
            Password:
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            className="form__input"
          />
          <div className="error">
            {errors.password && touched.password && errors.password}
          </div>
        </div>
        <div className="form__field">
          <button className="form__button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
