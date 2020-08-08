import "../styles/globals.css";
import { useSetup, ref, watch } from "reactivue";

export const MyContext = React.createContext({});

function MyApp({ Component, pageProps }) {
  const state = useSetup(() => {
    const counter = ref(50);
    watch(counter, (value) => console.log, { immediate: true });
    const inc = () => (counter.value += 1);
    return { counter, inc, setCount: (v) => (counter.value = v) };
  });

  return (
    <MyContext.Provider value={{ ...state }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
