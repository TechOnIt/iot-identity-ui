import Link from 'next/link'

export default function Index() {
    return (
        <>
        <Link href='/manage/structure/new'>
            <a className='btn btn-primary'>Primary</a>
        </Link>
        <Link href='/manage/structure/new'>
            <a className='btn btn-primary-outline ml-3'>Primary Outline</a>
        </Link>
        <Link href='/manage/structure/new'>
            <a className='btn btn-secondary ml-3'>Secondary</a>
        </Link>
        <Link href='/manage/structure/new'>
            <a className='btn btn-secondary-outline ml-3'>Secondary Outline</a>
        </Link>
        <Link href='/manage/structure/new'>
            <a className='btn btn-legendary ml-3'>Legendary</a>
        </Link>
        <Link href='/manage/structure/new'>
            <a className='btn btn-legendary-outline ml-3'>Legendary Outline</a>
        </Link>
        </>
    )
}

Index.layout = 'manage';
Index.title = 'Structures manager';