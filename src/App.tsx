import { Suspense, lazy } from '@/utils/imports'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarWithMegaMenu from './components/NavbarWithMegaMenu';
import Loader from './components/Loader';
const Home = lazy(() => import("@/pages/home/Home.tsx"));
const Signup = lazy(() => import("@/pages/authentication/signup/Signup"));
const Login = lazy(() => import("./pages/authentication/login/Login"));
const PageNotFound = lazy(() => import("@/pages/404/PageNotFound"));


function App() {
  return (
    <div className='container mx-auto relative z-10'>

      <BrowserRouter>
        <header>
          <NavbarWithMegaMenu />
        </header>

        <Suspense fallback={<Loader />}>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* AUTHENTICATION */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* Error Handling */}
            <Route path="*" element={<PageNotFound />} />

          </Routes>

        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
