// import "./App.css";
import { Route, Routes } from "react-router-dom";
// import AboutMe from "./components/Common/AboutMe";
// import Navbar from "./components/Common/Navbar";
// import ArrayDemo1 from "./components/Array/ArrayDemo1";
// import ArrayDemo2 from "./components/Array/ArrayDemo2";
// import ArrayDemo3 from "./components/Array/ArrayDemo3";
// import UseStateDemo1 from "./components/UseState/UseStateDemo1";
// import UseStateDemo2 from "./components/UseState/UseStateDemo2";
// import InputDemo1 from "./components/UseState/InputDemo1";
import Navbar from './components/routing/Navbarr'
import HotstarHome from './components/routing/HotstartHome';
import Hotstarmovies from './components/routing/HotstarMovies';
import HotstarProfile from './components/routing/HotstarProfile';
import HotstarSports from './components/routing/HotstartSports';
import NotFoundPage from "./components/Common/NotFoundPage";

// import Content from "./components/Content";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

function App() {
  return (
    // <>
    //   <h1 style={{textAlign:"center"}}>Portfolio</h1>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       height: "150px",
    //     }}
    //   >
    //     <img
    //       src="https://ui-avatars.com/api/?name=Harsh+Patel&background=D3D3D3&color=A9A9A9&size=100"
    //       alt="Profile"
    //       style={{ borderRadius: "50%" }}
    //     />
    //   </div>

    //   <ul>
    //     <li>
    //       <strong>Name:</strong> <span>Harsh Patel</span>
    //     </li>
    //     <li>
    //       <strong>Sr.No.:</strong> <span>115</span>
    //     </li>
    //     <li>
    //       <strong>Technology:</strong> <span>MERN Stack</span>
    //     </li>
    //     <li>
    //       <strong>Project:</strong> <span>WedJoy</span>
    //     </li>
    //   </ul>

    //   <hr />

    //   <h2>Projects</h2>
    //   <nav>
    //     <ol>
    //       <li>
    //         <a href="#portfolio">Portfolio</a>
    //       </li>
    //       <li>
    //         <a href="#firesight">FireSight</a>
    //       </li>
    //       <li>
    //         <a href="#wedjoy">WedJoy</a>
    //       </li>
    //     </ol>
    //   </nav>

    //   <section id="firesight">
    //     <h3>FireSight</h3>
    //     <p>
    //       FireSight is a fire extinguisher management system focused on
    //       maintenance and compliance. Built on the MERN stack with token-based
    //       security and REST APIs.
    //     </p>
    //   </section>

    //   <section id="portfolio">
    //     <h3>Portfolio</h3>
    //     <p>
    //       A personal portfolio website to showcase projects and experience,
    //       developed using React and simple HTML structure.
    //     </p>
    //   </section>

    //   <section id="wedjoy">
    //     <h3>WedJoy</h3>
    //     <p>
    //       WedJoy is a wedding management platform designed to streamline
    //       planning and coordination, built with the MERN stack.
    //     </p>
    //   </section>

    //   <hr />

    //   <h2>Contact Me</h2>
    //   <form>
    //     <label>
    //       First Name:
    //       <input type="text" placeholder="Enter Your Name" required />
    //     </label>
    //     <br />
    //     <label>
    //       Email:
    //       <input type="email" placeholder="Enter Your Email" required />
    //     </label>
    //     <br />
    //     <label>
    //       Subject:
    //       <input type="text" placeholder="Enter Subject" required />
    //     </label>
    //     <br />
    //     <label>
    //       Message:
    //       <textarea placeholder="Enter Message" required></textarea>
    //     </label>
    //     <br />
    //     <button type="submit">Send</button>
    //   </form>

    //   <hr />

    //   <footer
    //     style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
    //   >
    //     Copyright &copy; 2025 | All Rights Reserved
    //   </footer>
    // </>
    // <>
    //   <Header></Header>
    //   <hr/>
    //   <Content />
    //   <hr/>
    //   <Footer />
    // </>

    // <>
    //   <Navbar />
    //   {/* <AboutMe/> */}

    //   {/* <h1>Array Demo 1</h1>
    // <hr></hr>
    // <ArrayDemo1/>

    // <h1>Array Demo 2</h1><hr></hr>
    // <ArrayDemo2/> */}

    //   {/* <ArrayDemo3/> */}
    //   <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Use State</h1>
    //   <div style={{ display: "flex", justifyContent: "space-around" }}>
    //     <UseStateDemo1 />
    //     {/* <UseStateDemo2/> */}
    //     <InputDemo1 />
    //   </div>
    // </>

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HotstarHome/>}/>
        <Route path='/sports' element={<HotstarSports/>}/>
        <Route path='/movies' element={<Hotstarmovies/>}/>
        <Route path='/profile' element={<HotstarProfile/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>

      
      </Routes>
    </>
  );
}

export default App;
