const ExEvent = () => {
    const handleInput = () => {
        console.log('Form input');
    };
    const handleButtonClick = () => {
        alert('Button Clicked');
    };

    return (
        <form>
            <label htmlFor="book-input">Title</label>
            <input
                type="text"
                id="book-input"
                onChange={handleInput}
                style={{ margin: '1rem' }}
            />

            <button onClick={handleButtonClick}>Click Me</button>
        </form>
    );
};

export default ExEvent;
