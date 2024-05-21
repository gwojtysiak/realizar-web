import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
	FaAws,
	FaCss3,
	FaReact,
	FaHtml5,
	FaCogs,
	FaNodeJs,
	FaPhp,
} from "react-icons/fa";
import {
	TbHome,
	TbBrandTypescript,
	TbBrandRedux,
	TbBrandFramerMotion,
} from "react-icons/tb";
import { RiUser3Line, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import {
	SiExpress,
	SiPrisma,
	SiMongodb,
	SiMobx,
	SiGraphql,
	SiApollographql,
	SiPostgresql,
} from "react-icons/si";

export const links = [
	{
		name: "Home",
		hash: "#home",
		icon: React.createElement(TbHome),
	},
	{
		name: "About",
		hash: "#about",
		icon: React.createElement(RiUser3Line),
	},
	{
		name: "Skills",
		hash: "#skills",
		icon: React.createElement(FaReact),
	},
	{
		name: "Experience",
		hash: "#experience",
		icon: React.createElement(FaCogs),
	},
	{
		name: "Contact",
		hash: "#contact",
		icon: React.createElement(GrContact),
	},
] as const;

export const experiencesData = [
	{
		title: "Technical Lead",
		company: "Respo",
		techStack:
			"React, React Native, Node.js, Next.js, MySQL, MongoDB, PHP, TypeScript, MobX, Wordpress, AWS, JavaScript,",
		icon: React.createElement(CgWorkAlt),
		date: "May 2023 - February 2024",
	},
	{
		title: "Technical Product Owner",
		company: "Symfonia",
		techStack: "React, .NET, Azure",
		icon: React.createElement(CgWorkAlt),
		date: "December 2022 - May 2023",
	},
	{
		title: "Frontend Technical Lead",
		company: "IPF Digital",
		techStack:
			"React, Next.js, TypeScript, Java, PHP, Jest, React Testing Library, Cypress, Redux, Wordpress, Sanity, Strapi, Storybook, StyledComponents, AWS,",
		icon: React.createElement(CgWorkAlt),
		date: "November 2017 - December 2022",
	},
	{
		title: "IT Digital Senior Specialist",
		company: "Polskie Linie Lotnicze LOT S.A.",
		techStack: "Java, AWS, Liferay, Alfresco",
		icon: React.createElement(CgWorkAlt),
		date: "October 2016 - October 2017",
	},
	{
		title: "Web Master",
		company: "Avon Cosmetics Polska",
		techStack:
			"PHP, Yii, MySQL, PostgreSQL, HTML, CSS, JavaScript, jQuery, Wordpress, GTM",
		icon: React.createElement(CgWorkAlt),
		date: "November 2012 - October 2016",
	},
	{
		title: "Web developer / PHP developer",
		company: "",
		techStack:
			"PHP, JavaScript, jQuery, MySQL, HTML, CSS, Wordpress, ActionScriot 3",
		icon: React.createElement(CgWorkAlt),
		date: "November 2008 - October 2012",
	},
] as const;

export const skillsData = [
	{
		name: "HTML",
		icon: React.createElement(FaHtml5),
	},
	{
		name: "CSS",
		icon: React.createElement(FaCss3),
	},
	{
		name: "JavaScript",
		icon: React.createElement(IoLogoJavascript),
	},
	{
		name: "TypeScript",
		icon: React.createElement(TbBrandTypescript),
	},
	{
		name: "React",
		icon: React.createElement(FaReact),
	},
	{
		name: "React Native",
		icon: React.createElement(FaReact),
	},
	{
		name: "Next.js",
		icon: React.createElement(RiNextjsFill),
	},
	{
		name: "Node.js",
		icon: React.createElement(FaNodeJs),
	},
	{
		name: "Tailwind",
		icon: React.createElement(RiTailwindCssFill),
	},
	{
		name: "Prisma",
		icon: React.createElement(SiPrisma),
	},
	{
		name: "MongoDB",
		icon: React.createElement(SiMongodb),
	},
	{
		name: "Redux",
		icon: React.createElement(TbBrandRedux),
	},
	{
		name: "MobX",
		icon: React.createElement(SiMobx),
	},
	{
		name: "GraphQL",
		icon: React.createElement(SiGraphql),
	},
	{
		name: "Apollo",
		icon: React.createElement(SiApollographql),
	},
	{
		name: "Express",
		icon: React.createElement(SiExpress),
	},
	{
		name: "PostgreSQL",
		icon: React.createElement(SiPostgresql),
	},
	{
		name: "Framer Motion",
		icon: React.createElement(TbBrandFramerMotion),
	},
	{
		name: "PHP",
		icon: React.createElement(FaPhp),
	},
	{
		name: "AWS",
		icon: React.createElement(FaAws),
	},
] as const;
