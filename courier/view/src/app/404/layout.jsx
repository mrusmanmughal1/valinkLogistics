import Navbar from "@/components/Navbar";
import NavLinks from "@/UI/NavLinks";

 


export const metadata = {
  title: "About Us  ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}