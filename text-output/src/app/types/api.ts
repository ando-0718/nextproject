import { Text } from "./text"

export const addTodo = async (todo: Text): Promise<Text[]> => {
    const res = await fetch(`http://localhost:3002/texts`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
     });
    const newTodo = await res.json();
    // console.log(res);
    return newTodo;
}

export const getAllTodos = async (): Promise<Text[]> => {
    const res = await fetch(`http://localhost:3002/texts`, { cache: "no-store" });
    if(!res.ok) throw new Error('Network response was not ok.');
    const texts = await res.json();
    // console.log({texts});
    return texts;
}