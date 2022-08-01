import React, {FC} from 'react'
import './ErrorMessage.css'

const ErrorMessage = () => {
  return (
    <div className='error'>
      <h3 className='error-message'>Hey, we're having some technical difficulties right now.  Come see us again soon!</h3>
    </div>
  )
}

export default ErrorMessage;