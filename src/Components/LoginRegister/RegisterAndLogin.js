import React, { useState } from 'react'
import { database } from '../config'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function RegisterAndLogin() {
	const [login, setLogin] = useState(false)

	const history = useNavigate()

	const handleSubmit = (e, type) => {
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		if (type === 'signup') {
			createUserWithEmailAndPassword(database, email, password)
				.then(data => {
					console.log(data, 'authData')
					history('/home')
				})
				.catch(err => {
					alert(err, 'ОШИБКА ПРИ РЕГИСТРАЦИИ')
					setLogin(true)
				})
		} else {
			signInWithEmailAndPassword(database, email, password)
				.then(data => {
					console.log(data, 'authData')
					history('/home')
				})
				.catch(err => {
					alert(err,'ОШИБКА ПРИ АВТОРИЗАЦИИ')
				})
		}
	}

	const handleReset = () => {
		history('/reset')
	}
	return (
		<div className='App'>
			{/* Регистраци и логин страница */}
			<h3>ДОБРО ПОЖАЛОВАТЬ</h3>
			<div className='row'>
				<div
					className={login === false ? 'activeColor' : 'pointer'}
					onClick={() => setLogin(false)}
				>
					Регистрация
				</div>
				<div
					className={login === true ? 'activeColor' : 'pointer'}
					onClick={() => setLogin(true)}
				>
					Войти
				</div>
			</div>
			<h1>{login ? 'Войти' : 'Регистрация'}</h1>
			<br />
			<form onSubmit={e => handleSubmit(e, login ? 'signin' : 'signup')}>
				<div className='email'>
					<p>Почта</p>
					<input name='email' placeholder='Email' />
				</div>
				<div className='email'>
					<p>Пароль</p>
					<input name='password' type='text' placeholder='Password' />
				</div>
				<p onClick={handleReset}>Забыли пароль?</p>
				<button>{login ? 'Войти' : 'Регистрация'}</button>
			</form>
		</div>
	)
}
export default RegisterAndLogin
