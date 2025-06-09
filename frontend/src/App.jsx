import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={ProductList} />
                <Route path="/cart" component={Cart} />
                <Route path="/admin" component={AdminPanel} />
            </Switch>
        </Router>
    );
};

export default App;