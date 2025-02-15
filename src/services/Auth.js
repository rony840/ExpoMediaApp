import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
    return userCredential
  } catch (error) {
    console.error("Sign Up Error:", error);
    return error
  }
};