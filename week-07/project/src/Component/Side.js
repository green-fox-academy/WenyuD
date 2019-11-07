import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Side = () => {
    return (
        <>
            <Link to='/newpost'><button>New Post</button></Link>
            <Router>
                <Switch>
                    <Route path='/newpost' exact></Route>
                </Switch>
            </Router>
        </>
    )
}

export default Side;