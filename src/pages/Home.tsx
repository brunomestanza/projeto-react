import { useEffect, useState, useCallback } from "react"
import axios from 'axios';

interface DataResponse {
  name: string
  desc: string
}

const instance = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api',
});


export function Home() {
  const [data, setData] = useState<DataResponse>({} as DataResponse);
  const [magicName, setMagicName] = useState('');

  const cachedLoadData = useCallback(async function loadData() {
    try {
      const response = await instance.get<DataResponse>(`/spells/${magicName}`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [magicName])

  useEffect(() => {
    const typingWait = setTimeout(async () => {
      cachedLoadData()
    }, 2000);

    return () => {
      clearTimeout(typingWait);
    };
  }, [cachedLoadData])

  return (
    <div>
      <input
        type="text"
        placeholder="Nome da magia"
        value={magicName}
        onChange={(e) => setMagicName(e.target.value)}
      />
      <p>{data.name}</p>
      <p>{data.desc}</p>
    </div>
  )
}