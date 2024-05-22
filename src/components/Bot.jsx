import Sidebar from './Sidebar'
import Messages from './Messages'

const Bot = () => {
  return (
    <div className="w-full h-[100vh] bg-[#151718] flex justify-center items-center text-white">
        <div className="w-[95%] h-[95%] bg-[#1E1E1E] rounded-xl flex">
            <Sidebar />
            <Messages />
        </div>
    </div>
  )
}

export default Bot