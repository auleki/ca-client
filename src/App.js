import './App.scss';
import React, { Switch, Route } from 'react-router-dom'
import { AppStyle } from './styles/components.styled';
import TopNav from './layout/TopNav';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CreateOrder from './pages/CreateOrder';
import OrderComplete from './pages/OrderComplete';
import Quiz from './pages/Quiz';
import Payment from './pages/Payment';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Footer from './layout/Footer';

function App() {
  return (
    <AppStyle>
      <TopNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/confirm' component={CreateOrder} />
        <Route path='/order-complete' component={OrderComplete} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/payment' component={Payment} />
        <Route path='/about' component={AboutUs} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </AppStyle>
  );
}

export default App;
