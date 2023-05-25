import { PropTypes } from "prop-types"

export default function Card (props) {
    const { title } = props
    const { content } = props
    const { img } = props

    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>
                    {title}
                </h3>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    img: PropTypes.string
}