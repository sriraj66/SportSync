import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function PrivateRoute({ children }) {
  const { tokens } = useAuth()

  return tokens ? children : <Navigate to="/login" />
}

export default PrivateRoute