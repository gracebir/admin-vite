const SideLink = ({imgUrl, title}: {imgUrl:string, title: string}) => {
  return (
    <div className="flex gap-4 px-8 text-cl-dark-blue font-normal transition ease-in duration-300 items-center cursor-pointer py-5 rounded-3xl hover:bg-white hover:font-bold hover:shadow-nav-box">
      <img src={imgUrl} alt={title} />
      <p className="text-[18.9713px]">{title}</p>
    </div>
  )
}

export default SideLink
