const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-[5rem] rounded-xl  bg-primary flex justify-center items-center">
      {children}
    </main>
  );
};
export default MainLayout;
