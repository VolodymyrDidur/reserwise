import React from "react";

interface IconProps {
    fill?: string;
    width?: number;
    height?: number;
}

export const GoBackIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill='#e27976' viewBox="0 0 448 512">
            <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
    );
};

export const PreviousIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 320 512">
            <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
    );
};

export const NextIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' viewBox="0 0 320 512">
            <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
    );
};

export const CircleIcon: React.FC<IconProps> = ({ fill, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" fill={fill} />
        </svg>
    )
}

export const ArrowRightIcon: React.FC<IconProps> = ({ width, fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} fill={fill} viewBox="0 0 448 512">
            <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
    )
}

export const CloseIcon: React.FC<IconProps> = ({ width, height, fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 384 512">
            <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
    )
}

export const LocationIcon: React.FC<IconProps> = ({width, height}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill='#e27976' width={width} height={height} viewBox="0 0 384 512" >
            <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>
    )
}

export const SignOutIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z" /></svg>
    );
}

export const EmailIcon = () => {
    return (
        <svg fill="#fff" viewBox="0 -5 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <path d="M29.000,22.000 L3.000,22.000 C1.346,22.000 -0.000,20.654 -0.000,19.000 L-0.000,3.000 C-0.000,1.346 1.346,-0.000 3.000,-0.000 L29.000,-0.000 C30.654,-0.000 32.000,1.346 32.000,3.000 L32.000,19.000 C32.000,20.654 30.654,22.000 29.000,22.000 ZM3.000,20.000 L29.000,20.000 C29.551,20.000 30.000,19.552 30.000,19.000 L30.000,3.317 L16.651,14.759 C16.463,14.920 16.232,15.000 16.000,15.000 C15.768,15.000 15.537,14.920 15.349,14.759 L2.000,3.317 L2.000,19.000 C2.000,19.552 2.449,20.000 3.000,20.000 ZM28.464,2.000 L3.536,2.000 L16.000,12.683 L28.464,2.000 Z" />
        </svg>
    )
}

export const UserIcon = () => {
    return (
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="5" stroke="#fff" fill="none"><circle cx="32" cy="18.14" r="11.14" /><path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" /></svg>
    )
}

export const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="#0F0F0F"
        d="M476.8 423.6a29.8 29.8 0 1059.6 0 29.8 29.8 0 10-59.6 0z"
      ></path>
      <path
        fill="#FAFCFB"
        d="M717.8 114.5c-83.5 0-158.4 65.4-211.2 122-52.7-56.6-127.7-122-211.2-122-159.5 0-273.9 129.3-273.9 288.9C21.5 562.9 429.3 913 506.6 913s485.1-350.1 485.1-509.7c.1-159.5-114.4-288.8-273.9-288.8z"
      ></path>
      <path
        fill="#141414"
        d="M506.6 926c-22 0-61-20.1-116-59.6-51.5-37-109.9-86.4-164.6-139-65.4-63-217.5-220.6-217.5-324 0-81.4 28.6-157.1 80.6-213.1 53.2-57.2 126.4-88.8 206.3-88.8 40 0 81.8 14.1 124.2 41.9 28.1 18.4 56.6 42.8 86.9 74.2 30.3-31.5 58.9-55.8 86.9-74.2 42.5-27.8 84.3-41.9 124.2-41.9 79.9 0 153.2 31.5 206.3 88.8 52 56 80.6 131.7 80.6 213.1 0 103.4-152.1 261-217.5 324-54.6 52.6-113.1 102-164.6 139-54.8 39.5-93.8 59.6-115.8 59.6zM295.4 127.5c-72.6 0-139.1 28.6-187.3 80.4-47.5 51.2-73.7 120.6-73.7 195.4 0 64.8 78.3 178.9 209.6 305.3 53.8 51.8 111.2 100.3 161.7 136.6 56.1 40.4 88.9 54.8 100.9 54.8s44.7-14.4 100.9-54.8c50.5-36.3 108-84.9 161.7-136.6 131.2-126.4 209.6-240.5 209.6-305.3 0-74.9-26.2-144.2-73.7-195.4-48.2-51.9-114.7-80.4-187.3-80.4-61.8 0-127.8 38.5-201.7 117.9-2.5 2.6-5.9 4.1-9.5 4.1s-7.1-1.5-9.5-4.1C423.2 166 357.2 127.5 295.4 127.5z"
      ></path>
      <path
        fill="#0F0F0F"
        d="M320.09999999999997 415.6a33.8 33.8 0 1067.6 0 33.8 33.8 0 10-67.6 0zM625.5 415.6a33.8 33.8 0 1067.6 0 33.8 33.8 0 10-67.6 0z"
      ></path>
      <path
        fill="#5B5143"
        d="M411.6 538.5c0 52.3 42.8 95 95 95 52.3 0 95-42.8 95-95v-31.7h-190v31.7z"
      ></path>
      <path
        fill="#141414"
        d="M506.6 646.5c-59.6 0-108-48.5-108-108v-31.7c0-7.2 5.8-13 13-13h190.1c7.2 0 13 5.8 13 13v31.7c0 59.5-48.5 108-108.1 108zm-82-126.7v18.7c0 45.2 36.8 82 82 82s82-36.8 82-82v-18.7h-164z"
      ></path>
      <path
        fill="#EA64F9"
        d="M450.4 578.9a54.7 27.5 0 10109.4 0 54.7 27.5 0 10-109.4 0z"
      ></path>
      <path
        fill="#EFAFF9"
        d="M256 502.7a32.1 27.5 0 1064.2 0 32.1 27.5 0 10-64.2 0zM703.3 502.7a32.1 27.5 0 1064.2 0 32.1 27.5 0 10-64.2 0z"
      ></path>
    </svg>
  );
}

