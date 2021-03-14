import React from "react";

interface Props {
    onClick: () => void
    text: string
}

const buttonStyle = {
    backgroundColor: 'blue',
    borderRadius: 30,
    color: "white",
    padding: 10,
    margin: 10,
    width: 100,
    border: "black"
};


export const Button = (props: Props) => {
    return <button onClick={props.onClick} style={buttonStyle}>{props.text}</button>
}
