import { useForm } from '@inertiajs/inertia-react'
import React, { FormEvent } from 'react'
import { BasicLink } from '~/components/BasicLink'
import { Button } from '~/components/Button'
import { Checkbox } from '~/components/Checkbox'
import { TextField } from '~/components/TextField'

interface FormData {
  name: string
  email: string
  password: string
  remember: boolean
}

const Register = () => {
  const { data, setData, post, processing, errors } = useForm<FormData>({
    name: '',
    email: '',
    password: '',
    remember: false,
  })

  function makeHandleChange<K extends keyof FormData>(inputName: K) {
    return (value: FormData[K]) => {
      setData({ ...data, [inputName]: value })
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    post('/auth/register')
  }

  return (
    <main className='w-full h-screen grid place-items-center'>
      <form
        className='w-80 flex flex-col gap-4 p-3 rounded-lg shadow-md bg-slate-100 dark:bg-gray-800'
        onSubmit={handleSubmit}
      >
        <h1 className='text-3xl text-center'>Registro</h1>
        <TextField
          label='Nome'
          placeholder='Digite seu nome'
          name='name'
          type='text'
          autoComplete='name'
          autoFocus
          value={data.name}
          onChange={makeHandleChange('name')}
          errorMessage={errors.name}
        />
        <TextField
          label='Email'
          placeholder='Digite seu email'
          name='email'
          type='email'
          autoComplete='username'
          autoFocus
          value={data.email}
          onChange={makeHandleChange('email')}
          errorMessage={errors.email}
        />
        <TextField
          label='Senha'
          placeholder='Digite sua senha'
          name='password'
          type='password'
          autoComplete='new-password'
          value={data.password}
          onChange={makeHandleChange('password')}
          description='Sua senha deve conter de 6 a 18 caractéres'
          errorMessage={errors.password}
        />
        <Checkbox isSelected={data.remember} onChange={makeHandleChange('remember')}>
          Lembrar-me
        </Checkbox>
        <Button type='submit' isDisabled={processing}>
          Registrar
        </Button>
        <BasicLink href='/auth/login'>Fazer Login</BasicLink>
      </form>
    </main>
  )
}

export default Register
