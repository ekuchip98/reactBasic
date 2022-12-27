import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AppComponent";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'Developers', salary:'500'},
            {id: 'abcJob2', title:'Testers', salary:'400'},
            {id: 'abcJob3', title:'PM', salary:'1000'}
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log("check job form", job)
    }

    deleteAJob = (job) => { 
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.id !== job.id)
        })
    }

    componentDidMount() {
        console.log("Component did mount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("prevState", prevState, "prevProps", prevProps)
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
                <ChildComponent
                    deleteAJob = {this.deleteAJob}
                    arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;