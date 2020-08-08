import Link from "next/link";
import { MyContext } from "./_app";

const About = () => {
  const { counter } = React.useContext(MyContext);
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
