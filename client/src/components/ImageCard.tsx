
interface ImageCardProps {
  image: string, title: string, description: string
}
const ImageCard: React.FC<ImageCardProps> = ({ image, title, description })=> {
  return (
    <div className="w-full md:w-[300px] h-[500px] bg-white rounded-xl shadow-md overflow-scroll custom-scrollbar-style ">
      {/* custom scroll bar style includes.... */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default ImageCard



