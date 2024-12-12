import { useState } from "react";
import Button from "./Button";

function App() {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];
    const votes = {};

    // Populating votes object
    for (let i = 0; i < anecdotes.length; i++) {
        votes[i] = 0;
    }

    const [selected, setSelected] = useState(0);
    const [votesState, setVotes] = useState(votes);
    const [mostVotesAnec, setMostVotesAnec] = useState(anecdotes[0]);

    const handleClick = (buttonText) => {
        if (buttonText === "next anecdote") {
            return () =>
                setSelected(Math.floor(Math.random() * anecdotes.length));
        } else if (buttonText === "vote") {
            return () => {
                const copyVotes = { ...votesState };
                copyVotes[selected] += 1;

                setVotes(copyVotes);

                // Determine the anecdote with the most votes
                setMostVotesAnec(anecdotes[Object.keys(copyVotes).reduce((maxIdx, currentIdx) => copyVotes[maxIdx] > copyVotes[currentIdx] ? maxIdx : currentIdx)]);
            };
        }
    };


    return (
        <>
            <div>
                <h1>Anecdote of the day</h1>
                <p>
                    {anecdotes[selected]}
                    <br />
                    {`has ${votesState[selected]} votes.`}
                </p>
            </div>
            <div>
                <Button
                    handleClick={handleClick("next anecdote")}
                    text="next anecdote"
                />
                <Button handleClick={handleClick("vote")} text="vote" />
            </div>
            <div>
              <h1>Anecdote with most votes</h1>
              <p>{mostVotesAnec}</p>
            </div>
        </>
    );
}

export default App;
