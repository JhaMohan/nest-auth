import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passprt.local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';




@Module({
    imports: [PassportModule, UserModule,
        JwtModule.register({
            secret: 'key',
            signOptions: {
                expiresIn: '600s'
            }
        })
    ],
    controllers: [],
    providers: [PassportLocalStrategy, JwtStrategy, AuthService],
    exports: [AuthService]
})
export class AuthModule { }
