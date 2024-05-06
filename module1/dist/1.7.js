"use strict";
{ //scope block by curly braces
    //spread operator 
    //rest operator
    //destructuring
    // spread ...
    const bros1 = ["sifat", "hossain", "niloy"];
    const bros2 = ["abdur", "rashid", "sawom"];
    bros1.push(...bros2);
    const mentor1 = {
        typescript: 'mezba',
        redux: 'mir',
        dbms: 'mizan',
    };
    const mentor2 = {
        prisma: 'firoz',
        next: "tonmaoy",
        cloud: 'nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    //rest operator 
    // const greetFriends=(friend1:string, friend2:string, friend3:string)=>{
    //     console.log(`hi ${friend1}  ${friend2} ${friend3}`)
    // }
    const greetFriends = (...friends) => {
        // console.log(`hi ${friend1}  ${friend2} ${friend3}`)
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greetFriends('abul', 'babul', 'kabul', "labul", "ubul");
    //destructuring
    //object destructuring
    const user = {
        id: 345,
        name: {
            firstName: "sifat",
            middleName: "hossain",
            lastName: "niloy",
        },
        contactNo: 30289449,
        address: 'Dhaka',
    };
    // nicher line ta te type declare korte parbo na , name alias hoye jabe. jemon middleName: midname likhle midname hisabei pabe
    const { contactNo, name: { middleName } } = user;
    //arrray destructuring
    const myFriends = ['siam', 'shovon', 'wazed', 'sawom', 'fithfriend', 'sixthfriend'];
    const [, , thirdFriend, ...rest] = myFriends; //rest will get the fifth and sixth friend
}
