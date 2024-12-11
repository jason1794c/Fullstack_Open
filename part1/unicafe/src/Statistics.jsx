import StatisticLine from "./StatisticLine";

const Statistics = ({
    good,
    neutral,
    bad,
    totalClicks,
    average,
    positivePct,
}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <>
                {totalClicks === 0 ? (
                    <p>No feedback given</p>
                ) : (
                    <>
                        <StatisticLine text={"good"} value={good} />
                        <StatisticLine text={"neutral"} value={neutral} />
                        <StatisticLine text={"bad"} value={bad} />
                        <StatisticLine text={"all"} value={totalClicks} />
                        <StatisticLine text={"average"} value={average} />
                        <StatisticLine text={"positive"} value={positivePct} />
                    </>
                )}
            </>
        </div>
    );
};

export default Statistics;
