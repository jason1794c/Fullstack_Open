const StatisticLine = ({ text, value }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td style={{width: "70px"}}>{text}</td>
                    <td>{value}{text === "positive" ? "%" : ""}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default StatisticLine;