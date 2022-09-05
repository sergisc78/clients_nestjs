import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/client.dto';


@Controller('clients')
export class ClientsController {

  //SERVICE

  constructor(private readonly clientsService: ClientsService) {}

  // ADD CLIENT

  @Post('/add')
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  // SHOW ALL CLIENTS
  
  @Get('/')
  getClients() {
    return this.clientsService.getClients();
  }

  // SHOW CLIENT BY ID

  @Get('/:clientId')
  getClient(@Param('clientId') clientId) {
    return this.clientsService.getClient(clientId);
  }

  // UPDATE CLIENT BY ID

  @Patch('/:clientId')
  updateClient(@Param('clientId') clientId: string, @Body() createClientDto: CreateClientDto) {
    return this.clientsService.updateClient(clientId,createClientDto);
  }

    // DELETE CLIENT BY ID

  @Delete('/:clientId')
  deleteClient(@Param('clientId') clientId: string) {
    return this.clientsService.deleteClient(clientId);
  }
}
