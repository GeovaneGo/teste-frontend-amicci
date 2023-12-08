import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./screens/main-page/mainPage";

export const Router =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainPage/>}
                >

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;