import React from 'react';

function ProfileInput() {

    return (
        <form className={'grid grid-cols-2 gap-3'} action={'reg.php'}>
            <div className={'flex flex-col gap-3 my-8'}>
                <label
                    htmlFor={'fullName'}
                    className={' text-xl text-gray-700 font-semibold'}
                >
                    'نام و نام خانوادگی :
                </label>
                <input
                    type="text"
                    id={'fullName'}
                    name={'fullName'}
                    className={'w-full border h-14 rounded-xl px-5 text-xl font-semibold'}
                    placeholder={'نام و نام خانوادگی خود را وارد کنید...'}
                />
            </div>
            <div className={'flex flex-col gap-3 my-8'}>
                <label
                    htmlFor={'fullName'}
                    className={' text-xl text-gray-700 font-semibold'}
                >
                    'نام و نام خانوادگی :
                </label>
                <input
                    type="text"
                    id={'fullName'}
                    name={'fullName'}
                    className={'w-full border h-14 rounded-xl px-5 text-xl font-semibold'}
                    placeholder={'نام و نام خانوادگی خود را وارد کنید...'}
                />
            </div>
            <div className={'flex flex-col gap-3 my-8'}>
                <label
                    htmlFor={'fullName'}
                    className={' text-xl text-gray-700 font-semibold'}
                >
                    'نام و نام خانوادگی :
                </label>
                <input
                    type="text"
                    id={'fullName'}
                    name={'fullName'}
                    className={'w-full border h-14 rounded-xl px-5 text-xl font-semibold'}
                    placeholder={'نام و نام خانوادگی خود را وارد کنید...'}
                />
            </div>
            <div className={'flex flex-col gap-3 my-8'}>
                <label
                    htmlFor={'fullName'}
                    className={' text-xl text-gray-700 font-semibold'}
                >
                    'نام و نام خانوادگی :
                </label>
                <input
                    type="text"
                    id={'fullName'}
                    name={'fullName'}
                    className={'w-full border h-14 rounded-xl px-5 text-xl font-semibold'}
                    placeholder={'نام و نام خانوادگی خود را وارد کنید...'}
                />
            </div>

        </form>
    );
}

export default ProfileInput;
