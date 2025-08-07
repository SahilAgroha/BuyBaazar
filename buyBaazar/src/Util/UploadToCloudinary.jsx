export const uploadToCloudinary=async(pics)=>{
    const cloud_name="doqpavxwl"
    const upload_preset="buy-baazar"

    if(pics){
        const data=new FormData();
        data.append("file",pics);
        data.append("upload_preset",upload_preset);
        data.append("cloud_name",cloud_name);

        const res=await fetch("https://api.cloudinary.com/v1_1/doqpavxwl/upload",{
            method:"POST",
            body:data
        })

        const fileData=await res.json();
        return fileData.url;
    } else {
        console.log("errpr : pics not found");
    }
}