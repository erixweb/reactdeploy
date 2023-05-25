import Card from "./Card";

export default function FeaturesCards () {
    return (
        <section id="features">
            <h1>
               Todo lo que quieres sin extensiones
            </h1>
            <div className="cards-grid">
                <Card 
                    title="Server-Side Rendering"
                    content="Renderiza tus componentes en el servidor para obtener el mejor performance posible."
                />
                <Card 
                    title="Buen SEO"
                    content="Hola"
                />
                <Card 
                    title="Buen SEO"
                    content="Hola"
                />
                <Card 
                    title="Buen SEO"
                    content="Hola"
                />
                <Card 
                    title="Buen SEO"
                    content="Hola"
                />
                <Card 
                    title="Buen SEO"
                    content="Hola"
                />
            </div>
        </section>
    )
}