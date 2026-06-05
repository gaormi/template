declare namespace Cloudflare {
  interface Env {
    NEXT_INC_CACHE_R2_BUCKET: R2Bucket;
    EMAIL: SendEmail;
    WORKER_SELF_REFERENCE: Fetcher;
    HYPERDRIVE: Hyperdrive;
    ASSETS: Fetcher;
  }
}
interface CloudflareEnv extends Cloudflare.Env {}

interface EmailSendResult {
  messageId: string;
}

interface EmailMessage {
  readonly from: string;
  readonly to: string;
}

type EmailAttachment =
  | {
      disposition: "inline";
      contentId: string;
      filename: string;
      type: string;
      content: string | ArrayBuffer | ArrayBufferView;
    }
  | {
      disposition: "attachment";
      contentId?: undefined;
      filename: string;
      type: string;
      content: string | ArrayBuffer | ArrayBufferView;
    };

interface EmailAddress {
  name: string;
  email: string;
}

interface SendEmail {
  send(message: EmailMessage): Promise<EmailSendResult>;
  send(builder: {
    from: string | EmailAddress;
    to: string | string[];
    subject: string;
    replyTo?: string | EmailAddress;
    cc?: string | string[];
    bcc?: string | string[];
    headers?: Record<string, string>;
    text?: string;
    html?: string;
    attachments?: EmailAttachment[];
  }): Promise<EmailSendResult>;
}
