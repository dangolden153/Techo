import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={3}>
       <Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272137/profile2_aqodkv.jpg" />
       <Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272137/test1_l3qj0x.jpg" />
       <Avatar src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272112/client1-1_shquht.png" />
   
    </AvatarGroup>
  );
}
