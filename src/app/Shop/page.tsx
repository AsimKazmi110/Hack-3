import React from 'react';
import ShopHeader from '@/components/ShopHeader';

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { groq } from 'next-sanity';
import OurProduct from '@/components/ProductGrid';


function page() {
  return (
    <div>
    <ShopHeader />
<OurProduct/>
  
    </div>
  )
}

export default page
