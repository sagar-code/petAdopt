const Pet = ({ name, animal, breed, key }) => {
    return (
        <div key={key}>
            <h1>{name}</h1>
            <h1>{animal}</h1>
            <h1>{breed}</h1>
        </div>
    );
};

export default Pet;
