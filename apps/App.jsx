import { Footer, Navbar, Services, Timeline, Partner, Transactions, Welcome } from "./components";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBM2yPck-iTcs4ZtkY4NfI0w1V8xcTZcM",
  authDomain: "test1-ce268.firebaseapp.com",
  projectId: "test1-ce268",
  storageBucket: "test1-ce268.appspot.com",
  messagingSenderId: "785495315714",
  appId: "1:785495315714:web:9da874d5f4a84332619e1b",
  measurementId: "G-ZK917K2H1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Timeline />
      <div className="section Partner" ref={Partner}>
        <Partner/>
      </div>
      <Footer />
      
    </div>
    );
}

export default App;
