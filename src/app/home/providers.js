"use client";

import { Auth0Provider } from '@auth0/auth0-react'
import { getConfig } from "./../config";

export function Providers({ children }) {
  const config = getConfig()

  return (
    
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.href : ''
      }}
    >
      {children}
    </Auth0Provider>
  )
}