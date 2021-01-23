import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Participants from './participant-list/Participants'
import Summary from './Summary'
import Result from './Result'
import ImportExport from './ImportExport'

const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Participants}/>
                    <Route path="/summary" component={Summary}/>
                    <Route path="/result" component={Result}/>
                    <Route path="/ie" component={ImportExport}/>
                </div>
                <div>
                    <Link to="/">PARTICIPANTS</Link> | 
                    <Link to="/summary">SUMMARY</Link> |
                    <Link to="/result">RESULT</Link> |
                    <Link to="/ie">IMPORT-EXPORT</Link>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;