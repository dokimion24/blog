import Image from 'next/image'
import profileImage from '../../../public/images/profile.png'
import Link from 'next/link'

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-hold mt-2">hi</h2>
      <h3 className="text-xl font-semibold"></h3>
      <Link href="/contact">
        <button className="bg-yellow-500 font-blod rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  )
}
