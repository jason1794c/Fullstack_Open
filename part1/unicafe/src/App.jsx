import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

function App() {
    // Save clicks from each button
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);
    const [average, setAverage] = useState(0);
    const [positivePct, setPositivePct] = useState(0);

    const handleClick = (text) => {
        return () => {
            // Temp variables
            let tempGood = good;
            let tempNeutral = neutral;
            let tempBad = bad;

            if (text === "good") {
                tempGood++;
                setGood(tempGood);
            } else if (text === "neutral") {
                tempNeutral++;
                setNeutral(tempNeutral);
            } else if (text === "bad") {
                tempBad++;
                setBad(tempBad);
            }

            const tempTotalClicks = tempGood + tempNeutral + tempBad;
            const tempAverage =
                ((tempGood * 1 + tempNeutral * 0 + tempBad * -1) /
                tempTotalClicks).toFixed(1);
            const tempPositivePct = ((tempGood / tempTotalClicks) * 100).toFixed(1);

            setTotalClicks(tempTotalClicks);
            setAverage(tempAverage);
            setPositivePct(tempPositivePct);
        };
    };

    return (
        <>
            <div>
                <h2>Give Feedback</h2>
                <Button text="good" onClick={handleClick("good")} />
                <Button text="neutral" onClick={handleClick("neutral")} />
                <Button text="bad" onClick={handleClick("bad")} />
            </div>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                totalClicks={totalClicks}
                average={average}
                positivePct={positivePct}
            />
        </>
    );
}

export default App;
