"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LayoutDashboard, PenBox, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
      }}
      className="flex justify-between items-center border-b-[0.5px] border-b-gray-100 shadow-sm px-4 sm:px-8 py-3 sm:py-4 cursor-pointer sticky top-0 bg-white z-50"
    >
      <Link href={"/"} className="flex items-center gap-2">
        <Wallet />
        <span className="font-medium">Expense Tracker</span>
        {/* <Image
          src={logo}
          alt="logo"
          height={50}
          width={60}
          className="sm:w-12 sm:h-12 w-9 h-9"
        /> */}
      </Link>

      <motion.div
        className="flex justify-center items-center gap-2.5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        {" "}
        <SignedIn>
          <Link href={"/dashboard"} className="cursor-pointer">
            <Button variant={"outline"}>
              <LayoutDashboard />
              <span className="hidden md:inline">Dashboard</span>
            </Button>
          </Link>
          <Link href={"/transaction/creae"} className="cursor-pointer">
            <Button variant={"outline"} className="bg-gray-200">
              <PenBox />
              <span className="hidden md:inline">Transaction</span>
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton forceRedirectUrl={"/dashboard"}>
            <Button variant={"outline"}>Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className="flex justify-center items-center"
          >
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-11 h-11", // larger avatar
                },
              }}
            />
          </motion.div>
        </SignedIn>
      </motion.div>
    </motion.div>
  );
};
export default Header;
