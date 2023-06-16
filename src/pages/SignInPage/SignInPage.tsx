import { SignInForm } from '../../views/SignInForm/SignInForm';
import signInImg from '../../assets/images/signin.png';
import './SignInPage.scss';

export const SignInPage: React.FC<{}> = ({ }) => {
  return (
    <div className='signin-page'>
      <div className='signin-page__image-container'>
        <img src={signInImg} alt='' />
      </div>
      <SignInForm />
    </div>
  );
};