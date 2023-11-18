
import { initializeApp } from 'firebase/app'
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBewRXING9obKCWx0h58YS8IxpvN64WshI',
	authDomain: 'login-3374e.firebaseapp.com',
	projectId: 'login-3374e',
	storageBucket: 'login-3374e.appspot.com',
	messagingSenderId: '596691998522',
	appId: '1:596691998522:web:ce11d26648f7a6957a6203',
}

const app = initializeApp(firebaseConfig)
export const database = getAuth(app)

