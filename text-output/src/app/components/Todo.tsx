import { Text } from "../types/text";

interface TextProps {
    text: Text
}

const Todo = ({ text }: TextProps) => {
    return (
        <div>
            <li>
            <span>{text.text}</span>
            </li>
        </div>
    );
}

export default Todo;