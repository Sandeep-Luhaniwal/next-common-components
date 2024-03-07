"use client"
import { child, get, getDatabase, ref, set } from 'firebase/database';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import { db } from './Firebase';

const ImageForm = () => {
    const userData = {
        name: '',
        image: '',
    }
    const [formData, setFormData] = useState(userData);
    const [getImage, setGetImage] = useState("");
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
        if (formData.name && formData.image) {
            set(ref(db, 'users/' + "abc"), {
                username: formData.name,
                profile_picture: formData.image,
            });
            console.log("User Data", formData)
        }
        e.preventDefault();
        setFormData(userData);
    };


    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${"abc"}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("..........", snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
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
                    <input
                        type="file"
                        name=""
                        id=""
                        onChange={selectImageHandler}
                    />
                    <input
                        type="submit"
                        className='bg-red-600 px-3 py-1 text-white rounded-sm'
                    />
                </form>
                {/* <Image className='mt-10' height={400} width={400} src={getImage} alt='image' /> */}
                <img src={getImage} alt="" className='mt-10' />
            </div>
        </>
    )
}

export default ImageForm