import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'asc') {
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
