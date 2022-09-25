import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'


class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <div className="user" >
                <IoCloseCircleSharp className="delete-icon" />
                <IoHammerSharp className="edit-icom" />
                <h3>{this.user.firstName} {this.user.lastName}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? "Happy :)" : "Sad :("}</b>
            </div>
        )
    }
}

export default User