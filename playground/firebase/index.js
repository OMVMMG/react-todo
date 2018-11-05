import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyBPdrays-HEW2ZnTTmem4TqmhSa5UscUkM",
   authDomain: "mmg-todo-app.firebaseapp.com",
   databaseURL: "https://mmg-todo-app.firebaseio.com",
   projectId: "mmg-todo-app",
   storageBucket: "mmg-todo-app.appspot.com",
   messagingSenderId: "211728666298"
 };
 firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Marcelo',
    age: 33
  }
 }); //.then(() => {
//   console.log('Set worked!');
// }, (e) => {
//   console.log('Set failed');
// })
//
// // firebaseRef.set({
// //   appName: 'Todo Application'
// // });
//
// firebaseRef.child('user').set({
//   name: 'Mike'
// });
//
// firebaseRef.child('app').set({
//   name: 'Todo App'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//   version: '1.0.1'
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed');
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Mike'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo App'
// });
//
// firebaseRef.child('user').update({
//   name: 'Bernard'
// });

//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });
// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire databse', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });

// firebaseRef.off();

// firebaseRef.update({isRunning: false});
var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});
// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'Walk the dog'
// });

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});

console.log('Todo id', newNoteRef.key);
