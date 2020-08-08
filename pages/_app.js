import "../styles/globals.css";
import { useSetup, ref, watch } from "reactivue";

function MyApp({ Component, pageProps }) {
  const state = useSetup(() => {
    const counter = ref(50);
    watch(counter, (value) => console.log(value), { immediate: true });
    const inc = () => (counter.value += 1);
    return { counter, inc, setCount: (v) => (counter.value = v) };
  });

  return <Component {...pageProps} {...state} />;
}

export default MyApp;
