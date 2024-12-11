const Button = ({ text, onClick }) => {

    return (
        <button style={{margin: "1px", borderRadius: "4px"}}onClick={onClick}>{text}</button>
    )
}

export default Button;