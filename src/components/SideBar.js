import React from 'react';
import {FaEnvelopeOpenText, FaCartPlus} from 'react-icons/fa';
import { AiFillHome} from 'react-icons/ai';
import {IoIosPaper, IoMdPeople, IoMdHelpCircle} from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Appointments',
    path: '/Appointment',
    icon: <IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Doctors',
    path: '/doctors',
    icon: <FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Patholody Results',
    path: '/patholody',
    icon: <IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
