import Image from "next/image";
import classes from "./hero.module.css";
import PROFILE_PIC from "@/public/images/site/annabeth.jpeg";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={PROFILE_PIC}
          alt="Annabeth Chase"
          width={300}
          height={300}
          placeholder="blur"
        />
      </div>
      <h1>Hi&sbquo; I&rsquo;m Annabeth</h1>
      <p>I blog about demigod childrens of greek gods and goddesses.</p>
    </section>
  );
};

export default Hero;
