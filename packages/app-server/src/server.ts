import { hello } from 'lib-common';

export function bootstrap() {
  console.log('>>> common:', hello());
}

bootstrap();