import React from "react"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import { DiscussionEmbed } from "disqus-react"

const Comments = ({ identifier, title }) => {
  return (
    <div
      className="content-area"
      css={css`
        margin: 5% auto;
        max-width: 90%;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <DiscussionEmbed
        shortname={process.env.GATSBY_DISQUS_NAME}
        config={{
          identifier: identifier,
          title: title,
        }}
      />
    </div>
  )
}

export default Comments
