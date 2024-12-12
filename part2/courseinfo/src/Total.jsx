const Total = ({ parts }) => {
    const sumOfExercises = parts.reduce((sum, currentVal) => {
        return sum + currentVal.exercises;
    }, 0);
    
    return (
        <p>
            <strong>total of {sumOfExercises} exericses</strong>
        </p>
    );
};

export default Total;
