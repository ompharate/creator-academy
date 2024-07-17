import ModernCourses from '@/components/themes/modern/Courses';
import Courses from '@/components/themes/modern/Courses';
import Navbar from '@/components/themes/modern/Navbar'
import UltraModernCourses from '@/components/themes/ultramodern/Courses';
import { getCompany } from '@/lib/actions/company.actions'
import React from 'react'

const page = async ({params}:{params:{platform:string}}) => {
  const companyData = await getCompany(params.platform);
  console.log(companyData)
  return (
    <div>
      <Navbar companyName={params.platform} companyImg={companyData?.companyImageUrl || undefined}/>
       <ModernCourses/>
       <UltraModernCourses/>
    </div>
  )
}

export default page