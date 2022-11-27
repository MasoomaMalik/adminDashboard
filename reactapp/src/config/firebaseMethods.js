import app from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, push, onValue, get, onChildAdded } from "firebase/database";

export const auth = getAuth(app);
export const db = getDatabase(app);

let signUpUser = (obj) => {
  let { email, password, userName, contact, gender } = obj;
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const reference = ref(db, `users/${user.uid}`);
        obj.id = user.uid;
        set(reference, obj)
          .then(() => {
            resolve("user sent to database");
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

let loginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const reference = ref(db, `users/${user.uid}`);
        onValue(reference, (snapshot) => {
          let status = snapshot.exists();
          if (status) {
            resolve(snapshot.val());
          } else {
            reject("data not found");
          }
        });
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
let checkUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve(uid);
      } else {
        reject("no user login");
      }
    });
  });
};
let sendData = (obj, nodeName, dataId) => {
  return new Promise((resolve, reject) => {
    //edit
    let postRef;
    if (dataId) {
      postRef = ref(db, `${nodeName}/${dataId}`);
    } else {
      let addRef = ref(db, nodeName);
      obj.dataId = push(addRef).key;
      postRef = ref(db, `${nodeName}/${obj.dataId}`);
    }
    let reference=ref(db,`${nodeName}/${obj.dataId}`)
    set(reference, obj)
      .then((res) => {
        resolve(`data added on ${nodeName}`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


let getData = (nodeName, dataId) => {
  
  return new Promise((resolve, reject) => {
    let reference = ref(db, `${nodeName}/${dataId ? dataId : ""}`);
    onValue(
      reference,
      (snapshot) => {
          if (snapshot.exists()) {
              let data = snapshot.val();
              if (dataId) {
                  // console.log(data);

                  resolve(data);
                } else {
                    console.log(data);
                    
                    resolve(Object.values(data));
                  }
                } else {
                    reject("no data found");
                  }
                },
                { onlyOnce: false }
              );
              
    // const commentsRef = ref(db, 'post-comments/' + postId);
   
   //onChildAdded
//     onChildAdded(reference, (snapshot) => {
//       if (snapshot.exists()) {
//               let data = snapshot.val();
//               if (dataId) {
//                   console.log(data);

//                   resolve(data);
//                 } else {
//                     console.log(data);
//                     resolve(data)
                  
//                   }
//                 } else {
//                     reject("no data found");
//                   }
//                 },
//                 { onlyOnce: false }
            
// );
    


  });
};

let getDataOnChild = (nodeName, dataId) => {
  
  return new Promise((resolve, reject) => {
    let reference = ref(db, `${nodeName}/${dataId ? dataId : ""}`);
    
              
    // const commentsRef = ref(db, 'post-comments/' + postId);
  
    onChildAdded(reference, (snapshot) => {
      if (snapshot.exists()) {
              let data = snapshot.val();
              if (dataId) {
                  console.log(data);

                  resolve(data);
                } else {
                    console.log(data);
                    resolve(data)
                  
                  }
                } else {
                    reject("no data found");
                  }
                },
                { onlyOnce: false }
            
);
    


  });
};
export { signUpUser, loginUser, checkUser, sendData, getData,getDataOnChild };
