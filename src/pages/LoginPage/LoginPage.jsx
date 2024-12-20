import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.introWrapper}>
        <div className={css.img}></div>
        <p className={css.text}>Finance Registry App</p>
      </div>
      <div className={css.formWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
