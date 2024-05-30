import './login.css'
import FormLogin from '../../components/Forms/FormLogin';
import Header from '../../components/Header';
import FloatingMenu from '../../components/FloatingMenu/FloatingMenu';


function Login() {
    const handleClick = () => {
    };

    return (
        <>
        <Header />
        <FloatingMenu />
        <div className='loginDiv'>
            <h1 className='loginAlia'>ALIA</h1>
            <FormLogin onSubmit={handleClick} />
        </div>
        </>
    )
}
export default Login;