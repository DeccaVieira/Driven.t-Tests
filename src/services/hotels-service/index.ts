import { notFoundError } from '@/errors';
import { TicketStatus } from '@prisma/client';

async function findHotels() {
  const optionHotels = await hotelRepository.findOptionHotels();
  if (!optionHotels) {
    throw notFoundError();
  }
  return optionHotels;
}

async function findHotelsById(hotelId: number, userId: number) {
  const optionHotelById = await hotelRepository.findOptionHotelsById(hotelId);
  if (!optionHotelById) {
    throw notFoundError();
  }
  return optionHotelById;
}

const hotelService = {
  findHotels,
  findHotelsById,
};

export default hotelService