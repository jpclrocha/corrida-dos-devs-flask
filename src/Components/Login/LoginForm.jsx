import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './LoginForm.scss'

export default function LoginForm() {
	return (
		<form className='login-form-container'>
			<Input
				label='Email:'
				type='email'
				placeholder='Digite seu email aqui'
			/>
			<Input
				label='Senha:'
				type='password'
				placeholder='Digite sua senha aqui'
			/>
			<Link to='/esqueciSenha' className='forgot-password'>
				Esqueci minha senha
			</Link>

			<Link to='/myaccount'>
				<Button type='submit' buttonType='verde'>
					ENTRAR
				</Button>
			</Link>

			<h1 className='text-center'>
				Não tem conta?
				<Link to='/signup' className='sign-up'>
					Criar conta
				</Link>
			</h1>
		</form>
	)
}