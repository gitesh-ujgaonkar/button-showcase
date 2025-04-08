"use client"

import dynamic from "next/dynamic"

const ButtonShowcaseWithJS = dynamic(() => import("./page-with-js"), { ssr: false })

export default function ClientWrapper() {
  return <ButtonShowcaseWithJS />
} 