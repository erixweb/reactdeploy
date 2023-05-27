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
                    title="Soporte 24/7"
                    content="Con ReactDeploy obtendrás un soporte 24h durante toda la semana."
                />
                <Card 
                    title="Despliegue rápido"
                    content="Despliega tu aplicación lo más rápido posible usando GitHub."
                />
                <Card 
                    title="Comunidad"
                    content="Una comunidad formada por más de 20.000 desarolladores te ayudará con tus dudas."
                />
                <Card 
                    title="Estabilidad"
                    content="Por defecto las opciones estables para que no tengas problemas, será tu decisión activar las más nuevas."
                />
                <Card 
                    title="Compatibilidad"
                    content="Compatible con tecnologías como Vite, Next..."
                />
            </div>
        </section>
    )
}