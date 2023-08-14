export default function Header(props) {
  const { name, description, show } = props;
  
  if(!show) return null;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {name}
      </h1>
      
      <p className="mt-4 max-w-xl text-sm text-gray-700">{description}</p>
    </div>
  );
}