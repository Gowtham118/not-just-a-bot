import { Controller, Get } from '@nestjs/common';

/**
 * Default Route
 * /health - uptime testing
 * /docs - documentation Link
 */
@Controller('/health')
export class AppController {
  @Get()
  basicRoute(): object {
    return {
      status: 'ok',
    };
  }
}
