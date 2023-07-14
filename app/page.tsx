'use client'

import Image from 'next/image'
import { useState } from 'react'

const Home = () => {
  const [showResponse, setShowResponse] = useState(true)
  const [result, setResult] = useState("")

  const callExec = () => {
    setShowResponse(false)
    setResult("Ok")
  }
  return (
    <>
      <header>
        <Image
          id="hero-logo"
          src="/images/award-logo-2023.png"
          alt="The hero logo"
          width={256}
          height={256}
        />
        <span id="page-title">People&apos;s Choice Awards for</span>
        <span id="page-subtitle">Project of the Year 2023</span>
        <span id="page-description">
          Each year, the Dot Property Awards asks the public to tell us what
          real estate project they like best. Have your voice heard and vote for
          the People&apos;s Choice Award for Project of the Year. Scroll down to
          learn more about this year&apos;s contenders and then select your
          favorite.
        </span>
      </header>
      <main></main>
      <footer>
        &copy; All rights reserved 2023 by Dot Property Group. *The project
        details, rental return or other special offers might be subject to the
        advertiser&apos;s terms and conditions.
      </footer>
      <button onClick={callExec}>Click Me</button>
      <div
        data-id="exec-response"
        hidden={showResponse}
        className="h-20 w-1/2 bg-slate-700 text-yellow-100"
      >{result}</div>
    </>
  )
}

export default Home
