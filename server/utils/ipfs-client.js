import { create } from 'ipfs-http-client';

export const client = create({
  host: 'ipfs.infura.io',
  port: 5000,
  protocol: 'https',
});
