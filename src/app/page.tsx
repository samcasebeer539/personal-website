import { getGalleryImages } from '@/lib/cloudinary'
import ClientHome from '@/components/ClientHome'

export default async function Home() {
  const images = await getGalleryImages()
  return <ClientHome images={images} />
}