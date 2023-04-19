import { Button } from "../components";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
const Auth = () => {
  const { data: session } = useSession();
  console.log(session, "session");
  if (session) {
    return (
      <>
        <div className=" w-[30%] sm:w-[20%] mx-auto mt-48">
          <Button title="Sign out" onClicke={() => signOut()} />
        </div>
      </>
    );
  }

  return (
    <div className=" w-[30%] sm:w-[20%] mx-auto mt-48">
      <Button
        title="Signin with GitHub"
        onClicke={() => signIn("github")}
        Icons={<AiFillGithub className=" text-white text-xl" />}
      />
    </div>
  );
};

export default Auth;
