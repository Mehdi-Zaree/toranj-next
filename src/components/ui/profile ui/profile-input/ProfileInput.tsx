import React from 'react';
import {auth} from "../../../../../auth";
import staticFormTexts from "@/app/enums/static-form-texts";

async function ProfileInput() {
    const {user}:any = await auth()


    if (!user) {
        return null
    }
    console.log(user)
    return (<form className={'grid lg:grid-cols-2 gap-3'} action={'reg.php'}>
        <InputsProfile
            name={"fullName"}
            label={staticFormTexts.fullName}
            type={'text'}
            value={user?.name}
        />
        <InputsProfile
            name={"email"}
            label={staticFormTexts.email}
            type={'email'}
            value={user?.email}
        />
        <InputsProfile
            name={"role"}
            label={staticFormTexts.role}
            type={'text'}
            value={user?.role}
        />
        <InputsProfile
            name={"time"}
            label={staticFormTexts.timeOfEntrance}
            type={'text'}
            readOnly={true}
            value={new Date(user?.init).toLocaleDateString("fa")}
        />
    </form>);
}

export default ProfileInput;



const InputsProfile = ({
                           type,
                           name,
                           value,
                           label,
                           readOnly
                       }:any) => {
    return (<div className={'flex flex-col gap-3 my-8'}>
        <label
            htmlFor={'fullName'}
            className={' text-xl text-gray-700 font-semibold'}
        >
            {
                label
            }
        </label>
        <input
            readOnly={readOnly}
            type={type}
            defaultValue={value}
            name={name}
            className={'w-full border h-14 rounded-xl px-5 text-xl font-semibold'}
            placeholder={`${label} خود را وارد کنید...`}
        />
    </div>)
}