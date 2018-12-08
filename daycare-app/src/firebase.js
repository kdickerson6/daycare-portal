import firebase from 'firebase';

// Initialize Firebase
const config = {
apiKey: "AIzaSyDN3-czdUpwlkRPjKhfTOczV_gHU7TN1CI",
authDomain: "daycare-b176c.firebaseapp.com",
databaseURL: "https://daycare-b176c.firebaseio.com",
projectId: "daycare-b176c",
storageBucket: "daycare-b176c.appspot.com",
messagingSenderId: "88878176556"
};
firebase.initializeApp(config);

export default firebase; 