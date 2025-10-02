import { Component } from '@angular/core';

interface Member {
  name: string;
  photoUrl: string;
  role: string;
  link: string;
  isFlipped?: boolean; // <-- Esta propriedade estava faltando no seu arquivo
}

@Component({
  selector: 'app-organizers',
  standalone: true,
  imports: [],
  templateUrl: './organizers.html',
  styleUrl: './organizers.css'
})
export class Organizers {

  coordinator: Member = { name: 'Marcelo Antonio Marotta', photoUrl: 'assets/organizadores/claudinho champion.png', role: 'Professor Coordenador', link: 'https://www.cic.unb.br/professores/93-marcelo-marotta' };
  manager: Member = { name: 'Thiago Gomes da Silva Lourenco', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Gestor do Evento', link: '#' };
  commission: Member[] = [ { name: 'Gabriel Jose dos Santos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Hugo Macedo Ramos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Joao Felipe de Sousa Braz', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'João Lucas de Andrade Ribeiro Filho', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Letícia Picanço do Nascimento', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Luca Barbosa Santos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Lucas Santana da Silva', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Marcello da Silva Mangueira', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Maria Clara de Carvalho Moreira', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Maria Eduarda Valadares Miraglia', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Maria Vitoria Matos Mourao', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Mateus Lúcio Silva Mariano', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Pedro Araujo Cordeiro Viana', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Pedro Daniel Bomtempo Medeiros', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Thiago Cesar Roma Vieira da Silva', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }, { name: 'Vitor Alencar Ribeiro', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' } ];
  
  // Esta função estava faltando no seu arquivo
  toggleFlip(member: Member) {
    // Armazena o estado atual do card clicado antes de qualquer mudança
    const currentlyFlipped = member.isFlipped;

    // Desvira todos os cards
    this.coordinator.isFlipped = false;
    this.manager.isFlipped = false;
    this.commission.forEach(m => m.isFlipped = false);
    
    // Se o card clicado já não estava virado, vira ele.
    // Isso cria o efeito de que clicar em um card novo fecha o antigo.
    if (!currentlyFlipped) {
      member.isFlipped = true;
    }
    // Se ele já estava virado, ele permanecerá desvirado (pela lógica acima),
    // criando o efeito de "clicar de novo para fechar".
  }
}