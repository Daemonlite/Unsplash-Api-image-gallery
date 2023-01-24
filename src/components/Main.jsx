import { useState, useEffect } from "react";
import axios from "axios";
const Main = () => {
  const [images, setImages] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=0s027VkfSWzCN9RvHCAnUe-kd82QOITlfL79RgpBb0w"
      )
      .then((res) => setImages(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="masonry">
      <br />
      <br />
      
    
      {images &&
        images.map((info) => (
          <><img src={info.urls.small} alt="" className="masonry-item" />
          <img src={info.links.photos} alt="" className="masonry-item" />
          </>
           
            
               
        ))}
    </div>
  );
};

export default Main;
