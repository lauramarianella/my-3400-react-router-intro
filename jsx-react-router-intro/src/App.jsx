import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppCss from './App.css';

let renderRoot = () => {
  return (
    <div>
      Welcome to this page. Click here to view all items
      <Link to="/allItems">All items</Link>
    </div>
  );
};

let renderAllItems = () => {
  return (
    <div>
      <div>
        <Link to="/item/abc">A hat</Link>
        <div className={AppCss.mySmallImg}>
          <img src="/imgs/hat.jpg" width="30px" height="30px" />
        </div>
      </div>
      <div>
        <Link to="/item/def">A boat</Link>
        <div className={AppCss.mySmallImg}>
          <img src="/imgs/boat.jpg" width="30px" height="30px" />
        </div>
      </div>
      <div>
        <Link to="/item/123">A lawnmower</Link>
        <div className={AppCss.mySmallImg}>
          <img src="/imgs/lawnmower.jpg" width="30px" height="30px" />
        </div>
      </div>
      <div>
        <Link to="/item/456">Snowshoes</Link>
        <div className={AppCss.mySmallImg}>
          <img src="/imgs/snowshoes.jpg" width="30px" height="30px" />
        </div>
      </div>
    </div>
  );
};

let renderItem = (routerData) => {
  if (routerData.match.params.itemId === 'abc') {
    return (
      <div>
        <Link to="/seller/abc">Seller Info</Link>
        <p>
          A very nice hat. Only 4 remaining. Belonged to Princess Cathy, it was
          wore before her wedding.
        </p>
        <img src="/imgs/hat.jpg" />
      </div>
    );
  }

  if (routerData.match.params.itemId === 'def') {
    return (
      <div>
        <Link to="/seller/def">Seller Info</Link>
        <p>
          A boat nice. Only 4 remaining. It can be used in the river or sea.
        </p>
        <img src="/imgs/boat.jpg" />
      </div>
    );
  }

  if (routerData.match.params.itemId === '123') {
    return (
      <div>
        <Link to="/seller/123">Seller Info</Link>
        <p>A lawnmoner. For summer time. Only 10 in stock.</p>
        <img src="/imgs/lawnmower.jpg" />
      </div>
    );
  }

  if (routerData.match.params.itemId === '456') {
    return (
      <div>
        <Link to="/seller/456">Seller Info</Link>
        <p>Colorful snowshoes, all sizes (women, men). </p>
        <img src="/imgs/snowshoes.jpg" />
      </div>
    );
  }
};

let renderSeller = (routerData) => {
  if (routerData.match.params.itemId === 'abc') {
    return (
      <div>
        <p>Hat seller, 5 starts.</p>
      </div>
    );
  }

  if (routerData.match.params.itemId === 'def') {
    return (
      <div>
        <p>Boat seller, 4 starts.</p>
      </div>
    );
  }

  if (routerData.match.params.itemId === '123') {
    return (
      <div>
        <p>Lawnmoner seller, 3 starts.</p>
      </div>
    );
  }

  if (routerData.match.params.itemId === '456') {
    return (
      <div>
        <p>Snowshoes seller, 2 starts.</p>
      </div>
    );
  }
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" render={renderRoot} />
        <Route exact={true} path="/allItems" render={renderAllItems} />
        <Route exact={true} path="/item/:itemId" render={renderItem} />
        <Route exact={true} path="/seller/:itemId" render={renderSeller} />
      </BrowserRouter>
    );
  }
}

export default App;