export const RedHeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="#0F0F0F"
        d="M476.8 423.6a29.8 29.8 0 1059.6 0 29.8 29.8 0 10-59.6 0z"
      ></path>
      <path
        fill="#ff0040"
        d="M717.8 114.5c-83.5 0-158.4 65.4-211.2 122-52.7-56.6-127.7-122-211.2-122-159.5 0-273.9 129.3-273.9 288.9C21.5 562.9 429.3 913 506.6 913s485.1-350.1 485.1-509.7c.1-159.5-114.4-288.8-273.9-288.8z"
      ></path>
      <path
        fill="#141414"
        d="M506.6 926c-22 0-61-20.1-116-59.6-51.5-37-109.9-86.4-164.6-139-65.4-63-217.5-220.6-217.5-324 0-81.4 28.6-157.1 80.6-213.1 53.2-57.2 126.4-88.8 206.3-88.8 40 0 81.8 14.1 124.2 41.9 28.1 18.4 56.6 42.8 86.9 74.2 30.3-31.5 58.9-55.8 86.9-74.2 42.5-27.8 84.3-41.9 124.2-41.9 79.9 0 153.2 31.5 206.3 88.8 52 56 80.6 131.7 80.6 213.1 0 103.4-152.1 261-217.5 324-54.6 52.6-113.1 102-164.6 139-54.8 39.5-93.8 59.6-115.8 59.6zM295.4 127.5c-72.6 0-139.1 28.6-187.3 80.4-47.5 51.2-73.7 120.6-73.7 195.4 0 64.8 78.3 178.9 209.6 305.3 53.8 51.8 111.2 100.3 161.7 136.6 56.1 40.4 88.9 54.8 100.9 54.8s44.7-14.4 100.9-54.8c50.5-36.3 108-84.9 161.7-136.6 131.2-126.4 209.6-240.5 209.6-305.3 0-74.9-26.2-144.2-73.7-195.4-48.2-51.9-114.7-80.4-187.3-80.4-61.8 0-127.8 38.5-201.7 117.9-2.5 2.6-5.9 4.1-9.5 4.1s-7.1-1.5-9.5-4.1C423.2 166 357.2 127.5 295.4 127.5z"
      ></path>
      <path
        fill="#0F0F0F"
        d="M320.09999999999997 415.6a33.8 33.8 0 1067.6 0 33.8 33.8 0 10-67.6 0zM625.5 415.6a33.8 33.8 0 1067.6 0 33.8 33.8 0 10-67.6 0z"
      ></path>
      <path
        fill="#5B5143"
        d="M411.6 538.5c0 52.3 42.8 95 95 95 52.3 0 95-42.8 95-95v-31.7h-190v31.7z"
      ></path>
      <path
        fill="#141414"
        d="M506.6 646.5c-59.6 0-108-48.5-108-108v-31.7c0-7.2 5.8-13 13-13h190.1c7.2 0 13 5.8 13 13v31.7c0 59.5-48.5 108-108.1 108zm-82-126.7v18.7c0 45.2 36.8 82 82 82s82-36.8 82-82v-18.7h-164z"
      ></path>
      <path
        fill="#EA64F9"
        d="M450.4 578.9a54.7 27.5 0 10109.4 0 54.7 27.5 0 10-109.4 0z"
      ></path>
      <path
        fill="#EFAFF9"
        d="M256 502.7a32.1 27.5 0 1064.2 0 32.1 27.5 0 10-64.2 0zM703.3 502.7a32.1 27.5 0 1064.2 0 32.1 27.5 0 10-64.2 0z"
      ></path>
    </svg>
  );
}
