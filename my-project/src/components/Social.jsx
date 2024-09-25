import {
  FacebookIcon,
  GithubIcon,
  InstagrameIcon,
  LinkedInIcon,
} from "./icons";

export default function Social() {
  return (
    <div className="flex justify-center mt-10 flex-col">
      <h2 className="text-gray-500">Get Connected</h2>
      <div className="flex justify-center gap-8 mt-3">
        <span className="border-2 cursor-pointer hover:scale-125 hover:border-yellow-400 transition-transform duration-300 px-2 py-1 group rounded-full flex items-center justify-center w-8 h-8">
          <FacebookIcon className=" text-gray-400 " />
        </span>
        <span className="border-2 cursor-pointer hover:scale-125 hover:border-yellow-400 transition-transform duration-300 px-2 py-1 group rounded-full flex items-center justify-center w-8 h-8">
          <LinkedInIcon className="text-gray-500 " />
        </span>
        <span className="border-2 cursor-pointer hover:border-yellow-400 hover:scale-125 transition-transform duration-300 px-2 py-1 group rounded-full flex items-center justify-center w-8 h-8">
          <InstagrameIcon className="text-gray-500" />
        </span>
        <span className="border-2 cursor-pointer hover:border-yellow-400 hover:scale-125 transition-transform duration-300 px-2 py-1 group rounded-full flex items-center justify-center w-8 h-8">
          <GithubIcon className="text-gray-500" />
        </span>
      </div>
    </div>
  );
}
