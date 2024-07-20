export default interface UseCase<I, O> {
  handle(input: I): Promise<O>;
}
