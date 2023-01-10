import React from 'react';

export const gridLayoutOutline = (props) => {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clipRule='evenodd'
        d='M18.6 3.00002H21.4L21.4463 3.00001C21.6845 2.99992 21.969 2.99981 22.2197 3.02029C22.5101 3.04402 22.9261 3.10491 23.362 3.327C23.9265 3.61462 24.3854 4.07357 24.673 4.63805C24.8951 5.07394 24.956 5.48993 24.9798 5.78036C25.0002 6.03099 25.0001 6.31548 25 6.5537L25 6.60002V7.40002L25 7.4463C25.0001 7.68453 25.0002 7.96906 24.9798 8.21969C24.956 8.51012 24.8951 8.9261 24.673 9.362C24.3854 9.92648 23.9265 10.3854 23.362 10.673C22.9261 10.8951 22.5101 10.956 22.2197 10.9798C21.969 11.0002 21.6845 11.0001 21.4463 11L21.4 11H18.6L18.5537 11C18.3155 11.0001 18.031 11.0002 17.7804 10.9798C17.4899 10.956 17.0739 10.8951 16.6381 10.673C16.0736 10.3854 15.6146 9.92648 15.327 9.362C15.1049 8.9261 15.044 8.51012 15.0203 8.21969C14.9998 7.96905 14.9999 7.68454 15 7.4463L15 7.40002V6.60002L15 6.55375C14.9999 6.31551 14.9998 6.031 15.0203 5.78036C15.044 5.48993 15.1049 5.07394 15.327 4.63805C15.6146 4.07357 16.0736 3.61462 16.6381 3.327C17.0739 3.10491 17.4899 3.04402 17.7804 3.02029C18.031 2.99981 18.3155 2.99992 18.5537 3.00001L18.6 3.00002ZM17.109 5.54603C17 5.75995 17 6.03997 17 6.60002V7.40002C17 7.96008 17 8.2401 17.109 8.45401C17.2049 8.64218 17.3579 8.79516 17.546 8.89103C17.7599 9.00002 18.04 9.00002 18.6 9.00002H21.4C21.9601 9.00002 22.2401 9.00002 22.454 8.89103C22.6422 8.79516 22.7952 8.64218 22.891 8.45401C23 8.24011 23 7.96009 23 7.40005V6.60002C23 6.03999 23 5.75994 22.891 5.54603C22.7952 5.35787 22.6422 5.20489 22.454 5.10902C22.2401 5.00002 21.9601 5.00002 21.4 5.00002H18.6C18.04 5.00002 17.7599 5.00002 17.546 5.10902C17.3579 5.20489 17.2049 5.35787 17.109 5.54603ZM9.40002 17H6.60002L6.55375 17C6.31551 16.9999 6.031 16.9998 5.78036 17.0203C5.48993 17.044 5.07394 17.1049 4.63805 17.327C4.07357 17.6146 3.61462 18.0736 3.327 18.6381C3.10491 19.0739 3.04402 19.4899 3.02029 19.7804C2.99981 20.031 2.99992 20.3155 3.00001 20.5537L3.00002 20.6V21.4L3.00001 21.4463C2.99992 21.6845 2.99981 21.969 3.02029 22.2197C3.04402 22.5101 3.10491 22.9261 3.327 23.362C3.61462 23.9265 4.07357 24.3854 4.63805 24.673C5.07394 24.8951 5.48993 24.956 5.78036 24.9798C6.03099 25.0002 6.31548 25.0001 6.5537 25L6.60002 25H9.40002L9.4463 25C9.68453 25.0001 9.96906 25.0002 10.2197 24.9798C10.5101 24.956 10.9261 24.8951 11.362 24.673C11.9265 24.3854 12.3854 23.9265 12.673 23.362C12.8951 22.9261 12.956 22.5101 12.9798 22.2197C13.0002 21.969 13.0001 21.6845 13 21.4463L13 21.4V20.6L13 20.5537C13.0001 20.3155 13.0002 20.031 12.9798 19.7804C12.956 19.4899 12.8951 19.0739 12.673 18.6381C12.3854 18.0736 11.9265 17.6146 11.362 17.327C10.9261 17.1049 10.5101 17.044 10.2197 17.0203C9.96905 16.9998 9.68454 16.9999 9.4463 17L9.40002 17ZM5.00002 20.6C5.00002 20.04 5.00002 19.7599 5.10902 19.546C5.20489 19.3579 5.35787 19.2049 5.54603 19.109C5.75995 19 6.03997 19 6.60002 19H9.40002C9.96008 19 10.2401 19 10.454 19.109C10.6422 19.2049 10.7952 19.3579 10.891 19.546C11 19.7599 11 20.04 11 20.6V21.4C11 21.9601 11 22.2401 10.891 22.454C10.7952 22.6422 10.6422 22.7952 10.454 22.891C10.2401 23 9.96009 23 9.40005 23H6.60002C6.03999 23 5.75994 23 5.54603 22.891C5.35787 22.7952 5.20489 22.6422 5.10902 22.454C5.00002 22.2401 5.00002 21.9601 5.00002 21.4V20.6ZM21.4 13H18.6L18.5537 13C18.3155 12.9999 18.031 12.9998 17.7804 13.0203C17.4899 13.044 17.0739 13.1049 16.6381 13.327C16.0736 13.6146 15.6146 14.0736 15.327 14.6381C15.1049 15.0739 15.044 15.4899 15.0203 15.7804C14.9998 16.031 14.9999 16.3155 15 16.5537L15 16.6V21.4L15 21.4463C14.9999 21.6845 14.9998 21.969 15.0203 22.2197C15.044 22.5101 15.1049 22.9261 15.327 23.362C15.6146 23.9265 16.0736 24.3854 16.6381 24.673C17.0739 24.8951 17.4899 24.956 17.7804 24.9798C18.031 25.0002 18.3155 25.0001 18.5537 25L18.6 25H21.4L21.4463 25C21.6845 25.0001 21.9691 25.0002 22.2197 24.9798C22.5101 24.956 22.9261 24.8951 23.362 24.673C23.9265 24.3854 24.3854 23.9265 24.673 23.362C24.8951 22.9261 24.956 22.5101 24.9798 22.2197C25.0002 21.9691 25.0001 21.6846 25 21.4463L25 21.4V16.6L25 16.5537C25.0001 16.3155 25.0002 16.031 24.9798 15.7804C24.956 15.4899 24.8951 15.0739 24.673 14.6381C24.3854 14.0736 23.9265 13.6146 23.362 13.327C22.9261 13.1049 22.5101 13.044 22.2197 13.0203C21.969 12.9998 21.6845 12.9999 21.4463 13L21.4 13ZM17 16.6C17 16.04 17 15.7599 17.109 15.546C17.2049 15.3579 17.3579 15.2049 17.546 15.109C17.7599 15 18.04 15 18.6 15H21.4C21.9601 15 22.2401 15 22.454 15.109C22.6422 15.2049 22.7952 15.3579 22.891 15.546C23 15.7599 23 16.04 23 16.6V21.4C23 21.9601 23 22.2401 22.891 22.454C22.7952 22.6422 22.6422 22.7952 22.454 22.891C22.2401 23 21.9601 23 21.4001 23H18.6C18.04 23 17.7599 23 17.546 22.891C17.3579 22.7952 17.2049 22.6422 17.109 22.454C17 22.2401 17 21.9601 17 21.4V16.6ZM9.40002 3.00002H6.60002L6.55375 3.00001C6.31551 2.99992 6.031 2.99981 5.78036 3.02029C5.48993 3.04402 5.07394 3.10491 4.63805 3.327C4.07357 3.61462 3.61462 4.07357 3.327 4.63805C3.10491 5.07394 3.04402 5.48993 3.02029 5.78036C2.99981 6.031 2.99992 6.31551 3.00001 6.55375L3.00002 6.60002V11.4L3.00001 11.4463C2.99992 11.6845 2.99981 11.969 3.02029 12.2197C3.04402 12.5101 3.10491 12.9261 3.327 13.362C3.61462 13.9265 4.07357 14.3854 4.63805 14.673C5.07394 14.8951 5.48993 14.956 5.78036 14.9798C6.031 15.0002 6.31551 15.0001 6.55375 15L6.60002 15H9.40002L9.4463 15C9.68453 15.0001 9.96905 15.0002 10.2197 14.9798C10.5101 14.956 10.9261 14.8951 11.362 14.673C11.9265 14.3854 12.3854 13.9265 12.673 13.362C12.8951 12.9261 12.956 12.5101 12.9798 12.2197C13.0002 11.969 13.0001 11.6845 13 11.4463L13 11.4V6.60002L13 6.55375C13.0001 6.31551 13.0002 6.031 12.9798 5.78036C12.956 5.48993 12.8951 5.07394 12.673 4.63805C12.3854 4.07357 11.9265 3.61462 11.362 3.327C10.9261 3.10491 10.5101 3.04402 10.2197 3.02029C9.96905 2.99981 9.68454 2.99992 9.4463 3.00001L9.40002 3.00002ZM5.00002 6.60002C5.00002 6.03997 5.00002 5.75995 5.10902 5.54603C5.20489 5.35787 5.35787 5.20489 5.54603 5.10902C5.75995 5.00002 6.03997 5.00002 6.60002 5.00002H9.40002C9.96008 5.00002 10.2401 5.00002 10.454 5.10902C10.6422 5.20489 10.7952 5.35787 10.891 5.54603C11 5.75995 11 6.03997 11 6.60002V11.4C11 11.9601 11 12.2401 10.891 12.454C10.7952 12.6422 10.6422 12.7952 10.454 12.891C10.2401 13 9.96008 13 9.40002 13H6.60002C6.03997 13 5.75995 13 5.54603 12.891C5.35787 12.7952 5.20489 12.6422 5.10902 12.454C5.00002 12.2401 5.00002 11.9601 5.00002 11.4V6.60002Z'
        fill='#023F80'
      />
    </svg>
  );
};
