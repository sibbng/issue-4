import Link from "next/link";

const About = (props) => {
  const { counter } = props;
  return (
    <div>
      <div>this is about page {counter}</div>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
};

export default About;
