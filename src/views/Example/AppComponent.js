import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        if (!this.state.title || !this.state.salary) {
            alert("Missing required params");
            return;
        }
        event.preventDefault()
        console.log("==> Data: ", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Job's Title:</label><br />
                    <input type="text" onChange={(event) => this.handleChangeTitleJob(event)} value={this.state.title} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" onChange={(event) => this.handleChangeSalary(event)} value={this.state.salary} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} value="Submit" />
                </form>
            </>
        )
    }
}

export default AddComponent;