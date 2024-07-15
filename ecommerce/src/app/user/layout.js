import { Roboto } from "next/font/google";


const roboto = Roboto({ subsets: ["latin"], weight:"400" });

export default function LoginLayout({ 
  children, 
  login,
  signup,
  admin
}) {

  // const isRegistered = checkUserReg()
  // const isRegistered = false
  // const isAdmin = true


  return (
    <>
       {/* {isAdmin ? admin : login} */}
       {/* {isRegistered ? login : signup} */}
       {children}
    </>
     

  );
}
