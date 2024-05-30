import { useState } from 'react';
import FormProject from '../../components/Forms/FormProject';
import Header from '../../components/Header';
import FloatingMenu from '../../components/FloatingMenu/FloatingMenu';
import './upload.css';

function Upload() {
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        setMessage('Project uploaded successfully!');
    };

    return (
        <>
            <Header />
            <FloatingMenu />
            <div className='ProjectDiv'>
                {message && <p>{message}</p>}
                <FormProject onSubmit={handleSubmit} />
            </div>
        </>
    );
}

export default Upload;