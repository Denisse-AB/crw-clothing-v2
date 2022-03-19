import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/sign-up";

const SignInUp = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = createUserDocumentFromAuth(user)
    console.log(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUp />
    </div>
  );
}

export default SignInUp;