import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
   title: "project Next13",
   description: "Pagina de prueba donde se realiza",
   colorScheme: "dark",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Navbar />
            <main className="container mx-auto h-[calc(100vh-1rem)] flex justify-center items-center">
               {children}
            </main>
         </body>
      </html>
   );
}
