import { Text } from "../types/text";
import Todo from "./Todo";


interface TodoListProps {
    texts: Text[],
}

const TodoList = ({ texts }: TodoListProps) => {
    return (
        <div>
           <ul>
                {texts.map((text) => (
                    <Todo key={text.id} text={text} />
                ))}
           </ul>
        </div>
    );
}

export default TodoList;