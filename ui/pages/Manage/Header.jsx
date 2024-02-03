import { Fragment } from "react"
import { Global } from "../../../configs/Head"
import { ManageMeta } from "../../../configs/Metas"
import { Translation } from "../../../utils/Translations"

export default function Header({ product, mode }) {
  const meta = ManageMeta(mode, product)

  return (
    <Fragment>
      <Global title={meta.title} description={meta.description} />

      <h3 className="text-3xl font-bold leading-6 text-gray-900 mb-10">
        {Translation("give-a-product")}
      </h3>

      <hr />
    </Fragment>
  )
}