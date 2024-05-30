import PropTypes from 'prop-types';
import { useState } from 'react';
import { addProject, uploadImg } from '../../services/firebase';
import Button from '../../components/Button';

const initialFormData = {
    imageUpload: null,
    projectName: '',
    behanceLink: '',
    integrantes: '',
    especializacion: '',
    descripcion: '',
};

function FormProject({ onSubmit }) {
    const [formData, setFormData] = useState(initialFormData);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "imageUpload" && files && files[0]) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imgUrl = '';
            if (formData.imageUpload) {
                imgUrl = await uploadImg(formData.imageUpload, formData.projectName);
            }
            const project = {
                name: formData.projectName,
                behanceLink: formData.behanceLink,
                integrantes: formData.integrantes,
                especializacion: formData.especializacion,
                descripcion: formData.descripcion,
                imgUrl,
            };
            await addProject(project);
            onSubmit();
            setFormData(initialFormData);
            setImagePreview(null);
        } catch (error) {
            console.error("Error uploading project:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputDivProject">
                <div className='upload-container'>
                    <input type="file" name="imageUpload" onChange={handleChange} />
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
                    )}
                </div>
                <div className='textPart'>
                    <input type="text" name="projectName" placeholder='Nombre del Proyecto' value={formData.projectName} onChange={handleChange} className='inputProject' required />
                    <input type="text" name="behanceLink" placeholder='Link de Behance' value={formData.behanceLink} onChange={handleChange} className='inputProject' required />
                    <select className='DesignselectProject' name="integrantes" value={formData.integrantes} onChange={handleChange} required>
                        <option value=''>Integrantes</option>
                        <option value='Laura'>Laura</option>
                        <option value='Isabella'>Isabella</option>
                        <option value='Andrea'>Andrea</option>
                        <option value='Alejandra'>Alejandra</option>
                    </select>
                    <select className='DesignselectProject' name="especializacion" value={formData.especializacion} onChange={handleChange} required>
                        <option value=''>Especialización</option>
                        <option value='UX'>UX</option>
                        <option value='UI'>UI</option>
                        <option value='Ilustración'>Ilustración</option>
                        <option value='Animación'>Animación</option>
                        <option value='Programación'>Programación</option>
                    </select>
                    <input type="text" name="descripcion" placeholder='Descripción' value={formData.descripcion} onChange={handleChange} className='inputCommentProject' required />
                    <Button type="submit" label='Publicar'/>
                </div>
            </div>
        </form>
    );
}

FormProject.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default FormProject;
