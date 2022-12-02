import React from "react";
import { Button } from "@chakra-ui/react";
function Header() {
  return (
    <div className="w-screen h-[80px] border border-b-slate-300 flex items-center justify-end">
      <div className="mr-4 xl:mr-6 ml-4 xl:ml-6">
        <Button className=" mr-4" colorScheme="purple" variant="outline">
          Login
        </Button>

        <Button className="mr-2" colorScheme="purple">
          Signup
        </Button>
      </div>
    </div>
  );
}

export default Header;
