import React , {useState} from 'react'

import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {window.location.pathname === '/' && (
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            )}
            </header>
    )
}
Header.defaultProps = {
    title:'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS STYLING
// const headingStyle = {
//     color:'red',backgroundColor:'pink'
// }


export default Header
