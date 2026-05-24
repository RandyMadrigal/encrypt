export interface IHashService {
  hash(text: string): Promise<string>;
}
