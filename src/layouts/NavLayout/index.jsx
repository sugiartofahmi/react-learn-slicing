const NavLayout = ({ children }) => {
  return (
    <main className="sticky w-full h-[5rem] rounded-xl flex flex-row  bg-primary justify-between px-[45px] items-center">
      {children}
    </main>
  );
};
export default NavLayout;
