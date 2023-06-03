import Header from "./Header";
import "../styles/index.css"
import FeaturesCards from "./FeatureCards";
import Technologies from "./Technologies";
import Navigation from "./Navigation";
export default function App() {
    return (
        <>
            <Navigation />
            <Header />
            <main>
                <FeaturesCards />
                <Technologies />
            </main>
        </>
    )
}