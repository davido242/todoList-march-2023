import React from "react";

export default function Form({ input, setInput, todo, setTodo }) {
        const onInputChange = (event) => {
            setInput(event.target.value);
        }

        // const onFormSumit = (event) => {
        //     event.preventDefault();
        // }

    return (
        <form onSubmit={(event) => (event.preventDefault())}>
            <input type="text" placeholder="Enter a todo....." className="task-input" 
                value={input} 
                required
                onChange={onInputChange}

            />
            <button className="button-add" type="submit">Add</button>
        </form>
    )
}