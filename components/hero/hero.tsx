import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Image from "next/image"

const navigation = [
	{ name: "About", href: "#" },
	{ name: "Posts", href: "#" },
	{ name: "Contact", href: "#" },
	{ name: "Other", href: "#" },
]

export default function Hero() {
	return (
		<div className='relative bg-white overflow-hidden'>
			<div className='max-w-7xl mx-auto'>
				<div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28  xl:pb-32'>
					<svg
						className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
						fill='currentColor'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'
					>
						<polygon points='50,0 100,0 50,100 0,100' />
					</svg>

					<main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-8 lg:pt-32 xl:mt-0 '>
						<div className='sm:text-center lg:text-left'>
							<h1 className='text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
								<span className='block xl:inline text-skin-dark-highlight'>
									John Tan Han Seng
								</span>{" "}
								<span className='block text-base text-skin-dark-highlight font-medium xl:inline'>
									Software Engineer
								</span>
							</h1>

							<p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
								Software Engineer. Solving real life problems and trying new
								solutions.
							</p>
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<div className='rounded-md shadow'>
									<a
										href='#'
										className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-skin-base bg-skin-button-accent hover:bg-skin-button-accent-hover md:py-4 md:text-lg md:px-10'
									>
										Contact Me
									</a>
								</div>
								<div className='mt-3 sm:mt-0 sm:ml-3'>
									<a
										href='#'
										className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-skin-inverted bg-skin-button-muted md:py-4 md:text-lg md:px-10'
									>
										View my projects
									</a>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className='lg:absolute lg:inset-y-0 lg:right-0  lg:w-1/2'>
				<img
					className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
					src='/Matrix.jpg'
					alt=''
				/>
			</div>
		</div>
	)
}
