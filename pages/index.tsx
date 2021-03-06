import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Hero from "@/components/hero/hero"
import Navbar from "@/components/layout/navbar/navbar"
import GridList from "@/components/gridList/gridList"
import Container from "@/components/layout/container/container"
import IconGrid from "@/components/iconGrid/iconGrid"
import ReactTooltip from "react-tooltip"
import { useEffect, useState, useRef } from "react"

type anchorProp = {
	name: string
	href?: string
	current: boolean
	onClick: () => any
}

const projects = [
	{
		name: "PowerBI Prototype Development",
		role: "Project Developer",
		imageUrl: "/PowerBI/image31.png",
	},
	{
		name: "ePortal System SaaS",
		role: "Project Developer",
		imageUrl: "/ePortal/ePortal1.png",
	},
	{
		name: "Github Actions CI/CD Research",
		role: "Lead Research",
		imageUrl: "/GithubActions/GithubActions1.png",
	},
	{
		name: "NextJS & SanityCMS Blog",
		role: "Developer",
		imageUrl: "/FirstBlog/FirstBlog1.png",
	},
	// {
	// 	name: "#GCPBoleh Cloud Platform Research",
	// 	role: "Learner",
	// 	imageUrl: "/GCPBoleh/Logo.png",
	// },
	// More people...
]
const logos = [
	{
		name: "NextJS",
		imageUrl: "/Framework Logos/Nextjs.png",
	},
	{
		name: "React",
		imageUrl: "/Framework Logos/React.png",
	},
	{
		name: "Tailwind CSS",
		imageUrl: "/Framework Logos/Tailwind.png",
	},
	{
		name: "Prisma",
		imageUrl: "/Framework Logos/Prisma.png",
	},

	{
		name: "Redis",
		imageUrl: "/Framework Logos/Redis.png",
	},
	{
		name: "MongoDB",
		imageUrl: "/Framework Logos/MongoDb.png",
	},
	{
		name: "NodeJS",
		imageUrl: "/Framework Logos/Nodejs.png",
	},
	{
		name: "Google Cloud Platform",
		imageUrl: "/Framework Logos/GCP.png",
	},
	{
		name: "Amazon Web Services",
		imageUrl: "/Framework Logos/AWS.png",
	},
	{
		name: "Javascript ES6",
		imageUrl: "/Framework Logos/Js.png",
	},
	{
		name: "HTML 5",
		imageUrl: "/Framework Logos/HTML.png",
	},
	{
		name: "CSS 3",
		imageUrl: "/Framework Logos/CSS.png",
	},
	{
		name: "Github",
		imageUrl: "/Framework Logos/Github.png",
	},
	{
		name: "Rust",
		imageUrl: "/Framework Logos/Rust.png",
	},
	{
		name: "C Sharp",
		imageUrl: "/Framework Logos/CS.png",
	},
	{
		name: "Solidity",
		imageUrl: "/Framework Logos/Solidity.png",
	},
	{
		name: "Unity",
		imageUrl: "/Framework Logos/Unity.png",
	},
]

const Home: NextPage = () => {
	const [loading, setLoading] = useState(true)
	const projectsElement: any = useRef()

	useEffect(() => {
		setLoading(false)

		return () => {}
	}, [])

	const scrollToProjects = () => {
		return new Promise((resolve) => setTimeout(resolve, 10)).then((res) => {
			projectsElement.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start",
			})
		})
	}

	const navigation: anchorProp[] = [
		{ name: "About", href: "#", current: true, onClick: () => {} },
		{
			name: "Projects",
			href: undefined,
			current: false,
			onClick: scrollToProjects,
		},
		{ name: "Blog", href: "#", current: false, onClick: () => {} },
	]

	return (
		<div>
			<Head>
				<title>John Tan - Software Engineer</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.png' />
			</Head>

			<main>
				<Navbar navigation={navigation} />
				<Hero scrollToProjects={scrollToProjects} />

				<section className='mt-10'>
					<Container>
						{!loading ? <ReactTooltip /> : null}
						<div className='flex justify-center my-10'>
							<h1 className='text-4xl font-semibold text-skin-dark-highlight'>
								Technologies used and dabbled
							</h1>
						</div>

						<IconGrid logos={logos} />
					</Container>
				</section>

				<section className='mt-10' ref={projectsElement}>
					<Container>
						<div className='flex justify-center my-10'>
							<h1 className='text-4xl font-semibold text-skin-dark-highlight'>
								My Projects
							</h1>
						</div>

						<GridList projects={projects} />
					</Container>
				</section>
			</main>

			<footer></footer>
		</div>
	)
}

export default Home
