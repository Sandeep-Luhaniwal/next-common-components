"use client"
import { onValue, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { db } from './Firebase';

const ImageForm = () => {
    const userData = {
        name: '',
        image: '',
    }
    const [formData, setFormData] = useState(userData);
    const [getImage, setGetImage] = useState("");
    const [fetchData, setFetchData] = useState([]);
    const selectImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            const ImageUrl = new FileReader();
            ImageUrl.onloadend = () => {
                setFormData({ ...formData, image: ImageUrl.result });
                setGetImage(ImageUrl.result);
            }
            ImageUrl.readAsDataURL(file);
        }
    }

    const fromSubmitHandler = (e) => {
        // setFetchData(true);
        if (formData.name && formData.image) {
            set(ref(db, 'users/' + uuidv4()), {
                name: formData.name,
                image: formData.image,
            });
            // setFetchData(false);

            console.log("User Data", formData)
        }
        e.preventDefault();
        setFormData(userData);
        setGetImage();
    };

    const fetchUserData = () => {
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const array = Object.values(data);
                setFetchData(array);
            }
        });
    }
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>

            <div className='max-w-[500px] mx-auto px-6 pt-10'>
                <form onSubmit={(e) => fromSubmitHandler(e)} className='flex flex-col gap-4 '>
                    <input
                        className='px-2 py-1 border border-black'
                        type="text"
                        placeholder='Name'
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        value={formData.name}
                    />
                    <div className="flex justify-between relative">
                        <input
                            type="file"
                            name=""
                            id=""
                            onChange={selectImageHandler}
                        />
                        {getImage &&
                            <div className='border absolute end-0 top-1/2 rounded-xl overflow-hidden -translate-y-1/2 border-black'>
                                <img height={60} width={60} className="h-[50px]  object-cover" src={getImage} alt="" />
                            </div>
                        }
                    </div>
                    <input
                        type="submit"
                        className='bg-red-600 px-3 cursor-pointer py-1 text-white rounded-sm'
                    />
                </form>


                <table className="border-collapse w-full mt-6">
                    <tbody className='border-collapse'>
                        {fetchData.map((value, index) => (
                            <tr key={index} className=''>
                                <td className='border w-[70%] border-black p-1'>{value.name}</td>
                                <td className='border border-black p-1'><img height={60} width={120} className='w-[120px] h-[60px]' src={value.image} alt="" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ImageForm