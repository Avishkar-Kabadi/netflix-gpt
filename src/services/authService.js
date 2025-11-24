import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { appRouter } from "../appRouter";
import { addUser, removeUser } from "../store/userSlice";
import "../utils/firebase";

export const signUp = async (email, password, fullName, dispatch) => {
    const auth = getAuth();

    try {
        await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82Y2QyMTRiNjllYzA0NThhZTBhMDYyZGZhM2EzZmIzMD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.c9a0HzSG3ugBYKHpe56mBvx0rXwSZuIkWXsbkzi-jQE"
        });

        await auth.currentUser.reload();

        const freshUser = auth.currentUser;

        const formattedUser = {
            uid: freshUser.uid,
            email: freshUser.email,
            displayName: freshUser.displayName,
            photoURL: freshUser.photoURL
        };

        dispatch(addUser(formattedUser));

        return { user: formattedUser };

    } catch (error) {
        return {
            error: {
                code: error.code,
                message: error.message,
            },
        };
    }
};


export const signIn = async (email, password) => {
    const auth = getAuth();

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password);
        return userCredential.user;
    } catch (error) {

        return {
            error: {
                code: error.code,
                message: error.message
            }
        }
    }
}


export const signOutUser = async () => {
    const auth = getAuth();

    try {
        await signOut(auth);
        return { message: "User sign out sucessfully" };
    } catch (error) {
        return {
            error: {
                code: error.code,
                message: error.message
            }
        }
    }

}



export const listenToAuthChanges = (dispatch) => {
    const auth = getAuth();

    return onAuthStateChanged(auth, (user) => {
        if (user) {
            const formattedUser = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            }
            dispatch(addUser(formattedUser));
            appRouter.navigate("/browse");

        }
        else {
            dispatch(removeUser());
            appRouter.navigate("/");

        }
    });
};

