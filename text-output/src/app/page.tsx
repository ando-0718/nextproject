import { getAllTodos } from "./types/api";
import AddText from "./components/AddText";
import TodoList from "./components/TodoList";




export default async function Home() {
  const texts = await getAllTodos();
  return (
    <main>
      <div>
        <TodoList texts={texts}/>
        <AddText />
      </div>
    </main>
  );
}
