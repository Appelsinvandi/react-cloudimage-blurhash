import React, { memo } from 'react'
import cxs from 'cxs'

// Utils
import clsx from 'clsx'

// Types
import { ImgProps } from './types'

const Img: React.FC<ImgProps> = (props) => {
  const { src, classes, className } = props

  const css = {
    image: cxs({
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
    }),
  }

  return <img src={src} className={clsx(css.image, className, classes?.imageElement)} />
}

export default memo(Img)
