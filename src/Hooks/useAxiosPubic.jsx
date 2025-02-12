import React from 'react';
import axios from 'axios';
const axiospublic = axios.create({
    baseURL: 'http://localhost:7000',
    
  });
const useAxiosPubic = () => {
    return axiospublic
};

export default useAxiosPubic;



