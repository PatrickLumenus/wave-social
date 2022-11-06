import { Component, createSignal, Show } from "solid-js";

const NavigationBar: Component = () => {
  const [menuIsOpen, setMenuIsOpen] = createSignal(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen());

  return (
    <nav class="bg-white shadow inset-x-0">
      <div class="container mx-auto px-6 py-2 md:flex md:justify-between md:items-center">
        <div class="flex justify-between items-center">
          <div>
            <a
              class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
              href="/"
            >
              <figure class="flex items-center flex-shrink-0 text-white mr-6">
                <img src="brand.svg" alt="Logo" />
              </figure>
            </a>
          </div>

          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
              onClick={toggleMenu}
            >
              <Show when={!menuIsOpen()} fallback={<svg class="swap-on fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>}>
                <svg class="swap-off fill-current text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
              </Show>
            </button>
          </div>
        </div>

        <div
          class={
            menuIsOpen()
              ? "md:flex items-center block"
              : "md:flex items-center hidden"
          }
        >
          <div class="flex flex-col md:flex-row md:mx-6">
            {/* Here is where we define the Navigation links */}
            <Show when={menuIsOpen()}>
              <a
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="/"
              >
                Home
              </a>
            </Show>
            <a
              class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              href='/login'
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;