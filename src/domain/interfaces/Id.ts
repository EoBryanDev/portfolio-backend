abstract class Id {
  protected abstract id: string | null;
  protected abstract generate(): void;
  public abstract getId(): string;
}

export { Id }
