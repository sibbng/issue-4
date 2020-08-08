import React from "react";
import Link from "next/link";
import { MyContext } from "./_app";
import About from "./about";

const Home = (props) => {
  const { counter, inc, setCount } = React.useContext(MyContext);

  if (typeof window === "undefined") setCount(props.counter);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={inc}>Increase</button>
      <Link href="/about">
        <a>about</a>
      </Link>
      <About />
    </div>
  );
};

export async function getServerSideProps(context) {
  const counter = await new Promise((resolve) =>
    setTimeout(() => resolve(50), 1000)
  );
  return { props: { counter } };
}

export default Home;
