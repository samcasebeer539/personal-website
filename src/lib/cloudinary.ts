import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

type Medium = 'Blender 3D' | 'Procreate' | 'Illustration'

const folderMap: Record<string, Medium> = {
  'blender-3d':   'Blender 3D',
  'procreate':    'Procreate',
  'illustration': 'Illustration',
}

export async function getGalleryImages() {
  const folders = Object.keys(folderMap)

  const results = await Promise.all(
    folders.map((folder) =>
      cloudinary.search
        .expression(`folder:${folder}`)
        .sort_by('filename', 'desc')
        .max_results(50)
        .execute()
    )
  )

  return results.flatMap((result, i) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result.resources.map((img: any) => ({
      id:     img.public_id,
      src: img.secure_url.replace('/upload/', '/upload/f_auto,q_auto/'),
      alt:    img.public_id.split('/').pop().replace(/-/g, ' '),
      medium: folderMap[folders[i]],
      span:   img.height > img.width ? 'tall' as const : undefined,
    }))
  )
}