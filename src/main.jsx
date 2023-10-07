import React from 'react'
import ReactDOM from 'react-dom/client'
import AccessibleApp from './AccessibleApp/AccessibleApp'
import UnaccessibleApp from './InaccessibleApp/InaccessibleApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app-container'>      
      <section className='form-container'>
        <div>
          <h3>Inaccessible App</h3>
          <UnaccessibleApp />
        </div>
      </section>
      <section className='form-container'>
        <div>
          <h3>Accessible App</h3>
          <AccessibleApp />
        </div>
      </section>
    </div>
  </React.StrictMode>,
)
