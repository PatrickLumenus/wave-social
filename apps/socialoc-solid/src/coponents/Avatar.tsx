import { Component, Show } from "solid-js";
import { authStore } from "../stores";

const Avatar: Component = () => {
  const source = authStore.isAuthenticated ? authStore.user?.image : null;

  return (
    <Show
      when={source}
      fallback={
        <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            class="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      }
    >
      <img
        class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src={source!.toString()}
        alt={`Avatar`}
      />
    </Show>
  );
};

export default Avatar;
