import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import {Clients} from './interfaces/client.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ClientsService {
  constructor(@InjectModel('Clients') private clientModel: Model<Clients>) { }

    // ADD A CLIENT

  async create(createClientDto: CreateClientDto):Promise<Clients> {
    return new this.clientModel(createClientDto).save();
  }

// SHOW ALL CLIENTS

  async getClients():Promise<Clients[]> {
    return this.clientModel.find();
  }

   //SHOW ONE CLIENT BY ID

  async getClient(clientId: string):Promise<Clients> {
    return this.clientModel.findById(clientId);
  }

  //UPDATE CLIENT BY ID

  async updateClient(clientId: string, createClientDto: CreateClientDto) {
    return this.clientModel.findByIdAndUpdate(clientId,createClientDto,{new:true});
  }

  // DELETE CLIENT BY ID
  
  async deleteClient(clientId: string):Promise<Clients> {
    return this.clientModel.findByIdAndDelete(clientId);
  }
}
