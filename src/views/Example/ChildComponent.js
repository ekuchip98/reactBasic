import React from "react";
import './Demo.scss';
class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    handleClick = (status) => {
        status = this.setState({
            showJob: !this.state.showJob
        })
    }
    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
    }
    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {!showJob ? <div><button className="btn-show"
                    onClick={(showJob) => this.handleClick(showJob)}>Show</button></div>
                :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$ <span onClick={()=>this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                )  
                                })
                            }
                        </div>
                        <div><button onClick={(showJob)=> this.handleClick(showJob)}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponent;