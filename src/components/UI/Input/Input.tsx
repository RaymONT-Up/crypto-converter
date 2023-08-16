import { FC, ChangeEvent, forwardRef, Ref } from "react";
import cls from "./Input.module.scss";
import classNames from "../../../utils/classNames/classNames";

export enum InputType {
  text = "text",
  number = "number",
  email = "email",
}

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: InputType;

  value: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = forwardRef(
  (props, ref: Ref<HTMLInputElement>) => {
    const { className, value, type, onChangeHandler } = props;
    return (
      <input
        ref={ref} // Применяем ref к элементу input
        type={type}
        className={classNames(cls.Input, {}, [className || ""])}
        value={value}
        onChange={onChangeHandler}
      />
    );
  }
);

export default Input;
