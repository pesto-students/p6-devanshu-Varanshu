import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({
    children
}: {
    children: any
}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout