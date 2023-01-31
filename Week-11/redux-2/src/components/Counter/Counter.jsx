import React from 'react'
import { connect } from 'react-redux'
const Counter = (props) => {
    const {
        steps,
        addSteps,
        resetSteps
    } = props
    console.log(steps, addSteps, resetSteps);

    return (
        <div className='container'>
            {
                steps && steps > 0
                    ? <h1>
                        You've walked {steps} step{steps !== 1 ? 's' : ''} today
                    </h1>
                    : <h1>Sorry you havent walked any steps</h1>
            }
            <div className='button-container'>
                <button className='add-a-step' onClick={e => addSteps()}>Add Steps</button>
                <button className='reset-a-step' onClick={e => resetSteps()}>Reset Steps</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        steps: state.steps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSteps: () => {
            dispatch({ type: "ADD" })
        },
        resetSteps: () => {
            dispatch({ type: "RESET" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)