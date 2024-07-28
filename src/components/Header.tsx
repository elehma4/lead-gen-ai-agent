'use client'

import { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Transition,
} from "@headlessui/react";
import logo from "../../public/logo.png";

export default function Header () {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header
      id="page-header"
      className="z-1 flex flex-none items-center bg-white shadow-sm dark:bg-gray-800"
    >
    <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between py-4">
        {/* Left Section */}
        <div className="flex items-center">
            {/* Logo */}
            <a
            href="#"
            className="group inline-flex items-center gap-2"
            >
            <img
                className="inline-block size-10 transition group-hover:scale-110"
                aria-hidden="true"
                src={logo.src}
            >
            </img>
            <span>Lead Gen AI Agent</span>
            </a>
            {/* END Logo */}
        </div>
        {/* END Left Section */}

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-5">
            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-2 lg:flex">
            <a
                href="/dashboard"
                className="group flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 dark:border-transparent dark:bg-gray-700 dark:text-white"
            >
                <svg
                className="hi-mini hi-home inline-block size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clipRule="evenodd"
                />
                </svg>
                <span>Dashboard</span>
            </a>
            <a
                href="/search"
                className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
                <svg
                    className="hi-mini hi-search inline-block size-5 opacity-25 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 110 8 4 4 0 010-8zM2 8a6 6 0 1110.293 4.293l4.32 4.32a1 1 0 01-1.414 1.414l-4.32-4.32A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>Keyword Search</span>
            </a>
            <a
                href="/reports"
                className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
                <svg
                    className="hi-mini hi-folder inline-block size-5 opacity-25 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M4 4a2 2 0 012-2h4l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
                <span>Agent Reports</span>
            </a>
            <a
                href="/lead-manager"
                className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
                <svg
                    className="hi-mini hi-users inline-block size-5 opacity-25 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                </svg>
                <span>Lead Manager</span>
            </a>
            <a
                href="/lead-outreach"
                className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
                <svg
                    className="hi-mini hi-mail inline-block size-5 opacity-25 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM20 6l-8 5-8-5h16zM4 18V8l8 5 8-5v10H4z"/>
                </svg>
                <span>Lead Outreach</span>
            </a>
            </nav>
            {/* END Desktop Navigation */}

            {/* User Dropdown */}
            <Menu as="div" className="relative inline-block">
            {/* Dropdown Toggle Button */}
            <MenuButton className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700">
                <span>Ethan</span>
                {/* <svg
                className="hi-mini hi-chevron-down inline-block size-5 opacity-40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                >
                <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                />
                </svg> */}
            </MenuButton>
            {/* END Dropdown Toggle Button */}

            {/* Dropdown */}
            {/* <Transition
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
            >
                <MenuItems
                modal={false}
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none dark:shadow-gray-900"
                >
                <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black/5 dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700">
                    <div className="space-y-1 p-2.5">
                    <MenuItem>
                        {({ focus }) => (
                        <a
                            href="#"
                            className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                                ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                            }`}
                        >
                            <svg
                            className="hi-mini hi-inbox inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                fillRule="evenodd"
                                d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                                clipRule="evenodd"
                            />
                            </svg>
                            <span className="grow">Inbox</span>
                            <div className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-blue-700 dark:border-blue-700 dark:bg-blue-700 dark:text-blue-50">
                            2
                            </div>
                        </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ focus }) => (
                        <a
                            href="#"
                            className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                                ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                            }`}
                        >
                            <svg
                            className="hi-mini hi-flag inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            >
                            <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                            </svg>
                            <span className="grow">Notifications</span>
                            <div className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-blue-700 dark:border-blue-700 dark:bg-blue-700 dark:text-blue-50">
                            5
                            </div>
                        </a>
                        )}
                    </MenuItem>
                    </div>
                    <div className="space-y-1 p-2.5">
                    <MenuItem>
                        {({ focus }) => (
                        <a
                            href="#"
                            className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                                ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                            }`}
                        >
                            <svg
                            className="hi-mini hi-user-circle inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                                clipRule="evenodd"
                            />
                            </svg>
                            <span className="grow">Account</span>
                        </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ focus }) => (
                        <a
                            href="#"
                            className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                                ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                            }`}
                        >
                            <svg
                            className="hi-mini hi-cog-6-tooth inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                fillRule="evenodd"
                                d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                            </svg>
                            <span className="grow">Settings</span>
                        </a>
                        )}
                    </MenuItem>
                    </div>
                    <div className="space-y-1 p-2.5">
                    <MenuItem>
                        {({ focus }) => (
                        <a
                            href="#"
                            className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                                ? "bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                            }`}
                        >
                            <svg
                            className="hi-mini hi-lock-closed inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                clipRule="evenodd"
                            />
                            </svg>
                            <span className="grow">Sign out</span>
                        </a>
                        )}
                    </MenuItem>
                    </div>
                </div>
                </MenuItems>
            </Transition> */}
            {/* END Dropdown */}
            </Menu>
            {/* END User Dropdown */}

            {/* Toggle Mobile Navigation */}
            <div className="lg:hidden">
            <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
            >
                <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="hi-solid hi-menu inline-block size-5"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            </div>
            {/* END Toggle Mobile Navigation */}
        </div>
        {/* END Right Section */}
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
        <nav className="flex flex-col gap-2 border-t border-gray-200 py-4 dark:border-gray-700">
            <a
                href="/dashboard"
                className="group flex items-center gap-2 rounded-lg border border-blue-50 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
            >
                <svg
                    className="hi-mini hi-home inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>Dashboard</span>
            </a>
            <a
                href="/search"
                className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
                <svg
                    className="hi-mini hi-search inline-block size-5 opacity-25 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 110 8 4 4 0 010-8zM2 8a6 6 0 1110.293 4.293l4.32 4.32a1 1 0 01-1.414 1.414l-4.32-4.32A6 6 0 012 8z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>Keyword Search</span>
            </a>
            <a
                href="/reports"
                className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
                <svg
                    className="hi-mini hi-folder inline-block size-5 opacity-25 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M4 4a2 2 0 012-2h4l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
                <span>Agent Reports</span>
            </a>
            <a
                href="/lead-manager"
                className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
                <svg
                    className="hi-mini hi-users inline-block size-5 opacity-25 group-hover:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                </svg>
                <span>Lead Manager</span>
            </a>
            <a
            href="/lead-outreach"
            className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 active:border-blue-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
            <svg
                className="hi-mini hi-mail inline-block size-5 opacity-25 group-hover:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM20 6l-8 5-8-5h16zM4 18V8l8 5 8-5v10H4z"/>
            </svg>
            <span>Lead Outreach</span>
            </a>
        </nav>
        </div>
        {/* END Mobile Navigation */}
    </div>
    </header>
  )
}