import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";
import utils from "./utils";
// import 'bootstrap/dist/css/bootstrap.min.css';

const elements = utils.map((item) => {
  return (
    <Projects
      key={item.id}
      img={item.img}
      url={item.url}
      name={item.name}
      description={item.description}
    />
  );
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/projects"
        element={
          <section id="">
            <div className="container">
              <h2 className="project-tile">These are some of my Projects</h2>
              <div className="cards">{elements}</div>
              <p className="more-info">
                <span>Check out more projects on my <Link className="card-title" to='https://github.com/ManNjoro?tab=repositories'>Github Account</Link></span>
              </p>
            </div>
          </section>
        }
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
