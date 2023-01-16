import ImageShow from './ImageShow';

export default function ImageList({ images }){
  const renderedImages = images.map((img) =>{
    return <ImageShow image={img} key={img.id}/>
  })
  return(
    <div className='image-list'>{renderedImages}</div>
  )
}