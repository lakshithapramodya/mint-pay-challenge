"use client";

import { Fragment, useState } from "react";

import { Transition, Dialog } from "@headlessui/react";

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

      <Transition show={open} as={Fragment}>
        <Dialog
          unmount={false}
          onClose={handleClose}
          className="fixed inset-0 z-20 w-[88%] overflow-hidden"
        >
          <div className="flex h-screen">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-in duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-20"
              entered="opacity-20"
              leave="transition-opacity ease-out duration-300"
              leaveFrom="opacity-20"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="bg-primaryText fixed inset-0 z-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 delay-100"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative h-screen w-full overflow-hidden bg-white px-[37px]">
                <BackgroundCircles className="-ml-[calc(100%+50px)] mt-[200vh]" />

                <SidebarContent />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Sidebar;
