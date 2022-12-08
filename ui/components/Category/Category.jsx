

export default function Category(props) {
  const { Name, Icon, Slug } = props.category;

  const Link = () => window.open(`/produktet/?kategoria=${Name}`, "_self");
  return (
    <div onClick={() => {
      Link()
    }
    } key={props.index} href={`/produktet?kategoria="${Name}"`} className='hover:cursor-pointer relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-80 transition-all xl:w-auto'>
      <span className='absolute inset-0'>
        <img src={Icon === '' ? '/assets/category-no.png' : Icon} alt={Name} className='w-full h-full object-center object-cover' />
      </span>
      <span className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50'></span>
      <span className='relative mt-auto text-center text-xl font-bold text-white'>
        {Name}
      </span>
    </div>
  )
}
