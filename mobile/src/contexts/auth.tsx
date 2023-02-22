import { createContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider ({ children }) {
  const [signed, setSigned] = useState(false);

  async function signIn() {
    const response = await AuthSession.startAsync({
      authUrl: ""
    })

    console.log(response)

    fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `Bearer ${response.params.access_token}`
      }
    })
    .then(response => response.json())
    .then(() => {
      setSigned(true);
    })

  }
  
  return (
    <AuthContext.Provider value={{signed: signed, user: {}, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext