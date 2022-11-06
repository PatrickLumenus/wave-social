import { Component, createEffect } from "solid-js";
import { useRoutes } from "solid-app-router";
import NavigationBar from "./coponents/NavigationBar";

import logo from "./logo.svg";
import { routes } from "./routes";
import Footer from "./coponents/Footer";
import { onAuthStateChange } from "./vendors/firebase/auth";
import { setAuthStore, setGeolocation } from "./stores";
import { createGeolocationWatcher } from "@solid-primitives/geolocation";

const App: Component = () => {
  const Routes = useRoutes(routes);
  onAuthStateChange(state => {
    setAuthStore(prev => {
      return {
        user: state,
        openWaveRequests: state ? prev.openWaveRequests : []
      }
    })
  });
  const geowatcher = createGeolocationWatcher(true);
  createEffect(() => {
    setGeolocation(_ => {
      return {
        lat: geowatcher.location?.latitude,
        long: geowatcher.location?.longitude,
        valid: !geowatcher.error
      }
    })
  });

  return (
    <div class="bg-white text-black">
      <NavigationBar />
      <div class="py-0">
        <Routes />
      </div>
    </div>
  );
};

export default App;
