import Link from "next/link";

const navbarItems = [
   {
      name: "Home",
      url: "/",
   },
   {
      name: "About",
      url: "/about",
   },
];
const Navbar = () => {
   return (
      <nav className="bg-slate-600  mb-4 flex justify-between items-center px-20 p-3 font-bold text-black fixed w-full">
         {navbarItems.map((item, index) => (
            <Link key={index} href={item.url}>
               {item.name}
            </Link>
         ))}
      </nav>
   );
};

export default Navbar;
