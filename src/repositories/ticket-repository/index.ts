import { prisma } from "@/config";
import { Ticket, TicketStatus, TicketType } from "@prisma/client";

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTicketTypeById(ticketTypeId: number) {
  return prisma.ticketType.findFirst({
    where: {
      id: ticketTypeId 
    }
  });
}

async function findTickeyById(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
    include: {
      Enrollment: true,
    }
  });
}
async function findTickeWithTypeById(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
    include: {
      TicketType: true,
    }
  });
}

async function findTicketByEnrollmentId(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: {
      enrollmentId,
    },
    include: {
      TicketType: true,
    }
  });
}

async function createTicket(ticket: CreateTicketParams) {
  return prisma.ticket.create({
    data: {
      ...ticket,
    }
  });
}

async function ticketProcessPayment(ticketId: number) {
  return prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      status: TicketStatus.PAID,
    }
  });
}

export type CreateTicketParams = Omit<Ticket, "id" | "createdAt" | "updatedAt">

const ticketRepository = {
  findTicketTypes,
  findTicketByEnrollmentId,
  createTicket,
  findTickeyById,
  findTickeWithTypeById,
  ticketProcessPayment,
  findTicketTypeById
};

export default ticketRepository;
