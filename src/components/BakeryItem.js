// TODO: create a component that displays a single bakery item
// TODO: create a component that displays a single bakery item
export function BakeryItem({item, addCounter}){


    const name = item.name;
    const price = item.price;

    return (
        <div>
            <p> name </p>
            <img src={item.image} width="400px"></img>
            <p> {item.description }</p>
            <button onClick={() => addCounter(name, price)}>Add to cart!</button>

        </div>
    )
}
