import React, { useState } from 'react'
import Test from './Test'
import TelegramUserSDK from './TelegramUserSDK'
import { useContext } from 'react'
import { userState } from '../App'

function HomePage() {
  const [transactionNo, setTransactionNo] = useState()

  const UserData = useContext(userState)

  console.log(UserData)

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