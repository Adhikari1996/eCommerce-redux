import Header from './components/header'
import ProductListing from './components/productListing'
import ProductDetails from './components/productDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Slider from './components/slider'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <h2>Hello</h2> */}
      <Router>
        <Header />
        <Slider />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
