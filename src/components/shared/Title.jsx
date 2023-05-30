import React from 'react'

const Title = ({ title, styles }) => {
    return (
        <h1 className={'text-3xl font-bold text-center ' + styles}>{title}</h1>
    )
}

export default Title