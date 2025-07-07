import { Heart } from 'lucide-react'

export default function FavoriteButton() {
  return (
    <div className='bg-white p-2 cursor-pointer border-1 rounded-[50%] opacity-30 hover:opacity-60 transition-opacity '>
        <Heart width={18} height={18} />
    </div>
  )
}
