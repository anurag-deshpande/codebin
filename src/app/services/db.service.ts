import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private db?:any;
  constructor(private authService: AuthService) { 
    this.db = getFirestore()
  }

  async createSnippet(snippet: {title:string, code:string}) {
    try {
      const docRef = await addDoc(collection(this.db, "users"), {
       ... snippet,
       by: this.authService.getUid()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("error while creating")
    }
  }

  async getAllSnippet() {
    let result:any = [];
    const querySnapshot = await getDocs(collection(this.db, "users"));
    querySnapshot.forEach(element => {
      console.log(element.data());
      result.push({id: element.id, ...element.data()})
    });
    return result;
  }

  async getSnippetById(docId: string) {
    const docRef = doc(this.db, "users", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return {
        id: "",
        title: "",
        code: ""
      }
    }

  }
}
