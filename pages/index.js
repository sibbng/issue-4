import Link from "next/link";
import { computed, defineComponent } from "reactivue";
import { counter } from "../store";

const Home = defineComponent(
  ({ result }) => {
    counter.value = result;
    const doubled = computed(() => counter.value * 2);
    const inc = () => (counter.value += 1);

    return { counter, doubled, inc };
  },
  ({ counter, doubled, inc }) => (
    <div>
      <div>
        {counter} x 2 = {doubled}
      </div>
      <button onClick={inc}>Increase</button>
      <Link href="/about">about</Link>
    </div>
  )
);

export async function getServerSideProps(context) {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve(20), 1000)
  );
  return { props: { result } };
}

export default Home;
