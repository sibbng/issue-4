import React from "react";
import Link from "next/link";

const Home = (props) => {
  const { counter, inc, setCount } = props;

  if (typeof window === "undefined") setCount(props.counter);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={inc}>Increase</button>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(context);
  const counter = await new Promise((resolve) =>
    setTimeout(() => resolve(50), 1000)
  );
  return { props: { counter } };
}

export default Home;
