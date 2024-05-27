import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/createReview.dto';
import { UpdateReviewDto } from './dto/updateReview.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({
      data: createReviewDto,
    });
  }

  async findAll() {
    return this.prisma.review.findMany();
  }

  async findOne(id: string) {
    return this.prisma.review.findUnique({
      where: { id },
    });
  }

  async updateReview(id: string, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({
      where: { id },
      data: updateReviewDto,
    });
  }
  async findByBookingId(bookingId: string) {
    return this.prisma.review.findMany({
      where: { bookingId },
    });
  }
}
