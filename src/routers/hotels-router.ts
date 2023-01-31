import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getHotels, getHotelById } from "@/controllers/hotels-controller";
const hotelsRouter = Router();

hotelsRouter
.all("/*", authenticateToken)
.get("/hotels", getHotels)
.get("/hotels/:hotelId", getHotelById);

export { hotelsRouter }