import Link from "next/link";
import { use } from "react";

async function getTodoItem(id) {
  const res = await fetch(`https://dummyjson.com/todo/${id}`, {
    next: { revalidate: 10 },
  });
  const todo = await res.json();
  return todo;
}

const Todo = async ({ params }) => {
  const todo = await getTodoItem(params.id);

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <p className="w-8 h-8 bg-zinc-200 rounded-sm p-2 flex justify-center items-center">
          {todo.id}
        </p>
        <p>{todo.todo}</p>
      </div>

      <Link
        href="/todos"
        className="underline text-teal-500 underline-offset-2"
      >
        Back
      </Link>
    </div>
  );
};

export default Todo;

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/todos`);
  const { todos } = await res.json();

  return todos.map((todo) => ({
    id: todo.id.toString(),
  }));
}
