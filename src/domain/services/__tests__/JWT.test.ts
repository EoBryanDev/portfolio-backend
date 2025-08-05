import { describe, expect, it } from "vitest";
import { JWTAdapter } from "../JWTAdapter";

describe('JWT', () => {
  it('generate a token passing expiration time in string type', async () => {
    const jwtAdapter = new JWTAdapter();
    const token = jwtAdapter.generate({ userId: '123', role: 'ADMIN' }, '1h');

    expect(token).toBeDefined();
  })
  it('generate a token passing expiration time in number type', async () => {
    const jwtAdapter = new JWTAdapter();
    const token = jwtAdapter.generate({ userId: '123', role: 'ADMIN' }, 3600);

    expect(token).toBeDefined();
  })
})
