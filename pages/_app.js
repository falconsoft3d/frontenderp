import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from '../src/context/AuthContext';
import { useRouter } from 'next/router'
import ProtectedRoute from '../src/components/ProtectedRoute'
// import "bootswatch/dist/materia/bootstrap.min.css"; // Import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import React, { useEffect } from 'react';
import Script from 'next/script';


const noAuthRequired = ['/',
                       '/login',
                       '/404',
                       '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  useEffect(() => {
    import("jquery/dist/jquery.min.js");
  }, []);

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  
  return (
    <>
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
    </>
  )
}

export default MyApp