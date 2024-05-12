
function Sidebar() {
  return (
    <div className='bg-[#F6F6FF] w-[20%] py-3 h-[100vh]'>
        <div className='flex font-bold text-[2rem] justify-center items-center gap-3 cursor-pointer mb-5'>
            <h1 className=' tracking-widest'>Notes</h1>
            <span className='text-white bg-blue-400 rounded-full text-xl w-7 pl-2 pb-1 pt-[4px]'>+</span>
        </div>
        <div className='bg-blue-400 flex font-bold text-[1.3rem] justify-center items-center gap-3 cursor-pointer text-white py-2'>
    <h1>#Enter title here</h1>
    <span>🚮</span>
        </div>
    </div>
  )
}

export default Sidebar