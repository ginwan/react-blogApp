import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
    const {data, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {/* conditional tempalte if blogs true then run the right code */}
            {error && <div>{error}</div> }
            {isLoading && <div>Loading...</div>}
            {data&& <Bloglist blogs={data} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;