import './index.css'
import Layout from './components/Layout'

function App() {

  const api = axios.create({
  baseURL: 'http://your-backend-url.com/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});


  return (
    <>
      <main className='lg:text-md text-sm'>
        <Layout />
      </main>

    </>
  )
}

export default App
