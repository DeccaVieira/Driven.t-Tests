import { notFoundError } from '@/errors';
import { TicketStatus } from '@prisma/client';

async function findHotels() {
  const optionHotels = await hotelRepository.findOptionHotels();
  if (!optionHotels) {
    throw notFoundError();
  }
  return optionHotels;
}


