"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex items-center gap-x-2">
      <div className="w-full flex items-center gap-x-3">
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => onClick("google")}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
      </div>
      <div className="w-full flex items-center gap-x-3">
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => onClick("github")}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
