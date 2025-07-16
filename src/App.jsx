import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contect from "./component/Contect";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <Home />   
                <Projects /> 
                <Experience />        
                <Skills />
                <Contect />
            </div>
        </>
    );
};

export default App;
