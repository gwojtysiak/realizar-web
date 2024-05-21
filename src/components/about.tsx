"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[47rem] scroll-mt-28 text-center leading-8 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				I am an experienced <span className="font-medium">IT professional</span>{" "}
				with a comprehensive skill set and a proven track record in technical
				leadership and product ownership. My expertise covers a broad spectrum
				of technologies, from frontend development utilizing{" "}
				<span className="font-medium">React, Next.js</span> to backend systems
				with <span className="font-medium">Node.js, PHP</span>. I have
				experience of building a team from scratch as well as managing an
				existing team.
			</p>
			<p>
				In my roles, I have excelled in bridging the gap between business
				stakeholders and development teams, effectively translating requirements
				into actionable plans and delivering high-quality solutions. Whether
				it&apos;s negotiating ongoing demand, advising on frontend
				implementation solutions, or managing IT work planning, I prioritize
				clear communication and collaboration to drive success. My experience
				extends beyond traditional IT roles, including contributions to
				e-commerce solutions, web development projects, and project management
				tasks.
			</p>
		</motion.section>
	);
}
