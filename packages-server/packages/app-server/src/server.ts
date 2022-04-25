import { hello } from 'lib-common';

export function bootstrap() {
  console.log('>>> from lib-common:', hello());
}

bootstrap();
