import { isAxiosError } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosApi } from '../api/axios'
import '../styles/global.css'

function Login() {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axiosApi.post('/token/', { username: usuario, password: senha })
            if (response.status === 200) {
                navigate('/home')
            }
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                alert(error.response?.data.detail)
                console.error(error)
            }
        }

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='entrar'>
                <div className='input-field'>
                    <label htmlFor="usuario">Usuario</label>
                    <input id="usuario" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <br />
                <div className='input-field'>
                    <label htmlFor="senha">Senha</label>
                    <input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <br />
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login