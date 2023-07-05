import { SignInForm } from '../../views/SignInForm/SignInForm';
import signInImg from '../../assets/images/signin.png';
import './SignInPage.scss';
import { PageHeader } from '../../components/PageHeader';
import { useTranslation } from 'react-i18next';

export const SignInPage: React.FC<{}> = ({ }) => {
  const { t } = useTranslation();
  return (
    <div className='signin-page'>
      <PageHeader headerText={t('signin')}/>
      <div className='signin-page__image-container'>
        <img src={signInImg} alt='' />
      </div>
      <SignInForm />
    </div>
  );
};