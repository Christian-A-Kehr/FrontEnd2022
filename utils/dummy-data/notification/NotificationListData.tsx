/* eslint-disable max-len */

import Notification from '../../constants/types/Notification';

// test notifcations (Delete when going in to functionality stage).
const aDate = new Date(2022, 1, 3, 22, 50, 10.205841);
const bDate = new Date(2022, 1, 11, 13, 50, 10.205841);
const cDate = new Date(2022, 1, 10, 12, 50, 10.205841);
const lessHours = new Date(2022, 1, 11, 14, 50, 10.205841);
const YearDate = new Date(2019, 7, 23, 12, 50, 10.205841);

const NotificationListData: Array<Notification> = [
  new Notification(1, 'Anna Nielsen', 'Approved your request', aDate, '1451',
    'https://images.squarespace-cdn.com/content/v1/5f3d828d8e886a7c227bdc9b/1602064857267-OBC7PKTBEW57QH6R2VFY/CLARIE+JULIA+ROSS-BROWN.jpg', false),

  new Notification(2, 'Kate', 'Denied your request', lessHours, '1451',
    'https://cdn.pixabay.com/photo/2017/10/10/00/49/female-2835524_1280.jpg', true),

  new Notification(3, 'Mr Petersen',
    'Approved your request',
    bDate, 'x time ago', 'https://www.gannett-cdn.com/presto/2021/05/28/NRRS/11b1dff9-68fd-487b-8447-f47861fb7ca5-Michael_Iasparro.jpg?width=660&height=825&fit=crop&format=pjpg&auto=webp', true),

  new Notification(4, 'Lara May',
    'Sent you a request',
    cDate, '22/08-2021',
    'https://images.pexels.com/photos/3105400/pexels-photo-3105400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    false),

  new Notification(5, 'Chuck ', 'Testing years', YearDate, '1451', 'https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg', true),

  new Notification(6, 'Chuck ', 'Testing a very long string to see what happens on screen', YearDate, '1451', 'https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg', true),

  new Notification(7, 'Chuck ', 'Testing flexlist', YearDate, '1451', 'https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg', true),
];

export default NotificationListData;
