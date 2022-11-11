import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  //create random color in hex format
  const creatRdmColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const createRmdColorArray = () => {
    const colorArray: string[] = [];
    for (let i = 0; i < 3; i++) {
      colorArray.push(creatRdmColor());
    }
    return colorArray;
  };

  const [colors, setColors] = useState([""]);
  useEffect(() => setColors(createRmdColorArray()), []);

  const [dispayedColor, setDispayedColor] = useState("");
  useEffect(
    () =>
      setDispayedColor(
        colors[Math.floor(Math.random() * (colors.length - 1))] || ""
      ),
    [colors]
  );

  const [guessedWrong, setguessedWrong] = useState(false);

  const handleClick = (clickedColor: string) => {
    if (clickedColor === dispayedColor) {
      setguessedWrong(false);
      console.log("correct");
      const newColors = createRmdColorArray();
      setColors(newColors);
      setDispayedColor(
        newColors[Math.floor(Math.random() * (newColors.length - 1))] || ""
      );
    } else {
      setguessedWrong(true);
      console.log("wrong");
    }
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <p className="mb-3 text-2xl text-gray-700">This stack uses:</p>
        <div>color in hex: {dispayedColor}</div>
        <div className="p-6" style={{ backgroundColor: dispayedColor }}></div>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-1/4">
          <button onClick={() => handleClick(colors[0] || "")}>
            {colors[0]}
          </button>
          <button onClick={() => handleClick(colors[1] || "")}>
            {colors[1]}
          </button>
          <button onClick={() => handleClick(colors[2] || "")}>
            {colors[2]}
          </button>
        </div>
        {guessedWrong && <div>Try Again</div>}
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  description,
  documentation,
}) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
