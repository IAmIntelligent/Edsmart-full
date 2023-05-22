import ImageCard from './ImageCard'
import { Gallery_data } from '../assets/utility/utitly'

const MBBSAbroad = () => {

  return (
    <div className='flex flex-wrap gap-8 '>{Gallery_data?.map(({ desc, title, image }, index) => <ImageCard key={index}
    image = {image}
      title={title} description={desc} />)}</div>
  )
}

export default MBBSAbroad