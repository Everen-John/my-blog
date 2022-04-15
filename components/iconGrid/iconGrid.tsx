/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from "@heroicons/react/solid"
import ReactTooltip from "react-tooltip"

type Logo = {
	name: string
	imageUrl: string
}
export default function GridList({ logos }: any) {
	return (
		<ul
			role='list'
			className='grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'
		>
			{logos.map((logoItem: Logo) => (
				<li
					key={logoItem.name}
					className='col-span-1 flex flex-col text-center bg-white divide-y divide-gray-200'
				>
					<div className='flex-1 flex flex-col'>
						<img
							className='aspect-squares h-14 flex-shrink-0 mx-auto  transition-transform hover:scale-150'
							src={logoItem.imageUrl}
							alt={logoItem.name}
							data-tip={logoItem.name}
						/>

						<dl className='mt-1 flex-grow flex flex-col justify-between'>
							<dt className='sr-only'>Tool used: {logoItem.name}</dt>
						</dl>
					</div>
				</li>
			))}
		</ul>
	)
}
