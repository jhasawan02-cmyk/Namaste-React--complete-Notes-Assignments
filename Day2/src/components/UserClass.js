
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
        }

    }

    componentDidMount(){
        
    }

     render() {
        const{Name, Location} = this.props;
        const{count} = this.state;
        
         return (
            <div className="User">
                <h2>count:{count}</h2>

                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +1,
                    });
                }}>count increase</button>

                <h2> Name : {Name}</h2>
                <h3> Location: {Location}</h3>
                <h3> Contact: @sawanjha </h3>
            </div>
            );
        }
}

export default UserClass; 