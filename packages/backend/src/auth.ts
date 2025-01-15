import { issuer } from '@openauthjs/openauth';
import { PasswordProvider } from '@openauthjs/openauth/provider/password';
import { PasswordUI } from '@openauthjs/openauth/ui/password';
import { handle } from 'hono/aws-lambda';

const app = issuer({
  providers: {
    password: PasswordProvider(
      PasswordUI({
        copy: {
          error_email_taken: 'This email is already taken.',
        },
        sendCode: async (email, code) => {
          console.log(email, code),

        }
      }),
    ),
  },
  success: async (ctx, value) => {

    return 'ok'
  },
});

export const handler = handle(app);
