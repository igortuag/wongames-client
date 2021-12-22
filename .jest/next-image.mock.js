import * as nextImage from 'next-image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <img {...props} />
  }
})
