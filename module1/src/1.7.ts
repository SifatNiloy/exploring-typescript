{ // ---------- Scope Block ----------
  // This block is wrapped in curly braces `{}` to create a local scope.
  // Variables declared inside this block won't affect or be accessible outside.

  // ---------- SPREAD OPERATOR (`...`) ----------
  // Used to "spread out" or expand elements from arrays or properties from objects

  const bros1: string[] = ["sifat", "hossain", "niloy"];
  const bros2: string[] = ["abdur", "rashid", "sawom"];

  // Goal: Merge `bros2` into `bros1` using the spread operator
  // `...bros2` takes each element from bros2 and passes it individually to push
  bros1.push(...bros2); 
  // bros1 becomes: ["sifat", "hossain", "niloy", "abdur", "rashid", "sawom"]

  // --- Spread with Objects ---
  // Combining two objects into one by "spreading" their properties

  const mentor1 = {
    typescript: 'mezba',
    redux: 'mir',
    dbms: 'mizan',
  };

  const mentor2 = {
    prisma: 'firoz',
    next: "tonmoy",  // Note: "tonmoy" was previously misspelled as "tonmaoy"
    cloud: 'nahid'
  };

  // Merging mentor1 and mentor2 into a new object `mentorList`
  const mentorList = {
    ...mentor1,  // spreads all key-value pairs from mentor1
    ...mentor2   // then spreads all key-value pairs from mentor2
  };
  // Result:
  // mentorList = {
  //   typescript: 'mezba',
  //   redux: 'mir',
  //   dbms: 'mizan',
  //   prisma: 'firoz',
  //   next: 'tonmoy',
  //   cloud: 'nahid'
  // }

  // If keys are the same in both objects, later ones override earlier ones

  // ---------- REST OPERATOR (`...`) ----------
  // Gathers multiple values into an array
  // Opposite of spread: instead of expanding, it "packs" arguments

  // Example: greeting any number of friends
  const greetFriends = (...friends: string[]) => {
    // Here, `friends` becomes an array containing all arguments passed in
    // Example: ['abul', 'babul', 'kabul', 'labul', 'ubul']
    
    // Loop through each friend and print a greeting
    friends.forEach((friend: string) => {
      console.log(`hi ${friend}`);
    });
  };

  // Function call with multiple friend names
  greetFriends('abul', 'babul', 'kabul', 'labul', 'ubul');
  // Output:
  // hi abul
  // hi babul
  // hi kabul
  // hi labul
  // hi ubul

  // The rest operator is useful for:
  // - Accepting variable numbers of arguments
  // - Handling inputs as a group

  // ---------- DESTRUCTURING ----------
  // Allows unpacking properties or elements directly into variables

  // --- Object Destructuring ---
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

  // Extracting nested values from object
  // Syntax: { outerProperty, nestedProperty: { innerProperty } }

  const {
    contactNo,  // gets value from user.contactNo
    name: { middleName } // gets user.name.middleName
  } = user;

  // Note:
  // You can't declare `name` directly here because you're going inside it to get `middleName`
  // Also, you can alias: `middleName: midName` if you want to rename the variable

  // --- Array Destructuring ---
  const myFriends = ['siam', 'shovon', 'wazed', 'sawom', 'fifthfriend', 'sixthfriend'];

  // Use commas to skip elements, and use rest to collect remaining ones
  const [, , thirdFriend, ...rest] = myFriends;
  // Skips first two: 'siam', 'shovon'
  // thirdFriend = 'wazed'
  // rest = ['sawom', 'fifthfriend', 'sixthfriend']

  // Destructuring is powerful for:
  // - Cleanly extracting values from arrays/objects
  // - Making code more readable and concise

}
