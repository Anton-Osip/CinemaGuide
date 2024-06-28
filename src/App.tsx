import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./layout/main/Main";


function App() {
    return (
        <div className = "App">
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to={'/CinemaGuide/main'} />} />
                <Route
                    path='/CinemaGuide'
                    element={<Navigate to={'/CinemaGuide/home'} />}
                />
                <Route path='/CinemaGuide/main' element={<Main />} />

            </Routes>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
`;