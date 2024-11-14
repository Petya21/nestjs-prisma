import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from '@prisma/client';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: { title: string; author: string; length: number; price: number }): Promise<Song> {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll(): Promise<Song[]> {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Song | null> {
    return this.songsService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSongDto: { title?: string; author?: string; length?: number; price?: number },
  ): Promise<Song> {
    return this.songsService.update(Number(id), updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Song> {
    return this.songsService.remove(Number(id));
  }

  @Get('free')
  findFree(): Promise<Song[]> {
    return this.songsService.findFree();
  }
}
