import styled from "styled-components";

export const HomeContent =  styled.div`
    height: 100vh;
    padding: 2rem 0;
    margin: 0 auto;
    max-width: 90%;
    width: 100%;

   
`

export const BoxContent = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;

 @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ContentWeather = styled.div`
    display: flex;
    margin-top: 4rem;
    width: 100%;
    border: 1px solid #52525B;
`

export const ContentWeatherTitle= styled.div`
    font-size: 1.2rem;
    width: 100vw;
`

export const ContentWeatherTitleSub = styled.h3`
    font-size: 1rem;
`

export const BoxContenHeader = styled.div`
    width: 200px;
    font-weight: bold;
    margin: 1rem 0;
`