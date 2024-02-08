import { Fragment } from "react"
import { Global } from "../../../configs/Head"
import { TermsMeta } from "../../../configs/Metas"

export default function Header() {
  const meta = TermsMeta()

  return (
    <Fragment>
      <Global 
        title={meta?.title} 
        description={meta?.description} 
        index={false}
      />

      <h1 className="text-4xl mb-4 font-extrabold tracking-tight text-gray-900">
        {meta?.title}
      </h1>
    </Fragment>
  )
}
