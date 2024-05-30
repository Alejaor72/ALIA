import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const logIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user.uid);
        return true;
    } catch (error) {
        console.error(error.code, error.message);
        return false;
    }
};

export const uploadImg = async (img, project) => {
    try {
        const storageRef = ref(storage, `${project}/${img.name}`);
        await uploadBytes(storageRef, img);
        const imgURL = await getDownloadURL(storageRef);
        return imgURL;
    } catch (error) {
        console.error('Upload error', error);
    }
};

export const addProject = async (project) => {
    try {
        const docRef = await addDoc(collection(db, 'projects'), project);
        console.log("The project was successfully updated", docRef.id);
    } catch (error) {
        console.log("Error adding a project", error);
    }
};

export const getProjectsFromFirestore = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projects = [];
        querySnapshot.forEach((doc) => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        return projects;
    } catch (error) {
        console.error("Error getting projects:", error);
        return [];
    }
};

export const getProjectById = async (projectId) => {
    try {
        const projectRef = doc(db, 'projects', projectId);
        const docSnap = await getDoc(projectRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("No such document!");
        }
    } catch (error) {
        console.error("Error getting document:", error);
        throw error;
    }
};
