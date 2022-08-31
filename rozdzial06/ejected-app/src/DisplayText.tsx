import React, { useState, FC } from "react";
import UserTodos from "./UserTodos";

interface DisplayTextProps {
    getUserFullname: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullname }) => {
    const [txt, setTxt] = useState("");
    const [msg, setMsg] = useState("");
    const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>();

    const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value);
    }

    const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setMsg(`Witaj na zajęciach z testowania Reacta, ${await getUserFullname(txt)}!`);
        //setTodoControl(<UserTodos username={txt} />);
    }

    /*
    const setUsersTodos = async () => {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        if(usersResponse.ok) {
            const users = await usersResponse.json();
            const userByName = users.find((usr: any) => {
                return usr.username.toLowerCase() === txt;
            });
            console.log("użytkownik pobrany po nazwie", userByName);

            const todosResponse = await
                fetch('https://jsonplaceholder.typicode.com/todos');
            if(todosResponse.ok) {
                const todos = await todosResponse.json();
                const usersTodos = todos.filter((todo:any) => {
                    return todo.userId === userByName.id;
                });
                const todoList = usersTodos.map((todo:any) => {
                    return <li key={todo.id}>
                        {todo.title}
                    </li>
                });
                setTodos(todoList);
                console.log("lista zadań użytkownika", usersTodos);
            }
        }
    }
    //*/

    return (
        <form>
            <div>
                <label>Jak masz na imię?</label>
            </div>
            <div>
                <input data-testid="user-input"
                    value={txt} onChange={onChangeTxt} />
            </div>
            <div>
                <button data-testid="input-submit"
                    onClick={onClickShowMsg}>Wyświetl komunikat</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label> 
            </div>
            <ul style={{marginTop: '1rem', listStyleType:'none'}}>
                {todoControl}
            </ul>
        </form>
    )
}
export default DisplayText; 