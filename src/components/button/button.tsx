import React, { MouseEvent } from "react";
import "./button.css";

export enum ButtonType {
  "button-green",
  "button-white",
  "button-clear",
  "button-clearAlt",
}

export enum ButtonTextType {
  "button-text-white",
  "button-text-green",
  "button-text-grey",
}

interface ButtonProps {
  text: string;
  buttonType: keyof typeof ButtonType;
  textType: keyof typeof ButtonTextType;
  onPress?: (event: MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonType,
  textType,
  onPress,
}) => {
  return (
    <button onClick={onPress} className='App-button' id={buttonType}>
      <p className='App-button-text' id={textType}>
        {text}
      </p>
    </button>
  );
};

export default Button;
