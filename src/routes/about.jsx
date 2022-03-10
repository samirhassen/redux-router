import React, { useEffect, useState } from 'react'

export default function About() {
    const [items, setItems] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch("http://127.0.0.1:8081",
        {
          method: "POST",
          body: JSON.stringify({usr: 'samir', pwd: 'SuperDuperSecret'})
        }
        )
        .then(response => response.json())
        .then(result => setItems(result))
        .catch(error => setError(error))
//        .finally(res => res)
    },[]);

  return (
    <div>
        <h1>Jensen Rocks</h1>
        <p>{JSON.stringify(Object.keys(items))}</p>
        <p>{JSON.stringify(Object.values(items))}</p>
    </div>
  )
}
