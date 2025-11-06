interface User {
  userId: number;
  name: string;
  email: string;
  phoneNumber: string;
  driverLicenseNumber: string;
}

interface Car {
  carId: number;
  licensePlate: string;
  brand: string;
  model: string;
  year: number;
  pricePerHour: number;
  status: CarStatus;
  location: CarLocation;
}

interface Rental {
  rentalId: number;
  startTime: Date;
  endTime: Date;
  totalCost: number;
  status: "pending" | "active" | "completed" | "cancelled";
  user: User;
  car: Car;
  payment?: Payment;
}

interface Payment {
  paymentId: number;
  amount: number;
  paymentMethod: "card" | "cash" | "paypal" | "applepay";
  status: "paid" | "failed" | "pending";
  paymentDate: Date;
  rental: Rental;
}

interface Review {
  reviewId: number;
  rating: number; 
  comment: string;
  reviewDate: Date;
  user: User;
  car: Car;
}

interface CarStatus {
  statusId: number;
  statusName: string;
}

interface CarLocation {
  locationId: number;
  city: string;
  address: string;
}
