import clsx from "clsx"
import Link from "next/link"
import { useEffect, useState } from "react"
import {BiSearch} from "react-icons/bi"
import {HiBellAlert} from "react-icons/hi2"

import NextImage from "@/components/NextImage"


function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) setIsScrolled (true)
      else setIsScrolled(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <header className={clsx(
      `${isScrolled && 'bg-[#000000]'}`,
      'sticky top-0 z-30 flex w-11/12 items-center justify-between',
      'px-4 py-2 transition-all lg:px-10 lg:py-4',
    )}>
      <div className="flex items-center space-x-2 md:space-x-9">
        <NextImage  
          src="/images/logo.png" 
          alt='netflix-logo'
          width={100}
          height={100}
          className="cursor-pointer"/>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex space-x-4 text-sm items-center font-light">
        <BiSearch className="hidden w-6 h-6 sm:inline"/>
        <p className="hidden lg:inline">Kids</p>
        <HiBellAlert className="h-6 w-6"/>
        <Link href="/account">
          <NextImage 
            src="/images/account-1.png" 
            alt="account-1" 
            width={24}
            height={30}
            className="cursor-pointer"/>
        </Link>
      </div>

    </header>
  )
}

export default Header