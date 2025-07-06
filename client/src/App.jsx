import { useEffect, useState } from 'react';

export default function App() {
  const [msg, setMsg] = useState('loading...');

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '/api';
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Erreur : ' + err.message));
  }, []);

  return (
    <div>
      <h1>Frontend Vite</h1>
      <p>Message du backend : {msg}</p>
    </div>
  );
}
