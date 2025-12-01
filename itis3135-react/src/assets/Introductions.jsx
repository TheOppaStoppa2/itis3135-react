import { use, useEffect, useState } from "react";

export default function Introductions() {
    const [introductions, setIntroductions] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setIntroductions(data))
            .catch((error) => setError(error.message));
    }, []);

  return (
    {error == null ? <p>Error: {error}</p> :<p>{JSON.stringify(introductions)}</p> }
    
  );
}