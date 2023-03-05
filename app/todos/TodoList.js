import Link from "next/link";
import { use } from "react";

async function getTodos() {
  const res = await fetch("https://dummyjson.com/todos");
  const { todos } = await res.json();
  return todos;
}

const TodoList = () => {
  let todos = use(getTodos());

  return (
    <div>
      <ul className="space-y-5">
        {todos?.map((item) => (
          <li key={item.id}>
            <Link href={`todos/${item.id}`} className="flex gap-2 items-center">
              <span className="w-8 h-8 bg-zinc-200 rounded-sm p-2 flex justify-center items-center">
                {item.id}
              </span>
              <span className="hover:underline hover:text-teal-500 underline-offset-2">
                {item.todo}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
