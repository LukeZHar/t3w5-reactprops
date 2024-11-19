import FoodCard from "./FoodCard";

let foods = [
    'pizza',
    'sushi',
    'pasta',
    'steak',
    'ramen',
    'tacos',
    'dumplings',
    'porkbuns'
];

export default function FoodList() {
    return (
        <section>
                {
                    foods.map(food => {
                        return <p><FoodCard foodName={food}/></p>
                    })
                }
            
        </section>
    )
}