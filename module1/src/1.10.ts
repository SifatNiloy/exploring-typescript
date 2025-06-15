{
  // ============================
  // ✅ 1. Union Types in TypeScript
  // ============================

  // Union types let a variable be one of several types or values.

  // Literal union type: Only these two string values are allowed
  type FrontendDev = 'fakibazDev' | 'juniorDev';

  // Another literal union: Only these two values
  type FullStackDev = 'FrontendDev' | 'expertDev';

  // ❗ Be careful: Here you're just using strings like "FrontendDev" as values, 
  // not referencing the earlier FrontendDev type. So it's a bit misleading.

  // Instead, let's use better type aliasing and value usage for clarity 👇

  // 🛠 Improved approach: Use descriptive literal values
  type FrontendLevel = 'fakibazDev' | 'juniorDev' | 'midDev' | 'seniorDev';
  type BackendLevel = 'intern' | 'juniorBackend' | 'seniorBackend';
  type DevStack = FrontendLevel | BackendLevel;

  // Now this developer can only be assigned a value from these defined literals
  const newDev: FrontendLevel = 'juniorDev'; // ✅ allowed

  // ✅ 2. Union in Object Type (with Literal Strings)
  // --------------------------------------------------
  type User = {
    name: string;
    email?: string; // Optional field (can be omitted)
    age: number;
    gender: 'Male' | 'Female'; // Union of fixed string values
    BloodGroup: 'A' | 'B' | 'O' | 'AB'; // Only these values are valid
  };

  // Example usage:
  const user1: User = {
    name: "Sifat",
    age: 25,
    gender: "Male",
    BloodGroup: "O",
    // email is optional, so it's fine if omitted
  };

  // ===============================
  // ✅ 3. Intersection Types in TypeScript
  // ===============================

  // Intersection type (&) combines multiple types into one.
  // All properties from both types must exist in the final object.

  // FrontendDeveloper type
  type FrontendDeveloper = {
    skills: string[]; // List of skills (array of strings)
    designation1: 'Frontend Developer'; // Literal string
  };

  // BackendDeveloper type
  type BackendDeveloper = {
    skills: string[]; // Also has skills, but in a real app these might differ
    designation2: 'Backend Developer';
  };

  // FullStackDeveloper must satisfy BOTH types at once.
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const sifat: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"], // Shared field (from both types)
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
  };

  // ⚠️ Note: When types have fields with the same name (`skills`), they must be compatible.
  // Here, both are `string[]`, so it's OK.

  // 🧠 Tip:
  // Use intersection when you want to merge responsibilities (e.g., frontend + backend dev),
  // and union when a value can be one *or* another (e.g., 'Male' | 'Female').

}
