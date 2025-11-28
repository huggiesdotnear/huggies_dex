import { mount } from 'svelte';
import App from './App.svelte';
import './css/main.css';

const app = mount(App, {
  // target: document.body,
  // or use my index.html template
  target: document.getElementById('root')!,
});

export default app;
