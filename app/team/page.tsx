"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import avatar from "../assets/images/image-equilibrium.jpg";
import { useRef } from "react";

const TeamsPage = () => {
	const avatarImage = useRef<any>();

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
	return (
		<div>
			<header></header>
			<h1 className="m-20 text-4xl font-bold text-center">
				Hack This Fall Team
			</h1>
			<div className="container grid place-content-center grid-cols-5">
				{teamMembers.map((item, index) => (
					<div key={index} className="box m-5 w-52 relative">
						<Image
							className="border-4 border-transparent rounded-2xl"
							ref={avatarImage}
							src={avatar}
							alt="team-member"
						/>
						<div className={`name ps-3 whitespace-pre-line bg-[#${item.background}] p-x-2 w-2/3 rounded-tr-lg rounded-bl-lg absolute bottom-0 left-0 text-[18px] text-white font-semibold bg-orange`}>
							{item.name}
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default TeamsPage;
