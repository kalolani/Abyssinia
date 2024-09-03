/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { VscCalendar } from "react-icons/vsc";
import { GrUserAdmin } from "react-icons/gr";
import software from "../assets/images/software.jpg";
import school_management from "../assets/images/school management.jpg";
import EPR from "../assets/images/EPR.jpg";
const StoreContext = createContext();

function StoreProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const content = [
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: software,
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Abyssinia Software Solutions Launches New Innovative Software",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: school_management,
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Special Discount on School Management System Subscriptions",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: EPR,
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Get 50% Off on ERP System Subscriptions for One Month!",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: software,
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Abyssinia Software Solutions Launches New Innovative Software",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: school_management,
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Special Discount on School Management System Subscriptions",
    },
    {
      // text: "Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists stay in touch with what's happening.",
      img: school_management,
      calanderIcon: (
        <VscCalendar className="hover:cursor-pointer hover:fill-btn-bg-main transition-all duration-[300ms]" />
      ),
      adminIcon: (
        <GrUserAdmin className="hover:cursor-pointer hover:text-btn-bg-main transition-all duration-[300ms]" />
      ),
      date: "8 11 2024",
      name: "admin",
      title: "Special Discount on School Management System Subscriptions",
    },
  ];

  console.log(isOpen);
  function handleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <StoreContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleIsOpen,
        content,
        showPages,
        setShowPages,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStores() {
  const context = useContext(StoreContext);
  if (context === undefined) throw new Error("context used outside of scope");
  return context;
}

export { StoreProvider, useStores };
