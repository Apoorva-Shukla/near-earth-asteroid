import Header from './components/Header';
import Wish from './components/Wish';
import Neo from './pages/Neo';
import Satellite from './pages/Satellite';
import Search from './pages/Search';
import {
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <div className="container mt-3">
                <Wish />
                <Switch>
                    <Route path="/" exact>
                        <Neo />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/satellite-visualization">
                        <Satellite />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
