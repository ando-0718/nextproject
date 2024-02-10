import { addTodo } from "../types/api";
import { v4 as uuidv4 } from "uuid"

const AddText = () => {
    const addhandle = async(data: FormData) => {
        'use server';
        const name = data.get('name') as string;
        if(!name) return;
        await addTodo({ id: uuidv4(), text: name });
    }
    return (
        <div>
            <form action={addhandle}>
                <input type="text" id="myInput" name="name" />
                <button type="submit">送信</button>
            </form>
        </div>
    );
}

export default AddText;