import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/performance';
import Promise from 'bluebird';

const firebaseConfig = {
  apiKey: 'AIzaSyC9loTXCEkmgKDsqjPEGQkhWBWSDBZzVIE',
  authDomain: 'portfolio-d7a5d.firebaseapp.com',
  databaseURL: 'https://portfolio-d7a5d.firebaseio.com',
  projectId: 'portfolio-d7a5d',
  storageBucket: 'portfolio-d7a5d.appspot.com',
  messagingSenderId: '986749327949',
  appId: '1:986749327949:web:2e3547262c31b2e2',
};

firebase.initializeApp(firebaseConfig);
firebase.performance();

const db = firebase.firestore();

export default {
  fetchTechnologies: () => {
    return new Promise((resolve, reject) => {
      const technologies = [];
      db.collection('technologies')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            technologies.push(doc.data());
          });
          resolve(technologies);
        })
        .catch(err => reject(err));
    });
  },
  fetchArticles: () => {
    return new Promise((resolve, reject) => {
      const articles = [];
      db.collection('articles')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            articles.push(doc.data());
          });
          resolve(articles);
        })
        .catch(err => reject(err));
    });
  },
};
