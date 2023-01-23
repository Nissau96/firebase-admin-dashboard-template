import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeftDots } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
    const {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor
    } = useStateContext();
    const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
        <TooltipComponent
            content={title}
            position='BottomCenter'>
            <button
                type='button'
                onClick={customFunc}
                style={{ color }}
                className='relative text-xl rounded-dull p-3 hover:bg-light-gray'>
                <span
                    style={{ background: dotColor }}
                    className='absolute inline-flex rounded-full h-2 w-2 right top-2'
                />
                {icon}
            </button>
        </TooltipComponent>
    );

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <>
            <div className='flex justify-between p-2 md:mx-6 relative'>
                <NavButton
                    title='Menu'
                    customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                    color={currentColor}
                    icon={<AiOutlineMenu />}
                />
                <div className='flex'>
                    <NavButton
                        title='Menu'
                        customFunc={() => handleClick('cart')}
                        color={currentColor}
                        icon={<FiShoppingCart />}
                    />
                    <NavButton
                        title='Chat'
                        customFunc={() => handleClick('chat')}
                        color={currentColor}
                        dotColor='#03c9d7'
                        icon={<BsChatLeftDots />}
                    />
                    <NavButton
                        title='Notifications'
                        customFunc={() => handleClick('notification')}
                        dotColor='#03c9d7'
                        color={currentColor}
                        icon={<RiNotification3Line />}
                    />
                    <TooltipComponent
                        content='Profile'
                        position='BottomCenter'>
                        <div
                            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                            onClick={() => handleClick('userProfile')}>
                            <img
                                src={avatar}
                                alt='User Profile Pic'
                                className='rounded-full w-8 h-8'
                            />
                            <p>
                                <span className='text-gray-400 text-14'>Paul</span>{' '}
                                <span className='text-gray-400 font-bold ml-1 text-14'>Watson</span>
                            </p>
                            <MdKeyboardArrowDown className='text-gray-400 text-14' />
                        </div>
                    </TooltipComponent>

                    {isClicked.cart && <Cart />}
                    {isClicked.chat && <Chat />}
                    {isClicked.notification && <Notification />}
                    {isClicked.userProfile && <UserProfile />}
                </div>
            </div>
        </>
    );
}

export default Navbar;
