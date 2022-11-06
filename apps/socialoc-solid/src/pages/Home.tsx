import { Component } from "solid-js";
import { geolocation } from "../stores";

const Home: Component = () => {

    return (
        <div class = 'w-full h-full'>
            <h1>Long: {geolocation.long} Lat: {geolocation.lat}</h1>
        </div>
    );
}

export default Home;