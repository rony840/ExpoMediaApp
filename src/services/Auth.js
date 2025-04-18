import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User Logged in:", userCredential.user);
    return userCredential
  } catch (error) {
    console.error("Sign in error:", error);
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Created:", userCredential.user);
      return userCredential
    }catch(e){
      console.error("Sign up error:", error);
    }
    return error
  }
};