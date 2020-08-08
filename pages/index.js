import React from "react";
import Link from "next/link";

const Home = (props) => {
  const { counter, inc, setCount, counterFromServer } = props;

  React.useEffect(() => {
    setCount(counterFromServer);
  }, [counterFromServer]);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={inc}>Increase</button>
      <button onClick={() => setCount(60)}>60</button>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const counterFromServer = await new Promise((resolve) =>
    setTimeout(() => resolve(50), 1000)
  );
  return { props: { counterFromServer } };
}

export default Home;
