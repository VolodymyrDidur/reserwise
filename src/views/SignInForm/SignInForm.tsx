import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import useUser from '../../hooks/useUser';
import jwt_decode from 'jwt-decode';
import './SignInForm.scss';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const SignInForm: React.FC<{}> = ({ }) => {
  const [isFailed, setIsFailed] = React.useState(false);

  const { setUser } = useUser();
  const { t } = useTranslation();
  const history = useHistory();

  const handleSuccess = (response) => {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    setIsFailed(false);
    history.goBack();
  }
  const handleError = () => {
    setIsFailed(true);
  }

  return (
    <form className='signin-form'>
      <h3 className='signin-form__header'>{t('signin')}</h3>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        cookiePolicy='single_host_origin'
        type='standard'
        theme='filled_blue'
        size='large'
        logo_alignment='left'
        text='signin_with'
        shape='pill'
      />
      {isFailed &&
        (<p className='signin-form__error'>
          {
            t('signinError')
          }
        </p>
        )
      }
    </form>
  )
}
