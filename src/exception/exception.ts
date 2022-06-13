import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

// @Injectable()
// export class ExcepVirus{

//      sendHttpException(data:string) {
//         throw new HttpException('Forvidden', HttpStatus.FORBIDDEN);
//     }    
// }

      export function sendHttpException(data:string) {
         throw new HttpException('Forvidden', HttpStatus.FORBIDDEN);
      }