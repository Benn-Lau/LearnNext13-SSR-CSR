import Link from "next/link"
import Image from "next/image"
import Custombttn from "../Mainpage/Custombttn"

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link className=" flex justify-center items-center" href={"/"}>
          <Image 
            src={"/logo.svg"}
            alt="Our minimalist Logo (Car HuB)"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Custombttn 
          title="Sign Up" 
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" 
        />
      </nav>
    </header>
  )
}
