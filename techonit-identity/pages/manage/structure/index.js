import Link from 'next/link'

export default function Index() {
    return (
        <>
        <Link href='/manage/structure/new'>
            <a>New</a>
        </Link>
        </>
    )
}

Index.layout = 'manage';
Index.title = 'Structures manager';