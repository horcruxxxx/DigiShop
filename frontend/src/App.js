import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./UI/HomeScreen";
import ProductDetail from './UI/ProductDetail';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
         <Route path='/' exact component={HomeScreen} />
         <Route path='/product/:id' component={ProductDetail} />
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
