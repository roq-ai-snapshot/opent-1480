import { BookingInterface } from 'interfaces/booking';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  number: number;
  capacity: number;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    booking?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
}
