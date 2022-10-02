import React from "react"
import AddUser from "./addUser"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user" >
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icom" />
                <h3>{this.user.firstName} {this.user.lastName}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? "Happy :)" : "Sad :("}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
}

export default User