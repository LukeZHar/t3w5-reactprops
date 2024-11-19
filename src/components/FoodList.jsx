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
            <ul>
                {
                    foods.map(food => {
                        return <li>{food}</li>
                    })
                }
            </ul>
        </section>
    )
}