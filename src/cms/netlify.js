import CMS from "netlify-cms-app"
import React from "react"
import Recette from "../components/templates/Recette"

const RecettePreview = ({ data }) => <Recette data={data} />

CMS.registerPreviewTemplate("recette", RecettePreview)
