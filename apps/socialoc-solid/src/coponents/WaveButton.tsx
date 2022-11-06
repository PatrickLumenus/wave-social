import type { Component } from "solid-js";
import Wave from './../assets/img/wave.svg';
import WaveActive from './../assets/img/wave-active.svg';
import { authStore } from "../stores";

interface WaveButtonProps {
  
}

const WaveButton: Component<WaveButtonProps> = (props) => {

  const onPressed = () => {

  };

  return (
    <button
      type="button"
      class="text-primary font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onPressed}
    >
      <img
        aria-hidden="true"
        class="w-5 h-5"
        src={authStore.hasWaveRequests ? WaveActive : Wave}
        alt={authStore.hasWaveRequests ? "Active Wave" : "Wave"}
      />
      <span class="sr-only">Icon description</span>
    </button>
  );
};

export default WaveButton;