import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos: ProdutoEntity[] = [];

  listaTodos() {
    return this.produtos;
  }

  salva(dadosProduto: ProdutoEntity) {
    this.produtos.push(dadosProduto);
    return dadosProduto;
  }

  buscaPorId(id: string) {
    const possivelProduto = this.produtos.find((produto) => produto.id === id);

    if (!possivelProduto) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Produto não encontado',
      });
    }
    return possivelProduto;
  }

  async atualiza(id: string, dadosProduto: Partial<ProdutoEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const produto = this.buscaPorId(id);
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      produto[chave] = valor;
    });
    return produto;
  }

  async remove(id: string) {
    const produtoRemovido = this.buscaPorId(id);
    this.produtos = this.produtos.filter((produto) => produto.id !== id);
    return produtoRemovido;
  }
}
