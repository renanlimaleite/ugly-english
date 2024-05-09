"use client";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";

type Verbs = {
  infinitive: string;
  past: string;
  participle: string;
};

function randomizeVerbs(verbs: Verbs[]) {
  return verbs.map((verb) => {
    const keys = ["infinitive", "past", "participle"];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    return {
      infinitive: randomKey === "infinitive" ? verb.infinitive : "",
      past: randomKey === "past" ? verb.past : "",
      participle: randomKey === "participle" ? verb.participle : "",
    };
  });
}

export default function Home() {
  const [verbs, setVerbs] = useState([
    { infinitive: "to be", past: "was, were", participle: "been" },
    { infinitive: "to come", past: "came", participle: "come" },
    { infinitive: "to do", past: "did", participle: "done" },
    { infinitive: "to drink", past: "drank", participle: "drunk" },
    { infinitive: "to eat", past: "ate", participle: "eaten" },
    { infinitive: "to get", past: "got", participle: "gotten" },
    { infinitive: "to go", past: "went", participle: "gone" },
    { infinitive: "to have", past: "had", participle: "had" },
    { infinitive: "to make", past: "made", participle: "made" },
    { infinitive: "to take", past: "took", participle: "taken" },

    { infinitive: "to arrive", past: "arrived", participle: "arrived" },
    { infinitive: "to call", past: "called", participle: "called" },
    { infinitive: "to like", past: "liked", participle: "liked" },
    { infinitive: "to live", past: "lived", participle: "lived" },
    { infinitive: "to love", past: "loved", participle: "loved" },
    { infinitive: "to play", past: "played", participle: "played" },
    { infinitive: "to study", past: "studied", participle: "studied" },
    { infinitive: "to walk", past: "walked", participle: "walked" },
    { infinitive: "to want", past: "wanted", participle: "wanted" },
    { infinitive: "to work", past: "worked", participle: "worked" },

    // { infinitive: "to read", past: "read", participle: "read" },
    // { infinitive: "to see", past: "saw", participle: "seen" },
    // { infinitive: "to speak", past: "spoke", participle: "spoken" },
    // { infinitive: "to take", past: "took", participle: "taken" },
    // { infinitive: "to write", past: "wrote", participle: "written" },
  ]);

  const randomizedVerbs = randomizeVerbs(verbs);

  const [inputs, setInputs] = useState(randomizedVerbs);

  const handleChange = (index: number, field: string, value: string) => {
    const newInputs = [...inputs];
    newInputs[index][field as keyof Verbs] = value;
    setInputs(newInputs);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let incorrectLine = -1;

    const isCorrect = inputs.every((input, index) => {
      const verb = verbs[index];

      const correct =
        input.infinitive.toLowerCase() === verb.infinitive.toLowerCase() &&
        input.past.toLowerCase() === verb.past.toLowerCase() &&
        input.participle.toLowerCase() === verb.participle.toLowerCase();

      if (!correct) {
        incorrectLine = index + 1;
      }

      return correct;
    });

    if (isCorrect) {
      alert("All inputs are correct.");
    } else {
      alert(`Input at line ${incorrectLine} is incorrect.`);
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <table>
          <thead>
            <tr>
              <th>Infinitive</th>
              <th>Past</th>
              <th>Participle</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((verb, index) => (
              <>
                <strong>{index + 1}</strong>
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={verb.infinitive}
                      onChange={(e) =>
                        handleChange(index, "infinitive", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={verb.past}
                      onChange={(e) =>
                        handleChange(index, "past", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={verb.participle}
                      onChange={(e) =>
                        handleChange(index, "participle", e.target.value)
                      }
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
