import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function mouse() {
  return (
    <AnimatedCursor
      innerSize={17}
      outerSize={17}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}
export default mouse