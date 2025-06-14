import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from "./redux/store.ts";
import './index.css'
import { FlickeringGrid } from './components/magicui/flickering-grid.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <div className="absolute top-0 left-0 min-h-screen h-full w-screen overflow-hidden rounded-lg border bg-background">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={1000}
          width={2000}
        />
      </div>

      <App />

      <Toaster />
    </Provider>
  </StrictMode>,
)
