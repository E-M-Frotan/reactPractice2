import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from "./components/Social";
import Button from "./components/Button";

import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;

function Card() {
  return (
    <div className="max-w-[24rem] selection:not-sr-only bg-gray-50/10 border hover:shadow-lg transition-colors duration-75 mx-auto py-10 px-5 rounded-md shadow-md">
      <img
        src="./profile.jpg"
        className="w-40 mx-auto rounded-full bg-cover bg-center hover:scale-110 transition-all duration-300 hover:ring-2 hover:ring-yellow-400"
        alt=""
      />
      <div className="flex flex-col justify-center">
        <h2 className="mt-4 mb-1 text-xl font-semibold text-gray-700">
          Mohammad Frotan
        </h2>
        <div className=" flex items-center mb-5  justify-center w-full">
          <FontAwesomeIcon icon={faMapMarkerAlt} color="#d1d5db" />
          <span className="text-gray-400 ml-2 text-sm">
            Ghor,Afghanistan, Asia
          </span>
        </div>
        <p className="text-gray-400 text-sm px-4  leading-[1.75]">
          I&apos;m a fullStack web developer with more than 3 years of
          experience in creating web application with React,Next,Tailwind,Node,
          <br />
          Express,MongoDB,HTML5,CSS3 technologies.
        </p>
        <div className="flex justify-between items-center px-4 text-left mt-8">
          <div>
            <p className="text-gray-400 tracking-widest text-sm uppercase">
              membership
            </p>
            <span className="flex items-center text-yellow-400 font-semibold mt-[2px]">
              <FontAwesomeIcon icon={faStar} />
              <span className="ml-2">Gold Member</span>
            </span>
          </div>
          <Button title="Renew" />
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  );
}
