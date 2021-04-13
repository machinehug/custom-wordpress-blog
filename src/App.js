import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/layout/Header';
import Heading from './components/layout/Heading';
import BlogList from './components/blog/BlogList';
import BlogDetails from './components/blog/BlogDetails';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
        <Router>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/">
                <Heading cssClass="home-title" title="Welcome to my blog!" />
                <BlogList />
              </Route>
              <Route path="/page/:id">
                <Link to="/"><Button className="back-btn" variant="secondary" size="sm">Go back</Button></Link>
                <BlogDetails />
              </Route>
            </Switch>
          </Container>
        </Router>
  );
};