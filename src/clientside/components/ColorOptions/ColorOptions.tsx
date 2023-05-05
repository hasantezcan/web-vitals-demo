import { useProduct } from "../../context/product-context";

const ColorOptions = () => {
    const { colorOptions } = useProduct();

    if (!colorOptions?.length) return null;


    return (
        <div className="color-options">
            {
                colorOptions.map(option => {
                    return <div onClick={() => window.location.reload} style={{ backgroundColor: option.color, border: `1px solid ${option.color}` }} className="color-option" />
                })
            }
        </div>
    )
};

export { ColorOptions };
