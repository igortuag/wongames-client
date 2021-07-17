import { QueryHome_banners } from 'graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map(({ image, title, subtitle, button, ribbon }) => ({
    img: `http://localhost:1337${image?.url}`,
    title,
    subtitle,
    buttonLabel: button?.label || null,
    buttonLink: button?.link || null,
    ...(ribbon && {
      ribbon: ribbon.text,
      ribbonColor: ribbon.color,
      ribbonSize: ribbon.size
    })
  }))
}
