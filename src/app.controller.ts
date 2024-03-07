import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constant';


@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    // authentication completed
    // for authorization jwt token
    return this.authService.generateToken(req.user);
  }

  @Post('/android-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  getPrivateData(): string {
    return "This is android developer data";
  }

  @Post('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  getWebData(): string {
    return "This is web developer data";
  }
}
