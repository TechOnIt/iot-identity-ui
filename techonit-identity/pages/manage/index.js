import Link from 'next/link'

export default function Index() {
    return (
        <>
            {/* Buttons */}
            <div className='mb-4'>
                <label className='text-2xl font-bold'>Buttons</label>
            </div>
            <div className='flex flex-wrap gap-3'>
                <Link href='/manage/structure/new'>
                    <a className='btn'>Regular</a>
                </Link>
                <Link href='/manage/structure/new'>
                    <a className='btn btn-primary'>Primary</a>
                </Link>
                <Link href='/manage/structure/new'>
                    <a className='btn btn-primary-outline'>Primary Outline</a>
                </Link>
                <Link href='/manage/structure/new'>
                    <a className='btn btn-secondary'>Secondary</a>
                </Link>
                <Link href='/manage/structure/new'>
                    <a className='btn btn-secondary-outline'>Secondary Outline</a>
                </Link>
                <Link href='/manage/structure/new'>
                    <a className='btn btn-legendary'>Legendary</a>
                </Link>
            </div>
            {/*  */}
        </>
    )
}

Index.layout = 'manage';
Index.title = 'Overview';