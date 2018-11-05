import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyBPdrays-HEW2ZnTTmem4TqmhSa5UscUkM",
     authDomain: "mmg-todo-app.firebaseapp.com",
     databaseURL: "https://mmg-todo-app.firebaseio.com",
     projectId: "mmg-todo-app",
     storageBucket: "mmg-todo-app.appspot.com",
     messagingSenderId: "211728666298"
   };

   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
