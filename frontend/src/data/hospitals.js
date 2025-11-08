const hospitals = [
  {
    id: '1',
    name: 'City Care Hospital',
    location: 'Downtown, Main St',
    timings: '08:00 - 20:00',
    contact: '+1 555-1234',
    specialties: ['Cardiology', 'Radiology', 'Emergency'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital1.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'MRI',
        price: 4500,
        duration: '45 mins',
        slots: ['09:00', '10:30', '13:00', '15:30']
      },
      {
        id: 'ct',
        name: 'CT Scan',
        price: 3500,
        duration: '30 mins',
        slots: ['09:30', '11:00', '14:00', '16:00']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 800,
        duration: '15 mins',
        slots: ['09:15', '10:00', '11:30', '15:00']
      }
    ]
  },
  {
    id: '2',
    name: 'Green Valley Medical',
    location: 'Green Valley Ave',
    timings: '07:00 - 22:00',
    contact: '+1 555-5678',
    specialties: ['Neurology', 'Orthopedics'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital2.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'MRI',
        price: 4800,
        duration: '50 mins',
        slots: ['08:30', '10:00', '12:00', '16:30']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 900,
        duration: '20 mins',
        slots: ['09:00', '11:00', '14:30', '17:00']
      }
    ]
  },
  {
    id: '3',
    name: 'Lakeside Clinic',
    location: 'Lakeside Rd',
    timings: '09:00 - 18:00',
    contact: '+1 555-9012',
    specialties: ['General Practice', 'Radiology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital3.jpg',
    facilities: [
      {
        id: 'ct',
        name: 'CT Scan',
        price: 3300,
        duration: '30 mins',
        slots: ['09:45', '11:15', '13:30', '15:45']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 750,
        duration: '15 mins',
        slots: ['10:00', '12:00', '14:00']
      }
    ]
  },
  {
    id: '4',
    name: 'Sunrise Multispecialty',
    location: 'Hilltop Road, Sector 12',
    timings: '06:00 - 22:00',
    contact: '+1 555-4321',
    specialties: ['Dermatology', 'ENT', 'General Surgery'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital4.jpg',
    facilities: [
      {
        id: 'blood',
        name: 'Blood Test',
        price: 300,
        duration: '20 mins',
        slots: ['07:00', '08:30', '10:00', '12:00']
      },
      {
        id: 'ultrasound',
        name: 'Ultrasound',
        price: 1500,
        duration: '40 mins',
        slots: ['09:00', '11:00', '13:30', '16:00']
      },
      {
        id: 'ecg',
        name: 'ECG',
        price: 500,
        duration: '15 mins',
        slots: ['08:00', '09:30', '11:30', '14:00']
      }
    ]
  },
  {
    id: '5',
    name: 'Wellness Point Hospital',
    location: 'Maple Street, Block B',
    timings: '07:00 - 21:00',
    contact: '+1 555-6789',
    specialties: ['Gastroenterology', 'Nephrology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital5.jpg',
    facilities: [
      {
        id: 'thyroid',
        name: 'Thyroid Panel',
        price: 600,
        duration: '25 mins',
        slots: ['08:00', '09:45', '11:15', '13:00']
      },
      {
        id: 'liver',
        name: 'Liver Function Test',
        price: 750,
        duration: '30 mins',
        slots: ['07:30', '10:00', '12:30', '15:00']
      }
    ]
  },
  {
    id: '6',
    name: 'Harmony Health Center',
    location: 'Riverbank Lane, East End',
    timings: '08:00 - 19:00',
    contact: '+1 555-2468',
    specialties: ['Pediatrics', 'Diabetology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital6.jpg',
    facilities: [
      {
        id: 'covid',
        name: 'COVID-19 RT-PCR',
        price: 900,
        duration: '10 mins',
        slots: ['08:30', '09:30', '11:00', '13:30']
      },
      {
        id: 'bp',
        name: 'Blood Pressure Check',
        price: 100,
        duration: '10 mins',
        slots: ['08:00', '10:00', '12:00', '14:00']
      },
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 200,
        duration: '15 mins',
        slots: ['07:30', '09:00', '11:30', '16:00']
      }
    ]
  },
  {
    id: '7',
    name: 'Silverline Hospital',
    location: 'Silver Street, Sector 5',
    timings: '07:00 - 20:00',
    contact: '+1 555-7777',
    specialties: ['Urology', 'Dermatology', 'General Medicine'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital7.jpg',
    facilities: [
      {
        id: 'ultrasound',
        name: 'Ultrasound',
        price: 1400,
        duration: '35 mins',
        slots: ['08:00', '09:30', '11:00', '14:00']
      },
      {
        id: 'blood',
        name: 'Blood Test',
        price: 350,
        duration: '20 mins',
        slots: ['07:30', '09:00', '10:30', '12:00']
      },
      {
        id: 'ecg',
        name: 'ECG',
        price: 450,
        duration: '15 mins',
        slots: ['08:15', '10:00', '12:30', '15:00']
      }
    ]
  },
  {
    id: '8',
    name: 'CareFirst Medical Center',
    location: 'Elm Avenue, Midtown',
    timings: '06:00 - 18:00',
    contact: '+1 555-8888',
    specialties: ['Endocrinology', 'Diabetology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital8.jpg',
    facilities: [
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 250,
        duration: '15 mins',
        slots: ['06:30', '08:00', '09:30', '11:00']
      },
      {
        id: 'thyroid',
        name: 'Thyroid Panel',
        price: 650,
        duration: '25 mins',
        slots: ['07:00', '09:00', '11:30', '13:00']
      }
    ]
  },
  {
    id: '9',
    name: 'Heritage Hospital',
    location: 'Heritage Circle, Old Town',
    timings: '08:00 - 21:00',
    contact: '+1 555-9999',
    specialties: ['Pulmonology', 'Oncology', 'Radiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital9.jpg',
    facilities: [
      {
        id: 'ct',
        name: 'CT Scan',
        price: 3600,
        duration: '30 mins',
        slots: ['08:30', '10:00', '12:30', '15:00']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 850,
        duration: '20 mins',
        slots: ['09:00', '11:00', '13:30', '16:00']
      },
      {
        id: 'covid',
        name: 'COVID-19 RT-PCR',
        price: 950,
        duration: '10 mins',
        slots: ['08:00', '09:30', '11:30', '14:00']
      }
    ]
  },
   {
    id: '10',
    name: 'Galaxy Super Specialty Hospital',
    location: 'Skyline Tower, Sector 9',
    timings: '06:00 - 23:00',
    contact: '+1 555-1010',
    specialties: ['Cardiology', 'Oncology', 'Neurosurgery'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital10.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'MRI Scan',
        price: 5000,
        duration: '50 mins',
        slots: ['07:00', '09:00', '11:00', '14:30']
      },
      {
        id: 'ct',
        name: 'CT Scan',
        price: 3600,
        duration: '35 mins',
        slots: ['08:00', '10:30', '13:00', '15:30']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 850,
        duration: '15 mins',
        slots: ['09:00', '11:00', '13:30', '16:00']
      }
    ]
  },
  {
    id: '11',
    name: 'Evercare Medical Hub',
    location: 'Sunset Boulevard, Block C',
    timings: '07:00 - 20:00',
    contact: '+1 555-1111',
    specialties: ['Orthopedics', 'Physiotherapy', 'Rehabilitation'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital11.jpg',
    facilities: [
      {
        id: 'physio',
        name: 'Physiotherapy Session',
        price: 1200,
        duration: '60 mins',
        slots: ['08:00', '10:00', '12:00', '15:00']
      },
      {
        id: 'bone',
        name: 'Bone Density Test',
        price: 1500,
        duration: '30 mins',
        slots: ['09:00', '11:30', '14:00', '16:00']
      }
    ]
  },
  {
    id: '12',
    name: 'LifeSpring Hospital',
    location: 'Lotus Avenue, Central City',
    timings: '05:00 - 22:00',
    contact: '+1 555-1212',
    specialties: ['Gynecology', 'Maternity', 'Pediatrics'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital12.jpg',
    facilities: [
      {
        id: 'delivery',
        name: 'Maternity Delivery Package',
        price: 25000,
        duration: 'Variable',
        slots: ['24x7']
      },
      {
        id: 'ultrasound',
        name: 'Ultrasound',
        price: 1600,
        duration: '40 mins',
        slots: ['06:00', '08:30', '11:00', '14:00']
      },
      {
        id: 'blood',
        name: 'Blood Test',
        price: 300,
        duration: '20 mins',
        slots: ['07:30', '09:00', '10:30', '12:00']
      }
    ]
  },
  {
    id: '13',
    name: 'Trinity Care Hospital',
    location: 'Hillview Lane, Sector 4',
    timings: '08:00 - 19:00',
    contact: '+1 555-1313',
    specialties: ['ENT', 'Dermatology', 'General Surgery'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital13.jpg',
    facilities: [
      {
        id: 'skin',
        name: 'Skin Allergy Test',
        price: 900,
        duration: '25 mins',
        slots: ['08:30', '10:30', '12:30', '15:00']
      },
      {
        id: 'ear',
        name: 'Ear Examination',
        price: 500,
        duration: '15 mins',
        slots: ['09:00', '11:00', '13:00', '16:00']
      }
    ]
  },
  {
    id: '14',
    name: 'BlueCross Wellness Center',
    location: 'Coral Road, West End',
    timings: '07:00 - 21:00',
    contact: '+1 555-1414',
    specialties: ['Cardiology', 'Radiology', 'Nephrology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital14.jpg',
    facilities: [
      {
        id: 'ecg',
        name: 'ECG Test',
        price: 600,
        duration: '15 mins',
        slots: ['08:00', '09:30', '11:30', '14:00']
      },
      {
        id: 'dialysis',
        name: 'Dialysis',
        price: 2500,
        duration: '2 hrs',
        slots: ['07:30', '10:00', '12:30', '15:30']
      }
    ]
  },
  {
    id: '15',
    name: 'Nova Health Plaza',
    location: 'Central Park Lane, Downtown',
    timings: '06:00 - 20:00',
    contact: '+1 555-1515',
    specialties: ['Neurology', 'Radiology', 'Cardiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital15.jpg',
    facilities: [
      {
        id: 'brain',
        name: 'Brain MRI',
        price: 5200,
        duration: '60 mins',
        slots: ['07:00', '09:00', '11:30', '14:30']
      },
      {
        id: 'stress',
        name: 'Stress ECG Test',
        price: 700,
        duration: '20 mins',
        slots: ['08:00', '10:00', '12:30', '15:00']
      }
    ]
  },
  {
    id: '16',
    name: 'Hope General Hospital',
    location: 'Meadow Street, Block D',
    timings: '08:00 - 19:30',
    contact: '+1 555-1616',
    specialties: ['General Medicine', 'Endocrinology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital16.jpg',
    facilities: [
      {
        id: 'bp',
        name: 'Blood Pressure Check',
        price: 120,
        duration: '10 mins',
        slots: ['08:30', '09:30', '11:00', '13:00']
      },
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 220,
        duration: '15 mins',
        slots: ['08:00', '09:00', '10:30', '12:00']
      }
    ]
  },
  {
    id: '17',
    name: 'Zenith Care Hospital',
    location: 'Pearl Colony, Ring Road',
    timings: '05:30 - 22:00',
    contact: '+1 555-1717',
    specialties: ['Gastroenterology', 'Nephrology', 'Endocrinology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital17.jpg',
    facilities: [
      {
        id: 'endoscopy',
        name: 'Endoscopy',
        price: 3200,
        duration: '45 mins',
        slots: ['07:00', '09:00', '11:30', '14:00']
      },
      {
        id: 'liver',
        name: 'Liver Function Test',
        price: 800,
        duration: '30 mins',
        slots: ['08:30', '10:30', '12:30', '15:00']
      }
    ]
  },
  {
    id: '18',
    name: 'Unity Multicare Center',
    location: 'Orchid Plaza, North City',
    timings: '07:00 - 20:30',
    contact: '+1 555-1818',
    specialties: ['Oncology', 'Pulmonology', 'Radiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital18.jpg',
    facilities: [
      {
        id: 'ct',
        name: 'CT Chest',
        price: 3800,
        duration: '30 mins',
        slots: ['08:00', '10:00', '12:00', '15:00']
      },
      {
        id: 'covid',
        name: 'COVID-19 RT-PCR',
        price: 950,
        duration: '10 mins',
        slots: ['07:30', '09:00', '11:00', '13:00']
      }
    ]
  },
  {
    id: '19',
    name: 'HealthBridge Specialty Hospital',
    location: 'Maple Residency, Sector 10',
    timings: '06:00 - 21:00',
    contact: '+1 555-1919',
    specialties: ['Diabetology', 'Cardiology', 'General Practice'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital19.jpg',
    facilities: [
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 230,
        duration: '15 mins',
        slots: ['06:30', '08:00', '09:30', '11:00']
      },
      {
        id: 'ecg',
        name: 'ECG',
        price: 550,
        duration: '20 mins',
        slots: ['07:00', '09:00', '11:30', '13:00']
      }
    ]
  },
  {
    id: '20',
    name: 'PrimeCare Medical Institute',
    location: 'Oakwood Street, Sector 8',
    timings: '06:00 - 22:00',
    contact: '+1 555-2020',
    specialties: ['Cardiology', 'Neurology', 'Radiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital20.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'MRI Scan',
        price: 4700,
        duration: '45 mins',
        slots: ['07:00', '09:00', '11:00', '13:30']
      },
      {
        id: 'ct',
        name: 'CT Scan',
        price: 3400,
        duration: '30 mins',
        slots: ['08:00', '10:00', '12:30', '15:00']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 800,
        duration: '20 mins',
        slots: ['09:00', '11:00', '14:00', '16:00']
      }
    ]
  },
  {
    id: '21',
    name: 'Serenity Health Hospital',
    location: 'Rose Garden, West Zone',
    timings: '07:00 - 20:00',
    contact: '+1 555-2121',
    specialties: ['Dermatology', 'ENT', 'General Medicine'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital21.jpg',
    facilities: [
      {
        id: 'skin',
        name: 'Skin Checkup',
        price: 750,
        duration: '20 mins',
        slots: ['08:00', '09:30', '11:30', '14:00']
      },
      {
        id: 'ear',
        name: 'Ear Cleaning',
        price: 400,
        duration: '15 mins',
        slots: ['08:30', '10:00', '12:00', '15:00']
      }
    ]
  },
  {
    id: '22',
    name: 'Sunshine Medical Plaza',
    location: 'Harbor Street, Coastal Area',
    timings: '05:30 - 23:00',
    contact: '+1 555-2222',
    specialties: ['Emergency', 'Orthopedics', 'Physiotherapy'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital22.jpg',
    facilities: [
      {
        id: 'fracture',
        name: 'Fracture Treatment',
        price: 2500,
        duration: '1 hr',
        slots: ['06:00', '08:00', '10:30', '13:00']
      },
      {
        id: 'physio',
        name: 'Physiotherapy Session',
        price: 1000,
        duration: '45 mins',
        slots: ['07:30', '09:30', '12:00', '15:00']
      }
    ]
  },
  {
    id: '23',
    name: 'Aurora Diagnostic Center',
    location: 'Crystal Park, East Avenue',
    timings: '06:30 - 21:00',
    contact: '+1 555-2323',
    specialties: ['Pathology', 'Radiology', 'Cardiology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital23.jpg',
    facilities: [
      {
        id: 'blood',
        name: 'Blood Test',
        price: 320,
        duration: '15 mins',
        slots: ['07:00', '08:30', '10:30', '12:00']
      },
      {
        id: 'ecg',
        name: 'ECG Test',
        price: 580,
        duration: '20 mins',
        slots: ['07:30', '09:00', '11:30', '14:00']
      },
      {
        id: 'cholesterol',
        name: 'Cholesterol Profile',
        price: 650,
        duration: '25 mins',
        slots: ['08:00', '10:00', '12:00', '15:00']
      }
    ]
  },
  {
    id: '24',
    name: 'Harmony Specialty Hospital',
    location: 'Cedar Lane, Midtown',
    timings: '07:00 - 19:30',
    contact: '+1 555-2424',
    specialties: ['Gynecology', 'Maternity', 'Pediatrics'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital24.jpg',
    facilities: [
      {
        id: 'delivery',
        name: 'Maternity Package',
        price: 23000,
        duration: 'Variable',
        slots: ['24x7']
      },
      {
        id: 'ultrasound',
        name: 'Ultrasound',
        price: 1550,
        duration: '35 mins',
        slots: ['07:00', '09:00', '11:00', '14:30']
      }
    ]
  },
  {
    id: '25',
    name: 'Grandview Hospital',
    location: 'Sunset Hills, North Block',
    timings: '06:00 - 20:30',
    contact: '+1 555-2525',
    specialties: ['Cardiology', 'Radiology', 'Oncology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital25.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'Cardiac MRI',
        price: 5300,
        duration: '50 mins',
        slots: ['06:30', '08:30', '11:00', '13:30']
      },
      {
        id: 'ct',
        name: 'CT Angiography',
        price: 4000,
        duration: '40 mins',
        slots: ['07:30', '09:30', '12:00', '15:00']
      }
    ]
  },
  {
    id: '26',
    name: 'MedicoPlus Healthcare',
    location: 'Evergreen Road, Sector 11',
    timings: '08:00 - 19:00',
    contact: '+1 555-2626',
    specialties: ['Endocrinology', 'General Medicine'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital26.jpg',
    facilities: [
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 200,
        duration: '10 mins',
        slots: ['08:00', '09:00', '10:30', '12:00']
      },
      {
        id: 'thyroid',
        name: 'Thyroid Test',
        price: 620,
        duration: '20 mins',
        slots: ['08:30', '10:30', '12:30', '15:00']
      }
    ]
  },
  {
    id: '27',
    name: 'Vitalize Medical Center',
    location: 'Greenwood Colony, South City',
    timings: '07:00 - 22:00',
    contact: '+1 555-2727',
    specialties: ['Physiotherapy', 'Rehabilitation', 'Orthopedics'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital27.jpg',
    facilities: [
      {
        id: 'rehab',
        name: 'Rehabilitation Therapy',
        price: 1800,
        duration: '1 hr',
        slots: ['07:00', '09:00', '11:30', '14:00']
      },
      {
        id: 'physio',
        name: 'Physiotherapy Session',
        price: 1100,
        duration: '45 mins',
        slots: ['08:00', '10:00', '12:30', '15:00']
      }
    ]
  },
  {
    id: '28',
    name: 'ZenCare Wellness Hospital',
    location: 'Lotus Garden, East End',
    timings: '06:30 - 21:30',
    contact: '+1 555-2828',
    specialties: ['Nephrology', 'Urology', 'General Surgery'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital28.jpg',
    facilities: [
      {
        id: 'dialysis',
        name: 'Dialysis Session',
        price: 2700,
        duration: '2 hrs',
        slots: ['07:00', '10:00', '12:30', '15:00']
      },
      {
        id: 'urine',
        name: 'Urine Analysis',
        price: 250,
        duration: '10 mins',
        slots: ['08:00', '09:30', '11:00', '13:30']
      }
    ]
  },
  {
    id: '29',
    name: 'Cureline General Hospital',
    location: 'Elmwood Avenue, Central Plaza',
    timings: '07:00 - 20:00',
    contact: '+1 555-2929',
    specialties: ['General Practice', 'Radiology', 'ENT'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital29.jpg',
    facilities: [
      {
        id: 'xray',
        name: 'Chest X-Ray',
        price: 820,
        duration: '20 mins',
        slots: ['08:00', '09:30', '11:30', '13:00']
      },
      {
        id: 'hearing',
        name: 'Hearing Test',
        price: 600,
        duration: '25 mins',
        slots: ['08:30', '10:00', '12:00', '14:00']
      }
    ]
  },
  {
    id: '30',
    name: 'Apollo Multispeciality Hospital',
    location: 'Greams Road, Chennai, Tamil Nadu',
    timings: '06:00 - 22:00',
    contact: '+91 44 6677 1234',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital30.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'MRI Scan',
        price: 5500,
        duration: '45 mins',
        slots: ['07:00', '09:30', '12:00', '15:00']
      },
      {
        id: 'ct',
        name: 'CT Scan',
        price: 4200,
        duration: '30 mins',
        slots: ['08:00', '10:00', '13:00', '16:00']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 600,
        duration: '20 mins',
        slots: ['09:00', '11:00', '14:00', '17:00']
      }
    ]
  },
  {
    id: '31',
    name: 'Fortis Healthcare',
    location: 'Bannerghatta Road, Bengaluru, Karnataka',
    timings: '07:00 - 21:00',
    contact: '+91 80 6621 4444',
    specialties: ['Cardiology', 'Urology', 'Dermatology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital31.jpg',
    facilities: [
      {
        id: 'angiogram',
        name: 'Coronary Angiogram',
        price: 8000,
        duration: '1 hr',
        slots: ['07:30', '10:00', '13:00', '15:30']
      },
      {
        id: 'skin',
        name: 'Skin Allergy Test',
        price: 1200,
        duration: '25 mins',
        slots: ['09:00', '11:30', '14:00', '16:00']
      }
    ]
  },
  {
    id: '32',
    name: 'Kokilaben Dhirubhai Ambani Hospital',
    location: 'Four Bungalows, Andheri West, Mumbai, Maharashtra',
    timings: '06:00 - 23:00',
    contact: '+91 22 3066 6666',
    specialties: ['Oncology', 'Neurology', 'Radiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital32.jpg',
    facilities: [
      {
        id: 'pet',
        name: 'PET Scan',
        price: 12500,
        duration: '1 hr',
        slots: ['07:00', '09:00', '12:00', '15:30']
      },
      {
        id: 'mri',
        name: 'Brain MRI',
        price: 6200,
        duration: '45 mins',
        slots: ['08:00', '10:30', '13:00', '16:00']
      }
    ]
  },
  {
    id: '33',
    name: 'AIIMS Hospital',
    location: 'Ansari Nagar, New Delhi',
    timings: '06:00 - 20:00',
    contact: '+91 11 2658 8500',
    specialties: ['General Medicine', 'Cardiology', 'Pediatrics'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital33.jpg',
    facilities: [
      {
        id: 'ecg',
        name: 'ECG Test',
        price: 300,
        duration: '20 mins',
        slots: ['07:00', '08:30', '10:30', '13:00']
      },
      {
        id: 'blood',
        name: 'Blood Test (Full Panel)',
        price: 800,
        duration: '15 mins',
        slots: ['07:30', '09:00', '11:00', '14:00']
      }
    ]
  },
  {
    id: '34',
    name: 'Manipal Hospital',
    location: 'Old Airport Road, Bengaluru, Karnataka',
    timings: '07:00 - 22:00',
    contact: '+91 80 2502 4444',
    specialties: ['Gastroenterology', 'Orthopedics', 'Neurology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital34.jpg',
    facilities: [
      {
        id: 'endoscopy',
        name: 'Endoscopy',
        price: 4000,
        duration: '40 mins',
        slots: ['08:00', '10:00', '12:00', '15:00']
      },
      {
        id: 'bone',
        name: 'Bone Density Test',
        price: 2500,
        duration: '35 mins',
        slots: ['09:00', '11:30', '13:30', '16:00']
      }
    ]
  },
  {
    id: '35',
    name: 'Medanta The Medicity',
    location: 'Sector 38, Gurugram, Haryana',
    timings: '06:30 - 21:30',
    contact: '+91 124 4141 414',
    specialties: ['Cardiac Surgery', 'Nephrology', 'Endocrinology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital35.jpg',
    facilities: [
      {
        id: 'dialysis',
        name: 'Dialysis Session',
        price: 3500,
        duration: '2 hrs',
        slots: ['07:00', '09:30', '12:00', '15:30']
      },
      {
        id: 'thyroid',
        name: 'Thyroid Profile Test',
        price: 850,
        duration: '25 mins',
        slots: ['08:00', '10:00', '12:30', '14:30']
      }
    ]
  },
  {
    id: '36',
    name: 'Narayana Health City',
    location: 'Bommasandra, Bengaluru, Karnataka',
    timings: '07:00 - 21:00',
    contact: '+91 80 7122 2222',
    specialties: ['Cardiology', 'Oncology', 'Radiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital36.jpg',
    facilities: [
      {
        id: 'chemotherapy',
        name: 'Chemotherapy Session',
        price: 7500,
        duration: '2 hrs',
        slots: ['07:30', '10:00', '13:00', '15:30']
      },
      {
        id: 'ct',
        name: 'CT Scan',
        price: 4000,
        duration: '35 mins',
        slots: ['08:00', '11:00', '13:30', '16:00']
      }
    ]
  },
  {
    id: '37',
    name: 'Sahyadri Super Speciality Hospital',
    location: 'Karve Road, Pune, Maharashtra',
    timings: '06:30 - 20:30',
    contact: '+91 20 6721 3333',
    specialties: ['Neurology', 'Gastroenterology', 'Dermatology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital37.jpg',
    facilities: [
      {
        id: 'gastroscopy',
        name: 'Gastroscopy',
        price: 3800,
        duration: '40 mins',
        slots: ['07:00', '09:30', '12:00', '14:30']
      },
      {
        id: 'skin',
        name: 'Skin Consultation',
        price: 900,
        duration: '30 mins',
        slots: ['08:30', '10:00', '12:30', '15:00']
      }
    ]
  },
  {
    id: '38',
    name: 'CMC Hospital',
    location: 'Vellore, Tamil Nadu',
    timings: '07:00 - 20:00',
    contact: '+91 416 228 1000',
    specialties: ['Pediatrics', 'General Medicine', 'ENT'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital38.jpg',
    facilities: [
      {
        id: 'ear',
        name: 'Ear Cleaning',
        price: 350,
        duration: '15 mins',
        slots: ['08:00', '09:30', '11:30', '13:30']
      },
      {
        id: 'xray',
        name: 'Chest X-Ray',
        price: 700,
        duration: '20 mins',
        slots: ['09:00', '10:30', '12:00', '14:00']
      }
    ]
  },
  {
    id: '39',
    name: 'Ruby Hall Clinic',
    location: 'Sassoon Road, Pune, Maharashtra',
    timings: '06:00 - 21:00',
    contact: '+91 20 6645 5100',
    specialties: ['Cardiology', 'Orthopedics', 'Radiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital39.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'Knee MRI',
        price: 4800,
        duration: '40 mins',
        slots: ['06:30', '08:30', '11:00', '13:30']
      },
      {
        id: 'bone',
        name: 'Fracture Treatment',
        price: 2200,
        duration: '1 hr',
        slots: ['07:30', '10:00', '12:00', '15:00']
      }
    ]
  },{
    id: '40',
    name: 'Lotus Multispeciality Hospital',
    location: 'Andheri East, Mumbai, Maharashtra',
    timings: '06:30 - 22:00',
    contact: '+91 22 6789 1234',
    specialties: ['Cardiology', 'Orthopedics', 'Neurology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital40.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'Whole Body MRI',
        price: 5000,
        duration: '50 mins',
        slots: ['07:00', '09:30', '12:30', '15:30']
      },
      {
        id: 'ct',
        name: 'CT Scan',
        price: 3800,
        duration: '35 mins',
        slots: ['08:00', '10:00', '13:00', '16:00']
      }
    ]
  },
  {
    id: '41',
    name: 'Sunshine Hospital',
    location: 'Kothrud, Pune, Maharashtra',
    timings: '07:00 - 20:00',
    contact: '+91 20 6688 1122',
    specialties: ['Gynecology', 'Dermatology', 'ENT'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital41.jpg',
    facilities: [
      {
        id: 'ultrasound',
        name: 'Ultrasound',
        price: 1500,
        duration: '30 mins',
        slots: ['08:00', '09:30', '11:00', '14:00']
      },
      {
        id: 'pregnancy',
        name: 'Pregnancy Test',
        price: 400,
        duration: '15 mins',
        slots: ['07:30', '09:00', '11:30', '13:30']
      }
    ]
  },
  {
    id: '42',
    name: 'Nagpur Care Hospital',
    location: 'Sadar, Nagpur, Maharashtra',
    timings: '06:00 - 21:00',
    contact: '+91 712 224 4455',
    specialties: ['Radiology', 'General Surgery', 'Cardiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital42.jpg',
    facilities: [
      {
        id: 'xray',
        name: 'Chest X-Ray',
        price: 650,
        duration: '20 mins',
        slots: ['07:30', '09:00', '11:00', '13:30']
      },
      {
        id: 'mri',
        name: 'Brain MRI',
        price: 5800,
        duration: '45 mins',
        slots: ['08:30', '10:00', '12:00', '15:00']
      }
    ]
  },
  {
    id: '43',
    name: 'Seva Multicare Hospital',
    location: 'Thane West, Maharashtra',
    timings: '07:00 - 22:00',
    contact: '+91 22 2555 3344',
    specialties: ['General Medicine', 'Cardiology', 'Radiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital43.jpg',
    facilities: [
      {
        id: 'blood',
        name: 'Full Body Blood Check',
        price: 900,
        duration: '25 mins',
        slots: ['07:00', '08:30', '10:30', '12:30']
      },
      {
        id: 'ecg',
        name: 'ECG',
        price: 400,
        duration: '15 mins',
        slots: ['09:00', '11:00', '13:00', '15:00']
      }
    ]
  },
  {
    id: '44',
    name: 'Jeevan Jyoti Hospital',
    location: 'Nashik Road, Nashik, Maharashtra',
    timings: '06:00 - 20:00',
    contact: '+91 253 224 6677',
    specialties: ['Gastroenterology', 'Pediatrics'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital44.jpg',
    facilities: [
      {
        id: 'endoscopy',
        name: 'Endoscopy',
        price: 4200,
        duration: '40 mins',
        slots: ['07:30', '09:30', '11:00', '14:00']
      },
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 250,
        duration: '10 mins',
        slots: ['07:00', '09:00', '11:30', '13:00']
      }
    ]
  },
  {
    id: '45',
    name: 'Global Heart Institute',
    location: 'Pimpri-Chinchwad, Pune, Maharashtra',
    timings: '07:00 - 21:00',
    contact: '+91 20 6677 5544',
    specialties: ['Cardiology', 'Cardiac Surgery'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital45.jpg',
    facilities: [
      {
        id: 'angioplasty',
        name: 'Angioplasty',
        price: 25000,
        duration: '2 hrs',
        slots: ['08:00', '10:30', '13:00', '15:00']
      },
      {
        id: 'ecg',
        name: 'ECG',
        price: 500,
        duration: '20 mins',
        slots: ['07:00', '09:00', '11:30', '14:00']
      }
    ]
  },
  {
    id: '46',
    name: 'Omkar Specialty Hospital',
    location: 'Aurangabad, Maharashtra',
    timings: '06:30 - 21:30',
    contact: '+91 240 223 8899',
    specialties: ['ENT', 'Orthopedics', 'Dermatology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital46.jpg',
    facilities: [
      {
        id: 'ear',
        name: 'Ear Wax Removal',
        price: 350,
        duration: '15 mins',
        slots: ['08:00', '09:30', '11:30', '13:30']
      },
      {
        id: 'bone',
        name: 'Bone Density Test',
        price: 2800,
        duration: '35 mins',
        slots: ['07:30', '10:00', '12:00', '15:00']
      }
    ]
  },
  {
    id: '47',
    name: 'LifeLine Hospital',
    location: 'Mira Road, Mumbai, Maharashtra',
    timings: '07:00 - 20:30',
    contact: '+91 22 2888 4433',
    specialties: ['Nephrology', 'General Surgery'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital47.jpg',
    facilities: [
      {
        id: 'dialysis',
        name: 'Dialysis',
        price: 3800,
        duration: '2 hrs',
        slots: ['07:00', '09:30', '12:30', '15:30']
      },
      {
        id: 'liver',
        name: 'Liver Function Test',
        price: 700,
        duration: '25 mins',
        slots: ['08:00', '10:00', '13:00', '16:00']
      }
    ]
  },
  {
    id: '48',
    name: 'Rainbow Children Hospital',
    location: 'Kharadi, Pune, Maharashtra',
    timings: '08:00 - 20:00',
    contact: '+91 20 7755 9922',
    specialties: ['Pediatrics', 'Vaccination'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital48.jpg',
    facilities: [
      {
        id: 'vaccine',
        name: 'Child Vaccination',
        price: 1200,
        duration: '20 mins',
        slots: ['08:00', '09:30', '11:00', '13:30']
      },
      {
        id: 'checkup',
        name: 'General Child Checkup',
        price: 600,
        duration: '30 mins',
        slots: ['09:00', '10:30', '12:00', '15:00']
      }
    ]
  },
  {
    id: '49',
    name: 'Sai Krupa Hospital',
    location: 'Kolhapur, Maharashtra',
    timings: '07:00 - 21:00',
    contact: '+91 231 224 7788',
    specialties: ['General Medicine', 'Diabetology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital49.jpg',
    facilities: [
      {
        id: 'bp',
        name: 'Blood Pressure Check',
        price: 100,
        duration: '10 mins',
        slots: ['07:00', '09:00', '11:30', '13:30']
      },
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 200,
        duration: '15 mins',
        slots: ['07:30', '09:30', '12:00', '14:00']
      }
    ]
  },
  {
    id: '50',
    name: 'Fortune Care Hospital',
    location: 'Vashi, Navi Mumbai, Maharashtra',
    timings: '06:00 - 22:00',
    contact: '+91 22 7788 5566',
    specialties: ['Cardiology', 'Radiology', 'Orthopedics'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital50.jpg',
    facilities: [
      {
        id: 'mri',
        name: 'MRI Brain Scan',
        price: 5200,
        duration: '45 mins',
        slots: ['07:00', '09:00', '12:00', '15:00']
      },
      {
        id: 'xray',
        name: 'Chest X-Ray',
        price: 600,
        duration: '20 mins',
        slots: ['08:00', '10:00', '13:00', '16:00']
      }
    ]
  },
  {
    id: '51',
    name: 'Sai Dhanvantari Hospital',
    location: 'Ulhasnagar, Thane, Maharashtra',
    timings: '07:00 - 21:00',
    contact: '+91 22 6633 1122',
    specialties: ['ENT', 'Dermatology', 'General Medicine'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital51.jpg',
    facilities: [
      {
        id: 'ear',
        name: 'Ear Checkup',
        price: 300,
        duration: '15 mins',
        slots: ['07:30', '09:30', '11:30', '14:30']
      },
      {
        id: 'skin',
        name: 'Skin Allergy Test',
        price: 1200,
        duration: '30 mins',
        slots: ['08:00', '10:00', '12:30', '15:00']
      }
    ]
  },
  {
    id: '52',
    name: 'HealthPoint Multispeciality Hospital',
    location: 'Karad, Maharashtra',
    timings: '06:30 - 20:30',
    contact: '+91 2164 223 556',
    specialties: ['Gastroenterology', 'Radiology', 'Diabetology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital52.jpg',
    facilities: [
      {
        id: 'ct',
        name: 'CT Abdomen',
        price: 3600,
        duration: '35 mins',
        slots: ['07:00', '09:00', '11:00', '14:00']
      },
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 250,
        duration: '10 mins',
        slots: ['06:30', '08:30', '10:30', '12:30']
      }
    ]
  },
  {
    id: '53',
    name: 'Shraddha Hospital',
    location: 'Sangli, Maharashtra',
    timings: '07:00 - 21:00',
    contact: '+91 233 229 7788',
    specialties: ['Orthopedics', 'General Surgery'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital53.jpg',
    facilities: [
      {
        id: 'bone',
        name: 'Bone Fracture X-Ray',
        price: 800,
        duration: '25 mins',
        slots: ['07:30', '09:30', '12:00', '15:00']
      },
      {
        id: 'surgery',
        name: 'Minor Surgery Consultation',
        price: 1200,
        duration: '30 mins',
        slots: ['08:00', '10:00', '13:00', '16:00']
      }
    ]
  },
  {
    id: '54',
    name: 'Aastha Hospital',
    location: 'Latur, Maharashtra',
    timings: '06:00 - 19:00',
    contact: '+91 2382 445 667',
    specialties: ['Gynecology', 'Radiology'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital54.jpg',
    facilities: [
      {
        id: 'ultrasound',
        name: 'Pregnancy Ultrasound',
        price: 1600,
        duration: '40 mins',
        slots: ['07:00', '09:00', '11:30', '14:00']
      },
      {
        id: 'blood',
        name: 'Blood Test',
        price: 350,
        duration: '20 mins',
        slots: ['06:30', '08:00', '10:00', '12:30']
      }
    ]
  },
  {
    id: '55',
    name: 'NewLife Multicare Hospital',
    location: 'Beed, Maharashtra',
    timings: '07:00 - 22:00',
    contact: '+91 2442 556 778',
    specialties: ['Cardiology', 'Physiotherapy', 'Neurology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital55.jpg',
    facilities: [
      {
        id: 'ecg',
        name: 'ECG Test',
        price: 500,
        duration: '15 mins',
        slots: ['07:00', '09:00', '11:00', '13:00']
      },
      {
        id: 'therapy',
        name: 'Physiotherapy Session',
        price: 900,
        duration: '45 mins',
        slots: ['08:00', '10:30', '12:30', '15:30']
      }
    ]
  },
  {
    id: '56',
    name: 'Shree Ganesh Hospital',
    location: 'Jalgaon, Maharashtra',
    timings: '06:30 - 21:00',
    contact: '+91 257 223 5599',
    specialties: ['ENT', 'General Medicine'],
    emergencyAvailable: false,
    imageUrl: '/assets/hospital56.jpg',
    facilities: [
      {
        id: 'ear',
        name: 'Ear Infection Treatment',
        price: 400,
        duration: '20 mins',
        slots: ['07:00', '09:30', '11:00', '13:30']
      },
      {
        id: 'xray',
        name: 'X-Ray',
        price: 600,
        duration: '15 mins',
        slots: ['08:00', '10:00', '12:00', '14:00']
      }
    ]
  },
  {
    id: '57',
    name: 'CareWell Hospital',
    location: 'Ratnagiri, Maharashtra',
    timings: '07:00 - 20:00',
    contact: '+91 2352 778 991',
    specialties: ['General Surgery', 'Radiology', 'Cardiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital57.jpg',
    facilities: [
      {
        id: 'ct',
        name: 'CT Brain Scan',
        price: 3700,
        duration: '35 mins',
        slots: ['07:30', '09:30', '11:30', '13:30']
      },
      {
        id: 'blood',
        name: 'Full Body Blood Test',
        price: 850,
        duration: '25 mins',
        slots: ['06:30', '08:00', '10:00', '12:30']
      }
    ]
  },
  {
    id: '58',
    name: 'Trinity Hospital',
    location: 'Solapur, Maharashtra',
    timings: '06:00 - 21:00',
    contact: '+91 217 225 3344',
    specialties: ['Diabetology', 'General Medicine', 'Cardiology'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital58.jpg',
    facilities: [
      {
        id: 'sugar',
        name: 'Blood Sugar Test',
        price: 200,
        duration: '10 mins',
        slots: ['06:30', '08:30', '10:30', '12:30']
      },
      {
        id: 'bp',
        name: 'Blood Pressure Check',
        price: 100,
        duration: '10 mins',
        slots: ['07:00', '09:00', '11:00', '13:00']
      }
    ]
  },
  {
    id: '59',
    name: 'Amruta Multispeciality Hospital',
    location: 'Panvel, Raigad, Maharashtra',
    timings: '07:00 - 20:30',
    contact: '+91 22 4466 8899',
    specialties: ['Pediatrics', 'Radiology', 'General Surgery'],
    emergencyAvailable: true,
    imageUrl: '/assets/hospital59.jpg',
    facilities: [
      {
        id: 'xray',
        name: 'Chest X-Ray',
        price: 700,
        duration: '20 mins',
        slots: ['07:30', '09:30', '11:00', '14:00']
      },
      {
        id: 'mri',
        name: 'Abdominal MRI',
        price: 5400,
        duration: '50 mins',
        slots: ['08:00', '10:00', '12:30', '15:30']
      }
    ]
  }
];

export default hospitals;
