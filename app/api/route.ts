export async function GET() {
    // const res = await fetch('https://candidate-assignment.neversitup.com/todo/all', {
    //   next: { revalidate: 60 }, // Revalidate every 60 seconds
    // })
    // const data = await res.json()
   
    // return Response.json(data)
  //     const data = {
  //   "username": 'popwuttichai',
  //   "password": 'test1234'
  // };

  // const tosolist = {
  //   "title": 'ยำยำ',
  //   "description": 'มาม่า มาม่า มาม่า'
  // };

  // const res = await fetch('https://candidate-assignment.neversitup.com/todo/-O3xRsGajf6VXovc15s4',{
  //   method: 'DELETE',
  //   headers: {
  //     'content-type': 'application/json',
  //     'authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1PM3Z2Y2VpTjdGbHRNSFBNLW43IiwiaWF0IjoxNzIzMjg3NDE4LCJleHAiOjE3MjMzNzM4MTh9.Cbw1Noi_fmiPL6cfiHIbTlmhtXbxD2SkD6kbCCM_MVg'
  //   },
  //   body: JSON.stringify(tosolist)
  // })

  //   const data1 = await res.json()
   
  //   return Response.json(data1)
  // const res = await fetch('https://candidate-assignment.neversitup.com/todo/-O3ki7KLygQL34T4BZmG', {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json',
  //     'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ii1PM3Z2Y2VpTjdGbHRNSFBNLW43IiwiaWF0IjoxNzIzMjg3NDE4LCJleHAiOjE3MjMzNzM4MTh9.Cbw1Noi_fmiPL6cfiHIbTlmhtXbxD2SkD6kbCCM_MVg'
  //   }
  // })

  // const data1 = await res.json()
  // return Response.json(data1)
  // }

  const data = {
    "username": 'popwuttichai',
    "password": 'test1234'
  };

  const res = await fetch('https://candidate-assignment.neversitup.com/auth/login',{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    mode: 'no-cors'
  })

const user = await res.json()
console.log(user)

//const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
return Response.json(user)
}

// export async function GET1() {
//     const res = await fetch('https://candidate-assignment.neversitup.com/todo/all', {
//       next: { revalidate: 60 }, // Revalidate every 60 seconds
//     })
//     const data = await res.json()
   
//     return Response.json(data)
//   }


// import { NextResponse } from "next/server";

// export async function GET(){
//     const data = {
//         username: 'popwuttichai',
//         password: 'test1234'
//     }

//     return NextResponse.json({data})
// }

// export async function POST(){
  
//   const data = {
//     "username": 'popwuttichai',
//     "password": 'test1234'
//   };

//   const res = await fetch('https://candidate-assignment.neversitup.com/auth/login',{
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'content-type': 'application/json'
//     },
//     mode: 'no-cors'
//   })

//   const data1 = await res.json()
   
//   return NextResponse.json(data1)
// }