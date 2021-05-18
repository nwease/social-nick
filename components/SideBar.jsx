import {useSession} from 'next-auth/client';
import SideBarRow from './SideBarRow';
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from '@heroicons/react/outline';
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from '@heroicons/react/solid';

function SideBar() {

    const [session] = useSession();

    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SideBarRow Icon={ChevronDownIcon} />
            <SideBarRow Icon={ShoppingBagIcon} />
            <SideBarRow Icon={UserGroupIcon} />
            <SideBarRow Icon={CalendarIcon} />
            <SideBarRow Icon={ClockIcon} />
            <SideBarRow Icon={DesktopComputerIcon} />
            <SideBarRow Icon={UsersIcon} />
        </div>
    );
}

export default SideBar;
