import ToolCard from "../ToolCard/ToolCard";

const Products = ({toolsData, cart, addToCart}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
                toolsData.map((tool, index) => <ToolCard key={index} tool={tool} cart={cart} addToCart={addToCart} />)
            }
        </div>
    );
};

export default Products;