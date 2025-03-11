import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "LearnUp",
  description: "A platform to learn anything - structured and free.",
};

export default function RootLayout({ children }) {
  

  const footer = (
    <footer className = {'p-4 sm:p-8 grid place-items-center'}> 
      <p>Made with ❤️ @ <a className="textGradient" href=" https://github.com/itmesneha/learnup">LearnUp</a></p>
      {/* className = {'text-indigo-600 ' + fugaz.className} */}
    </footer>
  )

  return (
    <html lang="en">
      <body className={'w-screen w-full text-sm sm:text-base min-h-screen flex text-slate-600 ' + inter.className}> 
        <Sidebar />
        <div className = {'flex flex-col flex-1 p-4 sm:p-8'}>
        {children}
        {footer}
        </div>
      </body>
    </html>
  );
}
