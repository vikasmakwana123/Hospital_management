import { createContext, useContext, useState } from 'react';

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState({
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    bloodgroup: 'O+',
    phoneno: '9876543210',
    whatsappno: '9876543210',
    address: '123 Main St, Cityville',
  });

  return (
    <PatientContext.Provider value={{ patient, setPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => useContext(PatientContext);
