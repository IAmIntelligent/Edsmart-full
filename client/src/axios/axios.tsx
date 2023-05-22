// Example code to update the image and text data for a navbar link using Axios
import axios from "axios";
const updateNavbarLink = async (id:string, image:string, text:string) => {
    try {
        const response = await axios.put(`http://localhost:3000/api/navbar-links/${id}`, {
            image,
            text,
        });
        console.log(response.data); // Updated navbar link data
    } catch (error) {
        console.error(error);
    }
};

// Usage example
updateNavbarLink('navbarLinkId123', 'https://example.com/image.jpg', 'New text');
