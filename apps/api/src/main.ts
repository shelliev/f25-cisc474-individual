import 'dotenv/config';//read .env before PrismaClient is constructed

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'https://f25-cisc474-individual-web-rust.vercel.app',
    //can add other methods to expand LMS
    credentials:true,
  })
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || undefined;
  await app.listen(port, host);
}

void bootstrap();
