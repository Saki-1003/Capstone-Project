import { Roboto } from "next/font/google";
import "./globals.css";
import { LoginContextProvider } from "@/context/LoginContext";
import { WishlistContextProvider } from "@/context/WishlistContext";
import InitializeContextData from "@/components/InitializeContextData";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";

const roboto = Roboto({ subsets: ["latin"], weight:"400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children
}) {


  return (
    <html lang="en">
      <body className={roboto.className}>
        <LoginContextProvider>
          <WishlistContextProvider>
            <ShoppingCartContextProvider>
                <InitializeContextData />
                {children}
            </ShoppingCartContextProvider>
          </WishlistContextProvider>
        </LoginContextProvider>
      </body>
    </html>
  );
}
