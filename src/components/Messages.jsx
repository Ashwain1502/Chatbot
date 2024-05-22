import Chat from './Chat'
import pic from '../assets/pic.jpg'

const Messages = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'> 
        <div className="bg-[#343839] w-[95%] h-[95%] p-6 rounded-lg">
            <div className="h-14 flex">
                <img 
                    src={pic} 
                    alt="profile" 
                    className="rounded-full w-10 h-10"
                />
                <p className="font-semibold text-2xl ml-6">Farmer Name</p>
            </div>
            <hr className="border-[#808080]"/>

            < Chat />

        </div>
    </div>
  )
}

export default Messages