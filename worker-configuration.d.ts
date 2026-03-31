declare namespace Cloudflare {
  interface Env {
    NEXT_INC_CACHE_R2_BUCKET: R2Bucket;
    WORKER_SELF_REFERENCE: Fetcher;
    HYPERDRIVE: Hyperdrive;
    ASSETS: Fetcher;
  }
}
interface CloudflareEnv extends Cloudflare.Env {}
