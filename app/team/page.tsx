"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useWindowSize from "../hooks/useWindowDimension";
import { motion } from "framer-motion";
import Image from "next/image";
import "../styles.css";
import avatar from "../assets/images/image-equilibrium.jpg";
import Logo from "../assets/images/logo.svg";
import { useState, useRef } from "react";

const teamMembers = [
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "A163FF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "4E9DFF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "4E9DFF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "A163FF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "4E9DFF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "4E9DFF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "A163FF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "A163FF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "4E9DFF",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "4E9DFF",
	},

	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},

	{
		image: avatar,
		name: "Robert \n Fox",
		background: "FF8000",
	},
	{
		image: avatar,
		name: "Robert \n Fox",
		background: "4E9DFF",
	},
];

const colors = ["#FF8000", "#4E9DFF", "#A163FF"];

const Box = ({ sideInPx }: { sideInPx: number }) => {
	return (
		<motion.div
			style={{
				border: "0.5px solid #E9E9E9",
				width: `${sideInPx}px`,
				height: `${sideInPx}px`,
			}}
			className={`box-${colors[Math.floor(Math.random() * 2.99)].substring(
				1
			)} relative opacity-50`}>
			<motion.div
				style={{
					position: "absolute",
					height: "100%",
					width: "100%",
					background: "white",
				}}
				className="box-inner"></motion.div>
		</motion.div>
	);
};

const TeamsPage = () => {
	const avatarImage = useRef<any>();
	const navbarLogo = useRef<any>();

	const { height, width } = useWindowSize();
	const [isNavbarOpen, setNavbarOpen] = useState(false);

	const setIsNavbarOpen = (state: boolean) => {
		setNavbarOpen(state);

		if (state && window) {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const scrollLeft =
				window.pageXOffset || document.documentElement.scrollLeft;

			window.onscroll = function () {
				window.scrollTo(scrollLeft, scrollTop);
			};
		} else {
			window.onscroll = function () {};
		}
	};

	let sideInPx = 40;

	const cols = Math.floor(Math.min(width, 1440) / sideInPx);
	const extraWidth = Math.min(width, 1440) - cols * sideInPx;

	sideInPx += extraWidth / cols;

	const rows = Math.ceil(height / sideInPx);

	return (
		<div className="max-w-screen-xl">
			<div className="container-1440">
				<div className="absolute top-0 overflow-hidden max-h-[100vh]">
					{Array.from({ length: rows }).map((_, rowIndex) => (
						<div key={rowIndex} className="flex ">
							{Array.from({ length: cols }).map((_, colIndex) => (
								<Box sideInPx={sideInPx} key={`${rowIndex}-${colIndex}`} />
							))}
						</div>
					))}
				</div>
			</div>
			<div className="relative top-0 left-0 w-full pointer-events-none">
				<header>
					<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
						<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
							<a href="" className="flex items-center">
								<Image
									ref={navbarLogo}
									src={Logo}
									className="mr-3 h-6 sm:h-9"
									alt="HackThisFall Logo"
								/>
							</a>
							<div
								className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
								id="mobile-menu-2">
								<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-[#676767] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
											aria-current="page">
											Home
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-[#676767] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
											Events
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-[#676767] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
											Blogs
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-[#676767] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
											Team
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-[#676767] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
											Swag
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block py-2 pr-4 pl-3 text-[#676767] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
											Contact us
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
				<div className="relative top-0 left-0 w-full container-1440">
					<h1 className="leading-snug m-20 text-4xl font-bold text-center">
						Hack This Fall Team
					</h1>
					<div className="w-full px-10 mb-20">
						<div className="grid place-content-center sm:grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 grid-cols-5 mx-auto">
							{teamMembers.map((item, index) => (
								<div key={index} className="box relative">
									<Image
										className="border-4 border-transparent rounded-2xl"
										ref={avatarImage}
										src={avatar}
										alt="team-member"
									/>
									<div
										className={`name ps-3 whitespace-pre-line bg-[#${item.background}] p-x-2 w-2/3 rounded-tr-lg rounded-bl-lg absolute bottom-0 left-0 text-[18px] text-white font-semibold bg-orange`}>
										{item.name}
									</div>
								</div>
							))}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default TeamsPage;
