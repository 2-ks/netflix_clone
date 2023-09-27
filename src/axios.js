import axios from "axios";

const instance= axios.create({
 baseURL:"https://themoviedb.org/3"   
});
// instance.get("/movie/top-rated");

export default instance;