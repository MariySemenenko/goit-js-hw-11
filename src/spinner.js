
import { refs } from './refs';


//Цей код використовується для показу/приховування спіннера
// (елемента завантаження) на веб-сторінці.
export function spinnerPlay() {
    refs.body.classList.add('loading');
  }
  
  export function spinnerStop() {
    window.setTimeout(function () {
      refs.body.classList.remove('loading');
      refs.body.classList.add('loaded');
    }, 1500);
  }