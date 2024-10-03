import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import dayjs from "dayjs";
import { HiOutlineMenuAlt4, HiOutlineUsers } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCalendar } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import AddTime from "./add-time";

interface EventPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
}

export default function EventPopover({
  isOpen,
  onClose,
  date,
}: EventPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);


  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        ref={popoverRef}
        className="w-full max-w-md rounded-lg bg-white shadow-lg"
        onClick={handlePopoverClick}
      >
        <div className="mb-2 flex items-center justify-between rounded-md bg-slate-100 p-1">
          <HiOutlineMenuAlt4 />
          <Button variant="ghost" size="icon" type="button" onClick={handleClose}>
            <IoCloseSharp className="h-4 w-4" />
          </Button>
        </div>
        <form className="space-y-4 p-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Input
              type="text"
              placeholder="Add title"
              className="my-4 rounded-none border-0 border-b text-2xl focus-visible:border-b-2 focus-visible:border-b-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button className="bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700">
              Event
            </Button>
            <Button variant="ghost">Task</Button>
            <Button variant="ghost">
              Appointmet Schedule <sup className="bg-blue-500">new</sup>
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <FiClock className="size-5 text-gray-600" />
            <div className="flex items-center space-x-3 text-sm">
              <p>{dayjs(date).format("dddd, MMMM D")}</p> <AddTime />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <HiOutlineUsers className="size-5 text-slate-600" />
            <Input
              type="search"
              placeholder="Add guests"
              className="w-full rounded-lg border-0 bg-slate-100 pl-7 placeholder:text-slate-600 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex items-center space-x-3">
            <IoMdCalendar className="size-5 text-slate-600" />
            <div className="">
              <div className="flex items-center space-x-3 text-sm">
                {" "}
                <p>De Mawo</p>{" "}
                <div className="h-4 w-4 rounded-full bg-violet-500"></div>{" "}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <span>Busy</span>
                <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                <span>Default visibility</span>{" "}
                <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                <span>Notify 30 minutes before</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
