import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { TextField, Button, Paper, Typography, Alert, Box } from '@mui/material'
import { useAuth } from '../contexts/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login({
        email: email,
        password: password
      })
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
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
            Your Sports Management Hub
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
            sx={{ backgroundColor: 'white', mb: 3 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth size="large" sx={{ py: 1.5, fontSize: '1rem' }}>
            Sign In
          </Button>
        </form>
        <Typography sx={{ mt: 3, textAlign: 'center', color: 'gray' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#15803d', fontWeight: 'bold', textDecoration: 'none' }}>
            Create Account
          </Link>
        </Typography>
      </Paper>
    </Box>
  )
}

export default Login
