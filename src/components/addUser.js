import React from "react"


class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="first name" onChange={(e) => this.setState({ firstName: e.target.value })} />
                <input placeholder="last name" onChange={(e) => this.setState({ lastName: e.target.value })} />
                <textarea placeholder="bio" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="age" onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isHappy">Happy?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)
                }}
                >Add</button>
            </form>
        )
    }
}

export default AddUser