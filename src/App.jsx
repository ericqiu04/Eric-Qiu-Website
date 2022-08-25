import { Component } from "react";
//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS-Files/App.css'

//Component Imports
import Navigation from "./components/Navbar.components";
import Introduction from "./components/Introduction.components";
import ProjectMaker from "./components/projectMaker.component";
import Skills from "./components/skills.component";

class App extends Component {
  render() {
    
    return (
      <div>
        {/*Bootstrap Js Scripts*/}
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      
        {/*Components*/}
        <Navigation />
        <Introduction/>
        <Skills/>
        <ProjectMaker/>
      </div>
    );
  }
}

export default App;
