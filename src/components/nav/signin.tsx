"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { BiLogOutCircle } from "react-icons/bi";

export const Signin = () => {
  const { data: session } = useSession();

  if (session?.user === undefined) return <div>Signin</div>;

  return (
    <div className=" flex gap-3 items-center p-2">
      <Image
        src={session.user!.image!}
        alt={session.user.name!}
        width={100}
        height={100}
        className="w-[9vw] h-[4vh] rounded-full "
      />

      <button
        onClick={() => signOut()}
        className="text-red-500 text-xl   text-center"
      >
        <BiLogOutCircle />
      </button>
    </div>
  );
};
