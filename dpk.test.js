const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('should return the provided partitionKey if available', () => {
    const event = {
      partitionKey: 'customKey'
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('customKey');
  });

  it('should calculate the hash for event data if partitionKey is not provided', () => {
    const event = {
      data: 'example'
    };
    const expectedHash = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });

  it('should convert non-string candidate to string', () => {
    const event = {
      partitionKey: 123
    };
    const expectedString = JSON.stringify(event.partitionKey);
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedString);
  });

  it('should calculate the hash if candidate exceeds maximum length', () => {
    const event = {
      partitionKey: 'a'.repeat(300)
    };
    const expectedHash = crypto.createHash('sha3-512').update(event.partitionKey).digest('hex');
    const result = deterministicPartitionKey(event);
    expect(result).toBe(expectedHash);
  });
});
