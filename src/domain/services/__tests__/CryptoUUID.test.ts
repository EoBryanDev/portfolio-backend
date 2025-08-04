import { describe, expect, it } from "vitest";
import { CryptoUUIDAdapter } from "../CryptoUUIDAdapter";

describe('CryptoUUIDAdapter', () => {
  it('should return a uuid', () => {
    // Arrange
    const cryptUUID = new CryptoUUIDAdapter();
    // Act
    const uuid = cryptUUID.getId();

    // Assert
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  })
})
