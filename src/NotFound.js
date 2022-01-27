import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <din className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to={"/"} >Back to the homepage...</Link>
        </din>
     );
}
 
export default NotFound;