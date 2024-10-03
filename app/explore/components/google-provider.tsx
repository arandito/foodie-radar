'use client';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';

const libraries = ['places', 'drawing', 'geometry'];

export default function GoogleProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as Libraries,
  });

  if(loadError) return <p>Encountered error while loading google maps</p>

  if(!scriptLoaded) return (
    <div className='flex items-center justify-center'>
      <p>Google Maps Provider is loading ...</p>
    </div>
  )

  return children;
}