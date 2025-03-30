// Your React component (e.g., ReceiptInfo.js)
import React, { useState } from 'react';

function Test({ transactionNo }) {
  const [receiptData, setReceiptData] = useState(null);
  const [error, setError] = useState(null);
  const backendUrl = 'http://localhost:5000'; // Replace with your backend URL if different

  const fetchReceiptData = async () => {
    try {
      const response = await fetch(`${backendUrl}/receipt-data/${transactionNo}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setReceiptData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching receipt data:', err);
      setError('Failed to fetch receipt information.');
      setReceiptData(null);
    }
  };

  React.useEffect(() => {
    if (transactionNo) {
      fetchReceiptData();
    }
  }, [transactionNo]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!receiptData) {
    return <div>Loading receipt information...</div>;
  }

  console.log(receiptData)
  return (
    <div>
      <h2>Receipt Information</h2>
      <p>Payer Name: {receiptData.payerName}</p>
      <p>Payer telebirr no.: {receiptData.payerTelebirrNo}</p>
      <p>Transaction Status: {receiptData.transactionStatus}</p>
      <p>Payment Date: {receiptData.paymentDate}</p>
      <p>Payment Amount: {receiptData.paymentAmount}</p>

    </div>
  );
}

export default Test;