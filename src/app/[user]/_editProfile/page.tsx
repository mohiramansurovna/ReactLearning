// 'use client';
// import React, {useEffect, useState} from 'react';
// import {Image} from 'next/dist/client/image-component';
// import mainLink from '@/MainLink';
// import {TypeUser} from '@/Types';
// import {useEdgeStore} from '@/lib/edgestore';
// import { SingleImageDropzone } from '@/lib/components/userProfile';
// export default function Profile({params}: {params: {user: string}}) {
//     const [user, setUser] = useState<TypeUser>();
//     const [userName, setUserName] = useState(user?.userName);
//     const [email, setEmail] = useState(user?.email);
//     const [password, setPassword] = useState(user?.password);
//     const [file, setFile] = useState<File>();
//     const [progress, setProgress] = useState<Number>(0);
//     const {edgestore} = useEdgeStore();
//     const [urls, setUrls] = useState<{
//         url: string;
//     }>();
//     async function FetchData() {
//         const responce = await fetch(`${mainLink}/authentication/data?user=${params.user}`, {
//             headers: {
//                 Authorization: '"icantopenwithoutit"',
//             },
//         });
//         const userJson = await responce.json();
//         setUser(userJson);
//         console.log(userJson);
//     }
//     useEffect(() => {
//         FetchData();
//     }, []);
//     return (
//         <main>
//             <section className='profile'>
//                 <div className='flex flex-col w-44 h-1/2 justify-center align-middle border p-0'>
//                     <SingleImageDropzone
//                         className='bg-[#181941] m-0 p-0'
//                         width={200}
//                         height={200}
//                         value={file}
//                         onChange={(file) => {
//                             setFile(file);
//                         }}
//                     />
//                     <div className='h-[8px] w-44 absolute translate-y-[20px] rounded overflow-hidden transition-all duration-150 m-0 p-0 border z-10 border-white'>
//                         <div
//                             className='w-full bg-[#0c301f]'
//                             style={{height: `${progress}%`}}></div>
//                     </div>
//                 </div>
//                 <form>
//                     <label>User name</label>
//                     <input
//                         type='text'
//                         value={userName}
//                         onChange={(e) => {
//                             setUserName(e.target.value);
//                         }}
//                     />
//                     <label>Email</label>
//                     <input
//                         type='text'
//                         value={email}
//                         onChange={(e) => {
//                             setEmail(e.target.value);
//                         }}
//                     />
//                     <label>Password</label>
//                     <input
//                         type='text'
//                         value={password}
//                         onChange={(e) => {
//                             setPassword(e.target.value);
//                         }}
//                     />
//                     <p>{urls?.url}</p>
//                 </form>
//                 <button
//                     onClick={async () => {
//                         if (file) {
//                             const res = await edgestore.myPublicImages.upload({
//                                 file,
//                                 onProgressChange: (progress: Number) => {
//                                     setProgress(progress);
//                                 },
//                             });
//                             setUrls({url: res.url});
//                         }
//                     }}>
//                     Upload
//                 </button>
//             </section>

//             <p>{user?.userName ? user.userName : 'username is not here'}</p>
//         </main>
//     );
// }
