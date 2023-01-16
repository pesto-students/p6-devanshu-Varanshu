import React from "react";
import { connect } from "react-redux";

// class Room extends React.Component {
//   state = {
//     isLightOn: true
//   };

//   flipLight = () => {
//     this.setState({
//       isLightOn: !this.state.isLightOn
//     });
//   };

//   render() {
//     const lightedness = this.state.isLightOn ? "lit" : "dark";
//     return (
//       <div className={`room ${lightedness}`}>
//         the room is {lightedness}
//         <br />
//         <button onClick={this.flipLight}>flip</button>
//       </div>
//     );
//   }
// }

const Theme = (props) => {
    const { isLightOn = false, dispatch } = props;
    // console.log(isLightOn,dispatch);

    const changeTheme = (state) => {
        return {
            type: "FLIP",
            open: state
        };
    };

    return (
        <div className={`room ${isLightOn ? "lit" : "dark"}`}>
            the room is {isLightOn ? "lit" : "dark"}
            <br />
            <button onClick={() => dispatch(changeTheme(isLightOn))}>flip</button>
        </div>
    );
};

const ConnectedTheme = connect((state) => {
    return {
        isLightOn: state.open
    };
})(Theme);

const Room = (props) => {
    return <ConnectedTheme />;
};

export default Room;
