import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      category: "general"
    }
  }

  handleSearch = (content) => {
    this.setState({
      query: content
    })
  }

  handleCategoryChange = (cate) => {
    this.setState({
      query: "",
      category: cate
    })
  } 

  render() {
    return (
      <>
        <Router>
          <NavBar search={this.handleSearch} onCategoryChange={this.handleCategoryChange}/>
          <Routes>
            <Route path='/' element={<Home key={`general-${this.state.query}`} query={this.state.query} category={this.state.category}/>}/>
            <Route path='/business' element={<Home key={`business-${this.state.query}`} query={this.state.query} category={this.state.category}/>}/>
            <Route path='/entertainment' element={<Home key={`entertainment-${this.state.query}`} query={this.state.query} category={this.state.category}/>}/>
            <Route path='/health' element={<Home key={`health-${this.state.query}`} query={this.state.query} category={this.state.category}/>}/>
            <Route path='/science' element={<Home key={`science-${this.state.query}`} query={this.state.query} category={this.state.category}/>}/>
            <Route path='/sports' element={<Home key={`sports-${this.state.query}`} query={this.state.query} category={this.state.category}/>}/>
            <Route path='/technology' element={<Home key={`technology-${this.state.query}`} query={this.state.query} category={this.state.category}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;
