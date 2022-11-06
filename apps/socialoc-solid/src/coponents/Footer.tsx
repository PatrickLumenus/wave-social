import { Component } from "solid-js";
import { NavLink } from "solid-app-router";

const Footer: Component = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Four Fine Fellas
        <a href="https://flowbite.com/" class="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <NavLink href="/tos" class="mr-4 hover:underline md:mr-6 ">
            Terms
          </NavLink>
        </li>
        <li>
          <NavLink href='/privacy' class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
