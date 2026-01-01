export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://food-lovers-backend-alpha.vercel.app/"  // Your actual Backend Vercel URL
  : "http://localhost:5000";               // Your local development URL