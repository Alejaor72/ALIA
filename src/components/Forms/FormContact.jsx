import PropTypes from 'prop-types';
import Button from '../../components/Button';

function FormContact({onSubmit }) {
    const handleClick = () => {
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="inputContactDiv">
                <h3 className='subtitleCont'>Contáctanos</h3>
                <input type="text" placeholder='Email' className='inputContact'/>
                <select className='DesignselectContact'>
                    <option value=''>Tipo de diseño</option>
                    <option value='UX'>UX</option>
                    <option value='UI'>UI</option>
                    <option value='Ilustración'>Ilustración</option>
                    <option value='Animación'>Animación</option>
                    <option value='Programación'>Programación</option>
                </select>
                <input type="text" placeholder='Comentario' className='inputCommentContact'/>
                <Button className="contactBut" label="Enviar" onClick={handleClick} />
            </div>
        </form>
    );
}

FormContact.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default FormContact;