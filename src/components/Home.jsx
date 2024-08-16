import Header from "./Header"
import CardPizza from "./CardPizza"
import { pizzas } from "../data/pizzas"

const Home = () => {
    return (
        <>
            <section>
                <Header />
            </section>

            <section className="cards-container">
                <CardPizza pizzas={pizzas}/>
            </section>
        </>
    )
}

export default Home