import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  @Post()
  async criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    this.produtoRepository.salva(dadosProduto);
    return dadosProduto;
  }

  @Get()
  async listaTodos() {
    return this.produtoRepository.listaTodos();
  }
}
