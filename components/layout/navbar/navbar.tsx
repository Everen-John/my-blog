/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"

// const navigation = [
// 	{ name: "About", href: "#", current: true, onClick:() =>{} },
// 	{ name: "Projects", href: "#", current: false, onClick: () => {} },
// 	{ name: "Blog", href: "#", current: false, onClick: () => {} },
// ]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ")
}

type anchorProp = {
	name: string
	href?: string
	current: boolean
	onClick: () => any
}
interface NavbarProps {
	navigation: anchorProp[]
}
export default function Navbar({ navigation }: NavbarProps) {
	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex-shrink-0 flex items-center'>
									<img
										className='block lg:hidden h-8 w-auto'
										src='/favicon.png'
										alt='Workflow'
									/>
									<img
										className='hidden lg:block h-8 w-auto rounded-full'
										src='/favicon.png'
										alt='Workflow'
									/>
								</div>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex space-x-4'>
										{navigation.map((item) => (
											<a
												onClick={item.onClick}
												key={item.name}
												href={item.href ? item.href : undefined}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
										<Link
											passHref={true}
											href={"mailto:everen.john.work@gmail.com"}
											aria-current='Contact Me'
										>
											<a className='text-skin-highlight hover:bg-skin-button-accent-hover hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
												Contact Me
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								{/* <button
									type='button'
									className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
								>
									<span className='sr-only'>View notifications</span>
									<BellIcon className='h-6 w-6' aria-hidden='true' />
								</button> */}

								{/* Profile dropdown */}
								{/* <Menu as='div' className='ml-3 relative'>
									<div>
										<Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
											<span className='sr-only'>Open user menu</span>
											<img
												className='h-8 w-8 rounded-full'
												src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
												alt=''
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter='transition ease-out duration-100'
										enterFrom='transform opacity-0 scale-95'
										enterTo='transform opacity-100 scale-100'
										leave='transition ease-in duration-75'
										leaveFrom='transform opacity-100 scale-100'
										leaveTo='transform opacity-0 scale-95'
									>
										<Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href='#'
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm text-gray-700"
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu> */}
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<Transition
							enter='transition duration-100 ease-out'
							enterFrom='transform scale-95 opacity-0'
							enterTo='transform scale-100 opacity-100'
							leave='transition duration-75 ease-out'
							leaveFrom='transform scale-100 opacity-100'
							leaveTo='transform scale-95 opacity-0'
						>
							<div className='px-2 pt-2 pb-3 space-y-1 '>
								{navigation.map((item) => (
									<a
										key={item.name}
										onClick={item.onClick}
										href={item.href ? item.href : undefined}
										className={classNames(
											item.current
												? "bg-gray-900 text-white"
												: "text-gray-300 hover:bg-gray-700 hover:text-white",
											"block px-3 py-2 rounded-md text-base font-medium"
										)}
										aria-current={item.current ? "page" : undefined}
									>
										<Disclosure.Button>{item.name}</Disclosure.Button>
									</a>
								))}
								<Link
									passHref={true}
									href={"mailto:everen.john.work@gmail.com"}
									aria-current='Contact Me'
								>
									<Disclosure.Button
										key={"Contact Me"}
										as='a'
										href='mailto:everen.john.work@gmail.com'
										className='text-skin-highlight hover:bg-skin-button-accent-hover hover:text-white block px-3 py-2 rounded-md text-base font-medium'
									>
										Contact Me
									</Disclosure.Button>
								</Link>
							</div>
						</Transition>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
