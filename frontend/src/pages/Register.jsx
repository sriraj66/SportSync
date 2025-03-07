import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { TextField, Button, Paper, Typography, Alert, Box } from '@mui/material'
import { useAuth } from '../contexts/AuthContext'
import Loader from '../components/utils/Loader'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState('')
  const [ isloading, setIsloading ] = useState(false);

  const navigate = useNavigate()
  const { register } = useAuth()

  const validatePassword = (password) => {
    const minLength = 2
    // const hasUpperCase = /[A-Z]/.test(password)
    // const hasLowerCase = /[a-z]/.test(password)
    // const hasNumbers = /\d/.test(password)
    // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long'
    }
    // if (!hasUpperCase) {
    //   return 'Password must contain at least one uppercase letter'
    // }
    // if (!hasLowerCase) {
    //   return 'Password must contain at least one lowercase letter'
    // }
    // if (!hasNumbers) {
    //   return 'Password must contain at least one number'
    // }
    // if (!hasSpecialChar) {
    //   return 'Password must contain at least one special character'
    // }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const passwordError = validatePassword(password)
    if (passwordError) {
      setError(passwordError)
      return
    }

    if (password !== password2) {
      setError('Passwords do not match')
      return
    }

    setIsloading(true);
    try {
      await register({
        email: email,
        password: password,
        password2: password2
      })
      navigate('/login')
    } catch (error) {
      setError(error.message)
    }finally{
      setIsloading(false);
    }
  }

  return (
    <>
      <Loader state={isloading} ></Loader>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)',
          p: 2,
        }}
      >
        <Paper sx={{ p: 4, width: '100%', maxWidth: 400, boxShadow: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <img src="/logo.svg" alt="SportSync Logo" style={{ width: 64, height: 64, marginBottom: 8 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#15803d' }}>
              SportSync
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'gray' }}>
              Create Your Account
            </Typography>
          </Box>
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              sx={{ backgroundColor: 'white', mb: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              sx={{ backgroundColor: 'white', mb: 2 }}
              helperText="At least 6 characters"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
              variant="outlined"
              sx={{ backgroundColor: 'white', mb: 3 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth size="large" sx={{ py: 1.5, fontSize: '1rem' }}>
              Create Account
            </Button>
          </form>
          <Typography sx={{ mt: 3, textAlign: 'center', color: 'gray' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#15803d', fontWeight: 'bold', textDecoration: 'none' }}>
              Sign In
            </Link>
          </Typography>
        </Paper>
      </Box>
    </>

  )
}

export default Register
