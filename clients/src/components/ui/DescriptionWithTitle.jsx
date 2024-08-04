function DescriptionWithTitle({title, description}) {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <ul className="flex flex-col gap-2 list-disc pl-8">
            {description.map((desc, index) => (
            <li className="text-lg max-w-[80%] leading-loose" key={index}>{desc}</li>
            ))}
        </ul>
    </div>
  )
}

export default DescriptionWithTitle