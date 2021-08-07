import PropTypes from 'prop-types'


const Button = ({ color, text, click }) => {
    const onClick = () => {
        console.log(click)
    }

    return (
        <button
            style={{ backgroundColor: color }}
            className="btn"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button