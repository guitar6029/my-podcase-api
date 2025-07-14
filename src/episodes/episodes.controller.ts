import { Controller, Get, Post } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll() {
    return 'This action returns all episodes';
  }

  @Get('featured')
  findFfeatured() {
    return 'This action returns all featured episodes';
  }

  @Post()
  create() {
    return 'This action adds a new episode';
  }
}
