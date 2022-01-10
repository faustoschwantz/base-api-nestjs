export interface IDeleteExampleService {
  execute(id: string): Promise<void>;
}
