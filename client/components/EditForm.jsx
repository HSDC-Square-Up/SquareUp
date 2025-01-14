import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from './Button';




const EditProfileForm = ({onSubmitHandler, defaultData}) => {
  const {register, handleSubmit } = useForm();
  const [gender, setGender] = useState(defaultData.sex);
  
  const onSubmit = data => {
    console.log('on submit')
    onSubmitHandler(data);
  }

return (
  <form className={'flex flex-col bg-central-blue p-5 rounded-lg'} onSubmit={handleSubmit(onSubmit)}> 
    <div className={'flex justify-between my-1'}>
      <label>Name:</label>
      <input id="name" placeholder={defaultData.name} className={"w-45"} {...register('name')} />
    </div>

    <div className={'flex justify-between my-1'}>
      <label>Gender:</label>
      <select id="sex" defaultValue={defaultData.sex} className={"w-45"} {...register('sex')}> 
        <option className={"w-45"} value='female'>Female</option>
        <option className={"w-45"} value='male'>Male</option>
        <option className={"w-45"} value='other'>Other</option>
      </select>
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Age:</label>
      <input id="age" placeholder={defaultData.age} type='number' {...register('age', {min: 18, max: 99})} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Height:</label>
      <input id="height" placeholder={defaultData.height} type='number' {...register('height')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Weight:</label>
      <input id="weight"  placeholder={defaultData.weight} type='number' {...register('weight')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Fighting Style:</label>
      <input  id="fightingStyle" placeholder={defaultData.fightingStyle} {...register('fightingStyle')} />
    </div>
    <div className={'flex justify-between mt-1 mb-4'}>
      <label>Location:</label>
      <input id="location"placeholder={defaultData.location} {...register('location')} />
    </div>

    {/*
    <div className={'flex justify-between my-1'}>
      <label>Profile Picture:</label>
      <input type="file" 
      accept="image/gif, image/jpeg, image/png" 
      {...register('profilePicture')} />
    </div>
    */}
    <Button type='submit' value='Edit Profile' primary={true} />
  </form>
);
  
};

export default EditProfileForm;