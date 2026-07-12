import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing
  await prisma.driver.deleteMany();
  await prisma.vehicle.deleteMany();

  // Create Drivers
  await prisma.driver.createMany({
    data: [
      {
        name: 'Alex Johnson',
        licenseNumber: 'DL-1001-XYZ',
        licenseCategory: 'CDL-A',
        licenseExpiryDate: new Date('2028-05-10'),
        contactNumber: '+1-555-0100',
        safetyScore: 95,
        status: 'AVAILABLE',
        salary: 4500,
        rating: 4.8,
      },
      {
        name: 'Maria Garcia',
        licenseNumber: 'DL-2022-ABC',
        licenseCategory: 'CDL-B',
        licenseExpiryDate: new Date('2025-08-15'), // Expiring soon
        contactNumber: '+1-555-0123',
        safetyScore: 82,
        status: 'OFF_DUTY',
        salary: 4000,
        rating: 4.2,
      },
      {
        name: 'David Smith',
        licenseNumber: 'DL-3033-LMN',
        licenseCategory: 'CDL-A',
        licenseExpiryDate: new Date('2024-01-01'), // Expired
        contactNumber: '+1-555-0199',
        safetyScore: 60,
        status: 'AVAILABLE',
        salary: 3800,
        rating: 3.5,
      }
    ]
  });

  // Create Vehicles
  await prisma.vehicle.createMany({
    data: [
      {
        regNumber: 'VAN-05',
        name: 'Mercedes Sprinter',
        model: '2022',
        type: 'Van',
        maxLoadCapacity: 500,
        odometer: 12500,
        acquisitionCost: 45000,
        status: 'AVAILABLE',
      },
      {
        regNumber: 'TRK-99',
        name: 'Volvo FH16',
        model: '2020',
        type: 'Heavy Truck',
        maxLoadCapacity: 15000,
        odometer: 85000,
        acquisitionCost: 120000,
        status: 'ON_TRIP',
      },
      {
        regNumber: 'VAN-02',
        name: 'Ford Transit',
        model: '2019',
        type: 'Van',
        maxLoadCapacity: 400,
        odometer: 45000,
        acquisitionCost: 35000,
        status: 'IN_SHOP',
      }
    ]
  });

  console.log('Database seeded with vehicles and drivers!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
