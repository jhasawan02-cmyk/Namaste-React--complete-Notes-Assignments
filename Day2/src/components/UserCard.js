import { useState } from "react";
const User = (props) =>{
    
const [count] = useState(0);
const [count1] = useState(1);

const{Name,Location} = props;
    return(
        <div className="User">
            <h2>count:{count}</h2>
            <h2>count1:{count1}</h2>
            <h2> Name : {Name} </h2>
            <h3> Location: {Location}</h3>
            <h3> Contact: @sawanjha </h3>
        </div>
    )
}
export default User;