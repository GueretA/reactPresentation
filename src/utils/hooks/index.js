import { useState, useEffect } from 'react'

export function useFetch(url, verb = 'POST', body) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) {
        return
    }

    setLoading(true)
    async function fetchData() {
      try {
        let param = {
          method: verb,
          headers: {
            'Content-Type': 'application/json',
          }
        };
        if(body)
          param.body = JSON.stringify(body);

        const response = await fetch(url, param);
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log('Erreur : ', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [url])

  return { data, isLoading, error }
}