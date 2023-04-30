import { createContext, useState } from 'react'

const initialUser = {
  id: 1,
  name: "",
  email: "",
  contact: "",
  city: "",
}

export const AuthContext = createContext({
  user: initialUser,
  selectedCity: "",
  selectedCategory: "",
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser)
  const [selectedCity, setSelectedCity] = useState("Mumbai")
  const [selectedCategory, setSelectedCategory] = useState(0)
  const auth = {
    user,
    setUser,
    selectedCity,
    setSelectedCity,
    selectedCategory,
    setSelectedCategory
  }

  return (
    <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
  )
}

