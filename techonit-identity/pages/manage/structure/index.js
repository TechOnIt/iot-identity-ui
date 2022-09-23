import Link from 'next/link'

export default function Index() {
    return (
        <>
            <Link href='/manage/structure/new'>
                <a className='btn btn-primary'>New</a>
            </Link>
        </>
    )
}

Index.layout = 'manage';
Index.title = 'Structures manager';