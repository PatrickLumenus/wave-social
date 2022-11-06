import type { Component } from "solid-js";

interface TextButtonProps {
  text: string;
  onPressed: () => void;
}

const TextButton: Component<TextButtonProps> = (props) => {
  return (
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={props.onPressed}
    >
      { props.text }
    </button>
  );
};

export default TextButton;
