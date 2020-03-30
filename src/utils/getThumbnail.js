import React from 'react';

export const getThumbnail = thumbnail => {
  if (!thumbnail) {
    return (
      <img
        src={"https://ui-avatars.com/api/?name=no+avatar"} 
        alt={"https://ui-avatars.com/api/?name=no+avatar"}
      />
    )
  } else {
    return (
      <img
        src={thumbnail} 
        alt={thumbnail}
      />
    )
  }
}