import React, { useState } from 'react'

interface isState {
    loading?: boolean,
    error?: any
}

export const useShorten = () => {
    const [state, setState] = useState<isState | null>()

    async function findShorten(url: string) {
        setState({
            loading: true,
            error: null
        })
        try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, {
                method: 'GET',
                redirect: 'follow'
            })
            const output = await res.json()
            console.log(output);
            setState({
                loading: false,
                error: null
            })
            return output
        } catch (error) {
            console.log(error);
            
            setState({
                loading: false,
                error: error
            })
        }
    }

    return { findShorten, state }
}
