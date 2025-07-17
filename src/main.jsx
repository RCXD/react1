import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Detail from './Detail.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> {/*개발모드에서만 활성화 > https://ko.legacy.reactjs.org/docs/strict-mode.html*/}
    <App />
  // </StrictMode>,
  ,
)

