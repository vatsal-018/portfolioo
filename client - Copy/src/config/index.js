// Environment configuration
const config = {
  development: {
    API_URL: 'http://localhost:5000',
  },
  production: {
    API_URL: process.env.REACT_APP_API_URL || 'https://your-api-domain.com',
  },
};

export default config[process.env.NODE_ENV || 'development'];
