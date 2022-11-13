export default function Category(props) {
  const { Name, Icon, Slug } = props.category;

  const Link = () => window.open(`/produktet/?=kategoria=${Slug}`, '_blank');

  return (
    <div onClick={() => Link()} key={props.index} href={`/produktet?kategoria="${Name}"`} class='hover:cursor-pointer relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto'>
      <span class='absolute inset-0'>
        <img src={Icon === '' ? '/assets/category-no.png' : Icon} alt={Name} class='w-full h-full object-center object-cover' />
      </span>
      <span class='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50'></span>
      <span class='relative mt-auto text-center text-xl font-bold text-white'>
        {Name}
      </span>
    </div>
  )
}
