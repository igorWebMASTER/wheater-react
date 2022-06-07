import React, { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Box } from './components/box'
import * as S from './styled'
import { MemoizedWheater } from './components/wheather'
import toast, { Toaster } from 'react-hot-toast'
import { LineBottom } from './components/header/styled'
import { handleGetLocalData, handleSetLocalData } from './utils'

const fiveMinutes = 5 * 60 * 1000
export const fiveMinutesSession = fiveMinutes / 200;

export type BoxProps = {
  id: number,
  temperature?: string,
  timestamp?: string,
}

function App() {
  const [data, setData] = useState(handleGetLocalData());
  const [boxData, setBoxData] = useState([]);

  useEffect(() => {
    handleSetLocalData(data)
  }, [data])

  useEffect(() => {
    let wsFactory = {
      tryCount: 3,
      connect: function (url: string | URL) {
        const ctx = this,
          ws = new WebSocket(url);
        return new Promise(function (v, x) {
          ws.onerror = (e: any) => {
            if (ctx.tryCount > 0) setTimeout(() => v(ctx.connect(url)), 1000);
            else x(toast.error(`Error}`));
          };
          ws.onopen = (e: any) => {
            toast.success('Connected');
            v(ws);
          };
          ws.onmessage = m => {
            const parsed = JSON.parse(m.data);
            if (data.length < 20) {
              setData((data: any) => [...data, ...parsed]);
              setBoxData(parsed)
              return;
            }

            setData([]);
          };
          ws.onclose = ((e) => {
            toast.error('Disconnected');
          })
        });
      }
    };


    wsFactory.connect("ws://localhost:8999")
      .then((ws: any) => ws.onerror(() => {
        toast.error(`Error: ${ws.readyState}`);
      }))
      .catch((e: any) => toast.error(`Error: ${e}`));
  }, [])

  const series1 = data.filter((d: BoxProps) => d.id === 1).map((d: { id: number; temperature: any }) => d.temperature)
  const series2 = data.filter((d: BoxProps) => d.id === 2).map((d: { id: number; temperature: any }) => d.temperature);
  const labels = data.filter((d: BoxProps) => d.id === 1).map((e: { timestamp: string }) => new Date(e.timestamp).toLocaleTimeString([], { timeStyle: 'short' }))

  const seriesId1 = series1.map((e: number) => {
    if (e > 100) return null
    return e
  })

  const seriesId2 = series2.map((data: number) => {
    if (data > 100) return null
    return data
  })

  return (
    <div className="App">
      <Header />
      <S.HomeContent>
        <S.BoxContent>
          {boxData && boxData.map((e: BoxProps) => <Box key={e.id} id={e.id} temperature={e.temperature} />)}
        </S.BoxContent>
        <S.ContentWeather>
          <S.ContentWeatherTitle>
            <S.BoxContenHeader>
              <span>DATA</span>
              <LineBottom />
            </S.BoxContenHeader>
            <MemoizedWheater labels={labels} series1={seriesId1} series2={seriesId2} />
          </S.ContentWeatherTitle>
        </S.ContentWeather>
      </S.HomeContent>
      <Toaster />
    </div>
  )
}

export default App
