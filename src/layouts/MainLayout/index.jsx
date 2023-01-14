const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex flex-col p-6  items-center">
      {children}
    </main>
  );
};
export default MainLayout;
