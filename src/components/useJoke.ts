import { useEffect, useState } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const useJoke = () => {
  const [joke, setJoke] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data: Joke) => {
        setJoke(data.setup + " " + data.punchline);
      });
  }, []);

  return joke;
};
