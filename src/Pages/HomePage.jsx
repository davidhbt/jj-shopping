import React, { useState } from 'react'
import Test from './Test'
import TelegramUserSDK from './TelegramUserSDK'

function HomePage() {
  const [transactionNo, setTransactionNo] = useState()
  return (
    <div className='page'>
        <div className="HomePageContainer">
            <input type="text"  onChange={(e) => setTransactionNo(e.target.value)}/>
            {/* <button>check status</button> */}
            
        </div>
    </div>
  )
}

export default HomePage