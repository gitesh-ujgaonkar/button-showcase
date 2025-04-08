import dynamic from "next/dynamic"

// Use dynamic import with no SSR for the component with client-side JavaScript
const ButtonShowcaseWithJS = dynamic(() => import("./page-with-js"), { ssr: false })

export default function Page() {
  return <ButtonShowcaseWithJS />
}

