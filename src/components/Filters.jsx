import PropTypes from 'prop-types';

function Filters({ onChange }) {
    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        console.log("Selected value in filter:", selectedValue);
        onChange(selectedValue);
    };

    return (
        <section className='filters-section'>
            <select onChange={handleFilterChange}>
                <option value=''>Tipo de proyecto</option>
                <option value='Todos'>Todos</option>
                <option value='UX'>UX</option>
                <option value='UI'>UI</option>
                <option value='Ilustración'>Ilustración</option>
                <option value='Animación'>Animación</option>
                <option value='Programación'>Programación</option>
            </select>
        </section>
    );
}

Filters.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Filters;
