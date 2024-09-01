const url = `https://api.cloudinary.com/v1_1/magariparts/image/upload`;

const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "magariparts"); // Ensure no trailing space

    try {
        const dataResponse = await fetch(url, {
            method: "POST",
            body: formData
        });

        // Check if the response is OK (status in the range 200-299)
        if (!dataResponse.ok) {
            const error = await dataResponse.json();
            throw new Error(`Upload failed: ${error.message}`);
        }

        return await dataResponse.json();
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error; // Re-throw the error for handling elsewhere if needed
    }
};

export default uploadImage;
