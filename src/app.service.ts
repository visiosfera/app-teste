import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'FUNCIONANDO NO JENKINS OUTRA VEZ';
  }
}
