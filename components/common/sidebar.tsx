"use client";

import { useState } from "react";

import { Transition } from "@headlessui/react";

import BackgroundCircles from "./background-circles";
import SidebarContent from "./sidebar-content";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Transition
        className="fixed inset-0 z-50 flex items-start justify-start overflow-hidden overflow-y-hidden md:hidden"
        show={open}
        enter="transform transition ease-in-out duration-500"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-500 delay-100"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="relative h-screen w-[88%] overflow-hidden bg-white px-[37px]">
          <BackgroundCircles className="-ml-[calc(100%+50px)] mt-[200vh]" />

          <SidebarContent />
        </div>
        <div onClick={handleClose} className="h-screen w-[12%]" />
      </Transition>
    </div>
  );
};

export default Sidebar;
