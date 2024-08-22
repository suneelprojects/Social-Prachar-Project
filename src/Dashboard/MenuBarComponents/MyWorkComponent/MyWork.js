




// // src/App.js
// import React, { useState, useEffect } from 'react';
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { auth, storage, db } from '../../../firebase';

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         setUser(currentUser);
//         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//         if (userDoc.exists()) {
//           setTasks(userDoc.data().tasks || []);
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleFileNameChange = (e) => {
//     setFileName(e.target.value);
//   };

//   const handleUpload = async () => {
//     if (!file || !fileName || !user) return;

//     const storageRef = ref(storage, `files/${user.uid}/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on('state_changed', 
//       (snapshot) => {
//         // Progress function (optional)
//       }, 
//       (error) => {
//         console.error("Upload failed:", error);
//       }, 
//       async () => {
//         // Complete function
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//         // Update user document with new task
//         const userDocRef = doc(db, "users", user.uid);
//         const userDoc = await getDoc(userDocRef);
//         const newTask = { fileName, fileUrl: downloadURL };
//         const updatedTasks = userDoc.exists() ? [...userDoc.data().tasks, newTask] : [newTask];

//         // Use setDoc to create or update the document
//         await setDoc(userDocRef, { tasks: updatedTasks }, { merge: true });

//         // Update tasks state
//         setTasks(updatedTasks);
//       }
//     );
//   };

//   return (
//     <div className="App">
//       <input type="file" onChange={handleFileChange} />
//       <input 
//         type="text" 
//         placeholder="Enter file name" 
//         value={fileName} 
//         onChange={handleFileNameChange} 
//       />
//       <button onClick={handleUpload}>Upload</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <a href={task.fileUrl} target="_blank" rel="noopener noreferrer">{task.fileName}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;





// import React, { useState, useEffect } from 'react';
// import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from "firebase/storage";
// import { doc, setDoc, getDoc, updateDoc, deleteField } from "firebase/firestore";
// import { auth, storage, db } from '../../../firebase';
// // import './styles.css';

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         setUser(currentUser);
//         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//         if (userDoc.exists()) {
//           setTasks(userDoc.data().tasks || []);
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleFileNameChange = (e) => {
//     setFileName(e.target.value);
//   };

//   const handleUpload = async () => {
//     if (!file || !fileName || !user) return;

//     const storageRef = ref(storage, `files/${user.uid}/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on('state_changed', 
//       (snapshot) => {
//         // Progress function (optional)
//       }, 
//       (error) => {
//         console.error("Upload failed:", error);
//       }, 
//       async () => {
//         // Complete function
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//         // Update user document with new task
//         const userDocRef = doc(db, "users", user.uid);
//         const userDoc = await getDoc(userDocRef);
//         const newTask = { fileName, fileUrl: downloadURL };
//         const updatedTasks = userDoc.exists() ? [...userDoc.data().tasks, newTask] : [newTask];

//         // Use setDoc to create or update the document
//         await setDoc(userDocRef, { tasks: updatedTasks }, { merge: true });

//         // Update tasks state
//         setTasks(updatedTasks);
//       }
//     );
//   };

//   const handleDelete = async (task) => {
//     if (!user) return;

//     // Delete file from Storage
//     const storageRef = ref(storage, `files/${user.uid}/${task.fileName}`);
//     await deleteObject(storageRef);

//     // Delete task from Firestore
//     const userDocRef = doc(db, "users", user.uid);
//     const userDoc = await getDoc(userDocRef);
//     const updatedTasks = userDoc.data().tasks.filter((t) => t.fileName !== task.fileName);
//     await updateDoc(userDocRef, { tasks: updatedTasks });

//     // Update tasks state
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <input type="file" onChange={handleFileChange} />
//       <input 
//         type="text" 
//         placeholder="Enter file name" 
//         value={fileName} 
//         onChange={handleFileNameChange} 
//       />
//       <button onClick={handleUpload}>Upload</button>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index} className="task-item">
//             <a href={task.fileUrl} target="_blank" rel="noopener noreferrer" className="task-link">{task.fileName}</a>
//             <button onClick={() => handleDelete(task)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from "firebase/storage";
// import { doc, setDoc, getDoc, updateDoc, deleteField } from "firebase/firestore";
// import { auth, storage, db } from '../../../firebase';

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         setUser(currentUser);
//         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//         if (userDoc.exists()) {
//           setTasks(userDoc.data().tasks || []);
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleFileNameChange = (e) => {
//     setFileName(e.target.value);
//   };

//   const handleUpload = async () => {
//     if (!file || !fileName || !user) return;

//     const storageRef = ref(storage, `files/${user.uid}/${fileName}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on('state_changed', 
//       (snapshot) => {
//         // Progress function (optional)
//       }, 
//       (error) => {
//         console.error("Upload failed:", error);
//       }, 
//       async () => {
//         // Complete function
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//         // Update user document with new task
//         const userDocRef = doc(db, "users", user.uid);
//         const userDoc = await getDoc(userDocRef);
//         const newTask = { fileName, fileUrl: downloadURL, filePath: `files/${user.uid}/${fileName}` };
//         const updatedTasks = userDoc.exists() ? [...userDoc.data().tasks, newTask] : [newTask];

//         // Use setDoc to create or update the document
//         await setDoc(userDocRef, { tasks: updatedTasks }, { merge: true });

//         // Update tasks state
//         setTasks(updatedTasks);
//       }
//     );
//   };

//   const handleDelete = async (task) => {
//     if (!user) return;

//     // Delete file from Storage
//     const storageRef = ref(storage, task.filePath);
//     await deleteObject(storageRef);

//     // Delete task from Firestore
//     const userDocRef = doc(db, "users", user.uid);
//     const userDoc = await getDoc(userDocRef);
//     const updatedTasks = userDoc.data().tasks.filter((t) => t.fileName !== task.fileName);
//     await updateDoc(userDocRef, { tasks: updatedTasks });

//     // Update tasks state
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <input type="file" onChange={handleFileChange} />
//       <input 
//         type="text" 
//         placeholder="Enter file name" 
//         value={fileName} 
//         onChange={handleFileNameChange} 
//       />
//       <button onClick={handleUpload}>Upload</button>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index} className="task-item">
//             <a href={task.fileUrl} target="_blank" rel="noopener noreferrer" className="task-link">{task.fileName}</a>
//             <button onClick={(e) => {
//                 e.preventDefault();
//                 handleDelete(task)
//             }
//             }>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import { getDownloadURL, ref, uploadBytesResumable, deleteObject, listAll } from "firebase/storage";
// import { doc, setDoc, getDoc, updateDoc, deleteField } from "firebase/firestore";
// import { auth, storage, db } from '../../../firebase';
// import style from "./mywork.module.css";

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         setUser(currentUser);
//         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//         if (userDoc.exists()) {
//           setTasks(userDoc.data().tasks || []);
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name);
//   };

//   const handleFileNameChange = (e) => {
//     setFileName(e.target.value);
//   };

//   const handleUpload = async () => {
//     if (!file || !fileName || !user) return;

//     const storageRef = ref(storage, `files/${user.uid}/${fileName}`);
//     const fileRef = ref(storage, `files/${user.uid}/${fileName}`);

//     try {
//       const files = await listAll(fileRef);
//       if (files.items.length > 0) {
//         setError("File already exists. Please choose a different file name.");
//         return;
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on('state_changed', 
//       (snapshot) => {
//         // Progress function (optional)
//       }, 
//       (error) => {
//         console.error("Upload failed:", error);
//       }, 
//       async () => {
//         // Complete function
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//         // Update user document with new task
//         const userDocRef = doc(db, "users", user.uid);
//         const userDoc = await getDoc(userDocRef);
//         const newTask = { fileName, fileUrl: downloadURL, filePath: `files/${user.uid}/${fileName}` };
//         const updatedTasks = userDoc.exists() ? [...userDoc.data().tasks, newTask] : [newTask];

//         // Use setDoc to create or update the document
//         await setDoc(userDocRef, { tasks: updatedTasks }, { merge: true });

//         // Update tasks state
//         setTasks(updatedTasks);

//         // Clear file input field and file name input field
//         setFile(null);
//         setFileName("");
//         setError(null);
//       }
//     );
//   };

//   const handleDelete = async (task) => {
//     if (!user) return;

//     // Delete file from Storage
//     const storageRef = ref(storage, task.filePath);
//     await deleteObject(storageRef);

//     // Delete task from Firestore
//     const userDocRef = doc(db, "users", user.uid);
//     const userDoc = await getDoc(userDocRef);
//     const updatedTasks = userDoc.data().tasks.filter((t) => t.fileName !== task.fileName);
//     await updateDoc(userDocRef, { tasks: updatedTasks });

//     // Update tasks state
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container">
//         <h3>My Work</h3>
// <div className='row'>
// <div className='col-12 col-md-6 col-sm-12 mb-2'>
//   <label htmlFor='File'>File</label>
// <input type="file" className="form-control" id="File" onChange={handleFileChange} />
//       </div>
// <div className='col-12 col-md-6 col-sm-12'>
// <label htmlFor='FileName'>Project Title</label>
//       <input 
//         type="text" 
//         placeholder="Enter file name" 
//         className='form-control'
//         // value={fileName} 
//          maxLength="20"
//         required
//         onChange={handleFileNameChange} 
//       />
//       </div>
//       <div className='row'>
// <div className='col-12 col-md-12 col-sm-12'>
// <label htmlFor='object'>Objective of the project</label>
//       <textarea 
//         type="text" 
//         placeholder="Enter the Objective of the Project" 
//         className='form-control'
//         rows="2"
//         maxLength="50"
//         required
//         onChange={handleFileNameChange} 
//       ></textarea>
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       </div>
//       </div>
//       <button onClick={handleUpload} className='btn mt-3 mb-3' style={{backgroundColor:'#7c56f6',color:'white'}}>Upload</button>
//       {/* <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index} className="task-item">
//             <a href={task.fileUrl} target="_blank" rel="noopener noreferrer" className="task-link">{task.fileName}</a>
//             <button onClick={(e) => {
//                 e.preventDefault();
//                 handleDelete(task)
//             }
//             }>Delete</button>
//           </li>
//         ))}
//       </ul> */}

// <div className={style.taskgrid}>
//   {tasks.map((task, index) => (
//     <div key={index} className={style.taskitem}>
//       <div className={style.card}>
//         <div className={style.cardbody}>
//           <h5 className={style.cardtitle} style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{task.fileName}</h5>
//           <p className={style.cardtext}>
//             <a href={task.fileUrl} target="_blank" rel="noopener noreferrer">
//               View File
//             </a>
//           </p>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               handleDelete(task);
//             }}
//             className="btn"
//             style={{backgroundColor:'#7c56f6',color:'white'}}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>


//      {/* <div className="container mt-2">
//     <div className="row">
//     <div className="col-md-12">
//       <div className="d-flex flex-wrap">
//         {tasks.map((task, index) => ( 
//               <div key={index} className="card" style={{ width: '100%' }}>
//                 <div className="card-body d-flex justify-content-between align-items-center">
//                   <div>
//                     <h5 className="card-title mb-0">{task.fileName}</h5>
//                     <p className="card-text mb-0">
//                       <a href={task.fileUrl} target="_blank" rel="noopener noreferrer">
//                         View File
//                       </a>
//                     </p>
//                   </div>
//                   <i className="bi bi-trash3-fill"  onClick={(e) => {
//                       e.preventDefault();
//                       handleDelete(task);
//                     }} style={{color:'#7c56f6'}}></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>  */}

// {/*<div className="container mt-5">
//       <div className="row">
//         <div className="col-md-12">
//           <div className={`${style.taskgrid}`}>
//             {tasks.map((task, index) => (
//               <div key={index} className="card mx-2 my-2" style={{ width: '18rem' }}>
//                 <div className="card-body d-flex justify-content-between align-items-center">
//                   <div style={{ flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
//                     <h5 className="card-title mb-0" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
//                       {task.fileName}
//                     </h5>
//                     <p className="card-text mb-0" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
//                       <a href={task.fileUrl} target="_blank" rel="noopener noreferrer">
//                         View File
//                       </a>
//                     </p>
//                   </div>
//                   <i className="bi bi-trash3-fill"  onClick={(e) => {
//                       e.preventDefault();
//                       handleDelete(task);
//                     }} style={{color:'#7c56f6'}}></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>*/}
// </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import { getDownloadURL, ref, uploadBytesResumable, deleteObject, listAll } from "firebase/storage";
// import { doc, setDoc, getDoc, updateDoc, deleteField } from "firebase/firestore";
// import { auth, storage, db } from '../../../firebase';
// import style from "./mywork.module.css";

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [projectObjective, setProjectObjective] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         setUser(currentUser);
//         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//         if (userDoc.exists()) {
//           setTasks(userDoc.data().tasks || []);
//         }
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name);
//   };

//   const handleFileNameChange = (e) => {
//     setFileName(e.target.value);
//   };

//   const handleProjectObjectiveChange = (e) => {
//     setProjectObjective(e.target.value);
//   };

//   const handleUpload = async () => {
//     if (!file || !fileName || !projectObjective || !user) return;

//     const storageRef = ref(storage, `files/${user.uid}/${fileName}`);
//     const fileRef = ref(storage, `files/${user.uid}/${fileName}`);

//     try {
//       const files = await listAll(fileRef);
//       if (files.items.length > 0) {
//         setError("File already exists. Please choose a different file name.");
//         return;
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on('state_changed', 
//       (snapshot) => {
//         // Progress function (optional)
//       }, 
//       (error) => {
//         console.error("Upload failed:", error);
//       }, 
//       async () => {
//         // Complete function
//         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

//         // Update user document with new task
//         const userDocRef = doc(db, "users", user.uid);
//         const userDoc = await getDoc(userDocRef);
//         const newTask = { 
//           fileName, 
//           fileUrl: downloadURL, 
//           filePath: `files/${user.uid}/${fileName}`,
//           projectObjective
//         };
//         const updatedTasks = userDoc.exists() ? [...userDoc.data().tasks, newTask] : [newTask];

//         // Use setDoc to create or update the document
//         await setDoc(userDocRef, { tasks: updatedTasks }, { merge: true });

//         // Update tasks state
//         setTasks(updatedTasks);

//         // Clear file input field and file name input field
//         setFile(null);
//         setFileName("");
//         setProjectObjective("");
//         setError(null);
//       }
//     );
//   };

//   const handleDelete = async (task) => {
//     if (!user) return;

//     // Delete file from Storage
//     const storageRef = ref(storage, task.filePath);
//     await deleteObject(storageRef);

//     // Delete task from Firestore
//     const userDocRef = doc(db, "users", user.uid);
//     const userDoc = await getDoc(userDocRef);
//     const updatedTasks = userDoc.data().tasks.filter((t) => t.fileName !== task.fileName);
//     await updateDoc(userDocRef, { tasks: updatedTasks });

//     // Update tasks state
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container">
//         <h3>My Work</h3>
// <div className='row'>
// <div className='col-12 col-md-6 col-sm-12 mb-2'>
//   <label htmlFor='File'>File</label>
// <input type="file" className="form-control" id="File" onChange={handleFileChange} />
//       </div>
// <div className='col-12 col-md-6 col-sm-12'>
// <label htmlFor='FileName'>Project Title</label>
//       <input 
//         type="text" 
//         placeholder="Enter file name" 
//         className='form-control'
//         // value={fileName} 
//          maxLength="20"
//         required
//         onChange={handleFileNameChange} 
//       />
//       </div>
//       <div className='row'>
// <div className='col-12 col-md-12 col-sm-12'>
// <label htmlFor='object'>Objective of the project</label>
//       <textarea 
//         type="text" 
//         placeholder="Enter the Objective of the project"
//         className='form-control'
//         rows="2"
//         maxLength="150"
//         required
//         onChange={handleProjectObjectiveChange} 
//       />
//       </div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       </div>
//       </div>
//       <button onClick={handleUpload} className='btn mt-3 mb-3' style={{backgroundColor:'#7c56f6',color:'white'}}>Upload</button>

// <div className={style.taskgrid}>
//   {tasks.map((task, index) => (
//     <div key={index} className={style.taskitem}>
//       <div className={style.card}>
//         <div className={style.cardbody}>
//           <h5 className={style.cardtitle} style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{task.fileName}</h5>
//           <p className={style.cardtext}>
//             <a href={task.fileUrl} target="_blank" rel="noopener noreferrer">
//               View File
//             </a>
//           </p>
//           <p className={style.cardtext} style={{whiteSpace:'wrap',textOverflow: 'ellipsis'}}>{task.projectObjective}</p>
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               handleDelete(task);
//             }}
//             className="btn"
//             style={{backgroundColor:'#7c56f6',color:'white'}}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { getDownloadURL, ref, uploadBytesResumable, deleteObject, listAll } from "firebase/storage";
import { doc, setDoc, getDoc, updateDoc, deleteField } from "firebase/firestore";
import { auth, storage, db } from '../../../firebase';
import style from "./mywork.module.css";

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [projectObjective, setProjectObjective] = useState("");
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setTasks(userDoc.data().tasks || []);
        }
      }
    };

    fetchUser();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleProjectObjectiveChange = (e) => {
    setProjectObjective(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !fileName || !projectObjective || !user) return;

    const storageRef = ref(storage, `files/${user.uid}/${fileName}`);
    const fileRef = ref(storage, `files/${user.uid}/${fileName}`);

    try {
      const files = await listAll(fileRef);
      if (files.items.length > 0) {
        setError("File already exists. Please choose a different file name.");
        return;
      }
    } catch (error) {
      console.error(error);
    }

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Progress function (optional)
      }, 
      (error) => {
        console.error("Upload failed:", error);
      }, 
      async () => {
        // Complete function
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Update user document with new task
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        const newTask = { 
          fileName, 
          fileUrl: downloadURL, 
          filePath: `files/${user.uid}/${fileName}`,
          projectObjective
        };
        const updatedTasks = userDoc.exists() ? [...userDoc.data().tasks, newTask] : [newTask];

        // Use setDoc to create or update the document
        await setDoc(userDocRef, { tasks: updatedTasks }, { merge: true });

        // Update tasks state
        setTasks(updatedTasks);

        // Clear file input field and file name input field
        setFile(null);
        setFileName(""); // added this line
        setProjectObjective(""); // added this line
        setError(null);
      }
    );
  };

  const handleDelete = async (task) => {
    if (!user) return;

    // Delete file from Storage
    const storageRef = ref(storage, task.filePath);
    await deleteObject(storageRef);

    // Delete task from Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    const updatedTasks = userDoc.data().tasks.filter((t) => t.fileName !== task.fileName);
    await updateDoc(userDocRef, { tasks: updatedTasks });

    // Update tasks state
    setTasks(updatedTasks);
  };

  return (
    <div className="container-fluid">
        <h3>My Work</h3>
<div className='row'>
<div className='col-12 col-md-6 col-sm-12 mb-2'>
  <label htmlFor='File'>File</label>
<input type="file" className="form-control" id="File" onChange={handleFileChange} />
      </div>
<div className='col-12 col-md-6 col-sm-12'>
<label htmlFor='FileName'>Project Title</label>
      <input 
        type="text" 
        placeholder="Enter file name" 
        className='form-control'
        value={fileName}  // added this line
        maxLength="20"
        required
        onChange={handleFileNameChange} 
      />
      </div>
      <div className='row'>
<div className='col-12 col-md-12 col-sm-12'>
<label htmlFor='object'>Objective of the project</label>
      <textarea 
        type="text" 
        placeholder="Enter the Objective of the project"
        className='form-control'
        rows="2"
        maxLength="150"
        required
        value={projectObjective}  // added this line
        onChange={handleProjectObjectiveChange} 
      />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      </div>
      <button onClick={handleUpload} className='btn mt-3 mb-3' style={{backgroundColor:'#7c56f6',color:'white'}}>Upload</button>

<div className={style.taskgrid}>
  {tasks.map((task, index) => (
    <div key={index} className={style.taskitem}>
      <div className={`${style.card} m-2`}>
        <div className={style.cardbody}>
          <h5 className={style.cardtitle} style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{task.fileName}</h5>
          <p className={style.cardtext}>
            <a href={task.fileUrl} target="_blank" rel="noopener noreferrer">
              View File
            </a>
          </p>
          <p className={style.cardtext} style={{whiteSpace:'wrap',textOverflow: 'ellipsis'}}>{task.projectObjective}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDelete(task);
            }}
            className="btn"
            style={{backgroundColor:'#7c56f6',color:'white'}}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default App; 