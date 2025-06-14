import { Suspense, lazy } from '@/utils/imports'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavbarWithMegaMenu from './components/NavbarWithMegaMenu';
const Home = lazy(() => import("@/pages/home/Home.tsx"));
const Signup = lazy(() => import("@/pages/authentication/signup/Signup"));
const Login = lazy(() => import("./pages/authentication/login/Login"));
const PageNotFound = lazy(() => import("@/pages/404/PageNotFound"));


function App() {
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <header>
          <NavbarWithMegaMenu />
        </header>

        <Suspense fallback={<>loading</>}>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* AUTHENTICATION */}
            {/* SIGNUP */}
            <Route path="/signup" element={<Signup />} />
            {/* LOGIN */}
            <Route path="/login" element={<Login />} />

            {/* Error Handling */}
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<PageNotFound />} />

          </Routes>

        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
