import type { ImageProps } from 'next/image'
import NextImage from 'next/image'

const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

export default Image
