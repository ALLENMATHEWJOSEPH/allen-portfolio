import { FaLinkedinIn } from "react-icons/fa6";
import { RxGithubLogo } from "react-icons/rx";
import { SocialLinkProps } from "./types";

export const socialLinks: SocialLinkProps[] = [
  {
    icon: <RxGithubLogo className="h-4 w-4 font-semibold" />,
    username: "allenmathewjoseph",
    link: "https://github.com/allenmathewjoseph",
  },
  {
    icon: <FaLinkedinIn className="h-4 w-4 font-semibold" />,
    username: "Allen Mathew Joseph",
    link: "https://www.linkedin.com/in/allen-mathew-joseph",
  },
];