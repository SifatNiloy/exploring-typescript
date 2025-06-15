{
  // ================================
  // TypeScript: Type Aliases Example
  // ================================

  // ✅ 1. Type Alias for Object Type
  // --------------------------------
  // A 'type alias' lets you create a custom type using the 'type' keyword.
  // It’s a common practice to start custom type names with a capital letter.
  // This Student type describes the shape (structure) of a student object.

  type Student = {
    name: string;        // Required string property
    age: number;         // Required number property
    gender: string;      // Required string property
    contactNo?: string;  // Optional string property (note the '?')
    address: string;     // Required string property
  };

  // Now we can use the 'Student' type to type-check objects.

  const student1: Student = {
    name: 'sifat',
    age: 25,
    gender: 'male',
    contactNo: '2398489',  // Optional property is provided here
    address: "dhaka",
  };

  const student2: Student = {
    name: 'niloy',
    age: 26,
    gender: 'male',
    // contactNo is missing here, which is OK because it's optional (?)
    address: "dhaka",
  };

  // ✅ 2. Type Aliases for Primitive Types
  // --------------------------------------
  // You can also create type aliases for simple types like string or boolean.
  // This is useful for better readability or reusability in large codebases.

  type UserName = string;
  type IsAdmin = boolean;

  const username: UserName = "Sifat";
  const isAdmin: IsAdmin = true;

  // ✅ 3. Function with Type Annotations
  // -------------------------------------
  // You can define a function with type annotations directly.
  // This ensures both input parameters and return values are correctly typed.

  const add = (num1: number, num2: number): number => num1 + num2;

  // ✅ 4. Type Alias for a Function Type
  // -------------------------------------
  // Just like objects or primitives, you can also create type aliases for functions.
  // This is helpful when the same function shape is used in multiple places.

  type ADD = (num1: number, num2: number) => number;

  const addNumbers: ADD = (num1, num2): number => num1 + num2;

  // Benefit of this approach: 
  // If you ever need to change the function signature, you only change it in one place (the alias).
}
