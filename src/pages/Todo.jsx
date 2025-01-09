import React, { useState } from 'react';

export default function Todo() {
    const [value, setValue] = useState('');
    const [todo, setTodo] = useState([]);

    const handleClick = (id) => {
        const updatedTodo = todo.map((item, index) => {
            if (index === id) {
                return { ...item, isCompleted: !item.isCompleted };
            }
            return item;
        });
        setTodo(updatedTodo);
    };

    return (
        <>
            <h1>Todo</h1>
            <div>
                <input type='text' onChange={(e) => setValue(e.target.value)} />
                <button
                    onClick={() => {
                        setTodo((prev) => [...prev, { value: value, isCompleted: false }]);
                        setValue('');
                    }}
                >
                    Add Todo
                </button>
            </div>
            <div>
                <button>All</button>
                <button>Completed</button>
                <button>Pending</button>

                <ul>
                    {todo.map((todo, index) => (
                        <li
                            key={index}
                            className={todo.isCompleted ? 'completed' : ''}
                            onClick={() => handleClick(index)}
                        >
                            {todo.value}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

// import React, { useState } from 'react'

// export default function Todo() {
//     // const todos = ['get milk', 'get Water']
//     const [value,setValue] = useState('')
//     const [todo,setTodo] = useState([])

    
//     const handleClick = (id)=>{
//         const duplicateArray = [...todo];
//         const updatedTodo = duplicateArray.map((current)=>{
//             if(current.id===id){
//                 current.isCompleted =!current.isCompleted
//             }
//             return current
//         })
//         setTodo(updatedTodo)
//     }
//   return (
//     <>
//     <h1>Todo</h1>
//     <div>
//     <input type='text' onChange={(e)=>setValue(e.target.value)} ></input>
//     <button onClick={()=>{
//         // todos.push(todo)
//         setTodo((prev)=>{
//             // return [...prev,value]
//             return[...prev,{value: value, isCompleted: false}]
//         })
        
//         console.log(todo)
//     }}>Add Todo</button>
//     </div>
//     <div>
//         <button>All</button>
//         <button>Completed</button>
//         <button>Pending</button>

//         <ul>
//             {todo.map((todo)=>{
//                 return <li className={todo.isCompleted?'completed':""} onClick={() => handleClick(todo.id)} style={todo.isCompleted? {textDecoration: 'line-through'} : {}}>{todo.value}</li>
//             })}
//         </ul>


//         </div>
//     </>
//   )
// }


//     // const handleChange = (e) => {
//     //     setValue(e.target.value)
//     // }
//     // const handleClick = (e) => {
//     //     e.preventDefault()
//     //     setTodos([...todos,value])
//     //     setValue('')
//     // }



//         {/* <ul>
//             {todo.map((todo)=>{
//                 return <li className={id:new Date().valueOf ,todo.isCompleted ?'completed':""}>{todo.value}</li>
//             })}
//             {/* This will be the list of todos that are inside the todos array
//             const todos = ['get milk', 'get Water'] */}
//         {/* </ul> */}
//         {/* <ul>
//                 {todos.map((todo, index) => {
//                     return <li key={index}>{todo}</li>
//                 })}
//         </ul>
//      */}
