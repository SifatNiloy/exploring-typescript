{ //scope block by curly braces
    
//spread operator 
//rest operator
//destructuring



// spread ...
const bros1:string[]=["sifat", "hossain", "niloy"]
const bros2:string[]=["abdur", "rashid", "sawom"]

bros1.push(...bros2)
const mentor1={
    typescript: 'mezba',
    redux: 'mir',
    dbms: 'mizan',
}
const mentor2={
    prisma: 'firoz', 
    next:"tonmaoy", 
    cloud: 'nahid'
}
const mentorList={
    ...mentor1,
    ...mentor2
}

//rest operator 
// const greetFriends=(friend1:string, friend2:string, friend3:string)=>{
//     console.log(`hi ${friend1}  ${friend2} ${friend3}`)
// }
const greetFriends=(...friends:string[])=>{
    // console.log(`hi ${friend1}  ${friend2} ${friend3}`)
    friends.forEach((friend: string)=>console.log(`hi ${friend}`))
}

greetFriends('abul', 'babul', 'kabul', "labul", "ubul");

}