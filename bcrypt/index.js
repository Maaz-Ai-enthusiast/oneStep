import bcrypt from 'bcryptjs';


/** example one */

// // Step 1: Generate a salt (default rounds is 10)
// const salt = bcrypt.genSaltSync();
// console.log("Generating salt  " + salt);


// // Step 2: Hash the password using the salt
// const password = "my_secure_password";
// const hash = bcrypt.hashSync(password, salt);


// console.log("Hashed Password:", hash);

// // Step 3: Verify the password against the hash
// const isMatch = bcrypt.compareSync(password, hash);
// console.log("Password Match:", isMatch); // true

// const isWrongPassword = bcrypt.compareSync("wrong_password", hash);
// console.log("Wrong Password Match:", isWrongPassword); // false




/** example two */



// const hashPassword = async () => {
//   const password = "my_secure_password";

//   try {
//     // Step 1: Generate a salt
//     const salt = await bcrypt.genSalt(10);
//     console.log("Generated Salt:", salt);

//     // Step 2: Hash the password
//     const hash = await bcrypt.hash(password, salt);
//     console.log("Hashed Password:", hash);

//     // Step 3: Verify the password
//     const isMatch = await bcrypt.compare(password, hash);
//     console.log("Password Match:", isMatch); // true

//     const isWrongPassword = await bcrypt.compare("wrong_password", hash);
//     console.log("Wrong Password Match:", isWrongPassword); // false
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };

// hashPassword();







// // Simulating user registration data
// const userInputPassword = "user_password123";

// // Function to hash the password
// async function registerUser(password) {
//   try {
//     // Generate a hash (10 salt rounds, commonly used in production)
//     const hash = await bcrypt.hash(password, 10);
//     console.log("Hashed Password:", hash);

//     // Simulating storing in database
//     const user = { username: "user1", passwordHash: hash };
//     console.log("User Stored in DB:", user);
//   } catch (err) {
//     console.error("Error hashing password:", err);
//   }
// }

// registerUser(userInputPassword);






// // Simulating a stored hashed password (retrieved from database)
// const storedHash = "$2a$10$u/CdR4jL2OebjjN.u.xh8u5KP5s5HJhtOB4EaMfnKJeyUgI0PKDgW"; // Example hash

// // Simulating user login
// const userInputPassword = "user_password123";

// // Function to verify password
// async function loginUser(inputPassword) {
//   try {
//     const isMatch = await bcrypt.compare(inputPassword, storedHash);
//     if (isMatch) {
//       console.log("Login Successful!");
//     } else {
//       console.log("Invalid Credentials.");
//     }
//   } catch (err) {
//     console.error("Error verifying password:", err);
//   }
// }

// loginUser(userInputPassword);





// // Simulating a new password from the user
// const newPassword = "new_secure_password";

// // Function to reset the password
// async function resetPassword(password) {
//   try {
//     // Generate a new hash
//     const newHash = await bcrypt.hash(password, 10);
//     console.log("New Hashed Password:", newHash);

//     // Simulating database update
//     const user = { username: "user1", passwordHash: newHash };
//     console.log("Updated User in DB:", user);
//   } catch (err) {
//     console.error("Error resetting password:", err);
//   }
// }

// resetPassword(newPassword);





// import validator from 'validator';

// const password = "MyP@ssword123";

// // Function to validate and hash password
// async function validateAndHash(password) {
//   if (!validator.isStrongPassword(password, { minLength: 8, minSymbols: 1 })) {
//     console.log("Password is not strong enough.");
//     return;
//   }

//   const hash = await bcrypt.hash(password, 10);
//   console.log("Strong password hashed successfully:", hash);
// }

// validateAndHash(password);




import validator from 'validator';

const password = "sword123";

// Function to validate and hash password
async function validateAndHash(password) {
  if (!validator.isStrongPassword(password, { minLength: 8, minSymbols: 1 })) {
    console.log("Password is not strong enough.");
    return;
  }

  const hash = await bcrypt.hash(password, 10);
  console.log("Strong password hashed successfully:", hash);
}

validateAndHash(password);