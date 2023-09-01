import prof from '../assets/prof.jpg'
import bg from '../assets/bg.jpg'

export default function Profile() {
    return ( 
        <div>
           
                         <div className="container mx-auto w-[80%]">
                              <div className="flex items-center space-x-2">
                                 
                              </div> 
                             <img src={bg} />
                             <div className="relative bottom-12 flex items-center justify-between ps-4">
                               <img src={prof} className="h-24 rounded-full" />
                               <div className="pr-4 pt-9">
                                    <button className="rounded-full border-2 border-black bg-transparent px-3">Edit Profile</button>
                              </div>
                              </div>
                              <div className="profile_info absolute">
                                   <p className="pt-0 font-bold">Gharam</p>
                                   <span>@gharam</span>
                               </div>
                               <div className="pt-12">
                               <span> Frontend developer | Open to work</span>
                               </div>
                               <div className="flex flex-wrap items-center justify-around gap-x-2">
                               <span>
                                <i className="fa-solid fa-link"></i>
                                <a href="" className="text-blue-400">حساب النك</a>
                               </span>
                               <span>
                               <i className="fa-solid fa-calendar-days"></i>
                               <span>Joined April 2023</span>
                               </span>
                               <div className="flex-row gap-10 py-2">
                               <span> 55 Following</span>
                               <span> 100 fowllowers</span>
                               </div>
                               
                                <div className="flex-row justify-between py-5 text-center ">
                                     <button className="duration-75 p-2 hover:border-b-4 hover:border-blue-200">Posts</button>
                                     
                                     <button className="duration-75  p-2 hover:border-b-4 hover:border-blue-200">Likes</button>
                                </div>
                                <div className="border-t-2 border-black"></div>
                          </div>
                     </div>
        </div>
    )
                   
               
    
}

 

