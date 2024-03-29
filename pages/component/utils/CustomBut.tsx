const CustomBut = ({ name }: { name: string }) => {
  return (
    <div className="group z-2 relative inline-block overflow-hidden text-center cursor-pointer focus:border-[#111111] focus:ring-2 focus:ring-indigo-200  py-3 focus:outline-none ">
      <div className="absolute block inset-y-0 left-0 w-[1px]   rounded-sm bg-[#111111] transition-all group-hover:w-full  group-active:bg-indigo-500"></div>
      <div className="relative block text-sm font-medium px-10 text-black transition-colors  group-hover:text-white">
        {name}
      </div>
    </div>
  )
}

export default CustomBut
