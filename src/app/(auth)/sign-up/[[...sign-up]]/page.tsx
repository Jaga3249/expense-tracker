import { SignUp } from "@clerk/nextjs";
import Authlayout from "../../layout";

const Page = () => {
  return (
    <Authlayout>
      <SignUp />
    </Authlayout>
  );
};
export default Page;
