import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
  domain="dev-jz2v4khctkah6vrf.us.auth0.com"
  clientId="W42sZBqzkSrezLwZcmhqZRb94rQg97wQ"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
)
