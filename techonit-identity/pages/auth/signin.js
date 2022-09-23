import Image from 'next/image'
import Link from 'next/link'

export default function Signin() {
    return (
        <>
            <div className="flex flex-col justify-center h-[100%] px-9 md:px-[30%] lg:px-[35%]">
                {/* Image And Text */}
                <div className="text-center flex flex-col mb-14">
                    <div className='grid mb-5'>
                        <Image src="/assets/Sun rise-cuate.svg" alt="Nature view" width={100} height={200} />
                    </div>
                    <div>
                        <label className="text-primary-500 text-2xl font-bold">Welcome</label>
                        <p>Enter username and password to signin!</p>
                    </div>
                </div>
                {/* Form And Button */}
                <div>
                    <div className="mb-14">
                        <div className="mb-2">
                            <input
                                className=' block w-full py-2 px-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-md
                                focus:ring-blue-500 focus:border-blue-500dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                dark:focus:border-blue-500 text-center'
                                maxLength={11}
                                type='text'
                                placeholder='Phone Number' />
                        </div>
                        <div>
                            <input
                                className=' block w-full py-2 px-2.5 bg-primary-50 border border-gray-300 text-gray-900 rounded-md
                                focus:ring-blue-500 focus:border-blue-500dark:bg-gray-700
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                dark:focus:border-blue-500 text-center'
                                maxLength={30}
                                type='password'
                                placeholder='Password' />
                        </div>
                    </div>
                    <div className='flex gap-3 justify-center'>
                        <Link href='/'>
                            <a className='btn'>Back</a>
                        </Link>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Signin.layout = 'auth';