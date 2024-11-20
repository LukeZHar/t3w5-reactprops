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
                    foods.map((food, index) => {
                        return <p><FoodCard key={index} foodName={food}/></p>
                    })
                }
            
        </section>
    )
}