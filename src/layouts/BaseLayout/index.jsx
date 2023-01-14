const BaseLayout = ({ children }) => {
  return (
    <main className="w-full h-screen flex  gap-4 justify-center items-center">
      {children}
    </main>
  );
};
export default BaseLayout;
