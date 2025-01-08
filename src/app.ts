import express, { Application, Request, Response } from "express";
import cors from "cors";
import { wifiRoutes } from "./app/modules/wifi/wifi.route";
const app: Application = express();
app.use(cors());
app.use(express.json());

// application routes------>
app.use("/api/wifi", wifiRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Its my wifi backend server");
});

export default app;
