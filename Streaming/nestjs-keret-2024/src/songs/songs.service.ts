import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; 
import { Song } from '@prisma/client'; 

@Injectable()
export class SongsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { title: string; author: string; length: number; price: number }): Promise<Song> {
    return this.prisma.song.create({
      data,
    });
  }

  async findAll(): Promise<Song[]> {
    return this.prisma.song.findMany();
  }

  async findOne(id: number): Promise<Song | null> {
    return this.prisma.song.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { title?: string; author?: string; length?: number; price?: number }): Promise<Song> {
    return this.prisma.song.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Song> {
    return this.prisma.song.delete({
      where: { id },
    });
  }

  async findFree(): Promise<Song[]> {
    return this.prisma.song.findMany({
      where: { price: 0 },
    });
  }
}
