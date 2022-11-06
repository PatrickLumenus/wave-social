import type { Component } from 'solid-js';
import { useRoutes } from 'solid-app-router';

import logo from './logo.svg';
import styles from './App.module.css';
import { routes } from './routes';
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer/Footer';

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <div class="bg-white w-screen h-screen">
      <NavigationBar />
      <div class = "py-0">
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
