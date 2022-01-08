import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {MessagePage} from "./pages/MessagePage";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
                <div className="d-flex flex-column bg-light min-vh-100">
                    <Navbar/>
                    <main className="container flex-fill my-3">
                        <Routes>
                            <Route path={`/messages`} exact element={<MainPage/>}/>
                            <Route path={`/messages/:messageId`} exact element={<MessagePage/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
        </BrowserRouter>
    );
}

export default App;
