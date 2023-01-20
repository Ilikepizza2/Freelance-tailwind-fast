import React from "react";

const Navbar = () => {
  return (
    <header className="flex-col flex-wrap container w-80 items-start justify-between shadow-md sticky top-0 z-50 font-poppins px-8 hidden md:flex">
      <div className="flex flex-col justify-around h-[100vh] items-start w-full">
        <div className="flex justify-start items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-10 h-10" />
          <div className="text-xl">Untitled UI</div>
        </div>
        <div>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src="/search.svg" alt="search" className="w-5 h-5" />
            </span>
            <input
              className="placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors">
            <img src="/home.svg" alt="home" className="w-5 h-5" />
            <div>Home</div>
          </div>
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors">
            <img src="/dashboard.svg" alt="dashboard" className="w-5 h-5" />
            <div>Dashboard</div>
            <div className="text-sm ml-auto bg-gray-100 px-3 py-1 rounded-md">10</div>
          </div>
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors">
            <img src="/projects.svg" alt="projects" className="w-5 h-5" />
            <div>Projects</div>
          </div>
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors">
            <img src="/tasks.svg" alt="tasks" className="w-5 h-5" />
            <div>Tasks</div>
          </div>
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors">
            <img src="/reporting.svg" alt="reporting" className="w-5 h-5" />
            <div>Reporting</div>
          </div>
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors">
            <img src="/users.svg" alt="users" className="w-5 h-5" />
            <div>Users</div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors">
            <img src="/support.svg" alt="support" className="w-5 h-5" />
            <div>Support</div>
          </div>
          <div className="flex items-center gap-3 text-lg  rounded-md w-full p-2 hover:bg-slate-100 cursor-pointer transition-colors bg-slate-100">
            <img src="/settings.svg" alt="settings" className="w-5 h-5" />
            <div>Settings</div>
          </div>
        </div>
        <div className="bg-slate-100 p-3 flex flex-col gap-2  rounded-md">
          <div className="font-bold text-sm">New features available!</div>
          <div className="text-sm text-gray-600">
            Check out the new dashboard view. Pages now load faster.{" "}
          </div>
          <img src="/woman.jpg" alt="banner" className="w-full" />
          <div className="flex gap-2">
            <a href="#" className="text-gray-600">
              Dismiss
            </a>
            <a href="#" className="text-purple-800">
              What's new?
            </a>
          </div>
        </div>
        <hr className="w-full h-1" />
        <div className="">
          <div className="flex gap-2">
            <div>
              <img
                src="/user.svg"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-sm">John Doe</div>
              <div className="text-xs text-gray-600">olivia@untitleui.com</div>
            </div>
            <div>
              <img src="/arrow.svg" alt="arrow" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
