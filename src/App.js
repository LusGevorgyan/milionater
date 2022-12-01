import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./component/main/Main";
import Content from "./component/content/Content";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content/>}/>
                <Route path="/main" element={<Main/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
