import User from "./UserCard.js";
import UserClass from "./UserClass.js";

const About =() =>{
    return(
        <div> 
            <h1>This is Namaste React WebSeries</h1>
            {/* <User Name= {"sawan functional jha"} Location={"Delhi functional"} /> */}
            <UserClass  Name= {"sawan Classic jha"} Location={"Delhi classsic"} />
            
        </div>
    );
};

export default About;