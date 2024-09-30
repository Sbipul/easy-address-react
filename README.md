## easy-adress-react

Easy Address React - is a comprehensive and lightweight package designed to help developers seamlessly access and manage location-specific data for Bangladesh, including countries, divisions, districts, and upazilas (sub-districts). With built-in support for latitude and longitude data, this package is your go-to solution for geographic information, enhancing productivity and saving valuable development time.


## Authors

- [Bipul-Chandro-Roy](https://www.github.com/sbipul)
- [Portfolio](https://bipul-chandro-roy.netlify.app)

## Installation

Install "easy-adress-react" with npm or yarn

```bash
  npm i easy-adress-react
  yarn add easy-adress-react
```

## Usage/Examples

```javascript
import Component from 'my-project'
import {getCountry,getOneCountry,getCountryWiseDivision,getOneDivision,getDivision,getDistrict,getOneDistrict,getDivisionWiseDistrict,getUpazilla,getOneUpazilla,getDistrictWiseUpazilla} from 'easy-adress-react'

function App() {
    const countries = getCountry();
    // It will return all countries

    const oneCountry = getOneCountry(countryId);
    // It will return one country

    const divisions = getDivision();
    // It will return all divisions

    const countryWiseDivision = getCountryWiseDivision(countryId);
    // It will return divisions under a country

    const oneDivision = getOneDivision(divisionId);
    // It will return one division

  return <Component />
}
```


## 🚀 About Me
As a Senior Frontend Developer at Selopia since 2022, I am passionate about creating innovative and efficient web applications that enhance user experience and drive productivity. With expertise in modern frontend technologies such as React, Next.js, Vue, Framer Motion, Tailwind CSS, Material-UI, WebSocket, Socket.IO, and GSAP, I focus on delivering high-quality code and seamless user interfaces.

To further accelerate productivity, I am actively developing packages that streamline workflows for fellow developers. My practical knowledge extends beyond frontend development; I am well-versed in backend technologies, including Node.js, MongoDB, SQL, and TypeScript. This versatile skill set enables me to build comprehensive solutions and contribute effectively to full-stack projects.

Currently, I am pursuing my Bachelor’s degree in Computer Science and Engineering (CSE) at Sonargaon University, where I am in my 6th semester. My academic journey complements my professional experience, providing me with a strong foundation in software development principles and best practices.

I am dedicated to continuous learning and staying updated with the latest trends in technology, ensuring that I can contribute meaningfully to any project. My goal is to leverage my skills to develop impactful solutions that improve both developer productivity and user engagement.


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)




## Features

- Find Countries: Easily retrieve country data, focusing on Bangladesh and its administrative regions.
- Division Finder: Quickly access division data for Bangladesh or any specific country.
- District Lookup: Obtain district-level details for a division, ensuring accurate administrative mapping.
- Upazila (Sub-district) Finder: Retrieve upazila data for any district, streamlining access to sub-district-level information.
- Latitude and Longitude Support: Each geographical entity (country, division, district, and upazila) includes corresponding latitude and longitude data, facilitating geolocation services and mapping functionalities.
- Country-specific Division Mapping: Get all divisions for a specific country, ensuring easy geographic data management.
- Division-specific District Mapping: Access districts for a specific division, saving you time in administrative mapping.
- District-specific Upazila Mapping: Drill down further into sub-districts (upazilas) for each district.

