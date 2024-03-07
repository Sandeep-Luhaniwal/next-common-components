import Link from 'next/link'
import { allButtons } from './Helper'

const AllLinksButton = () => {
    return (
        <>
            <div className="max-w-[1200px] px-4 xl:px-0 mx-auto py-10">
                <div className="flex flex-wrap gap-8">
                    {allButtons.map((value, index) => {
                        return (
                            <Link className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-red-600 duration-200' key={index} href={value.url}>{value.button}</Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AllLinksButton