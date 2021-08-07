// This is a component which is essentially a function that takes in a parameter known as a prop and uses it accordingly

import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <p></p>
            <Button text="ADD" click="Test"></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header