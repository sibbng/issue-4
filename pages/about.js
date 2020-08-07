import Link from "next/link";
import { counter } from "../store";
import { defineComponent } from "reactivue";

const About = defineComponent(
  () => ({ counter }),
  ({ counter }) => (
    <div>
      <div>this is about page {counter}</div>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
);

export default About;
