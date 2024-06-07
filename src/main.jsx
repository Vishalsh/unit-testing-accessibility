import React from 'react'
import ReactDOM from 'react-dom/client'
import AccessibleFormInputs from './Accessible/FormInputs'
import InaccessibleFormInputs from './Inaccessible/FormInputs'
// import AccessibleFormWithDropdown from './Accessible/FormWithDropdown'
// import InaccessibleFormWithDropdown from './Inaccessible/FormWithDropdown'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app-container'>      
      <section className='form-container'>
        <div>
          <h3>Inaccessible App</h3>
          <InaccessibleFormInputs />
          {/* <InaccessibleFormWithDropdown /> */}
        </div>
      </section>
      <section className='form-container'>
        <div>
          <h3>Accessible App</h3>
          <AccessibleFormInputs />
          {/* <AccessibleFormWithDropdown /> */}
        </div>
      </section>
    </div>
  </React.StrictMode>,
)
