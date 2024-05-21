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

    { infinitive: "to begin", past: "began", participle: "begun" },
    { infinitive: "to bring", past: "brought", participle: "brought" },
    { infinitive: "to buy", past: "bought", participle: "bought" },
    { infinitive: "to give", past: "gave", participle: "gaven" },
    { infinitive: "to know", past: "knew", participle: "known" },
    { infinitive: "to pay", past: "paid", participle: "paid" },
    { infinitive: "to say", past: "said", participle: "said" },
    { infinitive: "to speak", past: "spoke", participle: "spoken" },
    { infinitive: "to tell", past: "told", participle: "told" },
    { infinitive: "to think", past: "thought", participle: "thought" },

    { infinitive: "to dress", past: "dressed", participle: "dressed" },
    { infinitive: "to end", past: "ended", participle: "ended" },
    { infinitive: "to finish", past: "finished", participle: "finished" },
    { infinitive: "to need", past: "needed", participle: "needed" },
    { infinitive: "to start", past: "started", participle: "started" },
    { infinitive: "to stay", past: "stayed", participle: "stayed" },
    { infinitive: "to talk", past: "talked", participle: "talked" },
    { infinitive: "to thank", past: "thanked", participle: "thanked" },
    { infinitive: "to wash", past: "washed", participle: "washed" },
    { infinitive: "to watch", past: "watched", participle: "watched" },

    { infinitive: "to drive", past: "drove", participle: "driven" },
    { infinitive: "to hold", past: "held", participle: "held" },
    { infinitive: "to keep", past: "kept", participle: "kept" },
    { infinitive: "to leave", past: "left", participle: "left" },
    { infinitive: "to meet", past: "met", participle: "met" },
    { infinitive: "to read", past: "read", participle: "read" },
    { infinitive: "to send", past: "sent", participle: "sent" },
    { infinitive: "to sleep", past: "slept", participle: "slept" },
    { infinitive: "to wear", past: "wore", participle: "worn" },
    { infinitive: "to write", past: "wrote", participle: "written" },

    { infinitive: "to answer", past: "answered", participle: "answered" },
    { infinitive: "to ask", past: "asked", participle: "asked" },
    { infinitive: "to carry", past: "carried", participle: "carried" },
    { infinitive: "to close", past: "closed", participle: "closed" },
    { infinitive: "to copy", past: "copied", participle: "copied" },
    { infinitive: "to count", past: "counted", participle: "counted" },
    { infinitive: "to excuse", past: "excused", participle: "excused" },
    { infinitive: "to follow", past: "followed", participle: "followed" },
    { infinitive: "to help", past: "helped", participle: "helped" },
    { infinitive: "to open", past: "opened", participle: "opened" },
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
