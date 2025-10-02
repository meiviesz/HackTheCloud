import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// A interface agora inclui a propriedade opcional 'isFlipped'
interface Member {
  name: string;
  photoUrl: string;
  role: string;
  link: string;
  isFlipped?: boolean;
}

@Component({
  selector: 'app-organizers',
  standalone: true,
  imports: [],
  templateUrl: './organizers.html',
  styleUrl: './organizers.css'
})
export class Organizers {

  // Propriedade para controlar a visibilidade do balão de fala na rolagem
  isBubbleVisible = true;

  // "Escuta" o evento de rolagem da janela do navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Esconde o balão se o usuário rolar mais de 50 pixels para baixo
    this.isBubbleVisible = scrollOffset <= 50;
  }

  // --- Listas de Membros ---
  coordinator: Member = { name: 'Marcelo Antonio Marotta', photoUrl: 'assets/organizadores/claudinho champion.png', role: 'Professor Coordenador', link: 'https://www.cic.unb.br/professores/93-marcelo-marotta' };
  manager: Member = { name: 'Thiago Gomes da Silva Lourenco', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Gestor do Evento', link: '#' };
  commission: Member[] = [
    { name: 'Gabriel Jose dos Santos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Hugo Macedo Ramos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Joao Felipe de Sousa Braz', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'João Lucas de Andrade Ribeiro Filho', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Letícia Picanço do Nascimento', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Luca Barbosa Santos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Lucas Santana da Silva', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Marcello da Silva Mangueira', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Maria Clara de Carvalho Moreira', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Maria Eduarda Valadares Miraglia', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Maria Vitoria Matos Mourao', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Mateus Lúcio Silva Mariano', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Pedro Araujo Cordeiro Viana', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Pedro Daniel Bomtempo Medeiros', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Thiago Cesar Roma Vieira da Silva', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' },
    { name: 'Vitor Alencar Ribeiro', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Membro da Comissão', link: '#' }
  ];

  // Função que vira e desvira os cards
  toggleFlip(member: Member) {
    const currentState = member.isFlipped;

    // Desvira todos os cards primeiro
    this.coordinator.isFlipped = false;
    this.manager.isFlipped = false;
    this.commission.forEach(m => m.isFlipped = false);

    // Vira o card clicado, apenas se ele não estava já virado
    if (!currentState) {
      member.isFlipped = true;
    }
  }
}