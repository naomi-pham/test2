import Link from "next/link";

const Header = () => {
  const navLinks = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "Todos",
      link: "/todos",
    },
  ];
  return (
    <div className="p-4 sm:px-8 bg-teal-500 text-zinc-50 flex gap-1">
      {navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="first-of-type:bg-teal-600 hover:bg-teal-700 py-2 px-4 rounded-full"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Header;
