import  React  from 'react';
import { CreateTodo } from "./create_todo";
//const [links, setLinks] = React.useState(props.links)
import { Card, Typography, Box } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

const initialTodos = [
  "Figma проекта ",
  "GitHub проекта ",
  "БД проекта ",
  "Задачи проекта ",
];

function Favorites() {
    const [todos, setTodos] = React.useState<string[]>(initialTodos);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };


    return (

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 id="title" className="text-lg font-bold mb-2">Ссылки </h1>
          <ul aria-labelledby="title" className="list-disc list-inside mb-4">
             {todos.map((todo) => (
               <li key= {todo}> {todo} </li>
             ))}
          </ul>
          <button
               onClick={() => setOpen(true)}
               className="bg-gray-900 text-white p-2 rounded rounded-md px-3 py-2 text-sm font-medium"
            >
             Добавить
            </button>

            <CreateTodo
               open={open}
               onClose={(value) => {
               setOpen(false);
               if (value) setTodos([...todos, value]);
               }}
            />
            {/* <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              message="Новая ссылка добавлена и сохранена"
            /> */}
            </div>

    );
  }

  export default Favorites;
