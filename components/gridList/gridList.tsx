/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid"

type Project = {
	name: string
	role: string
	imageUrl: string
}
export default function GridList({ projects }: any) {
	console.log(projects)
	return (
		<ul
			role='list'
			className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
		>
			{projects.map((projectItem: Project) => (
				<li
					key={projectItem.name}
					className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow-md border border-gray-300 divide-y divide-gray-200 transition-transform hover:scale-110'
				>
					<div className='flex-1 flex flex-col p-8'>
						<img
							className='w-60 h-auto max-h-40 object-cover flex-shrink-0 mx-auto rounded-md shadow-lg '
							src={projectItem.imageUrl}
							alt=''
						/>
						<h3 className='mt-6 text-gray-900 text-sm font-medium'>
							{projectItem.name}
						</h3>
						<dl className='mt-1 flex-grow flex flex-col justify-between'>
							<dt className='sr-only'>Role</dt>
							<dd className='mt-3'>
								<span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
									{projectItem.role}
								</span>
							</dd>
						</dl>
					</div>
				</li>
			))}
		</ul>
	)
}
