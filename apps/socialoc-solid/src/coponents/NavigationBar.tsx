import { useNavigate } from "solid-app-router";
import { Component, Show } from "solid-js";
import { authStore } from "../stores";
import { loginWithTwitter } from "../vendors/firebase/auth";
import Logo from "./../assets/logo.svg";
import Avatar from "./Avatar";
import TextButton from "./TextButton";
import WaveButton from "./WaveButton";

const NavigationBar: Component = () => {
  const navigate = useNavigate();

  const login = () => {
    loginWithTwitter();
  }

  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Socialoc Logo" />
        </a>
        <div class="flex md:order-2">
          <WaveButton />
          <Show when={authStore.isAuthenticated} fallback={<TextButton text="Login" onPressed={login}/>}>
            <Avatar />
          </Show>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
