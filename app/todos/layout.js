const Layout = ({ children }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-5 uppercase">My to-do</h2>
      {children}
    </div>
  );
};

export default Layout;
