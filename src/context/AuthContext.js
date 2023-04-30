import { createContext, useContext, useState } from 'react'

const initialUser = {
  id: 0,
  name: "",
  email: "",
  contact: "",
}

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser)
  const auth = { user, setUser }

  return (
    <authContext.Provider value={auth}>{children}</authContext.Provider>
  )
}

export const useAuth = useContext(authContext)
