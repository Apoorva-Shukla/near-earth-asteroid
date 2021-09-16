import Header from './components/Header';
import Wish from './components/Wish';
import Neo from './pages/Neo';
import Satellite from './pages/Satellite';
import Search from './pages/Search';
import Introduction from './documentation/pages/Introduction';
import SatelliteDoc from './documentation/pages/Satellite';
import NeoDoc from './documentation/pages/Neo';
import Sidebar from './documentation/components/Sidebar';
import {
    HashRouter,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <>
            <HashRouter>
                <Header />
                <div className="container mt-3">
                    <Wish />
                </div>
                <Switch>
                    <Route path="/" exact>
                        <Satellite />
                    </Route>
                    <Route path="/near-earth-asteroids" exact>
                        <div className="container mt-3">
                            <Neo />
                        </div>
                    </Route>
                    <Route path="/introduction">
                        <div className="d-flex container mt-3">
                            <Sidebar index={1} />
                            <div style={{ marginLeft: '20px', flex: 1, }}>
                                <Introduction sidebar={true} index={1} />
                            </div>
                        </div>
                    </Route>
                    <Route path="/sv">
                        <div className="d-flex container mt-3">
                            <Sidebar index={2} />
                            <div style={{ marginLeft: '20px', flex: 1, }}>
                                <SatelliteDoc sidebar={true} index={2} />
                            </div>
                        </div>
                    </Route>
                    <Route path="/neo">
                        <div className="d-flex container mt-3">
                            <Sidebar index={3} />
                            <div style={{ marginLeft: '20px', flex: 1, }}>
                                <NeoDoc sidebar={true} index={3} />
                            </div>
                        </div>
                    </Route>
                    <Route path="/search">
                        <div className="container mt-3">
                            <Search />
                        </div>
                    </Route>
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;
