const SelectSize = ({ size, cloth }) => {

    function onSelect(e) {
        console.log(`${cloth.productId} is selected of size ${e.target.value}`)
    }

    return (
        <p>
            <input
                type='checkbox'
                className='checkbox'
                // checked={}
                onChange={onSelect}
                name={cloth.productId}
                id={`${cloth.productId}-${size.size}`}
                value={size.size}
            />
            <label htmlFor={`${cloth.productId}-${size.size}`}>
                {size.sizeAbbreviation}
            </label>
        </p>
    )
}

export default SelectSize