import './contact.css';
import FormContact from '../../components/Forms/FormContact';
import Header from '../../components/Header';
import FloatingMenu from '../../components/FloatingMenu/FloatingMenu';

function Contact() {
    const handleClick = () => {
    };

    return (
        <>
        <Header />
        <FloatingMenu />
        <div className='ContactDiv'>
            <h1 className='contactAlia'>ALIA</h1>
            <FormContact onSubmit={handleClick} />
        </div>
        </>
    )
}
export default Contact;