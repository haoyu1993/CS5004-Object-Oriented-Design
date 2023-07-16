import { GoogleLogout } from 'react-google-login';
import { googleLogout } from '@react-oauth/google';

import './Movie.css';

function Logout ({ setUser, clientId }) {
  const onSuccess = () => {
    googleLogout()
    setUser(null)
    localStorage.setItem('login', null)
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout;
