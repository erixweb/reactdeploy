import Header from "./Header";
import "../styles/index.css"
import FeaturesCards from "./FeatureCards";
import Technologies from "./Technologies";
export default function App() {
    return (
        <>
            <Header />
            <main>
                <FeaturesCards />
                <Technologies />
            </main>
        </>
    )
}