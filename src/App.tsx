import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
// import {films} from './data/films'
import {Header} from "./layout/header/Header";

function App() {


    return (
        <div className = "App">
            <Header/>
            <Routes>
                <Route path = "/" element = {<Navigate to = {'/CinemaGuide/main'}/>}/>
                <Route
                    path = "/CinemaGuide"
                    element = {<Navigate to = {'/CinemaGuide/home'}/>}
                />
                {/*<Route path = "/CinemaGuide/main" element = {<Main />}/>*/}

            </Routes>
        </div>
    );
}

export default App;